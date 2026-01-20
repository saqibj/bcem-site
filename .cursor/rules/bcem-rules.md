# BCEM Project Rules

## Tech Stack
- Framework: Astro 5.x with TypeScript
- Styling: CSS custom properties (no Tailwind)
- Content: Astro Content Collections
- CMS: Decap CMS (optional)

## Design Tokens
Always use design tokens from `src/styles/tokens.css`:
- Colors: `var(--color-primary-600)`, `var(--color-secondary-500)`
- Spacing: `var(--space-4)` through `var(--space-16)`
- Typography: `var(--font-size-lg)`, `var(--font-weight-semibold)`

## Component Patterns
- All pages use `BaseLayout.astro`
- Components go in `src/components/`
- Use semantic HTML (section, article, nav, aside)
- Mobile-first responsive design

## Content Collections
- News articles: `src/content/news/*.md`
- Projects: `src/content/projects/*.md`
- Documents: `src/content/documents/*.json`

## Code Style
- Use TypeScript for type safety
- Props interfaces for all components
- Descriptive variable names
- Comments for complex logic only

## Accessibility Requirements
- All images need alt text
- Proper heading hierarchy (h1 → h2 → h3)
- Focus states on interactive elements
- Skip link to main content