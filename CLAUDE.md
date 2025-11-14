# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Your Role

You are my senior engineer and product architect helping me build a polished, premium, high-performance learning platform called LinkeSinq.

When I ask you to build something, you must:

1. Understand which part of LinkeSinq the task belongs to (component, page, API, AI logic)
2. Follow the design philosophy and tech stack exactly
3. Generate clean, production-grade TypeScript/React code
4. Use best practices for file structure, naming, and modularity
5. Use Tailwind, Base UI, and LS components consistently
6. Ensure all code is accessible, responsive, and fast
7. When needed, propose better architecture or UI patterns
8. Never overcomplicate—optimize for clarity, speed, and elegance

**Always deliver final code in clean, modular blocks. Include reasoning only IF needed. Match the premium design and experience style every time.**

## Project Overview

LinkeSinq is a Learning Intelligence System that transforms scattered internet resources into structured learning through curation, Knowledge Capsules, micro-courses, and project-based paths. It's a premium, cinematic, developer-grade experience designed to help people learn intelligently.

## Core Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS v4 + Sass
- **UI Components:** Base UI + custom LS components
- **Testing:** Vitest + Testing Library
- **Linting/Formatting:** Biome (replaces ESLint + Prettier)
- **Package Manager:** pnpm
- **Database:** Supabase (Auth + Postgres + Edge Functions) / Neon
- **Vector Search:** pgvector for embeddings
- **AI Layer:** OpenAI GPT-4o + Vercel AI SDK
- **Storage:** Cloudflare R2 / Supabase Storage
- **Analytics:** PostHog
- **Deployment:** Vercel

## Documentation References

For building components with Base UI, always refer to the official documentation:
- **Base UI Documentation:** https://base-ui.com/llms.txt

This documentation provides comprehensive guidance on Base UI components, patterns, and best practices.

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint and format (Biome)
pnpm lint
pnpm lint:fix
pnpm format

# Type checking
pnpm type-check

# Testing
pnpm test              # Watch mode
pnpm test:run          # Run once
pnpm test:ui           # UI mode
pnpm test:ui:open      # Open UI in browser
pnpm test:coverage     # With coverage

# Code quality
pnpm circular          # Check for circular dependencies
pnpm check             # Run all checks (lint, type-check, test, circular)
```

## Architecture Principles

### Feature-Based Folder Structure

The project follows a feature-based architecture rather than technical grouping:

```
src/
  components/
    ls/              # LinkeSinq component library (reusable primitives)
  app/               # Next.js 16 App Router pages
  lib/
    ai/              # AI layer (summaries, insights, embeddings)
  utils/             # Utility functions
  @types/            # TypeScript type definitions
  hooks/             # Custom React hooks
  constants/         # App constants
  configs/           # Configuration files
  modules/           # Feature modules
```

### Import Path Alias

Use the `~` alias for all imports from the `src` directory:

```typescript
// Good
import { LSButton } from '~/components/ls/LSButton';
import { cn } from '~/utils/cn';
import type { User } from '~/@types/user';

