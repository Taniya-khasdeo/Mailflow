import { Worker } from "bullmq";
import nodemailer from "nodemailer";
import prisma from "../lib/prisma";
import { connection } from "./email.queue";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS,
  },
});

console.log("🚀 Worker started");

new Worker(
  "email-queue",
  async (job) => {
    console.log("📥 Job received:", job.id);

    const { emailJobId } = job.data;

    const email = await prisma.email.findUnique({
      where: { id: emailJobId },
    });

    if (!email) return;
    if (email.status === "sent") return;

    console.log("📨 Sending email to:", email.toEmail);

    await transporter.sendMail({
      from: '"Scheduler" <no-reply@test.com>',
      to: email.toEmail,
      subject: email.subject,
      text: email.body,
    });

    await prisma.email.update({
      where: { id: email.id },
      data: { status: "sent" },
    });

    console.log("✅ Email SENT:", email.id);
  },
  {
    connection,
    concurrency: Number(process.env.WORKER_CONCURRENCY || 5),
  }
);
