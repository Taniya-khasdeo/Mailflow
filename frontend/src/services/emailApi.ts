const API_URL = "http://localhost:4000/api/emails";

export async function scheduleEmail(data: {
  toEmail: string;
  subject: string;
  body: string;
  scheduledAt: string;
}) {
  const res = await fetch(`${API_URL}/schedule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to schedule email");
  }

  return res.json();
}

export async function getScheduledEmails() {
  const res = await fetch(`${API_URL}/scheduled`);

  if (!res.ok) {
    throw new Error("Failed to fetch scheduled emails");
  }

  return res.json();
}

/* ✅ NEW: Sent emails API */
export async function getSentEmails() {
  const res = await fetch(`${API_URL}/sent`);

  if (!res.ok) {
    throw new Error("Failed to fetch sent emails");
  }

  return res.json();
}
