# Deployment Guide 🚀

The **CareerOS** MVP is built with Next.js and is fully static/client-side compatible (using LocalStorage for data), making it extremely easy to deploy to Vercel or Netlify.

## Option 1: Vercel (Recommended)

Vercel is the creators of Next.js and offers the best integration.

### Steps:
1.  **Push to GitHub**:
    -   Ensure your code is committed and pushed to a GitHub repository.
    
2.  **Login to Vercel**:
    -   Go to [vercel.com](https://vercel.com) and sign up/login.

3.  **Import Project**:
    -   Click "Add New..." -> "Project".
    -   Select your `career-os` repository from the list.

4.  **Configure**:
    -   **Framework Preset**: Next.js (Should be auto-detected).
    -   **Root Directory**: `./` (Default).
    -   **Environment Variables**: *None needed for MVP*.

5.  **Deploy**:
    -   Click **Deploy**.
    -   Wait ~1 minute for the build to finish.
    -   **Success!** Your app is live at `https://your-project.vercel.app`.

## Option 2: Netlify

1.  **Push to GitHub**.
2.  **Login to Netlify**.
3.  **New Site from Git**: Select GitHub and your repo.
4.  **Build Settings**:
    -   **Build Command**: `npm run build`
    -   **Publish Directory**: `.next` (Netlify usually handles Next.js automatically).
5.  **Deploy Site**.

## Troublshooting

### "Build Failed" (Type Errors)
If the build fails due to TypeScript errors:
1.  Check the logs in Vercel.
2.  Run `npm run build` locally to reproduce.
3.  Fix the error (usually strict null checks) and push again.

### "Images not loading"
-   Ensure all images used in `src/app/page.tsx` or `src/components/*` are in the `public/` folder.
-   Use absolute paths starting with `/` (e.g., `/logo.png`) in your `<img>` or `<Image />` tags.

---

**Ready for Launch!** 🚀
