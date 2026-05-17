# BC IT Peer Tutors

A student-led peer tutoring website for IT students at **Belgium Campus iTversity**. The site helps learners book sessions, explore supported subjects, and connect with top-performing peer tutors for programming, databases, software engineering, and more.

## Features

- **Home** — Hero section, typing animation, service overview, and how-it-works steps
- **IT Subjects** — Browse tutoring categories (Programming, Databases, Software Engineering, IT Fundamentals, Business & Management)
- **About** — Mission and approach of the peer tutoring service
- **Book Tutor** — Request form with subject selection, date, time, and problem description
- **Animated UI** — Particle background (tsParticles) and responsive card layout

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Markup     | HTML5                               |
| Styling    | CSS3 (dark theme, flex/grid cards)  |
| Scripting  | Vanilla JavaScript                  |
| Animation  | [tsParticles](https://particles.js.org/) (CDN) |


## Project Structure

```
FUTURE_FS_03/
├── index.html      # Home page
├── about.html      # About the tutoring service
├── subjects.html   # Subject categories
├── contact.html    # Tutor booking form
├── style.css       # Global styles
└── script.js       # Typing effect, particles, form & subject helpers
```


## Pages

| Page            | File             | Purpose                                      |
| --------------- | ---------------- | -------------------------------------------- |
| Home            | `index.html`     | Landing page and main call-to-action         |
| IT Subjects     | `subjects.html`  | List of supported modules and categories     |
| About           | `about.html`     | Background and goals of BC IT Peer Tutors    |
| Book Tutor      | `contact.html`   | Session request form (client-side demo)      |

## Notes

- The booking form shows a success message on submit but does **not** send data to a server yet. Connecting a backend or email service would be a natural next step for production use.
- An internet connection is needed on first load for the tsParticles CDN script.

## License

Academic / project use — Belgium Campus iTversity.