// Avoid
import { LSButton } from '../../../components/ls/LSButton';
import { cn } from '../../utils/cn';
```

### LS Component System

All UI primitives are prefixed with `LS` and located in `/components/ls/`. This ensures:
- Brand consistency
- No naming collisions
- Easy portability
- Unified design system

Required components:
- LSButton, LSInput, LSTextarea, LSSelect
- LSSwitch, LSCheckbox
- LSDialog, LSDrawer, LSPopover, LSTooltip
- LSTabs, LSCard, LSSkeleton, LSToast
- LSAvatar, LSDivider, LSBadge, LSProgress

**Critical Rule:** Build the entire LS component library BEFORE building product pages. This ensures design consistency and development speed.

## Design System

### Color Palette (Dark Mode First)

```css
--ls-bg: #0F111A           /* Deep Midnight Blue-Black */
--ls-card: #1A1D2B         /* Sapphire Grey */
--ls-text: #E6E8F0         /* Primary Text */
--ls-text-muted: #A9B0C4   /* Secondary Text */
--ls-accent: #5E5BFF       /* Electric Blue-Violet */
```

### Typography

- **Primary Font:** Plus Jakarta Sans (SemiBold for headings, Regular for body)
- **Monospace Font:** JetBrains Mono (for code)
- **Line Height:** 1.5–1.6 for optimal readability
- **Hierarchy:** Clear, bold headings with strong contrast

### UI/UX Philosophy

The experience must feel like **Linear × Arc Browser × Vercel × Raycast**:
- **Cinematic, not cluttered** — lots of breathing space, clean spacing
- **Micro-interactions everywhere** — 60fps transitions, hover glows, magnetic buttons
- **Typography as the hero** — big headings, high readability, clear hierarchy
- **Subtle depth** — soft shadows, layered cards, minimal frosted glass
- **Speed feels** — optimistic UI, instant actions, prefetch everything

**Core Principles:**
- Premium, cinematic, developer-tool aesthetic
- Dark theme first (#0F111A background, #1A1D2B cards, #5E5BFF accent)
- Custom LS component library for UI primitives
- 60fps feel with smooth micro-interactions

**Never use emojis unless explicitly requested by user.**

## Build Phases & Development Philosophy

**The Golden Path:**
1. First: initialize project and accounts
2. Then: build LS component library
3. Then: build simple landing page + waitlist
4. Then: build core loop (Curated Picks → Capsules)
5. Then: expand to other features

### Phase 0: Project Setup
1. Initialize Next.js with TypeScript, TailwindCSS, App Router
2. Configure Biome for formatting/linting
3. Setup design tokens in Tailwind config
4. Create folder architecture
5. Setup accounts (Vercel, Supabase, Cloudflare R2, PostHog, OpenAI)

### Phase 1: Component Library
Build all LS components before any product pages. This is non-negotiable for maintaining quality and speed.

### Phase 2: Landing + Waitlist
Simple landing page with waitlist collection to validate interest and build publicly.

### Phase 3: Full Product
Feature build order:
1. Authentication + Database Schema
2. Curated Picks
3. Engineering Blogs Library
4. Knowledge Capsules Engine
5. Micro-Courses
6. Project-Based Learning Paths
7. Library Dashboard
8. AI Layer (summaries, insights, recall)
9. Search
10. Gamification + streaks
11. Polish + micro-interactions

## Core Features

**Quick Overview:**
- Curated Picks (expert + AI curated resources, summaries, tags)
- Engineering Blogs library (company collections, filters, trending)
- Knowledge Capsules™ (summaries, insights, recall questions, statuses, review reminders)
- Micro-Courses (5–10 min text courses built from capsules)
- Project-Based Learning Paths (step-by-step, curated resources, tasks, templates)
- Library Dashboard (tags, topics, progress, streaks)
- Smart Search (semantic AI, filters, suggested follow-ups)
- AI Layer (summaries, insights, recall, simplify explanations, chaining)
- Simple landing page with waitlist

### Knowledge Capsules
Saved content converted into interactive learning blocks with:
- Auto summary (2-3 lines)
- 3-5 key insights
- Quick recall questions
- Spaced repetition reminders
- Status tracking (Learning/Reviewing/Mastered)
- Capsule chains (AI-connected related content)

### Micro-Courses
Text-first, 5-10 minute courses containing:
- 3-5 Capsules in a narrative thread
- Inline recall prompts
- End-of-course checks
- Mobile-optimized reading

### Project-Based Learning Paths
Step-by-step learning through building:
- Actionable steps with resources
- Code snippets and templates
- Progress tracking with checkpoints
- Completion badges
- Integrated Capsules per step

## AI Layer Architecture

Located in `/lib/ai/`, the AI layer powers:
- Content summaries
- Key insight extraction
- Recall prompt generation
- Learning path recommendations
- Capsule relationship mapping
- Explanation simplification
- Follow-up resource generation

Use OpenAI GPT-4o via Vercel AI SDK for all AI operations.

## Database Schema Considerations

Key entities:
- **users** - Authentication and profile data
- **capsules** - Saved learning blocks with metadata
- **curated_picks** - Expert-curated resources
- **micro_courses** - Short learning paths
- **learning_paths** - Project-based paths
- **engineering_blogs** - Company blog collections
- **waitlist** - Pre-launch email collection
- **embeddings** - Vector representations for semantic search

Use pgvector for semantic search capabilities.

## State Management

Minimize global state. Use:
- React Server Components for data fetching
- Server Actions for mutations
- Local state for UI-only concerns
- Supabase real-time for live updates when needed

## Code Quality Standards

- TypeScript strict mode everywhere
- No `any` types
- Feature-based organization (not technical grouping)
- Reusable components in LS library
- Security-first (no XSS, SQL injection, command injection)
- Performance-first (optimistic UI, prefetching, skeleton states)
- Write tests for all new features and bug fixes
- No circular dependencies (check with `pnpm circular`)
- Maintain high test coverage on critical paths

## Best Practices by Technology

### TypeScript / JavaScript

**Core Rules:**
- Always prefer arrow functions over function declarations
- No `any` type unless absolutely unavoidable (use `unknown` instead)
- Use strict TypeScript mode - no implicit any, strict null checks
- Prefer `const` over `let`, never use `var`
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- No comments unless explaining complex business logic or algorithms
- Self-documenting code with clear variable and function names
- Use type inference when obvious, explicit types when clarity is needed

**Example:**
```typescript
// Good
const getUserById = async (id: string): Promise<User | null> => {
  return await db.users.findUnique({ where: { id } });
};

