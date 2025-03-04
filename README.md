# 🎓 EasyGenerator Assessment Frontend

This is the **frontend** for the EasyGenerator Assessment, built using **Next.js 15**, **React 19**, and **Material-UI (MUI)**.

---

## 🚀 Tech Stack

- **Next.js 15**
- **React 19**
- **TypeScript 5**
- **Material-UI (MUI v6)**
- **Zod** (for schema validation)
- **React Hook Form** (for form handling)
- **Axios** (for API requests)
- **React Toastify** (for notifications)
- **ESLint** (with Next.js config)
- **Turbopack** (for fast local development)

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/arsanyjoseph/easygenerator-assessment-frontend.git
cd easygenerator-assessment-frontend
```

### 2️⃣ Install dependencies

```bash
yarn install
# or
npm install
```

### 3️⃣ Run the development server

```bash
yarn dev
# or
npm run dev
```

Open http://localhost:3000 in your browser to see the app.

## 🏗️ Build for production

```bash
yarn build
yarn start
```

## ✅ Linting

```bash
yarn lint
```

## 🔐 Environment Variables

Create a `.env` file in the root with your environment variables:

```env
API_BASE_URL=https://api.example.com
```

Tip: Make sure `.env.local` is in your `.gitignore`.

## 📂 Folder Structure (example)

```
/app
  /api
  /components
  /hooks
  /schemas
  /styles
/public
```

## 📦 Core Packages

| Package | Purpose |
| ------- | ------- |
| @mui/material | UI components |
| react-hook-form | Form handling |
| zod | Schema validation |
| axios | HTTP requests |
| react-toastify | Toast notifications |

## 📄 License

This project is licensed under the MIT License.