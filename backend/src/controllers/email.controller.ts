import prisma from "../lib/prisma";
import { emailQueue } from "../queues/email.queue";

export const scheduleEmail = async (req: any, res: any) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body is empty" });
    }

    const { toEmail, subject, body, scheduledAt } = req.body;

    if (!toEmail || !subject || !body || !scheduledAt) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const scheduledTime = new Date(scheduledAt);
    const delay = scheduledTime.getTime() - Date.now();

    if (delay <= 0) {
      return res.status(400).json({
        message: "Scheduled time must be in the future",
      });
    }

    // 1️⃣ Save to DB (✅ CORRECT MODEL NAME)
    const email = await prisma.email.create({
      data: {
        toEmail,
        subject,
        body,
        scheduledAt: scheduledTime,
        status: "scheduled",
      },
    });

    // 2️⃣ Add job to BullMQ queue
    await emailQueue.add(
      "send-email",
      { emailId: email.id },
      { delay }
    );

    // 3️⃣ Response
    return res.status(201).json({
      message: "Email scheduled successfully ✅",
      email,
    });

  } catch (error) {
    console.error("Schedule email error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};