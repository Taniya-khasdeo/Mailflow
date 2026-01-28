import { useEffect, useState } from "react";
import { getScheduledEmails } from "../services/emailApi";

const ScheduledEmails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scheduledEmails, setScheduledEmails] = useState<any[]>([]);

  useEffect(() => {
    async function loadEmails() {
      try {
        const data = await getScheduledEmails();
        setScheduledEmails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadEmails();
  }, []);

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-6">
        Scheduled Emails
      </h2>

      {isLoading ? (
        <div className="text-gray-400 text-sm">
          Loading scheduled emails...
        </div>
      ) : scheduledEmails.length === 0 ? (
        <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
          No scheduled emails
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Subject</th>
              <th className="text-left py-3">Scheduled Time</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {scheduledEmails.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{item.email}</td>
                <td className="py-3">{item.subject}</td>
                <td className="py-3">
                  {new Date(item.scheduledTime).toLocaleString()}
                </td>
                <td className="py-3 text-blue-600 font-medium">
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

export default ScheduledEmails;
