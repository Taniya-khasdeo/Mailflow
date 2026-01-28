import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

const app = express(); // ✅ THIS WAS MISSING / BROKEN BEFORE

app.use(cors());
app.use(express.json());

app.use("/api/emails", emailRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
