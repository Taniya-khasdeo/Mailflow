import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

const app = express();

/* ✅ CORS: allow frontend (local + Vercel) */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local Vite frontend
      "https://mailflow-liart-five.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* ✅ Routes */
app.use("/api/emails", emailRoutes);

/* ✅ Railway requires process.env.PORT */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
