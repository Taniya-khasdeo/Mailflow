import { Router } from "express";

const router = Router();

router.get("/sent", (req, res) => {
  res.json([
    {
      id: 1,
      email: "alice@example.com",
      subject: "Welcome Email",
      sentAt: "2026-01-29T09:30:00",
      status: "Sent",
    },
  ]);
});

router.get("/scheduled", (req, res) => {
  res.json([
    {
      id: 1,
      email: "john@example.com",
      subject: "Meeting Follow-up",
      scheduledTime: "2026-01-30T10:00:00",
      status: "Scheduled",
    },
  ]);
});

export default router;
