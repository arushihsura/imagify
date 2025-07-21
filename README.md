🚀 Imagify
Imagify is a MERN stack SaaS application that turns your text prompts into high-quality images using the ClipDrop API. Just type what you imagine — and Imagify brings it to life visually.

✨ Features

🧠 AI-based Text-to-Image Generation (ClipDrop API)

🔐 User Authentication (Login/Signup with JWT)

🌐 Full MERN Stack (MongoDB, Express.js, React.js, Node.js)

🎨 Clean & Modern UI (Tailwind CSS)

⚙️ Scalable SaaS-ready Architecture

📸 How It Works

Enter a prompt (e.g., "a futuristic city at sunset")

Click "Generate"

Receive an AI-generated image in seconds

🛠️ Tech Stack
Tech	Usage
Frontend	React.js, Tailwind CSS, Vite
Backend	Node.js, Express.js
Database	MongoDB
AI API	ClipDrop API
Deployment	Vercel (Frontend), Render (Backend)

⚙️ Installation Instructions

1️⃣ Clone the Repository

      git clone https://github.com/arushihsura/imagify.git
      cd imagify
2️⃣ Server Setup

      cd server
      npm install
      
Create a .env file inside server/:

      MONGODB_URI=<your-mongodb-uri>
      JWT_SECRET=<your-jwt-secret>
      CLIPDROP_API=<your-clipdrop-api-key>
Start the server:

      npm run server

      
3️⃣ Client Setup

      cd client
      npm install
      
Create a .env file inside client/:


      VITE_BACKEND_URL=<your-backend-url>
Start the client:


      npm run dev
