# CareerOS - Student Career Platform

**CareerOS** is a comprehensive job market and career preparation platform tailored for students in Central Asia. It combines job searching, skill learning, AI-powered tools, and gamification to create an engaging "Career Operation System".

![CareerOS Dashboard](https://via.placeholder.com/800x400.png?text=CareerOS+Dashboard+Preview)

## 🚀 Features

### 1. Job Market
-   **Aggregated Listings**: Find internships, part-time jobs, and entry-level roles.
-   **Smart Filtering**: Filter by industry, verified status, and salary.
-   **Scam Protection**: "Report Job" functionality and "Verified Employer" badges.

### 2. Learning & Growth
-   **AI Learning Plans**: Generate custom 4-week study roadmaps for roles like "Frontend Dev" or "Data Analyst".
-   **Task Tracking**: Mark weekly tasks as complete and earn XP.

### 3. Application Tracker
-   **Kanban Board**: Visualize job applications (Applied, Interview, Offer, Rejected).
-   **Tailoring**: Manage application-specific notes and status.

### 4. AI Intelligence
-   **Resume Builder**: Real-time ATS scoring and "Magic Rewrite" for professional summaries.
-   **Cover Letter Generator**: Create tailored cover letters based on job descriptions (Mock AI).

### 5. Gamification (New! 🎮)
-   **XP System**: Earn XP for applying to jobs (+50) and learning (+20).
-   **Levels & Streaks**: Track your daily consistency and level up your career profile.

### 6. Admin Panel (New! 🛡️)
-   **Dashboard**: Monitor platform stats and activity (`/admin/dashboard`).
-   **Verification**: Review and approve new employers (`/admin/verification`).

## 🛠️ Tech Stack
-   **Framework**: Next.js 14+ (App Router)
-   **Language**: TypeScript
-   **Styling**: CSS Modules / Inline Styles (Fast Prototyping)
-   **State**: React Context + LocalStorage Persistence

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Boburshoh122000/student-platform.git
    cd student-platform
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the app**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (auth)/          # Login/Register routes
│   ├── (dashboard)/     # Main student dashboard
│   ├── admin/           # Admin panel routes
│   └── layout.tsx       # Root layout + Providers
├── components/          # Reusable UI components
├── context/             # Global State (Gamification, Applications)
├── data/                # Mock data (Jobs, Learning Plans)
├── lib/                 # Utilities and Mock AI logic
└── types/               # TypeScript interfaces
```

## 🛡️ License
This project is for educational and portfolio purposes.
