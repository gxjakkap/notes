---
lastUpdated: true
---

# ระบบแจ้งเตือนพัสดุผ่าน LINE aka Parcel notification via LINE, Parcetrace

## มันคืออะไร?

"ระบบแจ้งเตือนพัสดุผ่าน LINE" คือระบบแจ้งเตือนพัสดุที่พัฒนาขึ้นเพื่อตอบโจทย์กลุ่มนิติบุคคลคอนโดมิเนียม, หอพัก หรืออะพาร์ตเมนท์ที่ต้องการแจ้งเตือนลูกบ้านเมื่อมีพัสดุมาถึง ประกอบไปด้วย [Frontend](https://github.com/gxjakkap/parcetrace/tree/main/frontend) ที่ host อยู่บน Vercel Cloud, [Backend](https://github.com/gxjakkap/parcetrace/tree/main/api) ที่พัฒนาขึ้นด้วย Express.js และใช้ฐานข้อมูล Firestore ซึ่งเป็นตัวที่เชื่อกับ LINE Bot, [แอปพลิเคชันมือถือ](https://github.com/gxjakkap/parcetrace/tree/main/native)สำหรับนิติบุคคลที่พัฒนาด้วย React Native/Expo และ[ระบบ OCR](https://github.com/gxjakkap/parcetrace/tree/main/ocr/ocrserver) ที่พัฒนาขึ้นด้วย Python, Flask, EasyOCR และ Docker

## โปสเตอร์โครงงาน

<details>
    <summary>[Spoiler] กดเพื่อดูโปสเตอร์แบบภาษาอังกฤษ</summary>
    <img src="../assets/parcetrace/parcetrace-poster-en.png" alt="Parcetrace Poster English version">
</details>

![Parcetrace Poster](../assets/parcetrace/parcetrace-poster-th.png)

## รวมลิงก์ที่เกี่ยวกับโครงงาน

[รูปเล่มโครงงานสำหรับรายวิชา STEM Project](https://dyn.guntxjakka.me/parcetracepdf)

[ไฟล์นำเสนอ](https://dyn.guntxjakka.me/parcetracepresentation)

[รูปเล่มรายงานฉบับการแข่งขัน NSC](https://dyn.guntxjakka.me/parcetracenscreport)

[Source code (GitHub)](https://github.com/gxjakkap/parcetrace)