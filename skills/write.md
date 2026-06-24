# SKILL: rak-write — tworzenie i publikacja treści

## Kiedy używać
Gdy agent ma stworzyć tekst end-to-end: szkic → plan redakcyjny → pełny pipeline (research/write/fact-check) → publikacja. Operacje zapisujące.

## Narzędzia
| Narzędzie | Po co | Tier |
|---|---|---|
| `rak_write_draft` | szkic → artefakt | paid (credits) |
| `rak_write_plan` | plan redakcyjny (blueprint) | paid |
| `rak_write_pipeline` | pełny pipeline async `{jobId, pollUrl}` | paid (credits) |
| `rak_write_edit` | edycja, nowa wersja | paid (credits) |
| `rak_write_export` | export / publish | paid / internal |
| `rak_write_publish` | publikacja do portalu (now/cron) | internal |

## Tier / koszt
`paid` na kredytach (wg cennika RAK); `execute_pipeline` to najdroższe narzędzie. Pisanie do portalu (`schedule_publish`) = tylko internal. Pipeline async — odpytuj `pollUrl`.

## Przykładowe prompty
- „Napisz szkic newsa o podwyżkach w komunikacji miejskiej."
- „Odpal pełny pipeline na temat X i podaj pollUrl."
