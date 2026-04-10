import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // Seed Users terlebih dahulu (karena Article butuh userId)
  const user1 = await prisma.user.upsert({
    where: { email: "budi@example.com" },
    update: {},
    create: {
      name: "Budi Santoso",
      email: "budi@example.com",
      password: "password123",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "sari@example.com" },
    update: {},
    create: {
      name: "Sari Dewi",
      email: "sari@example.com",
      password: "password456",
    },
  });

  console.log("✅ Users berhasil di-seed:", { user1, user2 });

  // Hapus artikel yang sudah ada agar tidak duplikat
  await prisma.article.deleteMany({});

  // Seed 10 Articles
  const articles = await prisma.article.createMany({
    data: [
      {
        title: "Pengenalan JavaScript: Bahasa Pemrograman Web Masa Kini",
        content:
          "JavaScript adalah bahasa pemrograman yang awalnya dirancang untuk membuat halaman web menjadi interaktif. Saat ini, JavaScript telah berkembang menjadi bahasa yang digunakan baik di sisi client (browser) maupun server (Node.js). Dengan ekosistem yang sangat kaya, JavaScript menjadi salah satu bahasa yang paling populer di dunia.",
        userId: user1.id,
      },
      {
        title: "Memahami Konsep RESTful API dengan Express.js",
        content:
          "RESTful API adalah arsitektur yang memungkinkan komunikasi antara client dan server menggunakan protokol HTTP. Express.js adalah framework Node.js yang ringan dan fleksibel untuk membangun RESTful API. Dengan Express, kita dapat mendefinisikan route, middleware, dan handler dengan mudah dan efisien.",
        userId: user1.id,
      },
      {
        title: "Prisma ORM: Cara Modern Berinteraksi dengan Database",
        content:
          "Prisma adalah Object-Relational Mapper (ORM) generasi baru untuk Node.js dan TypeScript. Prisma menyediakan type-safety, auto-completion yang canggih, dan migrasi database yang mudah dikelola. Dengan Prisma, developer dapat fokus pada logika bisnis tanpa terlalu khawatir tentang query SQL yang kompleks.",
        userId: user1.id,
      },
      {
        title: "TypeScript: Superset JavaScript yang Mengubah Cara Kita Coding",
        content:
          "TypeScript adalah bahasa pemrograman open-source yang dikembangkan oleh Microsoft. TypeScript menambahkan sistem tipe statis opsional ke JavaScript, yang membantu mendeteksi kesalahan lebih awal saat development. Dengan TypeScript, kode menjadi lebih mudah dipahami, di-maintain, dan di-refactor.",
        userId: user1.id,
      },
      {
        title: "Panduan Lengkap Menggunakan PostgreSQL untuk Pemula",
        content:
          "PostgreSQL adalah sistem manajemen database relasional (RDBMS) open-source yang sangat kuat dan feature-rich. PostgreSQL mendukung berbagai tipe data, indeks yang canggih, dan banyak fitur enterprise lainnya. Artikel ini akan membantu Anda memulai perjalanan menggunakan PostgreSQL dari instalasi hingga query dasar.",
        userId: user1.id,
      },
      {
        title: "Mengapa Docker Penting bagi Developer Modern",
        content:
          "Docker adalah platform containerization yang memungkinkan developer untuk mengemas aplikasi beserta semua dependensinya ke dalam sebuah container. Dengan Docker, masalah 'it works on my machine' menjadi masa lalu. Container Docker ringan, portabel, dan konsisten di berbagai environment, dari development hingga production.",
        userId: user2.id,
      },
      {
        title: "Pengenalan React: Library UI yang Mengubah Dunia Frontend",
        content:
          "React adalah library JavaScript open-source yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna. React menggunakan pendekatan component-based, yang membuat kode lebih modular dan dapat digunakan kembali. Virtual DOM yang dimiliki React memastikan rendering yang efisien dan performa aplikasi yang tinggi.",
        userId: user2.id,
      },
      {
        title: "Clean Code: Prinsip Menulis Kode yang Mudah Dipahami",
        content:
          "Clean Code adalah sebuah pendekatan dalam penulisan kode yang berfokus pada keterbacaan, kesederhanaan, dan kemudahan maintenance. Prinsip-prinsip seperti Single Responsibility, DRY (Don't Repeat Yourself), dan penamaan yang deskriptif adalah inti dari Clean Code. Menulis Clean Code adalah investasi jangka panjang yang sangat berharga.",
        userId: user2.id,
      },
      {
        title: "HTTP Method dan Status Code yang Wajib Diketahui Developer",
        content:
          "HTTP (HyperText Transfer Protocol) adalah protokol komunikasi yang digunakan di web. HTTP Method seperti GET, POST, PUT, PATCH, dan DELETE mendefinisikan aksi yang ingin dilakukan pada resource. Status Code seperti 200, 201, 400, 401, 403, 404, dan 500 mengkomunikasikan hasil dari sebuah request kepada client.",
        userId: user2.id,
      },
      {
        title: "Keamanan Aplikasi Web: Ancaman dan Cara Mengatasinya",
        content:
          "Keamanan adalah aspek krusial dalam pengembangan aplikasi web. Beberapa ancaman umum meliputi SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), dan broken authentication. Developer harus memahami ancaman-ancaman ini dan menerapkan best practices seperti validasi input, penggunaan HTTPS, dan manajemen sesi yang aman.",
        userId: user2.id,
      },
    ],
  });

  console.log(`✅ ${articles.count} artikel berhasil di-seed!`);
}

main()
  .catch((error) => {
    console.error("❌ Error saat seeding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