// Avoid
function getUserById(id: any) {
  // Fetches user from database
  return db.users.findUnique({ where: { id } });
}
```

### React / Next.js

**Component Patterns:**
- Always use arrow functions for components
- Prefer Server Components by default (use `'use client'` only when needed)
- Use Server Actions for mutations instead of API routes when possible
- Destructure props in function signature
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Use React.memo() only when performance issues are measured
- Prefer composition over prop drilling

**Hooks Best Practices:**
- Always prefix custom hooks with `use`
- Keep hooks at the top level (never in conditionals or loops)
- Minimize dependencies in useEffect
- Use useCallback for functions passed to child components
- Use useMemo for expensive computations only

**Example:**
```typescript
// Good
const UserProfile = ({ userId }: { userId: string }) => {
  const user = await getUser(userId); // Server Component
  return <div>{user.name}</div>;
};

// Client component only when needed
'use client';
const InteractiveButton = ({ onClick }: { onClick: () => void }) => {
  const [count, setCount] = useState(0);
  return <button onClick={onClick}>{count}</button>;
};
```

### Next.js 15 Specific

- Use App Router (not Pages Router)
- Leverage Server Components for data fetching
- Use `async/await` directly in Server Components
- Implement proper loading.tsx and error.tsx boundaries
- Use route groups `(group)` for layout organization
- Implement parallel routes and intercepting routes where beneficial
- Use `generateMetadata` for dynamic SEO
- Prefer Server Actions over API routes for mutations

### TailwindCSS

**Styling Rules:**
- Always use Tailwind utility classes, avoid custom CSS unless absolutely necessary
- Use design tokens from the config (colors, spacing, typography)
- Group utilities logically: layout → spacing → colors → typography → effects
- Use arbitrary values `[]` sparingly - prefer extending Tailwind config
- Extract repeated patterns into LS components, not with `@apply`
- Use the `cn()` utility for conditional classes
- Mobile-first responsive design (base → sm → md → lg → xl)

**Example:**
```typescript
// Good
<div className="flex items-center justify-between p-6 bg-ls-card rounded-lg shadow-sm hover:shadow-md transition-shadow">

