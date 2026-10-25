import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    genres: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default(['Web']),
    role: z.string().optional(),
    tools: z.array(z.string()).default([]),
    releaseDate: z.coerce.date(),
    // Ảnh bìa trong public/, vd '/images/games/my-game.png'
    cover: z.string().optional(),
    // Màu nền thẻ khi chưa có ảnh bìa
    color: z.string().default('#FFC93C'),
    // Đường dẫn tới index.html của bản build WebGL trong public/play/
    play: z.string().optional(),
    // Tỉ lệ khung game, vd '16/9' hoặc '9/16' cho game dọc
    aspect: z.string().default('16/9'),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { games, blog };
