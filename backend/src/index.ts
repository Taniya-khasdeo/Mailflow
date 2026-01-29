import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

const app = express();

/* ✅ Allow frontend (local + Vercel) */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://mailflow-liart-five.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* ✅ Email routes */
app.use("/api/emails", emailRoutes);

/* ✅ Required for Railway */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
