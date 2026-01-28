# Backend Guide: Railway + Prisma + NextAuth

Since we are moving to a production-grade backend, we are using:
-   **Infrastructure**: Railway (Hosting + PostgreSQL).
-   **ORM**: Prisma (Database access).
-   **Auth**: Auth.js (NextAuth v5).

## 🚀 Setup Instructions

### 1. Set up Railway
1.  Go to [Railway.app](https://railway.app/).
2.  Create a "New Project" -> "Provision PostgreSQL".
3.  Click on the Postgres card -> "Connect" -> Copy the **DATABASE_URL**.

### 2. Environment Variables (.env.local)
Create or update your `.env.local` file:

```bash
DATABASE_URL="postgresql://postgres:..."
AUTH_SECRET="use-generated-secret" # Run `npx auth secret` to generate
```

### 3. Deploy Database
Run the following commands to sync your schema with the database:

```bash
# Install dependencies (If you encountered permission errors before, verify this now)
npm install

# Push schema to DB
npx prisma db push
```

### 4. Running the App
The backend logic is now active.
-   **Admin**: `/admin` (Protected)
-   **Jobs**: `/jobs` (Fetches from Real DB, falls back to Mock if empty)

## Troubleshooting
If you see `PrismaClientInitializationError`, check your `DATABASE_URL`.
If you see permission errors with `npm`, ensure you ran `sudo chown -R 501:20 "/Users/bobur/.npm"`.
