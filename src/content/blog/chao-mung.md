---
# BÀI VIẾT MẪU — xóa hoặc sửa file này khi bạn bắt đầu viết blog.
title: Chuẩn hóa input di chuyển trong Unity
description: Bài viết mẫu — một lỗi nhỏ nhưng phổ biến khiến nhân vật di chuyển chéo nhanh hơn đi thẳng, và cách khắc phục.
pubDate: 2026-10-25
tags: [Unity, C#, Gameplay]
---

Đây là bài viết mẫu, giúp bạn xem trước cách blog hiển thị đoạn code, trích dẫn và bảng biểu.

## Vấn đề

Khi đọc input theo hai trục và đưa thẳng vào vector di chuyển, độ dài vector khi đi chéo là √2 ≈ 1.41. Kết quả là nhân vật **di chuyển chéo nhanh hơn khoảng 41%** so với đi thẳng.

## Cách khắc phục

```csharp
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float speed = 5f;

    private void Update()
    {
        var input = new Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
        transform.Translate(Vector2.ClampMagnitude(input, 1f) * speed * Time.deltaTime);
    }
}
```

> Dùng `ClampMagnitude` thay cho `normalized` để vẫn giữ được input analog (joystick đẩy nhẹ thì đi chậm).

## So sánh

| Cách làm         | Đi chéo    | Hỗ trợ analog |
| ---------------- | ---------- | ------------- |
| Không xử lý      | Nhanh hơn  | Có            |
| `normalized`     | Đúng       | Không         |
| `ClampMagnitude` | Đúng       | Có            |
