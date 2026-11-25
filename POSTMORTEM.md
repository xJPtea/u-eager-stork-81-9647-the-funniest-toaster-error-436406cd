# Post-mortem — The Funniest Toaster Error Message

## What worked

- **The line landed on the first serious draft.** The plan's proposed line was already strong on all five judging criteria: a real error-code format, a real fault, and a joke that is not a toaster pun — a weary employee threatening a work-to-rule. The oddly specific "six years" is the freshness.
- **Revision made it better, not just different.** First run: 98 characters, no trailing newline, identical sha256 across two runs. The revision added one comma — "Empty me, or I stop pretending to work." — which puts a beat before the ultimatum and sharpens the delivery. Final: 99 characters, still one line, still deterministic.
- **Zero-dependency Node entry ran clean.** `node main.ts` works directly on the local Node 24 (type stripping) and the harness runs Node 26; no build step, no install step, nothing to break. Adding `"type": "module"` to package.json also silenced the module-type warning from the first run.
- **Gate safety.** The entry writes to both `output/entry.txt` and `/output/entry.txt` (only when `/output` already exists), so the harness gate finds it either way. Verified: 99 bytes, 0 newlines, no trailing newline.

## What failed

- **The plan's character count was wrong.** PLAN.md said the proposed line was 102 characters; the actual count was 98. Small, but it is exactly the kind of number that must be measured, not trusted — a 120-character gate makes an off-by-four claim harmless here, but on a tighter line it could have been a refusal.
- **First run warned about module type.** Running `main.ts` before `package.json` existed produced a MODULE_TYPELESS_PACKAGE_JSON warning. Harmless, but it would have been noise in the harness log; writing package.json first would have avoided it.

## Skill to improve

- **Measure the gate numbers before writing them down.** Character count, byte length, newline check — run the check first, then record the numbers in the plan and README. Never copy a count from a plan into a README without re-measuring it after the final revision.
- **Write package.json before the first run.** The entrypoint's first execution should already run in its final package context, so warnings and module resolution are tested as the harness will see them.
