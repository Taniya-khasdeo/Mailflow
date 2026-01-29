import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

const app = express();

/* ✅ CORS using env frontend URL */
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ✅ THIS MUST HAVE () */
app.use(express.json());

/* ✅ Health check route (required for Railway) */
app.get("/", (_req, res) => {
  res.status(200).send("Mailflow backend is live 🚀");
});

app.use("/api/emails", emailRoutes);

/* ✅ Railway port */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
