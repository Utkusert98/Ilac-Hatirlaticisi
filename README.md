# Akıllı İlaç Hatırlatıcı 💊

Bu proje, hastaların ilaç takip planlarını oluşturmasını, yönetmesini ve arşivlemesini sağlayan tam kapsamlı (full-stack) bir web uygulamasıdır.

Bu portfolyo projesi, modern bir teknoloji yığını (React, Nest.JS, TypeScript, TypeORM) kullanarak sıfırdan tam bir **CRUD (Create, Read, Update, Delete)** uygulamasının nasıl inşa edildiğini sergilemek amacıyla geliştirilmiştir.




---

## 🚀 Proje Demosu

Bu projenin canlı bir demosu bulunmamaktadır, çünkü `SQLite` veritabanı `Vercel` gibi "sunucusuz" (serverless) platformlarda kalıcı olarak çalışmamaktadır.

Projenin tüm özelliklerinin çalıştığı bir demo videosunu (ekran kaydı) aşağıya ekleyeceğim:

![Akıllı İlaç Hatırlatıcı - Ana Ekran](./img/img-1.png)
![Akıllı İlaç Hatırlatıcı - Form Detayları](./img/img-2.png)

---

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

Bu proje, iki ana bölümden oluşmaktadır:

### Frontend (Müşteri Ofisi - React)
* **React (v18+):** Modern kullanıcı arayüzleri için temel kütüphane.
* **React Hooks (`useState`, `useEffect`):** Bileşenlerin state (durum) ve yaşam döngüsü yönetimi.
* **CSS3 (Glassmorphism):** Modern, cam efektli ve duyarlı (responsive) tasarım.
* **Fetch API (async/await):** Backend ile asenkron iletişim kurmak için.

### Backend (Arşiv Odası - Nest.JS)
* **Nest.JS (TypeScript):** Güçlü, ölçeklenebilir ve kurumsal Node.js framework'ü.
* **TypeScript:** Koda tip güvenliği (type-safety) ekleyerek hataları en aza indiren dil.
* **TypeORM:** Veritabanı ile "Arşiv Uzmanı" (`AppService`) arasında köprü kuran modern ORM.
* **SQLite:** Geliştirme ortamı için hızlı, dosya tabanlı ve kalıcı veritabanı.

---

## ✨ Temel Özellikler

* **Tam CRUD Fonksiyonelliği:** İlaçlar için Ekleme (Create), Okuma (Read), Güncelleme (Update) ve Silme (Delete) işlemleri.
* **Kapsamlı İlaç Formu:** İlaç adı, dozaj, ilaç formu (tablet, şurup vb.), kullanım şekli (aç/tok), alınacak günler (Pzt, Sa...) ve ek notlar.
* **Durum Yönetimi (Update):** İlaçları "Arşivleme" (`aktif: false`) ve "Aktif Etme" (`aktif: true`) özellikleri.
* **Kalıcı Veritabanı:** `Nest.JS` sunucusu yeniden başlasa bile, `TypeORM` ve `SQLite` sayesinde veriler kaybolmaz.
* **Full-Stack Entegrasyonu:** React (Frontend) ile Nest.JS (Backend) arasında `CORS` ayarları yapılmış, tam entegre bir API iletişimi.

---

## 🏁 Projeyi Yerel (Local) Olarak Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/Utkusert98/AKILLI-ILAC-HATIRLATICI.git](https://github.com/Utkusert98/AKILLI-ILAC-HATIRLATICI.git)
    cd AKILLI-ILAC-HATIRLATICI
    ```

2.  **Backend'i Başlatın (Terminal 1):**
    ```bash
    cd backend
    npm install
    
    # Not: Veritabanı (ilaclar.sqlite.db) dosyası, 
    # 'app.module.ts' içindeki 'synchronize: true' ayarı sayesinde 
    # ilk 'start:dev' komutuyla otomatik olarak oluşacaktır.
    
    npm run start:dev
    # Backend artık http://localhost:8000 adresinde çalışıyor.
    ```

3.  **Frontend'i Başlatın (Terminal 2):**
    ```bash
    cd frontend
    npm install
    npm start
    # Frontend artık http://localhost:3000 adresinde açılacak.
    ```
