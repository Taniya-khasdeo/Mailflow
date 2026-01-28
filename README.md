# Email Scheduling System

A **production-style email scheduling system** built with **TypeScript, Express, BullMQ, Redis, and Prisma**. It supports **delayed email delivery**, **rate limiting**, **concurrent workers**, and **crash-safe persistence**.

---

## ✨ Features

* 📅 Schedule emails for future delivery
* 💾 Persist emails in a relational database
* 🧵 Background processing using BullMQ workers
* 🛡️ Crash-safe scheduling (jobs survive server restarts)
* ⏱️ Configurable hourly rate limiting
* ⚙️ Concurrent worker processing
* ✉️ Email delivery via Ethereal SMTP (test inbox)
* 🐳 Redis support via Docker (recommended)

---

## 🧱 Tech Stack

### Backend

* TypeScript
* Express.js
* BullMQ (Redis-based queue)
* Redis (Docker)
* Prisma ORM
* SQLite (can be replaced with MySQL/PostgreSQL)
* Nodemailer
* Ethereal Email

### Frontend

* React.js
* TypeScript
* Tailwind CSS

---

## 🏗️ Architecture Overview

```text
Frontend (React)
  |
  | POST /api/emails/schedule
  ▼
Backend API (Express)
  |
  ├── Save email → Database (Prisma)
  ├── Add delayed job → Redis (BullMQ)
  ▼
Worker Process (BullMQ Worker)
  |
  ├── Rate limit check (Redis)
  ├── Send email (Ethereal SMTP)
  └── Update DB status → "sent"
```

---

## 📦 Project Structure (Example)

```text
├── backend
│   ├── src
│   │   ├── routes
│   │   ├── workers
│   │   ├── queue
│   │   └── index.ts
│   ├── prisma
│   │   └── schema.prisma
│   └── package.json
│
├── frontend
│   ├── src
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js (v18+ recommended)
* Docker & Docker Compose

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd email-scheduling-system
```

### 2️⃣ Start Redis

```bash
docker-compose up -d
```

### 3️⃣ Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📬 API Endpoint

### Schedule an Email

**POST** `/api/emails/schedule`

```json
{
  "to": "user@example.com",
  "subject": "Hello",
  "body": "This is a scheduled email",
  "sendAt": "2026-01-30T10:00:00.000Z"
}
```

---

## 🧵 Worker Behavior

* Processes delayed jobs from BullMQ
* Enforces hourly rate limits using Redis
* Sends emails via Ethereal SMTP
* Updates email status in the database

---

## 🛠️ Notes

* Ethereal Email is for testing only (emails are not actually delivered)
* SQLite is used for simplicity; replace with PostgreSQL/MySQL for production
* BullMQ ensures job durability and retry support

---

## 📄 License

MIT License

---

## 🙌 Acknowledgements

* BullMQ
* Prisma
* Redis
* Nodemailer

