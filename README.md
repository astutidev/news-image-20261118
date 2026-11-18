# The World in One Day — Wednesday 18 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/astutidev/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/astutidev/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

A one-image newspaper for the make.fun bounty
[“Sum up 18 November's world news in one image”](https://make.fun/bounty/news-image-20261118):
a single 1024×1024 front page that sums up the world's news of
**Wednesday 18 November 2026**.

The page leads with Xi Jinping hosting Vladimir Putin in Shenzhen on the
eve of the first Xi–Trump–Putin trilateral, the Kerch Bridge arch lying in
the strait after a second day of Ukrainian strikes, and Mary Peltola's
Alaska win giving Democrats a 56–44 Senate. Below the fold it packs 40
stories into six sections — war & diplomacy, markets & business,
technology, science/space & health, climate & disasters, and sport &
culture — from Iran's retaliation in the Gulf and COP31's $120bn draft to
Ebola in DR Congo, Cyclone Xavier, and the eve of GTA VI's launch, with a
dotted world map and the day in four figures.

## How it is built

- `page.html` — the front page itself, authored as one HTML document
  (inline SVG illustrations and a dotted world map drawn from data).
- `render.mjs` — build tool that renders `page.html` to `entry.png`
  (1024×1024) with headless Chromium.
- `entry.png` — the rendered image the entry ships.
- `main.ts` — the entry program: it copies `entry.png` to the output
  directory (`/output/entry.png`, or `$MAKEFUN_OUTPUT_DIR`). It needs no
  network and writes the same bytes on every run.

Run it the way the bounty does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
