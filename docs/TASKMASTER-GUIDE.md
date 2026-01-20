# Using the BCEM PRD with Cursor + Taskmaster

A practical guide for managing the BCEM website build using Taskmaster MCP in Cursor.

---

## Prerequisites

1. **Cursor IDE** installed
2. **Taskmaster MCP** configured in Cursor
3. **BCEM PRD** (`burj-modaraba-prd.md`) in your project
4. **Starter kit** extracted to your repo

---

## Step 1: Project Setup

### 1.1 Initialize Taskmaster

In Cursor chat, run:

```
Initialize taskmaster for this project. 
PRD location: ./docs/burj-modaraba-prd.md
```

Or use the MCP command:

```
/taskmaster init --prd ./docs/burj-modaraba-prd.md
```

### 1.2 Create Project Structure

```
bcem-site/
├── docs/
│   ├── burj-modaraba-prd.md      # Your PRD
│   └── TASKMASTER-GUIDE.md       # This guide
├── tasks/
│   └── tasks.json                # Taskmaster will create this
├── src/
│   └── ... (starter kit files)
└── .cursor/
    └── rules/
        └── bcem-rules.md         # Project-specific AI rules
```

---

## Step 2: Parse PRD into Tasks

### 2.1 Generate Tasks from PRD

In Cursor chat:

```
Parse the PRD at ./docs/burj-modaraba-prd.md and create tasks.
Break down into phases:
- Phase 1: Core pages (Home, About, Contact)
- Phase 2: Content pages (Projects, News, Governance)
- Phase 3: Investor section (Documents, Reports)
- Phase 4: Polish (SEO, Performance, Accessibility)
```

### 2.2 Expected Task Structure

Taskmaster will generate `tasks/tasks.json`:

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Create About Page",
      "description": "Build the About page with company history, mission, vision sections",
      "status": "pending",
      "priority": "high",
      "dependencies": [],
      "subtasks": [
        { "id": "1.1", "title": "Create AboutLayout component", "status": "pending" },
        { "id": "1.2", "title": "Add leadership team section", "status": "pending" },
        { "id": "1.3", "title": "Add timeline/history component", "status": "pending" }
      ]
    }
  ]
}
```

---

## Step 3: Cursor Rules for BCEM

### 3.1 Create Project Rules

Create `.cursor/rules/bcem-rules.md`:

```markdown
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
```

### 3.2 Add to Cursor Settings

In Cursor: `Settings > Rules > Add Rule File`

Point to: `.cursor/rules/bcem-rules.md`

---

## Step 4: Working with Tasks

### 4.1 View Current Tasks

```
/taskmaster list
```

Or ask:

```
Show me all pending tasks for the BCEM project
```

### 4.2 Start a Task

```
/taskmaster start 1
```

Or:

```
Start task 1: Create About Page. 
Reference the PRD section on "About Page" for requirements.
```

### 4.3 Complete a Task

```
/taskmaster complete 1
```

### 4.4 Add Dependencies

```
/taskmaster depends 3 --on 1,2
```

This makes Task 3 depend on Tasks 1 and 2.

---

## Step 5: Recommended Task Breakdown

### Phase 1: Foundation (Week 1)

| ID | Task | Priority | Dependencies |
|----|------|----------|--------------|
| 1 | Setup project with starter kit | High | - |
| 2 | Create reusable components | High | 1 |
| 3 | Build About page | High | 2 |
| 4 | Build Contact page | High | 2 |

### Phase 2: Content Pages (Week 2)

| ID | Task | Priority | Dependencies |
|----|------|----------|--------------|
| 5 | Build Projects listing page | High | 2 |
| 6 | Build Project detail template | High | 5 |
| 7 | Build News listing page | Medium | 2 |
| 8 | Build News article template | Medium | 7 |
| 9 | Build Governance page | Medium | 2 |

### Phase 3: Investor Section (Week 3)

| ID | Task | Priority | Dependencies |
|----|------|----------|--------------|
| 10 | Build Investor Relations page | High | 2 |
| 11 | Create document download component | High | 10 |
| 12 | Build Products/Services page | Medium | 2 |

### Phase 4: Polish (Week 4)

| ID | Task | Priority | Dependencies |
|----|------|----------|--------------|
| 13 | SEO optimization | Medium | 3-12 |
| 14 | Performance audit | Medium | 3-12 |
| 15 | Accessibility audit | High | 3-12 |
| 16 | Cross-browser testing | Medium | 13-15 |

---

## Step 6: Example Workflow

### Starting a New Task

1. **Check task details:**
   ```
   Show me task 3 details and its PRD requirements
   ```

2. **Start implementation:**
   ```
   Start task 3. Create the About page following the PRD specs.
   Use the BaseLayout and design tokens from the starter kit.
   ```

3. **Review and iterate:**
   ```
   Review the About page I just created against the PRD requirements.
   What's missing?
   ```

4. **Mark complete:**
   ```
   Task 3 is complete. Update status and show next available tasks.
   ```

### Handling Blockers

```
Task 5 is blocked because we need project images.
Add a note and show me tasks I can work on instead.
```

---

## Step 7: Useful Prompts for Cursor

### Component Creation

```
Create a ProjectCard component based on the PRD design specs.
- Use design tokens from tokens.css
- Make it responsive (mobile-first)
- Include hover state
- Accept props: title, location, type, capacity, image, href
```

### Page Creation

```
Create the Governance page following the PRD.
Sections needed:
1. Hero with page title
2. Board of Directors grid
3. Shariah Board section
4. Management Team section
5. Corporate governance policies

Use the team content collection for data.
```

### Content Schema

```
Create a content collection schema for Board Members.
Fields needed: name, title, image, bio, linkedin (optional), order
Add sample content for 3 board members.
```

### Debugging

```
This component isn't using the correct spacing tokens.
Fix it to use var(--space-*) instead of hardcoded values.
Reference tokens.css for available options.
```

---

## Step 8: Progress Tracking

### Daily Check-in

```
Show project progress:
- Completed tasks
- In-progress tasks  
- Blocked tasks
- Upcoming priorities
```

### Weekly Summary

```
Generate a weekly progress report for the BCEM project.
Include: completed items, blockers, next week priorities.
Format for sharing with stakeholders.
```

---

## Quick Reference Commands

| Command | Action |
|---------|--------|
| `/taskmaster init` | Initialize project |
| `/taskmaster parse-prd` | Generate tasks from PRD |
| `/taskmaster list` | Show all tasks |
| `/taskmaster next` | Show next recommended task |
| `/taskmaster start [id]` | Begin working on task |
| `/taskmaster complete [id]` | Mark task done |
| `/taskmaster block [id]` | Mark task blocked |
| `/taskmaster expand [id]` | Break task into subtasks |
| `/taskmaster status` | Show project overview |

---

## Tips for Success

1. **Keep PRD updated** - As requirements change, update the PRD and regenerate tasks

2. **Small tasks** - Break large tasks into subtasks of 1-2 hours each

3. **Use dependencies** - Ensure logical build order

4. **Reference PRD often** - Ask Cursor to check work against PRD specs

5. **Commit frequently** - After each task completion

6. **Test as you go** - Don't save all testing for the end

---

## Need Help?

In Cursor, you can always ask:

```
I'm stuck on [task]. 
Show me the relevant PRD section and suggest an approach.
```

Or:

```
What's the recommended order to build the remaining pages?
Consider dependencies and complexity.
```
