# 🚀 Deployment Guide: Railway

Since we are encountering local permission errors, the easiest way to get the backend running is to **Deploy to Railway**. Railway will handle the installation and database setup automatically.

## Step 1: Push Code to GitHub
Ensure all your latest changes are pushed.
```bash
git add .
git commit -m "feat: backend foundation with prisma and auth"
git push origin main
```

## Step 2: Create Railway Project
1.  Log in to [Railway.app](https://railway.app/).
2.  Click **"New Project"** → **"Deploy from GitHub repo"**.
3.  Select your repository: `student-platform`.
4.  Click **"Deploy Now"**.

## Step 3: Add Database (PostgreSQL)
1.  In your Railway project view, click **"New"** (top right) → **"Database"** → **"Add PostgreSQL"**.
2.  Wait for it to initialize (10-20 seconds).

## Step 4: Connect App to Database
1.  Click on the **PostgreSQL** card → **Variables**.
2.  Copy the `DATABASE_URL` value.
3.  Click on your **Next.js App** card → **Settings** → **Variables**.
4.  Add a new variable: `DATABASE_URL` and paste the value.
5.  Add another variable: `AUTH_SECRET` (You can generate one by running `npx auth secret` locally, or just use a random long string like `my-secret-key-123456789`).

## Step 5: Redeploy
Railway mimics a "Push" event, so it should automatically rebuild. If not, go to **Deployments** and click **Redeploy**.

## Step 6: Verify
Open your deployed URL (e.g., `https://student-platform-production.up.railway.app`).
-   Go to `/jobs`.
-   It should load (it might be empty initially).
-   To add data, you can use the Railway CLI or connect via a tool like TablePlus using the database credentials.