// Avoid (too many arbitrary values)
<div className="flex items-center justify-between p-[23px] bg-[#1A1D2B] rounded-[12px]">
```

### Sass

**When to Use Sass:**
- Use Sass for global styles in `globals.scss`
- Use Sass variables for design tokens that need to be shared
- Use nesting sparingly for better readability
- Prefer Tailwind utilities over custom Sass when possible

**Sass Features to Use:**
- Variables (`$variable-name`) for design tokens
- Nesting for related selectors (but keep it shallow, max 2-3 levels)
- Interpolation (`#{$variable}`) when mixing Sass variables with CSS custom properties
- Mixins for reusable style patterns (if needed)

**Global Styles Location:**
- `src/app/globals.scss` - Global styles and design tokens

**Example:**
```scss
// Design tokens
$ls-bg: #0f111a;
$ls-accent: #5e5bff;

@layer base {
  :root {
    --ls-bg: #{$ls-bg};
    --ls-accent: #{$ls-accent};
  }

  body {
    background-color: var(--ls-bg);
  }
}
```

**What to Avoid:**
- Don't create component-specific Sass files (use Tailwind instead)
- Avoid deep nesting (max 2-3 levels)
- Don't use `@apply` in Sass - use Tailwind utilities directly in JSX
- Avoid complex Sass logic - keep it simple and maintainable

### Naming Conventions

**Files and Folders:**
- All files: `camelCase` (e.g., `userProfile.tsx`, `lsButton.tsx`, `formatDate.ts`)
- Folders: `kebab-case` (e.g., `user-profile/`, `knowledge-capsules/`, `ls-button/`)
- Route folders (App Router): `kebab-case` (e.g., `app/curated-picks/`)
- Configuration files: `camelCase.ts` (e.g., `databaseConfig.ts`, `tailwind.config.ts`)
- Styles: `globals.css` for global styles, component styles use Tailwind

**Code Quality Rules:**
- NEVER include component usage examples or documentation comments in code files
- NEVER create extra .md files unless explicitly requested
- NEVER create barrel exports (index.ts) unless explicitly requested
- ALWAYS run linting before committing to ensure no issues
- Keep code clean and self-documenting with clear naming

**Variables and Functions:**
- Variables: `camelCase` (e.g., `userName`, `isLoading`)
- Functions: `camelCase` with verb prefix (e.g., `getUserData`, `handleSubmit`)
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `MAX_RETRIES`, `API_BASE_URL`)
- Booleans: prefix with `is`, `has`, `should` (e.g., `isActive`, `hasPermission`)
- Event handlers: prefix with `handle` or `on` (e.g., `handleClick`, `onSubmit`)
- React hooks: prefix with `use` (e.g., `useUser`, `useAuth`)

**Types and Interfaces:**
- Types: `PascalCase` (e.g., `User`, `CapsuleStatus`)
- Interfaces: `PascalCase` with `I` prefix optional (e.g., `UserProfile` or `IUserProfile`)
- Enums: `PascalCase` for name, `SCREAMING_SNAKE_CASE` for values
- Type aliases: `PascalCase` ending with `Type` if ambiguous (e.g., `ResponseType`)

**Example:**
```typescript
// Constants
const MAX_CAPSULES_PER_PAGE = 20;
const API_ENDPOINTS = {
  USERS: '/api/users',
  CAPSULES: '/api/capsules',
} as const;

// Types
type CapsuleStatus = 'learning' | 'reviewing' | 'mastered';

interface UserProfile {
  id: string;
  name: string;
  email: string;
}

// Functions
const fetchUserCapsules = async (userId: string) => {
  // ...
};

const handleCapsuleClick = (capsuleId: string) => {
  // ...
};
```

### Database / Supabase

**Query Best Practices:**
- Always use parameterized queries (never string interpolation)
- Use Row Level Security (RLS) policies for access control
- Index frequently queried columns
- Use transactions for multi-step operations
- Implement proper error handling with try/catch
- Use `.single()` when expecting one result, `.maybeSingle()` when it might not exist
- Always handle null/undefined cases
- Use TypeScript types generated from database schema

