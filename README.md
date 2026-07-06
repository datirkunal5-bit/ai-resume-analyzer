# 🧠 AI Resume Analyzer

An AI-powered full-stack web application that analyzes resumes against a target job role and provides instant, actionable feedback — including a Resume Score, ATS Score, Strengths, Missing Skills, Suggestions, and a Summary.

Built with **React**, **Node.js/Express**, and **Google Gemini AI**.

🔗 **Live Demo:** [ai-resume-analyzer-peach-eight.vercel.app](https://ai-resume-analyzer-peach-eight.vercel.app/)
🔗 **Backend API Health Check:** [ai-resume-analyzer-4m47.onrender.com/api/health](https://ai-resume-analyzer-4m47.onrender.com/api/health)

> ⚠️ Note: The backend is hosted on Render's free tier, which spins down after ~15 minutes of inactivity. The first request after a period of inactivity may take 30–60 seconds while the server wakes up — this is expected behavior, not a bug.

---

## ✨ Features

- 📄 **PDF Resume Upload** — drag-and-drop or browse, with file type and size validation
- 🎯 **Job Role Targeting** — tailor the analysis to a specific role
- 🤖 **AI-Powered Analysis** — powered by Google Gemini, returns structured, actionable feedback
- 📊 **Resume Score & ATS Score** — quantified feedback on overall quality and ATS compatibility
- ✅ **Strengths & Missing Skills** — clear breakdown of what's working and what's missing
- 💡 **Actionable Suggestions** — specific, practical improvements
- ⚡ **Modern, Responsive UI** — built with Tailwind CSS, smooth transitions, and clean design
- 🔒 **Secure by Design** — environment-based secrets, no data persisted on the server

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- Multer (file upload handling)
- pdf-parse (PDF text extraction)
- CORS
- dotenv

**AI**
- Google Gemini API (`@google/genai`)

**Deployment**
- Frontend → Vercel
- Backend → Render

---

## 📁 Project Structure

```
ai-resume-analyzer/
├── client/                    # React (Vite) frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/              # Page-level components
│   │   ├── services/           # Axios API layer
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
│
├── server/                    # Node.js + Express backend
│   ├── src/
│   │   ├── config/             # Environment variable configuration
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/              # Route definitions
│   │   ├── services/            # Business logic (PDF parsing, Gemini AI)
│   │   ├── middlewares/         # Multer upload configuration
│   │   └── app.js               # Express app setup
│   ├── server.js                # Entry point
│   └── ...
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A [Google Gemini API key](https://aistudio.google.com/app/apikey) (free tier available)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```env
PORT=5000
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend:
```bash
npm run dev
```
The server will run at `http://localhost:5000`.

### 3. Set up the frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `client/`:
```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```
The app will run at `http://localhost:5173`.

---

## 🔌 API Reference

### Health Check
```
GET /api/health
```
Returns server status — used to confirm the API is running.

### Analyze Resume
```
POST /api/resume/upload
```

**Request:** `multipart/form-data`

| Field     | Type   | Required | Description                          |
|-----------|--------|----------|---------------------------------------|
| `resume`  | File   | Yes      | PDF resume file (max 5MB)             |
| `jobRole` | String | Yes      | Target job role, e.g. "Frontend Developer" |

**Response:**
```json
{
  "status": "success",
  "message": "Resume analyzed successfully",
  "jobRole": "Frontend Developer",
  "analysis": {
    "resumeScore": 78,
    "atsScore": 65,
    "strengths": ["...", "..."],
    "missingSkills": ["...", "..."],
    "suggestions": ["...", "..."],
    "summary": "..."
  }
}
```

---

## 🧭 How It Works

1. User uploads a PDF resume and enters a target job role
2. The file is sent to the backend via `multipart/form-data`
3. **Multer** validates and captures the file in memory
4. **pdf-parse** extracts raw text from the PDF
5. The extracted text and job role are sent to **Google Gemini** with a structured prompt
6. Gemini returns a structured JSON analysis
7. The backend forwards this analysis to the frontend, which renders it in a clean, readable UI

---

## 🗺️ Roadmap

- [x] Landing page UI
- [x] Backend: file upload, PDF parsing, Gemini integration
- [x] Frontend ↔ backend integration
- [x] Centralized error handling middleware
- [x] Deployment (Vercel + Render)
- [ ] Downloadable PDF report of analysis results
- [ ] Resume history / comparison across multiple analyses

---

## ⚠️ Notes

- Resumes are processed in memory and are **not stored** on the server or persisted anywhere.
- The free tier of the Gemini API has daily/per-minute rate limits — see [Google AI Studio](https://aistudio.google.com/) for current limits.
- This project is for educational/portfolio purposes; review Google's API terms before using it in a production environment handling sensitive user data.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Author

Built by **Kunal Datir** as a full-stack AI portfolio project.