import { defineConfig } from 'astro/config';

// Khi deploy GitHub Pages:
// - Repo tên "<username>.github.io"  -> site: 'https://<username>.github.io', base: '/'
// - Repo tên khác, vd "profile"       -> site: 'https://<username>.github.io', base: '/profile'
export default defineConfig({
  site: 'https://hanguyennang.github.io',
  base: '/',
  markdown: {
    shikiConfig: { theme: 'one-dark-pro' },
  },
});
