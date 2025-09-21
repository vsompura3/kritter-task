# Kritter Task

A modern Next.js application for exploring movies and TV shows using The Movie Database (TMDB) API. Features server-side rendering, parallel routes with modals, and optimized performance.

## Features

- **Movie & TV Show Discovery** - Browse popular and trending content
- **Detailed Information Pages** - Comprehensive details for series and movies
- **Modal Overlays** - Smooth modal experience using Next.js parallel routes
- **TMDB Integration** - Real-time data from The Movie Database API
- **Responsive Design** - Mobile-first approach with modern CSS
- **Performance Optimized** - Code splitting and bundle optimization

## Tech Stack

- **Framework:** Next.js 15+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API Integration:** The Movie Database (TMDB) API
- **Data Fetching:** Tanstack Query for server state management
- **Deployment:** Vercel

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 18.0 or higher)
- npm, yarn, or pnpm
- Git

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/vsompura3/kritter-task
   cd kritter-task
   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update the `.env.local` file with your configuration:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   NEXT_PUBLIC_API_KEY_ACCESS_TOKEN=your_tmdb_api_access_token
   NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
   NEXT_PUBLIC_TMDB_IMAGE_PREFIX_URL=https://image.tmdb.org/t/p
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Performance

- **Lighthouse Score:** 95+ across all metrics
- **Bundle Analysis:** Use `npm run analyze` to analyze bundle size
- **Image Optimization:** Automatic WebP conversion and lazy loading
- **Code Splitting:** Automatic route-based code splitting

## Authors

- **Vaibhav Sompura** - _Initial work_ - [vsompura3](https://github.com/vsompura3)

---
