# Image AI — Graphic Design Editor

A full-stack, browser-based graphic design editor inspired by Canva. Create designs on an interactive canvas, add shapes, text and images, apply filters, remove image backgrounds with AI, generate images from a prompt, save your projects to the cloud, and export the result as PNG, JPG, SVG or JSON.

Built with **Next.js 14** (App Router), **TypeScript**, **Fabric.js**, **Hono**, **Drizzle ORM** and **Stripe**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Timeline](#development-timeline)

---

## Features

- **Authentication** — Email/password sign-up and sign-in plus Google and GitHub OAuth, handled by NextAuth (Auth.js) with a Drizzle database adapter and route protection via middleware.
- **Interactive canvas editor** — A Fabric.js powered canvas with auto-resizing workspace, selection, drag, scale and rotate, backed by a central editor hook.
- **Shapes & drawing** — Add rectangles, circles, triangles, diamonds and inverse triangles, plus a freehand drawing mode with adjustable brush.
- **Text tools** — Insert headings, subheadings and body text with control over font family, size, weight, style, underline, alignment and line height.
- **Styling controls** — Fill color, stroke color, stroke width and dash style, opacity, and image filters (grayscale, sepia, invert, blur, vintage and more).
- **Undo / redo & shortcuts** — Full history stack with undo/redo and keyboard shortcuts (copy, paste, delete, undo, redo, save).
- **Image library** — Search and insert free photos from Unsplash, and upload your own images through UploadThing.
- **AI tools** — Generate images from a text prompt and remove image backgrounds automatically using Replicate models.
- **Projects** — Create, rename, duplicate and delete projects with automatic autosave; reopen and continue editing any saved design.
- **Templates** — Start from ready-made templates (social posts, flyers, banners) instead of a blank canvas.
- **Export** — Download finished designs as PNG, JPG, SVG or a re-editable JSON file.
- **Subscriptions** — Stripe-powered Pro plan with a paywall for premium features, a customer billing portal, and success/failure states via webhooks.

---

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling / UI | Tailwind CSS, shadcn/ui, Radix UI, Lucide icons |
| Canvas | Fabric.js |
| API layer | Hono (edge-ready REST API) |
| Data fetching | TanStack Query (React Query) |
| Database | Neon (serverless PostgreSQL), Drizzle ORM |
| Auth | NextAuth / Auth.js (credentials + OAuth) |
| Uploads | UploadThing |
| Images | Unsplash API |
| AI | Replicate |
| Payments | Stripe |
| State | Zustand |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- A PostgreSQL database (a free [Neon](https://neon.tech) project works well)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/suleman-the-stammer/assignment-2.git
cd assignment-2

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local   # then fill in the values (see below)

# 4. Push the database schema
npm run db:generate
npm run db:migrate

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root with the following keys:

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Auth (Auth.js)
AUTH_SECRET=              # `npx auth secret`
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# Database (Neon / PostgreSQL)
DATABASE_URL=

# Unsplash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

# Replicate (AI)
REPLICATE_API_TOKEN=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=
```

> Never commit `.env.local` — it is ignored by Git.

---

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations from the schema |
| `npm run db:migrate` | Apply migrations to the database |
| `npm run db:studio` | Open Drizzle Studio |

---

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/               # Sign-in & sign-up routes
│   ├── (dashboard)/          # Dashboard, navbar & sidebar
│   ├── editor/               # Canvas editor routes
│   └── api/                  # Hono API + auth + uploads
├── components/               # Shared UI + shadcn/ui primitives
├── db/                       # Drizzle client & schema
├── features/
│   ├── ai/                   # Image generation & background removal
│   ├── auth/                 # Auth UI, hooks & helpers
│   ├── editor/               # Canvas engine, hooks & tool sidebars
│   ├── images/               # Unsplash image search
│   ├── projects/             # Project CRUD, autosave & templates
│   └── subscriptions/        # Stripe billing, paywall & modals
├── hooks/                    # Generic hooks
├── lib/                      # Third-party clients (hono, stripe, replicate, unsplash, uploadthing)
└── middleware.ts             # Auth route protection
```

---

## Development Timeline

The project was built incrementally in focused stages:

| Date | Milestone |
| --- | --- |
| Oct 20, 2025 | Project setup — Next.js, TypeScript, Tailwind CSS and shadcn/ui |
| Oct 22, 2025 | Database — Drizzle ORM schema and Neon PostgreSQL configuration |
| Oct 25, 2025 | Authentication — NextAuth with credentials and OAuth |
| Oct 27, 2025 | API layer — Hono routes and TanStack Query data fetching |
| Oct 30, 2025 | Dashboard shell — navbar and sidebar navigation |
| Nov 1, 2025 | Canvas editor — Fabric.js, undo/redo history and shortcuts |
| Nov 4, 2025 | Editor tools — shapes, drawing and text |
| Nov 6, 2025 | Styling controls — color, opacity, stroke and fonts |
| Nov 8, 2025 | Media — Unsplash image search and UploadThing uploads |
| Nov 11, 2025 | Projects — saving, autosave, duplication and templates |
| Nov 13, 2025 | AI — image generation and background removal with Replicate |
| Nov 16, 2025 | Subscriptions — Stripe billing, Pro paywall and documentation |

---

## License

This project is for educational purposes.
