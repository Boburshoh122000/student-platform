# Student Career OS (Central Asia) 🚀

> **The Professional Career Ecosystem for Uzbekistan & Central Asia.**
> *Build your AI-tailored resume, find verified jobs, and track your applications—all in one place.*

---

## 🌟 Overview

**CareerOS** is a platform built to solve the "Chicken and Egg" problem for students (no experience -> no job) and employers (spam applications -> no trust) in Central Asia.

It replaces the chaotic Telegram-based job market with a structured, verified, and professional ecosystem.

### Key Features

#### 🎓 For Candidates (Students)
-   **AI Resume Builder**: Converts profile data into a CEO-ready PDF resume.
-   **Tailoring Engine**: `TailoringModal` adapts resumes to specific JD keywords instantly.
-   **Job Market**: A searchable feed of **Verified** listings (no scams).
-   **Application Tracker**: A Kanban board (`/tracker`) to manage "Saved", "Applied", and "Interview" stages.

#### 🏢 For Employers
-   **Verification System**: Companies must submit INN/Docs to get the "Verified" badge.
-   **Standardized Applications**: receive structured candidates, not random Word docs.

#### 🛡️ Trust & Safety (Admin)
-   **Admin Dashboard**: `/admin` interface to moderate verification requests.
-   **Anti-Scam**: Built-in reporting and manual review queues.

---

## 🛠 Tech Stack

-   **Framework**: [Next.js 14/15](https://nextjs.org/) (App Router)
-   **Language**: TypeScript
-   **Styling**: CSS Modules + Vanilla CSS Variables (Zero -runtime CSS).
-   **State**: React Context API + LocalStorage (MVP Persistence).
-   **Font**: [Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit).

---

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+
-   npm or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/career-os.git
    cd career-os
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication routes (Login/Register stub)
│   ├── (dashboard)/      # Main App Layout (Sidebar, Header)
│   │   ├── jobs/         # Job Feed
│   │   ├── tracker/      # Kanban Board
│   │   └── resume/       # Builder
│   ├── admin/            # Admin Panel (Layout + Queues)
│   ├── employers/        # B2B Marketing Page
│   └── page.tsx          # Student Landing Page
├── components/           # Reusable UI Components
│   ├── market/           # Job Cards, Filters
│   ├── resume/           # Form, Preview, Toolbars
│   ├── tracker/          # Kanban Board, Modal
│   └── ui/               # Buttons, Inputs, Layouts
├── context/              # Global State (Jobs, Applications, Resume)
├── styles/               # Global CSS & Variables
└── types/                # TypeScript Interfaces (Job, Application, Section)
```

---

## 📦 Deployment

This project is optimized for **Vercel**.

1.  Push code to GitHub.
2.  Import project into Vercel.
3.  Deploy (No special environment variables required for MVP).

See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

---

## 🤝 Contributing

This is an MVP (Minimum Viable Product). Future roadmap items include:
-   Supabase/Postgres Integration.
-   Real PDF generation (server-side).
-   Employer Dashboard (Job Posting).

---

**Built with ❤️ for the students of Central Asia.**
