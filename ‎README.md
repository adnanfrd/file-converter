<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>⚡ File Converter App</title>
</head>
<body>
  <header>
    <h1>⚡ File Converter App</h1>
    <p>A blazing fast full-stack file converter with React + Node.js</p>
  </header>

  <div class="container">
    <section>
      <h2>✨ Features</h2>
      <ul>
        <li>🔄 Convert images between JPEG, PNG, WEBP formats</li>
        <li>🎬 Convert videos between MP4 and WEBM</li>
        <li>📄 Convert images to PDF documents</li>
        <li>🚀 Drag & drop or select files to upload</li>
        <li>🔥 Fast frontend powered by Vite</li>
        <li>🧠 Smart file type detection using <strong>file-type</strong></li>
        <li>⚙️ Express backend with <strong>sharp</strong>, <strong>pdfkit</strong>, and <strong>ffmpeg</strong></li>
        <li>📦 Modular codebase for scalability</li>
      </ul>
    </section>

    <section>
      <h2>🖥️ Tech Stack</h2>
      <p><strong>Frontend (React + Vite):</strong> React.js, Tailwind CSS, Axios, Vite</p>
      <p><strong>Backend (Node.js + Express):</strong> Express.js, multer, file-type, sharp, pdfkit, fluent-ffmpeg, cors, fs</p>
    </section>

    <section>
      <h2>🚀 Getting Started</h2>
      <div class="highlight">
        <p><strong>1️⃣ Backend Setup:</strong></p>
        <p>Go to the backend folder and run:</p>
        <p><strong>npm install</strong> then <strong>npm start</strong></p>
        <p>Server runs at: <strong>http://localhost:4000</strong></p>

        <br/>

        <p><strong>2️⃣ Frontend Setup:</strong></p>
        <p>Go to the frontend folder and run:</p>
        <p><strong>npm install</strong> then <strong>npm run dev</strong></p>
        <p>React app runs at: <strong>http://localhost:5173</strong></p>
      </div>
    </section>

    <section>
      <h2>🛠 Usage</h2>
      <ul>
        <li>Upload or drag-and-drop a file</li>
        <li>Select desired conversion format</li>
        <li>Click "Convert"</li>
        <li>Download the processed file 🎉</li>
      </ul>
    </section>

    <section>
      <h2>📁 Folder Structure</h2>
      <div class="folder-structure">
file-converter/
├── backend/
│   ├── app.js
│   ├── converters/
│   │   ├── imageConverter.js
│   │   ├── videoConverter.js
│   │   └── pdfConverter.js
│   ├── output/
│   └── uploads/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
└── README.md
      </div>
    </section>

    <section>
      <h2>💡 Future Improvements</h2>
      <ul>
        <li>✅ Add support for DOCX, XLSX formats</li>
        <li>🌐 Add authentication & file history</li>
        <li>🧾 Batch file conversion support</li>
        <li>☁️ Cloud storage with S3 or Firebase</li>
      </ul>
    </section>

    <section>
      <h2>🤝 Contributing</h2>
      <p>Contributions are welcome! Fork the repo and submit a pull request 🚀</p>
    </section>

    <section>
      <h2>📄 License</h2>
      <p>This project is licensed under the MIT License.</p>
    </section>

    <section>
      <h2>📬 Contact</h2>
      <p>Made with ❤️ by <strong>Muhammad Adnan Fareed</strong></p>
      <p>Email: <a href="mailto:adnanfrd.work@gmail.com">adnanfrd.work@gmail.com</a></p>
    </section>
  </div>

  <footer class="footer">
    &copy; 2025 File Converter App · All rights reserved.
  </footer>
</body>
</html>
