# jakebrecknock.com

Personal site for Jake Brecknock: computer science and electrical engineering at Grinnell College.

Live at [jakebrecknock.com](https://jakebrecknock.com), hosted on GitHub Pages.

## What's here

- `index.html` – page structure, about, experience, resume, contact
- `styles.css` – the industrial terminal look (graphite + muted red, dark and light themes)
- `script.js` – project and course data, the interactive terminal, keyboard shortcuts, theme toggle
- `resume.pdf` – current resume (linked and embedded on the page)
- `fonts/` – self-hosted Big Shoulders Display and IBM Plex Mono (SIL Open Font License)

## Updating content

- **Projects and courses** live in the `PROJECTS` and `COURSES` arrays at the top of `script.js`. Add an object and both the page and the terminal pick it up.
- **Experience** is plain HTML in the `#experience` section of `index.html`.
- **Resume**: replace `resume.pdf` with the new file (keep the name).

## Using the site

- Keys `1`–`6` jump between sections, `/` focuses the terminal.
- Terminal commands: `help`, `whoami`, `projects [name]`, `courses [csc|mat|phy|sta]`, `experience`, `skills`, `resume`, `contact`, `email`, `open <github|linkedin|resume|letter>`, `ls`, `cat <file>`, `theme [dark|light]`, `clear`. Tab completes, arrow keys walk history.

## Contact

- Email: jakebrecknock@icloud.com
- LinkedIn: https://www.linkedin.com/in/jake-brecknock
- GitHub: https://github.com/jakebrecknock
