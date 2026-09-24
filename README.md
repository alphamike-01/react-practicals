# React Practicals 01–14 — Single Vercel Project

This repository contains all React practicals and the final **Practical 14 Capstone**.

## Single-project deployment

The repository is configured so **one Vercel project** builds and serves every practical:

```text
/
├── /practical-01/
├── /practical-02/
├── ...
├── /practical-13/
└── /practical-14/
```

The root URL is a portfolio/dashboard that links to every practical.

### Vercel settings

Import this repository as **one** Vercel project.

Use:

```text
Framework Preset: Other
Build Command: npm run build
Output Directory: dist
Install Command: npm install --no-audit --no-fund
```

Do **not** set a Root Directory; use the repository root.

The build script installs and builds each original practical into its own directory under `dist/`.

## Practical 14 Capstone

Practical 14 includes:

- Components and Props
- Hooks
- Forms
- Lists
- React Router
- Fetch API
- Redux Toolkit
- Search
- Add/Edit/Delete
- Real MongoDB CRUD

For production, the frontend uses Vercel serverless API functions:

```text
React frontend
      ↓
/api/students
      ↓
Vercel Functions
      ↓
MongoDB Atlas
```

Set this Vercel Environment Variable:

```text
MONGODB_URI=<your MongoDB Atlas connection string>
```

Never commit the real URI to GitHub.

## Local development

Each practical remains an independent project in its original directory. For example:

```bash
cd pract9
npm install
npm run dev
```

Practical 14 local development:

```bash
cd pract14/backend
npm install
npm run dev
```

and in another terminal:

```bash
cd pract14/frontend
npm install
npm run dev
```

## Repository structure

```text
react-practicals/
├── pract1/
├── pract2/
├── ...
├── pract13/
├── pract14/
│   ├── frontend/
│   └── backend/
├── api/
│   └── students/
├── scripts/
│   └── build-all.mjs
├── package.json
├── vercel.json
└── README.md
```
