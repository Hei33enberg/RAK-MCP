# SKILL: rak-distribution — harvesting & distribution

> `internal` tier only — we protect content provenance.

## When to use
Internal editorial operations: source harvesting, topic subscriptions, publishing to external channels (WordPress/X/RSS).

## Tools
| Tool | Purpose | Tier |
|---|---|---|
| `rak_crawl_search` | search harvested sources | internal |
| `rak_crawl_add_source` | add a source (SSRF-safe) | internal |
| `rak_crawl_subscribe` | subscribe to a topic/bot | internal |
| `rak_distribution_publish` | publish to WordPress/X/RSS (scheduleAt) | internal |

## Tier / cost
`internal` only (scope `skills:action` + internal tier).

## Example prompts (internal)
- "Add this RSS source to the harvest for the Lublin region."
- "Publish this article to WordPress + an X thread tomorrow at 9:00."
