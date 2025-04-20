<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>⚡ File Converter App</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #4f46e5, #ec4899);
      color: #fff;
    }

    header {
      padding: 3rem 1rem 1rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.2);
    }

    header h1 {
      font-size: 2.8rem;
      margin-bottom: 0.5rem;
    }

    .container {
      max-width: 1000px;
      margin: auto;
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 1rem;
    }

    h2 {
      margin-top: 2rem;
      color: #ffd;
      border-bottom: 2px solid #ec4899;
      padding-bottom: 0.25rem;
    }

    pre, code {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 0.5rem;
      border-radius: 0.5rem;
      display: block;
      overflow-x: auto;
    }

    ul {
      padding-left: 1.5rem;
    }

    li {
      margin: 0.3rem 0;
    }

    .highlight {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.75rem;
      border-left: 4px solid #f472b6;
      margin: 1rem 0;
    }

    .footer {
      text-align: center;
      padding: 2rem 1rem;
      font-size: 0.9rem;
      background-color: rgba(0, 0, 0, 0.2);
    }

    a {
      color: #bbf7d0;
      text-decoration: underline;
    }

    .copy-btn {
      background: #fff;
      color: #111;
      border: none;
      padding: 0.4rem 0.75rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>⚡ File Converter App</h1>
    <p>A blazing fast full-stack file converter with React + Node.js</p>
  </header>

  <div class="container">
    <h2>✨ Features</h2>
    <ul>
      <li>🔄 Convert images between JPEG, PNG, WEBP formats</li>
      <li>🎬 Convert videos between MP4 and WEBM</li>
      <li>📄 Convert images to PDF documents</li>
      <li>🚀 Drag & drop or select files to upload</li>
      <li>🔥 Blazing fast frontend powered by Vite</li>
      <li>🧠 Smart file type detection using <code>file-type</code></li>
      <li>⚙️ Backend with <code>sharp</code>, <code>pdfkit</code>, <code>ffmpeg</code></li>
      <li>📦 Modular and clean codebase</li>
    </ul>

    <h2>🖥️ Tech Stack</h2>
    <h3>Frontend (React + Vite)</h3>
    <ul>
      <li>React.js with hooks</li>
      <li>Tailwind CSS (optional)</li>
      <li>axios for API communication</li>
      <li>Vite for fast dev build</li>
    </ul>
    <h3>Backend (Node.js + Express)</h3>
    <ul>
      <li>Express.js</li>
      <li>multer for file uploads</li>
      <li>file-type for MIME detection</li>
      <li>sharp for image processing</li>
      <li>pdfkit for PDF creation</li>
      <li>fluent-ffmpeg for video conversion</li>
      <li>cors and fs for server handling</li>
    </ul>

    <h2>🚀 Getting Started</h2>
    <p><strong>Prerequisites:</strong> Node.js v18+, npm/yarn, and <code>ffmpeg</code> installed globally</p>

    <pre><code>git clone https://github.com/adnanfrd/file-converter.git
cd file-converter
    </code></pre>

    <div class="highlight">
      <strong>1️⃣ Backend Setup</strong>
      <pre><code>cd backend
npm install
npm start</code></pre>
      <p>The server runs at <code>http://localhost:4000</code></p>

      <strong>2️⃣ Frontend Setup</strong>
      <pre><code>cd frontend
npm install
npm run dev</code></pre>
      <p>The React app runs at <code>http://localhost:5173</code></p>
    </div>

    <h2>🛠 Usage</h2>
    <ul>
      <li>Upload or drag and drop a file</li>
      <li>Select the desired format</li>
      <li>Click <strong>Convert</strong></li>
      <li>Download the converted file 🎉</li>
    </ul>

    <h2>📁 Folder Structure</h2>
    <pre><code>file-converter/
├── backend/
│   ├── app.js
│   ├── converters/
│   │   ├── imageConverter.js
│   │   ├── videoConverter.js
│   │   └── pdfConverter.js
│   └── output/
│   └── uploads/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
└── README.md</code></pre>

    <h2>💡 Future Improvements</h2>
    <ul>
      <li>✅ Add DOCX, XLSX support</li>
      <li>🌐 Add user authentication & file history</li>
      <li>🧾 Batch conversion support</li>
      <li>☁️ Cloud storage integration (S3, Firebase)</li>
    </ul>

    <h2>🤝 Contributing</h2>
    <p>Feel free to fork and submit a PR! All contributions are appreciated 🚀</p>

    <h2>📄 License</h2>
    <p>This project is licensed under the MIT License. See the LICENSE file for more details.</p>

    <h2>📬 Contact</h2>
    <p>Made with ❤️ by <strong>Muhammad Adnan Fareed</strong></p>
    <p>Email: <a href="mailto:adnanfrd.work@gmail.com">adnanfrd.work@gmail.com</a></p>
  </div>

  <footer class="footer">
    &copy; 2025 File Converter App · All Rights Reserved
  </footer>
</body>
</html>
