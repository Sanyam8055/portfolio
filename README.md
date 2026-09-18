# Field notebook — Sanyam Singh

A portfolio that behaves like a researcher's field notebook. Three files, no
build step, no dependencies, no tracking. Open `index.html` and it works.

    index.html   content and structure
    style.css    all styling (design tokens at the top of :root)
    strings.js   every translatable string, one object per language
    main.js      language, lamp, span chart, diagrams, reveal, spy, copy
    portrait.jpg / portrait-320.jpg   the polaroid, 2x and 1x
    segmentation.webp / .jpg          the IISc segmentation map (+ fallback)

## The idea

Printed graph paper, paper grain, ink and tape. Three typefaces, each with one
job: **Kalam** for handwriting (it covers Devanagari, which the greeting needs),
**Courier Prime** for typewriter labels and data, **Newsreader** for reading
copy.

Devices: a taped polaroid, pinned index cards, paperclipped case files, a red
rubber stamp on the arXiv paper, sticky notes for awards, ruled paper with a
red margin rule, and a torn bottom edge on the contact card.

## The interactive bits

- **Language switcher** (under the greeting) translates the whole page: English, हिन्दी, తెలుగు, ଓଡ଼ିଆ. It sets the `lang` attribute too,
  so screen readers switch voice, and remembers your choice.
- **The startup flap** opens to the advisory work. It's a `<details>`, so it
  works with JavaScript off.
- **The span chart** in Where I've been draws each role against a 2019–2027
  axis, so the overlaps show. Rows open on click, and each reveals its field
  of work (Computer Vision → Generative AI) on hover, focus or open.
- **Desk lamp** (top right) toggles the dark variant. Follows your OS until you
  click it, then remembers.
- **Diagrams animate into view**, each drawn from a real number in the work:
  the WER range bars, the 77% judge dial, and a tally of 180 dots in 17 groups.
- Counters count up. Clicking the email copies it.

Every diagram carries an `aria-label` describing its data, so none of the
meaning lives only in the animation. With JS off the page still reads in full;
with `prefers-reduced-motion` the animations are skipped and values render at
their final state.

## Translations

All copy lives in `strings.js`, one object per language. **English is the
source of truth**: any key missing from another language falls back to
English automatically, so a partial translation is always safe to ship and
you can fill gaps a few at a time.

    en   complete (109 keys)
    hi   complete (109 keys)
    te   short strings only — 29 keys. NEEDS A NATIVE PROOFREAD.
    or   short strings only — 29 keys. NEEDS A NATIVE PROOFREAD.

Telugu and Odia cover the greeting, nav, section headings and labels. Body
prose is deliberately absent so it falls back to English rather than showing
an unreviewed machine translation; each of those two shows a small banner
saying so. To extend either: copy a key out of `en`, translate the value, drop
it into that language's object. No build step, no tooling. Delete the
`langNote` value once a language is complete and the banner disappears.

The Hindi block is stored as JS `\uXXXX` escapes rather than literal
Devanagari. JavaScript decodes them identically, but a find-and-replace on
visible Hindi text will not match the file — search for the escape sequence,
or edit by key name.

A string may contain inline HTML (`<em>`, or a `<span class="tbd">`), because
it is applied with `innerHTML` — so if you translate a key whose English
contains markup, carry the markup across.

## Legibility

Two tokens do different jobs and must not be conflated: `--rule` is hairline
dividers, `--grid` is the printed graph paper behind everything. `--grid` is
deliberately fainter than `--rule`.

Text blocks that would otherwise sit directly on the grid get a plain paper
sheet behind them (`.cover-text`, `.margins`) using `background: var(--paper)`
with negative margins so the layout does not shift. Cards, case files and the
contact note already sit on `--card`, so they never had the problem. If you
add a new block of body copy directly on the page background, give it the
same treatment or it will be hard to read.

## Editing

**Content** lives in `index.html` (structure) and `strings.js` (words). A
project is an `<article class="case">`; a job is a `<details class="span-row">`
with `data-from` / `data-to` years; a paper is an `<li class="clipping">`; an
advisory client is an `<article class="venture">`. Anything with a
`data-i18n` attribute takes its text from `strings.js` — edit it there, not in
the HTML, or your change will be overwritten on load.

**Design tokens** are the custom properties in `:root` at the top of
`style.css` — paper, ink, pen, stamp, crop green, marker yellow. The dark
variant repeats the same list under `[data-lamp="off"]` and again under
`prefers-color-scheme: dark`, so the toggle wins in both directions. Change a
colour in all three places.

To change a chart, edit the `data-from` / `data-to` attributes on
`.bar-range`, or `data-value` on `.dial`. The axis maximum is the `MAX`
constant in `main.js` (45) and the printed axis labels in the HTML — keep them
in sync. The span chart works the same way: `data-from` / `data-to` are
decimal years against the `SPAN_START` / `SPAN_END` constants in `main.js`
(2019–2027), which must match the printed `.span-axis` labels.

## Still needs you

Marked `class="tbd"` with a dotted underline; six marks:

Nothing is currently marked `tbd` — every placeholder has been filled or
removed. If you add something unverified later, wrap it in
`<span class="tbd" title="what's needed">…</span>` and it renders with a
dotted underline again.

All five papers are now fully cited with links, so those placeholders are gone.

Delete the `.tbd` rule from `style.css` once they're filled and every dotted
underline disappears at once.

## Local preview

    python3 -m http.server 8000

then <http://localhost:8000>. Opening the file directly works too — nothing
fetches.

## Deploying

Static, so any host works. GitHub Pages: push to a repo and enable Pages.
Netlify or Vercel: drag the folder in. No configuration.

## Notes

- Fonts come from Google Fonts with real fallbacks; drop the three `<link>`
  tags to go fully offline and it degrades to Georgia and a system mono.
- `@media print` flattens the rotations, drops the tape and chrome, and prints
  clean.
- The favicon is an inline SVG data URI — a notebook page with a pen scribble.
