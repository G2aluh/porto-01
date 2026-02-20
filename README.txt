================================================================================
                    FREELANCER PORTFOLIO WEBSITE
                    Setup & Running Instructions
                    Panduan Setup & Menjalankan Website
================================================================================

PREREQUISITES / PRASYARAT
-------------------------
Before running this project, make sure you have Node.js installed on your 
computer. You can download it from: https://nodejs.org/

Sebelum menjalankan proyek ini, pastikan Node.js sudah terinstall di 
komputer Anda. Anda dapat mengunduhnya dari: https://nodejs.org/

To check if Node.js is installed, open Command Prompt and run:
Untuk mengecek apakah Node.js sudah terinstall, buka Command Prompt dan jalankan:

    node --version


================================================================================
STEP 1: EXTRACT THE ZIP FILE / EKSTRAK FILE ZIP
================================================================================

1. Extract/unzip the portfolio folder to your desired location
   Ekstrak/unzip folder portfolio ke lokasi yang Anda inginkan

2. Open Command Prompt (Windows) or Terminal (Mac/Linux)
   Buka Command Prompt (Windows) atau Terminal (Mac/Linux)

3. Navigate to the extracted folder using:
   Arahkan ke folder yang sudah diekstrak menggunakan:

   cd path/to/freelancer-portfolio
   cd jalur/ke/freelancer-portfolio


================================================================================
STEP 2: INSTALL DEPENDENCIES / INSTALL DEPENDENSI
================================================================================

Run the following command to install all required packages:
Jalankan perintah berikut untuk menginstall semua paket yang diperlukan:

    npm install

This will download React, Tailwind CSS, and other dependencies.
Wait for the installation to complete (may take 1-2 minutes).

Ini akan mengunduh React, Tailwind CSS, dan dependensi lainnya.
Tunggu hingga instalasi selesai (mungkin memakan waktu 1-2 menit).


================================================================================
STEP 3: RUN THE DEVELOPMENT SERVER / JALANKAN SERVER DEVELOPMENT
================================================================================

After installation is complete, start the development server:
Setelah instalasi selesai, jalankan server development:

    npm run dev

The terminal will show a local URL, typically:
Terminal akan menampilkan URL lokal, biasanya:

    http://localhost:5173/


================================================================================
STEP 4: OPEN IN BROWSER / BUKA DI BROWSER
================================================================================

1. Open your web browser (Chrome, Firefox, Edge, etc.)
   Buka browser web Anda (Chrome, Firefox, Edge, dll.)

2. Go to the URL shown in the terminal (e.g., http://localhost:5173)
   Buka URL yang ditampilkan di terminal (misalnya http://localhost:5173)

3. Your portfolio website should now be running!
   Website portfolio Anda sekarang sudah berjalan!


================================================================================
STOPPING THE SERVER / MENGHENTIKAN SERVER
================================================================================

To stop the development server:
Untuk menghentikan server development:

1. Go back to the Command Prompt/Terminal
   Kembali ke Command Prompt/Terminal

2. Press Ctrl + C (Windows/Linux) or Cmd + C (Mac)
   Tekan Ctrl + C (Windows/Linux) atau Cmd + C (Mac)


================================================================================
BUILDING FOR PRODUCTION / BUILD UNTUK PRODUCTION
================================================================================

When you're ready to deploy the website:
Ketika Anda siap untuk deploy website:

1. Run / Jalankan: npm run build

2. This creates an optimized version in the 'dist' folder
   Ini akan membuat versi yang sudah dioptimasi di folder 'dist'

3. Upload the 'dist' folder contents to your hosting service
   Upload isi folder 'dist' ke layanan hosting Anda


================================================================================
CUSTOMIZATION / KUSTOMISASI
================================================================================

To edit the content:
Untuk mengedit konten:

- Open the 'src/components' folder
  Buka folder 'src/components'

- Edit the JSX files to change text, images, and sections:
  Edit file JSX untuk mengubah teks, gambar, dan bagian:

  * Home.jsx          - Main landing section / Bagian utama landing
  * About.jsx         - Bio and experience / Bio dan pengalaman
  * Services.jsx      - Services offered / Layanan yang ditawarkan
  * Projects.jsx      - Portfolio projects / Proyek portfolio
  * Testimonials.jsx  - Client reviews / Ulasan klien
  * Contact.jsx       - Contact form / Formulir kontak

To change images:
Untuk mengubah gambar:

- Replace the image URLs in the component files with your own
  Ganti URL gambar di file komponen dengan gambar Anda sendiri


================================================================================
TROUBLESHOOTING / PENYELESAIAN MASALAH
================================================================================

Problem / Masalah: "npm is not recognized" / "npm tidak dikenali"
Solution / Solusi: 
  Install Node.js from / Install Node.js dari https://nodejs.org/

---

Problem / Masalah: Port 5173 is already in use / Port 5173 sudah digunakan
Solution / Solusi: 
  Run / Jalankan 'npm run dev -- --port 3000' for a different port
  untuk port yang berbeda

---

Problem / Masalah: Styles not loading / Gaya tidak dimuat
Solution / Solusi: 
  Make sure you ran 'npm install' first
  Pastikan Anda sudah menjalankan 'npm install' terlebih dahulu


================================================================================
TECHNOLOGIES USED / TEKNOLOGI YANG DIGUNAKAN
================================================================================

- React.js (Frontend Framework)
- Tailwind CSS 4 (Styling)
- Vite (Build Tool)


================================================================================
SUPPORT / DUKUNGAN
================================================================================

If you encounter any issues, check the console in your browser's 
Developer Tools (F12) for error messages.

Jika Anda mengalami masalah, periksa console di Developer Tools (F12) 
browser Anda untuk melihat pesan error.


================================================================================
                    Created with React & Tailwind CSS 4
                    Dibuat dengan React & Tailwind CSS 4
================================================================================
