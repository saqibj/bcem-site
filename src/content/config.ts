import { defineCollection, z } from 'astro:content';

// News/Media Collection
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().optional(),
    category: z.enum(['News', 'Press Release', 'Announcement', 'Media Coverage']).default('News'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Projects Collection (Wind, Solar, etc.)
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    excerpt: z.string(),
    category: z.enum(['Wind', 'Solar', 'Hydro', 'Hybrid']),
    status: z.enum(['Operational', 'Under Construction', 'Planning', 'Completed']).default('Operational'),
    location: z.string(),
    capacity: z.string(), // e.g., "50 MW"
    commissionDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

// Investor Documents Collection
const documents = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Annual Report',
      'Quarterly Report',
      'Financial Statement',
      'Corporate Notice',
      'Shariah Compliance',
      'Governance',
      'Other'
    ]),
    year: z.number(),
    quarter: z.enum(['Q1', 'Q2', 'Q3', 'Q4']).optional(),
    publishDate: z.coerce.date(),
    fileUrl: z.string(),
    fileSize: z.string().optional(), // e.g., "2.4 MB"
    fileType: z.enum(['pdf', 'xlsx', 'docx']).default('pdf'),
  }),
});

// Team Members Collection (optional, for About page)
const team = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    department: z.enum(['Board of Directors', 'Management', 'Shariah Board']),
    bio: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  news,
  projects,
  documents,
  team,
};
