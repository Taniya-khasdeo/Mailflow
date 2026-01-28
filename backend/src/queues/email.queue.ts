import { Queue } from "bullmq";
import IORedis from "ioredis";

export const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null, // REQUIRED for BullMQ
});

export const emailQueue = new Queue("email-queue", {
  connection,
});
