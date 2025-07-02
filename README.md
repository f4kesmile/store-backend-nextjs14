# Store Backend - Next.js 14

Backend untuk aplikasi toko online yang dibuat dengan Next.js 14. Proyek ini mencakup fungsionalitas penuh untuk otentikasi, manajemen produk, kategori, pesanan, dan pembayaran.

-----

## 🚀 Tentang Proyek

Proyek ini adalah backend untuk aplikasi e-commerce modern yang dibangun di atas **Next.js 14**. Aplikasi ini dirancang untuk menjadi platform yang komprehensif untuk mengelola toko online, mulai dari otentikasi pengguna hingga pemrosesan pembayaran.

-----

## ✨ Fitur

  * **Otentikasi Pengguna (CRUD) dengan Clerk**: Manajemen pengguna yang aman dan efisien.
  * **Manajemen Produk (CRUD)**: Fungsionalitas lengkap untuk membuat, membaca, memperbarui, dan menghapus produk.
  * **Pencarian & Penyaringan**: Sistem pencarian dan penyaringan yang kuat untuk membantu pengguna menemukan produk dengan mudah.
  * **Manajemen Kategori**: Kategorisasi produk yang dinamis untuk menjaga agar platform tetap teratur.
  * **Checkout & Pembayaran dengan Midtrans**: Transaksi pembayaran yang lancar dan aman menggunakan Midtrans.
  * **Manajemen Pesanan**: Sistem manajemen pesanan yang komprehensif untuk melacak semua transaksi.
  * **Penyimpanan Gambar dengan Cloudinary**: Mengelola unggahan gambar produk secara efisien.

-----

## 🛠️ Teknologi yang Digunakan

  * **Next.js 14**: Framework React untuk pengembangan sisi server.
  * **TypeScript**: Menambahkan tipe statis ke JavaScript untuk meningkatkan kualitas kode.
  * **Clerk**: Untuk otentikasi dan manajemen pengguna.
  * **PostgreSQL (Neon)**: Database SQL yang andal.
  * **Cloudinary**: Untuk penyimpanan dan pengelolaan gambar.
  * **Midtrans**: Sebagai gerbang pembayaran (payment gateway).

-----

## ⚙️ Instalasi

1.  **Clone repositori:**

    ```bash
    git clone https://github.com/f4kesmile/store-backend-nextjs14.git
    ```

2.  **Masuk ke direktori proyek:**

    ```bash
    cd store-backend-nextjs14
    ```

3.  **Install dependensi:**

    ```bash
    npm install
    # atau
    yarn install
    ```

4.  **Buat file `.env`** di direktori utama proyek dan salin variabel di bawah ini.

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLECK_PUBLISH_KEY
    CLERK_SECRET_KEY=YOUR_CLECK_SECRET_KEY
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    # Neon Database
    DATABASE_URL=YOUR_DATABASE_URL

    # Cloudinary
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=YOUR_PUBLIC_CLOUDINARY

    # Frontend URLs
    FRONTEND_URL=YOUR_FRONTEND_URL

    # Midtrans Payment Gateway
    MIDTRANS_SERVER_KEY=YOUR_MIDTRANS_SERVER_KEY
    MIDTRANS_CLIENT_KEY=YOUR_MIDTRANS_CLIENT_KEY
    ```

5.  **Jalankan server pengembangan:**

    ```bash
    npm run dev
    # atau
    yarn dev
    ```

    Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser Anda untuk melihat hasilnya.

-----

## 🤝 Kontribusi

Kontribusi sangat kami harapkan\! Jika Anda ingin berkontribusi, silakan *fork* repositori ini dan buat *pull request*.

1.  Fork repositori ini.
2.  Buat branch baru (`git checkout -b fitur/FiturBaru`).
3.  Commit perubahan Anda (`git commit -m 'Menambahkan FiturBaru'`).
4.  Push ke branch (`git push origin fitur/FiturBaru`).
5.  Buka *Pull Request*.
