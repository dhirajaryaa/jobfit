# JobFit

**AI-powered Chrome extension & web dashboard to score your fit for LinkedIn job posts**

JobFit analyzes a job posting (LinkedIn) and compares it with a candidate's public GitHub and uploaded resume to produce a skill-match score, relevance highlights, and a job-fit probability. Built as a monorepo (extension + dashboard + API), JobFit is designed as an MVP to help job-seekers quickly decide which roles are worth applying to and which skills to highlight.

---

## Table of Contents

* 📸 [Demo](#demo)
* ✨ [Key features](#key-features)
* 💡 [Why JobFit?](#why-jobfit)
* 🏗️ [Architecture & Tech Stack](#architecture--tech-stack)
* 📂 [Repository structure](#repository-structure)
* 🚀 [Getting started (Dev)](#getting-started-dev)

  * 📋 [Prerequisites](#prerequisites)
  * 🔑 [Environment variables](#environment-variables)
  * 🖥️ [Run locally (monorepo)](#run-locally-monorepo)
* 🧩 [Chrome extension workflow](#chrome-extension-workflow)
* 📡 [API endpoints (MVP)](#api-endpoints-mvp)
* 🗄️ [Data model (high level)](#data-model-high-level)
* 🔍 [How it works (high level)](#how-it-works-high-level)
* 🛣️ [Roadmap](#roadmap)
* 🤝 [Contributing](#contributing)
* 📜 [License & Contact](#license--contact)

---

## Demo
**add on later [after public]**
<!-- *(Add screenshots/GIFs here once available. Optionally include a short video link.)* -->

---

## Key features

* 🔐 GitHub OAuth login to link a candidate's public profile.
* 📊 Fetch and analyze repository language stats and selected files (README, package.json, .github, src files).
* 📄 Resume upload and parsing (PDF / DOCX) for skills extraction.
* 📰 LinkedIn job posting parser (extension reads job description from the page).
* 🧮 Skill match algorithm: compares job requirements to resume + GitHub signals and produces a match score and recommendations.
* 📈 Simple web dashboard to view past scans, suggestions, and export results.

---

## Why JobFit?

* ⏳ Save time — understand which jobs are truly a fit.
* 📌 Improve application quality — highlights skills to add to resume or GitHub.
* 📊 Data-driven decisions — numerical match, relevance highlights and improvement tips.

---

## Architecture & Tech Stack

**Frontend (Dashboard)**

* ⚛️ React + Javascript
* 🗂️ TanStack Query, TanStack Store, React Router for data fetching & state

**Chrome Extension UI**

* ⚛️ React (Popup & Content script)
* 🔗 Communicates with backend via REST API (authenticated)

**Backend (API)**

* 🟢 Node.js + Express (or Nest/Next API routes)
* 📝 Javascript
* 🍃 MongoDB (Atlas or local)
* 🔐 GitHub OAuth integration [later]
* 📄 File parsing (resume PDF -> text) using libraries like `pdf-parse` or `mammoth` for docx
* 🤖 Optional: AI / LLM service for semantic matching (Gemini, OpenAI, local LLM)

**Dev / Tooling**

* 📦 pnpm / npm workspaces or turborepo (monorepo)
* 🧹 ESLint, Prettier, Javascript
* 🐳 Docker for local DB (optional)

---

## Repository structure (example)

```
/jobfit-monorepo
├─ apps/
│  ├─ web/                # Dashboard (React + TS)
│  ├─ extension/          # Chrome extension (popup + content script)
│  └─ server/                # Node.js backend (Express + TS)
├─ infra/                 # Terraform / docker-compose (optional)
├─ scripts/
└─ README.md
```

---

## Getting started (Dev)

### Prerequisites

* 🔗 Node.js 18+
* 📦 pnpm or npm
* 🐳 Docker (optional, for MongoDB)
* 🌐 Chrome (for extension testing)

### Environment variables (example)

Create a `.env` (in `apps/server`) with:

```js
PORT=4000
MONGO_URI=mongodb://localhost:27017/jobfit
GITHUB_CLIENT_ID=your_github_app_client_id
GITHUB_CLIENT_SECRET=your_github_app_client_secret
JWT_SECRET=some_long_secret
AI_API_KEY=your_llm_or_openai_key  # optional for semantic scoring
FRONTEND_URL=http://localhost:3000
```

### Run locally (monorepo)

1. 📥 Install dependencies from repo root:

```bash
pnpm install
```

2. ▶️ Start the backend and frontend (example using concurrently or pnpm workspaces):

```bash
# from monorepo root (example)
pnpm --filter api dev
pnpm --filter web dev
pnpm --filter extension dev
```

3. 🌐 Load the extension in Chrome:

* Go to `chrome://extensions` -> Developer Mode -> Load unpacked -> select `packages/extension/dist` (or `packages/extension/src` depending on build tooling)

4. 🔑 Open the dashboard at `http://localhost:3000` and login with GitHub.

---

## Chrome extension workflow

1. 📄 User opens a LinkedIn job post.
2. 🔍 Content script scrapes job title, company, location, and job description.
3. 📤 Extension popup sends the job description to the backend (with user session token).
4. 🧠 Backend fetches user's GitHub data and parsed resume, runs the matching algorithm, and returns a structured result: `{score, highlights, missing_skills, suggestions, confidence}`.
5. 📊 Extension shows score + quick actions: `Save to dashboard`, `Open full report`, `Apply / Copy resume highlights`.



## How it works (high level)

1. 📄 **Extraction**: scrape job text, parse resume text, fetch GitHub files & language stats.
2. 🧠 **Skill detection**: use heuristics + lightweight NLP to extract skills from each source.
3. 🔍 **Matching**: compute overlap and importance weighting (required vs preferred skills, years, seniority).
4. 📊 **Scoring**: combine signals into a normalized score (0-100) and confidence estimate.
5. 💡 **Explainability**: produce highlights ("Your repo shows React experience: src/App.jsx, README mentions Redux") and missing skills list ("Javascript, Docker").

---

## Roadmap & Ideas (post-MVP)

* 🤖 Improve semantic matching using LLM embeddings.
* 📝 Auto-suggest resume bullet points tailored to job description

---

## Contributing

1. 🍴 Fork the repository.
2. 🌿 Create a branch: `feature/your-feature`.
3. 🧪 Run tests and linting locally.
4. 📬 Open a Pull Request describing the change.

Please follow the coding style in the repo (`eslint`, `prettier`) and keep commits small and focused.

---

## License & Contact

📜 This project is MIT licensed — adapt as needed.

Maintainer: Dhiraj Arya (dhirajarya.ptn@gmail.com)

Questions? Feature suggestions? 💬 Open an issue or DM in the repo.
ltw1