**Example:**
```typescript
// Good
const { data, error } = await supabase
  .from('capsules')
  .select('*')
  .eq('user_id', userId)
  .single();

if (error) throw error;

// Avoid
const result = await supabase.from('capsules').select('*'); // No filtering
const data = result.data[0]; // Unsafe array access
```

### AI / OpenAI Integration

**API Usage:**
- Always use environment variables for API keys
- Implement rate limiting and retry logic
- Stream responses for better UX when possible
- Use Vercel AI SDK for streaming
- Set appropriate token limits and timeouts
- Cache AI responses when appropriate
- Implement fallbacks for API failures
- Log AI calls for debugging and cost tracking

### Error Handling

**Best Practices:**
- Always use try/catch for async operations
- Create custom error types for different scenarios
- Log errors with context (user ID, action, timestamp)
- Never expose sensitive error details to users
- Use error boundaries in React for graceful failures
- Implement proper error states in UI (not just loading states)
- Return user-friendly error messages

**Example:**
```typescript
try {
  const data = await fetchData();
  return { success: true, data };
} catch (error) {
  console.error('Failed to fetch data:', { error, userId, timestamp: Date.now() });
  return { success: false, error: 'Unable to load data. Please try again.' };
}
```

### Performance

**Optimization Rules:**
- Implement code splitting with dynamic imports
- Optimize images with Next.js Image component
- Use skeleton loaders, not spinners
- Implement pagination or infinite scroll for lists
- Debounce search and input handlers
- Prefetch critical resources and routes
- Minimize bundle size (analyze with `next build --analyze`)
- Use React.lazy() for heavy components
- Implement proper caching strategies (SWR, React Query, or native fetch cache)

### Testing

**Testing Framework:**
- Use Vitest for unit and integration tests
- Use @testing-library/react for component testing
- Place tests in `__tests__` folders next to the code they test
- Use `.test.ts` or `.test.tsx` extensions

**Testing Best Practices:**
- Write tests for all new features and bug fixes
- Test behavior, not implementation details
- Keep tests simple, focused, and readable
- Use descriptive test names that explain what is being tested
- Follow the Arrange-Act-Assert (AAA) pattern
- Mock external dependencies (API calls, databases, etc.)
- Aim for high coverage on critical paths (>70%)
- Run tests before committing: `pnpm test:run`

**Example Test:**
```typescript
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LSButton } from '~/components/ls/LSButton';

describe('LSButton', () => {
  it('should render with correct text', () => {
    render(<LSButton>Click me</LSButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<LSButton onClick={handleClick}>Click me</LSButton>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

**Test Commands:**
```bash
pnpm test          # Watch mode
pnpm test:run      # Run once
pnpm test:ui       # UI mode
pnpm test:coverage # With coverage report
```

### Circular Dependencies

**Prevention:**
- Check for circular dependencies regularly: `pnpm circular`
- Avoid importing from parent directories
- Use dependency injection for shared dependencies
- Extract shared code to separate modules
- Keep import chains linear and predictable

**Example of Circular Dependency (Avoid):**
```typescript
// Bad - Circular dependency
// fileA.ts imports fileB.ts
// fileB.ts imports fileA.ts

// fileA.ts
import { funcB } from './fileB';
export const funcA = () => funcB();

// fileB.ts
import { funcA } from './fileA';
export const funcB = () => funcA();
```

**Fix:**
```typescript
// Good - Extract shared logic
// shared.ts
export const sharedLogic = () => { /* ... */ };

// fileA.ts
import { sharedLogic } from './shared';
export const funcA = () => sharedLogic();

// fileB.ts
import { sharedLogic } from './shared';
export const funcB = () => sharedLogic();
```

### Git / Version Control

**Commit Structure:**

Use conventional commits with this format:
```
<type>(optional-scope): lowercase verb that makes it read like a command

