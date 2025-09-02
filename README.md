# Welcome to Amplify!

Amplify is an electric SaaS template and blog with unique components and animations. Built with Astro v5 and Tailwind CSS v4 by Cosmic Themes.

## Quickstart

1. To get started, first install all necessary packages with `npm install`, then run an initial build to make sure the setup works `npm run build`.
2. Next, you'll want to configure your site i18n setup (one language, or multiple). Simply run the command `npm run config-i18n` and follow the script instructions to get setup! For further information, see the [i18n documentation](https://cosmicthemes.com/docs/i18n/).
3. Now you can setup the site to your liking!
   - [Style customization](https://cosmicthemes.com/docs/styles/)
   - [Content editing](https://cosmicthemes.com/docs/content/)
   - [Animations](https://cosmicthemes.com/docs/animations/)
   - [Keystatic CMS](https://cosmicthemes.com/docs/keystatic/) - if you don't want Keystatic you can run `npm run remove-keystatic`
   - [Forms](https://cosmicthemes.com/docs/contact-form/)

Should you need any assistance, send me a message at support@cosmicthemes.com

## Docker Development

### Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (for local development)

### Development with Docker

```bash
# Start development environment
docker-compose up -d

# View logs
docker-compose logs -f

# Stop development environment
docker-compose down

# Rebuild containers
docker-compose up -d --build
```

### Production Docker Build

```bash
# Build production image
docker build -t amplify:latest .

# Run production container
docker run -p 80:80 amplify:latest

# Build and run with custom port
docker build -t amplify:latest . && docker run -p 3000:80 amplify:latest
```

## DOKPLOY Deployment

### Prerequisites
- DOKPLOY account and access
- Docker installed on your server
- Domain configured

### Deployment Steps

1. **Build and push your Docker image:**
   ```bash
   # Build the image
   docker build -t your-registry/amplify:latest .
   
   # Push to registry
   docker push your-registry/amplify:latest
   ```

2. **Deploy via DOKPLOY:**
   - Connect your repository to DOKPLOY
   - Configure build settings to use the Dockerfile
   - Set environment variables as needed
   - Deploy to your server

3. **Environment Variables:**
   ```bash
   NODE_ENV=production
   SITE_URL=your-domain.com
   ```

### DOKPLOY Configuration

The project includes a `Dockerfile` optimized for production deployment and a `docker-compose.yml` for development. The production build uses multi-stage builds for optimal performance.

## Code Intro

I have created a few code tours to help introduce you to the codebase. You will need the extension [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) to view them in VSCode.

## Code Structure

The source files have the following setup. Note that not all files are included - it is already long, no one wants it to be longer.

```
.
├── .tours/
│   └── code-intro.tour
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── hero.jpg
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── HeroCentered.astro
│   │   │   └── HeroGradient.astro
│   │   └── Footer/
│   │       └── Footer.astro
│   ├── config/
│   │   ├── siteSettings.json.ts
│   │   └── translationData.json.ts
│   ├── data/
│   │   ├── authors/
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── otherPages/
│   ├── icons/
│   │   └── tabler/
│   ├── js/
│   │   └── textUtils.ts
│   ├── layouts/
│   │   ├── BaseHead.astro
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── examples/
│   │   │   └── (contains example pages so you can see how to use components)
│   │   ├── [page].astro
│   │   ├── 404.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── overview.astro (links to example pages)
│   │   └── rss.xml.ts
│   ├── styles/
│   │   ├── buttons.css (button styles)
│   │   ├── global.css (global styles)
│   │   └── markdown-content.css (styling for markdown pages)
│   └── content.config.ts
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── netlify.toml
├── package.json
├── README.md
├── tsconfig.json
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
└── nginx.conf
```

For robots like Google to see the correct sitemap, you will want to edit the `public/robots.txt` file to use your website domain.

## Deployment Options

### Netlify (Default)
The project includes `netlify.toml` for easy Netlify deployment. Simply connect your repository and deploy.

### Docker + Nginx
- `Dockerfile` - Production-ready Docker image
- `nginx.conf` - Nginx configuration for production
- `docker-compose.yml` - Development environment

### Manual Deployment
Build the project and serve the `dist/` folder with any static file server.

## More Resources

- See my blog post on [recommended Astro web development setup](https://cosmicthemes.com/blog/astro-web-development-setup/).
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) page on the [Cosmic Themes Website](https://cosmicthemes.com/).
- For support, see the [support page](https://cosmicthemes.com/support/).
- [License details](https://cosmicthemes.com/license/)

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Docker Commands

| Command                           | Action                                    |
| :-------------------------------- | :---------------------------------------- |
| `docker-compose up -d`            | Start development environment             |
| `docker-compose down`             | Stop development environment              |
| `docker-compose logs -f`          | View live logs                           |
| `docker build -t amplify:latest .` | Build production Docker image            |
| `docker run -p 80:80 amplify:latest` | Run production container                |

### Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
