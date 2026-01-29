import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

const app = express();

/* ✅ Use FRONTEND_URL instead of localhost */
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* ✅ Health check (prevents Railway 502) */
app.get("/", (_req, res) => {
  res.status(200).send("Mailflow backend is live 🚀");
});

app.use("/api/emails", emailRoutes);

/* ✅ Railway-compatible port */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
