import { getCollection } from 'astro:content';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ghép đường dẫn nội bộ với base path (cần khi deploy vào repo con trên GitHub Pages). */
export const url = (path: string) => (/^https?:\/\//.test(path) ? path : base + path);

export const formatDate = (d: Date) =>
  d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

export async function getGames() {
  const games = await getCollection('games', ({ data }) => !data.draft);
  return games.sort((a, b) => b.data.releaseDate.valueOf() - a.data.releaseDate.valueOf());
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Thời gian đọc ước tính (phút). */
export const readingTime = (text = '') => Math.max(1, Math.round(text.split(/\s+/).length / 200));
