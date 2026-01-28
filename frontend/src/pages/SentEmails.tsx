import { useEffect, useState } from "react";
import { getSentEmails } from "../services/emailApi";

const SentEmails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sentEmails, setSentEmails] = useState<any[]>([]);

  useEffect(() => {
    async function loadSentEmails() {
      try {
        const data = await getSentEmails();
        setSentEmails(data);
      } catch (error) {
        console.error("Error loading sent emails:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSentEmails();
  }, []);

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-6">
        Sent Emails
      </h2>

      {isLoading ? (
        <div className="text-gray-400 text-sm">
          Loading sent emails...
        </div>
      ) : sentEmails.length === 0 ? (
        <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
          No sent emails
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Subject</th>
              <th className="text-left py-3">Sent Time</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {sentEmails.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-3">{item.email}</td>
                <td className="py-3">{item.subject}</td>
                <td className="py-3">
                  {new Date(item.sentAt).toLocaleString()}
                </td>
                <td
                  className={`py-3 font-medium ${
                    item.status === "Sent"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SentEmails;