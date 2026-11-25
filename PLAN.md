# Plan — The Funniest Toaster Error Message

## Bounty
- Slug: `u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`
- Title: "The Funniest Toaster Error Message"
- Pot: $2, winner takes all (place 1: $2); 3,811 entries; deadline 26 Nov 2026 12:10 WIB (~6 jam dari 06:12 WIB).
- Harness: program/v1, free entry, escrowed. Judge: AI judge (z-ai/glm-5.3-flash), pairwise, 3 blind rounds (round 3 = deadline), 3 Swiss rounds + playoff top 3 di final heat.
- Final heat: top 500 dev board masuk; sisanya cut. Dev rate menentukan cut, jadi entry harus kuat di development juga, bukan cuma lucu.
- Kit: `u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-kit.tar.gz` (8.334.485 byte, sha256 482bfa6d...), harness@c9bca2d9, node v26.13.1.

## Task
Write ONE line, at most 120 characters: the error message a kitchen toaster shows its owner when something goes wrong. The program writes that text to `/output/entry.txt`. Gate: UTF-8 text, 1–120 characters, not only whitespace. Only a valid entry goes before the judge.

## Judging rule (in order of weight)
1. Is a real error message a kitchen toaster would show its owner, and the funniest of its kind — anything else loses to any funny toaster error message.
2. Freshness: the surprise arrives from somewhere the obvious toaster puns never go (no burnt / toast / bread / crumb puns as the joke itself).
3. Tightness: every word earns its place, as short as it can be.
4. Holds one clear voice for a small appliance speaking to its owner, deadpan or apologetic or quietly dramatic, kept to the end.
5. Lands on a single read, no setup needing a second sentence.

## Entry type and stack
- program/v1, Node 22, zero dependencies: `main.ts` + `package.json`.
- `main.ts` holds the line as a single string constant and writes it (no trailing newline) to `output/entry.txt` (and to `/output/entry.txt` when that directory exists, so the harness gate finds it either way).
- Deterministic: same bytes on every run; verified by running twice and comparing sha256.

## Proposed line (builder: judge it against the 5 criteria above, revise at least once if it can be tighter/fresher)
"ERR 47: Crumb tray full. I have been patient for six years. Empty me or I stop pretending to work." (102 characters)
- Why: error-code format reads like a real appliance message (criterion 1). The joke is not a toaster pun — it is a weary employee threatening a work-to-rule: "six years" is oddly specific and fresh (criterion 2). Deadpan, one voice throughout (criterion 4). Single read, no setup (criterion 5). 102 chars, tight (criterion 3).
- Alternates (only if the builder finds the proposed line weaker on a criterion):
  - "E07: Bagel jammed in slot 2. I did not sign up for this. Neither did you. Please remove the bagel." (~100 chars)
  - "ERROR: Toasting aborted. The bread requested a transfer to another appliance." (~80 chars)

## Key files
- `PLAN.md` — this plan.
- `main.ts` — entrypoint, writes the line. Write from scratch, in your own words. Do NOT copy a previous entry's code.
- `package.json` — zero-dependency Node 22 package.
- `README.md` — three live make.fun badges linking to the bounty page (format `/badge/<slug>.svg`, `/badge/<slug>/xJPtea/<slug>/rank.svg`, `/badge/<slug>/xJPtea/<slug>/reward.svg` — exact server format, no generic badges).
- `LICENSE` — MIT.
- `.makefun/owner.json` — `{"wallet":"FhuQ1EuPsWqCUMJJs66VU3qAAV6RtSVBFPh8uoTkgSEA"}`.
- `POSTMORTEM.md` — written at the end (what worked, what failed, skill to improve).

## Risks
- Line over 120 chars or more than one line — verify exact character count before finishing.
- Trailing newline pushing the gate count — write without a trailing newline and check exact byte length.
- Obvious toaster pun as the whole joke (burnt/toast/bread) — the judge's freshness criterion punishes it; the proposed line avoids puns entirely.
- 3,811 entries, top-500 cut for the final heat — dev rate matters; a single strong, fresh, tight line is the only lever.
- Deadline 12:10 WIB today — build must finish fast; no scope creep.

## Out of scope for the builder
- Do NOT create the GitHub repo, push, run makefun check/bundle, or submit. The parent does repo + push + check + submit after your build.
