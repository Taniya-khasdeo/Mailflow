import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="h-16 border-b flex items-center justify-between px-6">
        <div className="font-semibold text-lg text-green-600">
          MailFlow
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-right">
            <div className="font-medium">Oliver Brown</div>
            <div className="text-gray-500">oliver@domain.io</div>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />

          <button
            onClick={() => navigate("/")}
            className="text-red-500 text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 border-r p-4">
          <button
            onClick={() => navigate("/dashboard/compose")}
            className="w-full bg-green-500 text-white py-2 rounded-lg mb-6"
          >
            Compose
          </button>

          <div className="space-y-3 text-sm">
            <div
              onClick={() => navigate("/dashboard/scheduled")}
              className={`cursor-pointer px-2 py-1 rounded ${
                location.pathname.includes("scheduled")
                  ? "bg-green-100 text-green-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Scheduled
            </div>

            <div
              onClick={() => navigate("/dashboard/sent")}
              className={`cursor-pointer px-2 py-1 rounded ${
                location.pathname.includes("sent")
                  ? "bg-green-100 text-green-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sent
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


