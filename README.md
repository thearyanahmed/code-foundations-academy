# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9a7e2dfc-921d-41ee-a3d1-a1d80b6f9084

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9a7e2dfc-921d-41ee-a3d1-a1d80b6f9084) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9a7e2dfc-921d-41ee-a3d1-a1d80b6f9084) and click on Share -> Publish.

## Deploy to DigitalOcean App Platform

### Prerequisites
- GitHub account with this repository
- DigitalOcean account
- Supabase account (if using backend features)

### Step-by-Step Deployment

1. **Prepare Your Repository**
   - Ensure all code is committed and pushed to your GitHub main branch
   - Verify the build works locally: `npm run build`

2. **Create App in DigitalOcean**
   - Log into DigitalOcean App Platform
   - Click "Create App"
   - Choose "GitHub" as your source
   - Select this repository and the main branch
   - App Platform will auto-detect this as a Node.js app

3. **Configure App Settings**
   - **App Type**: Choose "Static Site" (this is a frontend-only React app)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **HTTP Routes**: Enable "Catch All" to handle React Router

4. **Environment Variables** (If using Supabase)
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Deploy**
   - Click "Create Resources"
   - Wait for the build and deployment to complete
   - Your app will be available at the provided URL

### Health Check
Once deployed, visit `/health` to verify the application is running correctly.

### Optional: Custom Domain
- In App Platform Settings > Domains, add your custom domain
- Configure DNS records as instructed by DigitalOcean
- SSL certificates are automatically provided

### Auto-Deploy Setup
- Enable auto-deploy in App Platform settings for automatic deployments on git push
- This ensures your production app stays in sync with your main branch

### Troubleshooting Common Issues

**Build Failures**
- Check that all dependencies are in `dependencies` (not `devDependencies`)
- Verify `npm run build` works locally
- Check the build logs in App Platform for specific errors

**Routing Issues**
- Ensure "Catch All" routing is enabled for React Router
- Verify the app type is set to "Static Site"

**Environment Variables**
- Double-check variable names match exactly (case-sensitive)
- Ensure Supabase credentials are valid and project is active

**Performance Issues**
- Monitor app metrics in the DigitalOcean dashboard
- Consider upgrading the app plan if needed

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
