# Website cá nhân — Nguyễn Năng Hà

Website portfolio dùng [Astro](https://astro.build), host miễn phí trên GitHub Pages.

## Chạy thử trên máy

```bash
npm install
npm run dev      # mở http://localhost:4321
```

## Sửa thông tin cá nhân

Toàn bộ thông tin (bio, kỹ năng, kinh nghiệm, email, mạng xã hội, CV) nằm trong **`src/data/profile.ts`**.

- Avatar: thay file `src/assets/avatar.png` (giữ nguyên tên, ảnh vuông). Ảnh sẽ được tự động nén sang WebP khi build.
- CV: bỏ file vào `public/cv.pdf`, rồi đặt `cv: '/cv.pdf'`

## Thêm game mới

1. **Build game ra WebGL** (Unity: *File → Build Settings → WebGL*).
   - Trong *Player Settings → Publishing Settings*, đặt **Compression Format = Disabled** (hoặc Gzip và bật **Decompression Fallback**).
     GitHub Pages không gửi header nén nên bản Brotli mặc định sẽ không chạy.
2. Copy toàn bộ thư mục build vào `public/play/<ten-game>/` (phải có `index.html` bên trong).
3. Bỏ ảnh bìa (tùy chọn) vào `public/images/games/<ten-game>.png`.
4. Tạo file `src/content/games/<ten-game>.md`:

```md
---
title: Tên Game
description: Mô tả ngắn một câu.
genres: [Platformer, Puzzle]
platforms: [Web, Android]
role: Solo Developer
tools: [Unity, C#]
releaseDate: 2026-12-01
cover: /images/games/ten-game.png
play: /play/ten-game/index.html
aspect: 16/9            # game dọc dùng 9/16
featured: true          # hiện ở trang chủ
links:
  - { label: Google Play, url: https://play.google.com/... }
---

Nội dung giới thiệu game, cách chơi, devlog... (viết bằng Markdown)
```

> Game không có bản web? Bỏ dòng `play:` và thêm link vào `links:`.

## Viết bài blog mới

Tạo file `src/content/blog/<duong-dan-bai-viet>.md`:

```md
---
title: Tiêu đề bài viết
description: Tóm tắt ngắn.
pubDate: 2026-11-01
tags: [Unity, Tối ưu]
cover: /images/blog/anh-bia.png   # tùy chọn
draft: false                      # true = ẩn bài
---

Nội dung bài viết...
```

Code trong bài (```csharp, ```cpp, ```js...) được tô màu tự động. Ảnh bỏ vào `public/images/` rồi chèn `![mô tả](/images/ten-anh.png)`.

## Deploy lên GitHub Pages (miễn phí)

Website: **https://hanguyennang.github.io** — repo `HaNguyenNang/HaNguyenNang.github.io`.

- Nhánh `main`: mã nguồn.
- Nhánh `gh-pages`: bản đã build (GitHub Pages phục vụ từ nhánh này — *Settings → Pages → Deploy from a branch → `gh-pages` / `(root)`*).

Mỗi lần cập nhật nội dung:

```bash
git add . && git commit -m "Cập nhật nội dung"
git push            # lưu mã nguồn
npm run deploy      # build và đẩy bản mới lên website (1–2 phút sau là thấy)
```

> Nếu đặt tên repo khác (vd `profile`), sửa thêm `base: '/profile'` trong `astro.config.mjs`.

## Xóa nội dung mẫu

- `src/content/games/demo-hung-sao.md` và `public/play/demo-hung-sao/` — game demo
- `src/content/blog/chao-mung.md` — bài viết mẫu
