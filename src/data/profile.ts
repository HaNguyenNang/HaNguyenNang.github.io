// =====================================================================
//  THÔNG TIN CÁ NHÂN — sửa file này để cập nhật toàn bộ website.
//  Các dòng có "TODO" là nội dung mẫu, bạn thay bằng thông tin thật.
//  Ảnh đại diện: thay file src/assets/avatar.png (giữ nguyên tên).
// =====================================================================

export const profile = {
  name: 'Nguyễn Năng Hà',
  initials: 'NH',
  title: 'Game Developer',
  focus: 'Unity · C#',
  yearsOfExperience: 4,

  tagline:
    'Game Developer với gần 4 năm kinh nghiệm cùng Unity — tập trung vào gameplay chắc tay, hệ thống rõ ràng và sản phẩm chạy mượt trên nhiều nền tảng.',

  // Đoạn giới thiệu ở trang "Giới thiệu" — mỗi phần tử là một đoạn văn. TODO
  bio: [
    'Tôi là Nguyễn Năng Hà, Game Developer với gần 4 năm kinh nghiệm phát triển game trên Unity.',
    'Công việc của tôi xoay quanh việc xây dựng gameplay, thiết kế hệ thống và tối ưu hiệu năng — biến ý tưởng thiết kế thành trải nghiệm hoàn chỉnh, ổn định và dễ mở rộng.',
    'Trang web này là nơi tôi giới thiệu các sản phẩm đã thực hiện (phần lớn có thể chơi trực tiếp trên trình duyệt) và chia sẻ kiến thức, kinh nghiệm tích lũy trong quá trình làm nghề.',
  ],

  // File CV: bỏ vào public/, vd '/cv.pdf'. Để trống -> ẩn nút tải CV.
  cv: '',

  // TODO: điền email liên hệ công khai
  email: '',

  // Kỹ năng — TODO: chỉnh lại cho đúng với thực tế
  skills: [
    { group: 'Engine & Nền tảng', items: ['Unity', 'WebGL', 'Android', 'iOS', 'PC'] },
    { group: 'Lập trình', items: ['C#', 'OOP', 'Design Patterns', 'Async / Coroutine'] },
    { group: 'Gameplay & Hệ thống', items: ['Gameplay Programming', 'UI (uGUI)', 'Animation', 'Physics'] },
    { group: 'Quy trình', items: ['Git', 'Profiling & Tối ưu', 'Build & Release'] },
  ],

  // Kinh nghiệm — TODO
  experience: [
    {
      time: '2022 — Nay',
      role: 'Game Developer',
      place: 'TODO: Tên công ty',
      desc: 'Phát triển gameplay, hệ thống UI, tối ưu hiệu năng và phát hành sản phẩm trên nhiều nền tảng.',
    },
  ],

  // Mạng xã hội — chỉ những mục có url mới hiển thị. TODO
  socials: [
    { label: 'GitHub', url: 'https://github.com/HaNguyenNang' },
    { label: 'LinkedIn', url: '' },
    { label: 'itch.io', url: '' },
    { label: 'YouTube', url: '' },
    { label: 'Facebook', url: '' },
  ],
};

export const activeSocials = profile.socials.filter((s) => s.url);
