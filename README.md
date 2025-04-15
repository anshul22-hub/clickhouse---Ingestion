Here's a polished and professional `README.md` for your project:

---

```markdown
# 📊 ClickHouse & Flat File Bidirectional Data Ingestion Tool

### 🚀 Developed by: Piyush Kumar – Software Engineer Intern

---

## 📌 Project Overview

This web-based application facilitates **bidirectional data ingestion** between a **ClickHouse database** and **Flat File (CSV)** platforms. It allows users to connect securely via JWT, select specific columns for transfer, preview data, and track ingestion status and count.

---

## 🌐 Features

- 🔄 **Bidirectional Ingestion**:
  - ClickHouse → Flat File (CSV Export)
  - Flat File → ClickHouse (CSV Import)
- 🔐 JWT-based Authentication for ClickHouse
- 📁 Schema & Column Selection UI
- 👁️ Data Preview (first 100 records)
- 📈 Record Count Reporting
- ❌ Error Handling with Descriptive Messages
- 🎨 Clean and Responsive UI

---

## 🧰 Tech Stack

| Layer      | Technology               |
|------------|---------------------------|
| Frontend   | React, TypeScript, EJS    |
| Backend    | Node.js, Express, TypeScript |
| Database   | ClickHouse                |
| Others     | Axios, CSV Parser, JWT, EJS Templates |

---

## 🗂️ Folder Structure

```
project-root/
├── server/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       ├── routes.ts
│       ├── controllers/
│       │   └── ingestionController.ts
│       └── services/
│           ├── clickHouseService.ts
│           └── fileService.ts
├── client/
│   ├── package.json
│   ├── tsconfig.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.tsx
│       ├── App.tsx
│       └── components/
│           ├── ConnectionForm.tsx
│           ├── TableSelector.tsx
│           ├── DataPreview.tsx
│           └── IngestionStatus.tsx
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js (v18+)
- npm or yarn
- Docker (to run ClickHouse locally, optional)

---

## 🚀 Setup & Run Instructions

### 🔧 Backend Setup

```bash
cd server
npm install
npm run dev
```

### 🌐 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🧪 Testing & Datasets

- Use official ClickHouse sample datasets:
  - [uk_price_paid](https://clickhouse.com/docs/en/getting-started/example-datasets/uk-price-paid/)
  - [ontime](https://clickhouse.com/docs/en/getting-started/example-datasets/ontime/)

### ✅ Test Cases:

1. ClickHouse → Flat File (select columns & verify count)
2. Flat File → ClickHouse (upload CSV & verify data)
3. Auth Failures (invalid JWT, missing parameters)
4. (Bonus) Join multiple ClickHouse tables before export
5. (Optional) Preview data before ingestion

---

## 📸 Screenshots (optional)

> Include any screenshots or demo video link here

---

## 📼 Optional Demo

> Link to demo video: [YouTube/Google Drive link here]

---

## 🤖 AI Tooling (if used)

> See `prompts.txt` for AI prompts used during development.

---

## 📬 Contact

**Piyush Kumar**  
Email: [your-email@example.com]  
LinkedIn: [Your LinkedIn Profile]  
GitHub: [Your GitHub Link]

---

```

Let me know if you'd like me to generate the `prompts.txt` as well, or want to insert real screenshots/demo links into this!
