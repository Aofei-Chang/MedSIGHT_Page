# MEDSIGHT — Project Page

Source for the project page of:

> **MEDSIGHT: Towards Grounded Visual Comprehension in Medical Large Vision-Language Models**
> Aofei Chang, Le Huang, Alex James Boyd, Parminder Bhatia, Taha Kass-Hout, Fenglong Ma, Cao Xiao.
> ICML 2026.

The page is a single static `index.html` plus assets in `static/`. No build step is required.

---

## Folder layout

```
webpage/
├── index.html              Main page
├── README.md               This file
└── static/
    ├── css/index.css       Page styles
    ├── js/index.js         Small enhancements (smooth scroll, video fallback)
    ├── images/             Figures used on the page
    │   ├── architecture.png
    │   ├── figure1.png
    │   ├── case_study.png
    │   └── codebook_cases.png
    ├── pdfs/medsight.pdf   Paper PDF (linked from the "Paper" button)
    └── videos/             ←  drop your MP4 tutorial here
        └── tutorial.mp4    (not committed; see below)
```

---

## Inserting your tutorial video

The `<video>` element is already wired up. Just drop your file at:

```
static/videos/tutorial.mp4
```

Optionally add a poster image for the player:

```
static/videos/poster.jpg
```

If the file is missing, a friendly "Video coming soon" placeholder is shown
instead of a broken player.

**Recommendation.** Keep the file under ~50 MB so GitHub Pages serves it quickly.
For larger videos, host on YouTube/Vimeo and replace the `<video>` block in
`index.html` with the provider's embed code.

---

## Local preview

No build step. Open `index.html` directly, or run a one-line static server:

```bash
cd webpage
python3 -m http.server 8000
# open http://localhost:8000
```

---

## Deploying to GitHub Pages

There are two common setups. Pick one.

### Option A — Dedicated repo for the project page (recommended)

1. Create a new GitHub repo, e.g. `medsight-page`.
2. Copy the **contents of this `webpage/` folder** (not the folder itself) to the
   repo root so that `index.html` is at the top level.
3. Push to `main`.
4. In the repo settings → **Pages**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`, folder `/ (root)`
5. After a minute the site is live at
   `https://<your-user>.github.io/medsight-page/`.

### Option B — Inside an existing code repository

If you'd rather keep the page next to your code in
[`Aofei-Chang/MedSIGHT`](https://github.com/Aofei-Chang/MedSIGHT):

1. Copy this `webpage/` folder to a `docs/` folder at the repo root.
2. Push to `main`.
3. In repo settings → **Pages**: set **Branch** = `main`, folder = `/docs`.

The site will be live at `https://<your-user>.github.io/MedSIGHT/`.

### Option C — Custom domain

After GitHub Pages is enabled, add a `CNAME` file at the repo root containing
your domain (e.g. `medsight.ai`), then point the domain's DNS at
`<your-user>.github.io`.

---

## Customisation cheatsheet

| What                           | Where                                        |
|--------------------------------|----------------------------------------------|
| Paper / arXiv / code links     | `index.html` → `.button-row` section         |
| Author names / order           | `index.html` → `.authors` block              |
| Abstract                       | `index.html` → `Abstract` section            |
| Tables of results              | `index.html` → `.results-table`              |
| Page colours                   | `static/css/index.css` → top-level `:root {}` variables |
| Brand text (small-caps style)  | `<span class="brand-inline">MEDSIGHT</span>` |

---

## License

The HTML / CSS / JS in this folder is released under the MIT license — feel
free to reuse the template. Figures and the paper itself are © the authors.
