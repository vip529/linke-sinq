# LinkeSinq

A Learning Intelligence System that transforms scattered internet resources into structured learning through curation, Knowledge Capsules, micro-courses, and project-based paths.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS v4 + Sass
- **Testing:** Vitest + Testing Library
- **Linting/Formatting:** Biome
- **Package Manager:** pnpm
- **Database:** Supabase (Postgres + Auth) / Neon
- **AI:** OpenAI GPT-4o + Vercel AI SDK
- **Storage:** Cloudflare R2 / Supabase Storage
- **Analytics:** PostHog
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy the environment variables template:

```bash
cp .env.example .env.local
```

4. Fill in your environment variables (see Account Setup below)

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint and format
pnpm lint
pnpm lint:fix
pnpm format

# Type check
pnpm type-check

# Run tests
pnpm test              # Watch mode
pnpm test:run          # Run once
pnpm test:ui           # UI mode
pnpm test:ui:open      # Open UI in browser
pnpm test:coverage     # With coverage

# Check for circular dependencies
pnpm circular          # Check for circular deps
pnpm circular:graph    # Generate dependency graph (graph.svg)

# Run all quality checks (lint, type-check, test, circular)
pnpm check
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Account Setup

You'll need to create accounts and get API keys for the following services:

### 1. Vercel (Deployment)
- Sign up at [vercel.com](https://vercel.com)
- Connect your GitHub repository
- Deploy automatically on push to main

### 2. Supabase (Database & Auth)
- Sign up at [supabase.com](https://supabase.com)
- Create a new project
- Get your credentials from Project Settings > API:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
- Enable pgvector extension in Database > Extensions
- Set up authentication providers in Authentication > Providers

### 3. OpenAI (AI Features)
- Sign up at [platform.openai.com](https://platform.openai.com)
- Create an API key in API Keys section
- Add billing information
- Set `OPENAI_API_KEY` in your environment

### 4. Cloudflare R2 (Storage) - Optional
- Sign up at [cloudflare.com](https://cloudflare.com)
- Create an R2 bucket in R2 section
- Generate R2 API tokens
- Set R2 credentials in environment

Alternative: Use Supabase Storage instead

### 5. PostHog (Analytics)
- Sign up at [posthog.com](https://posthog.com)
- Create a new project
- Get your Project API Key from Project Settings
- Set `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`

## Project Structure

```
linke-sinq/
├── src/
│   ├── app/              # Next.js 16 App Router pages
│   ├── components/       # React components
│   │   └── ls/          # LinkeSinq component library
│   ├── lib/             # Core libraries
│   │   └── ai/          # AI layer (summaries, embeddings)
│   ├── utils/           # Utility functions
│   ├── @types/          # TypeScript type definitions
│   ├── hooks/           # Custom React hooks
│   ├── constants/       # App constants
│   ├── configs/         # Configuration files
│   └── modules/         # Feature modules
├── public/              # Static assets
└── ...config files
```

## Testing

This project uses Vitest for unit and component testing.

### Writing Tests

- Place test files next to the code they test in a `__tests__` folder
- Use the `.test.ts` or `.test.tsx` extension
- Follow the pattern: `src/utils/__tests__/cn.test.ts`

### Running Tests

```bash
# Watch mode (recommended during development)
pnpm test

# Run all tests once
pnpm test:run

# Run tests with UI
pnpm test:ui

# Open tests UI in browser
pnpm test:ui:open

# Run tests with coverage report
pnpm test:coverage
```

### Testing Best Practices

- Test behavior, not implementation
- Keep tests simple and focused
- Use descriptive test names
- Mock external dependencies
- Aim for high test coverage on critical paths

## Code Quality Checks

### Circular Dependencies

Circular dependencies can cause runtime errors and make code harder to maintain. Check for them regularly:

```bash
# Check for circular dependencies
pnpm circular

# Generate a visual dependency graph
pnpm circular:graph
```

The graph will be saved as `graph.svg` in the project root.

## Pre-Build Checks

Before every production build, the following checks run automatically:

1. **Linting** - Code quality and formatting checks
2. **Type Checking** - TypeScript compilation validation
3. **Tests** - All unit and integration tests
4. **Circular Dependencies** - Dependency graph validation

Run all checks manually with:
```bash
pnpm check
```

If any check fails, the build will be aborted. Fix all issues before building for production.

## Development Workflow

1. Always work in feature branches
2. Use conventional commits (feat:, fix:, refactor:, etc.)
3. Write tests for new features and bug fixes
4. Run `pnpm lint:fix` before committing
5. Run `pnpm check` to verify all quality checks pass
6. Test locally before pushing

**Note:** The `pnpm build` command automatically runs all quality checks first (via prebuild hook).

## Design Philosophy

LinkeSinq follows a premium, cinematic, developer-grade aesthetic:

- **Dark mode first** - Deep midnight blue-black background
- **Typography as hero** - Bold headings, clear hierarchy
- **Micro-interactions** - 60fps smooth animations
- **Component-driven** - LS component library for consistency
- **Performance first** - Optimistic UI, prefetching, instant feedback

See `CLAUDE.md` for detailed development guidelines.

## License

Private - All rights reserved
