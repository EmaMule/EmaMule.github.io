# emamule.github.io

Personal website, served by GitHub Pages as plain static files (`.nojekyll`, no build step).

- `index.html`: all content (bio, news, publications, experience, education, service)
- `assets/css/style.css`: styles, with light/dark colors defined as variables at the top
- `assets/js/main.js`: dark-mode toggle and BibTeX show/copy
- `files/Emanuele_Mule_CV.pdf`: the CV linked from the header

To preview locally, run `python3 -m http.server` in this folder and open http://localhost:8000.

To add a news item or a paper, copy an existing `<li>` in the News list or an `<article class="pub">` block in `index.html` and edit it.
