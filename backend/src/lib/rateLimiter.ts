import IORedis from "ioredis";

export const redis = new IORedis();

export const getHourKey = () => {
  const now = new Date();
  return `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}`;
};

export const incrementHourlyCount = async () => {
  const key = `email_count:${getHourKey()}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 3600); // 1 hour
  }

  return count;
};