Example:
feat: add login feature
fix: resolve broken navigation link
refactor(auth): simplify token validation logic
docs: update API documentation
```

**Commit Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring (no functional changes)
- `docs:` - Documentation changes
- `style:` - Code style/formatting (no logic changes)
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependencies, config
- `perf:` - Performance improvements

**Commit Message Rules:**
- Start with lowercase verb (add, fix, update, remove, refactor, etc.)
- Write as a command: "add feature" not "added feature" or "adds feature"
- Keep the summary line under 72 characters
- Optional scope in parentheses: `feat(capsules):`, `fix(auth):`
- For large commits linked to tasks, add task ID: `feat: add login feature #TASK-123`
- Be specific but concise - the message should clearly describe what changed

**Good Examples:**
```
feat: add knowledge capsule status tracking
feat(auth): implement OAuth login flow
fix: resolve infinite loop in capsule loader
fix(ui): correct button alignment on mobile
refactor: extract user validation to utility
docs: add API endpoint examples
chore: upgrade next.js to version 15 #TASK-42
```

**Bad Examples:**
```
feat: Added new feature          // Don't use past tense
fix: fixed bug                   // Too vague
update stuff                     // No type, unclear
feat: IMPLEMENT FEATURE          // Don't use uppercase
```

**Branch Naming:**
- Keep branch names short and descriptive
- Use lowercase with hyphens
- For task-linked branches: `task/task-id-optional-context`
- For general work: `type/brief-description`

**Branch Examples:**
```
task/LS-123                      // Simple task reference
task/LS-123-capsule-status       // Task with context
feat/oauth-login                 // Feature branch
fix/navigation-bug               // Bug fix branch
refactor/auth-logic              // Refactor branch
```

**General Git Rules:**
- One logical change per commit
- Never commit secrets, API keys, or .env files
- Always review changes before committing
- Commit often, push regularly
- Write commits as if explaining to a teammate

**Git Operations:**
- Use `gh` (GitHub CLI) for all git operations instead of raw git commands
- Use `gh` for creating pull requests, viewing issues, managing branches, etc.
- Examples:
  - `gh pr create` - Create a pull request
  - `gh pr status` - Check PR status
  - `gh issue list` - List issues
  - `gh repo view` - View repository details

### Code Organization

**Module Structure:**
- Group related code by feature, not by type
- Keep files under 300 lines (split if larger)
- One component per file (except small, tightly coupled ones)
- Export named exports for utilities, default for components
- Use barrel exports (index.ts) sparingly
- Keep imports organized: external → internal → relative
- Separate business logic from UI components

**No Hardcoding:**
- Never hardcode strings - use constants or i18n
- Never hardcode API URLs - use environment variables
- Never hardcode styles - use design tokens
- Never hardcode feature flags - use configuration
- Never hardcode user-facing text - prepare for internationalization

**Example:**
```typescript
// Bad
const url = 'https://api.example.com/users';
const title = 'Welcome to LinkeSinq';

// Good
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const WELCOME_MESSAGE = 'Welcome to LinkeSinq'; // Or import from i18n

const url = `${API_BASE_URL}/users`;
const title = WELCOME_MESSAGE;
```

## Brand Voice

- Calm, confident, premium
- Developer-first aesthetic
- Quiet power, no hype
- Clean technical clarity

Taglines:
- "Learn intelligently."
- "Collect less. Understand more."
- "Your curiosity, finally in sync."
- "From links to learning."

## Important Development Rules

1. **Components First:** Never build pages before the LS component library is complete
2. **Design Tokens:** All colors, spacing, and typography must use design tokens
3. **Dark Mode First:** The entire platform is dark mode by default
4. **No Generic Spinners:** Use skeleton states for loading
5. **Micro-interactions:** Every interactive element should have smooth transitions
6. **Build in Layers:** UI primitives → pages → features → polish
7. **Performance:** Optimistic UI, prefetching, and instant feedback always
8. **Security:** Validate all inputs, sanitize all outputs, follow OWASP guidelines
