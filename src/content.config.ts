import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site' }),
  schema: z.object({
    valuationMin: z.number(),
    valuationMax: z.number(),
    valuationPrice: z.string(),
    marketSize: z.string(),
    trustPoints: z.array(z.string()),
    disclaimer: z.string(),
  }),
});

const marketStats = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/market' }),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    highlight: z.string(),
    order: z.number(),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    gradient: z.string(),
    order: z.number(),
  }),
});

const valuePillars = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pillars' }),
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { site, marketStats, useCases, valuePillars };
