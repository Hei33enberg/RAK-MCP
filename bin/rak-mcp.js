#!/usr/bin/env node
/**
 * @rak-ad/mcp — zero-config bridge do hostowanego RAK MCP (remote streamable-HTTP).
 *
 * Klienty stdio-only (które nie umieją remote MCP) odpalają `npx -y @rak-ad/mcp`; ten wrapper
 * proxuje stdio ↔ https://rak.ad/api/mcp/rak/mcp przez `mcp-remote`. Klienty z natywnym remote
 * MCP (Claude Code, Cursor) mogą pominąć paczkę i wpiąć URL bezpośrednio.
 *
 * ENV:
 *   RAK_API_KEY   — klucz `rk_…` (bez niego = darmowy/anonimowy tier, 13 narzędzi read/research).
 *   RAK_BASE_URL  — opcjonalnie nadpisz host (domyślnie https://rak.ad).
 */
import { spawn } from "node:child_process"

const base = (process.env.RAK_BASE_URL || "https://rak.ad").replace(/\/+$/, "")
const url = `${base}/api/mcp/rak/mcp`
const key = (process.env.RAK_API_KEY || "").trim()

const args = ["-y", "mcp-remote", url, "--header", "x-tenant-id: rak"]
if (key) args.push("--header", `Authorization: Bearer ${key}`)

const child = spawn("npx", args, {
  stdio: "inherit",
  shell: process.platform === "win32",
})
child.on("exit", (code) => process.exit(code == null ? 0 : code))
child.on("error", (err) => {
  console.error("[@rak-ad/mcp] nie udało się uruchomić mcp-remote:", err.message)
  process.exit(1)
})
