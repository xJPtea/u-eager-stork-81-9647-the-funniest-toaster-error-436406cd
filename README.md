# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/xJPtea/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/xJPtea/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A make.fun program/v1 entry for the bounty [The Funniest Toaster Error Message](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd): one line, at most 120 characters — the error message a kitchen toaster shows its owner when something goes wrong.

## The entry

> ERR 47: Crumb tray full. I have been patient for six years. Empty me, or I stop pretending to work.

99 characters, one line, no trailing newline. A real appliance error code, a real fault (full crumb tray), and the joke is not a toaster pun at all — it is a weary employee, six years into the job, threatening a work-to-rule. Deadpan, one voice, lands on a single read.

## Run

```sh
node main.ts
```

`main.ts` writes the line to `output/entry.txt` (and to `/output/entry.txt` when that directory exists, so the harness gate finds it either way). Zero dependencies, Node 22+, fully deterministic — the same bytes on every run.

## Files

- `main.ts` — entrypoint, holds the line and writes it.
- `package.json` — zero-dependency Node 22 package.
- `LICENSE` — MIT.
