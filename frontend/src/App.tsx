import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ComposeEmail from "./pages/ComposeEmail";
import ScheduledEmails from "./pages/ScheduledEmails";
import SentEmails from "./pages/SentEmails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="compose" element={<ComposeEmail />} />
          <Route path="scheduled" element={<ScheduledEmails />} />
          <Route path="sent" element={<SentEmails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


