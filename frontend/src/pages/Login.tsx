
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Card */}
      <div className="w-[420px] bg-white border border-gray-200 rounded-2xl px-10 py-9 shadow-sm">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-8 text-black">
          Login
        </h1>

        {/* ✅ REAL Google Login */}
        <div className="flex justify-center mb-6">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google Login Success", credentialResponse);
              navigate("/dashboard");
            }}
            onError={() => {
              console.log("Google Login Failed");
            }}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">
            or sign up through email
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email ID"
          className="w-full bg-[#F3F8F4] px-5 py-3 rounded-xl mb-4 outline-none text-sm placeholder-gray-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#F3F8F4] px-5 py-3 rounded-xl mb-7 outline-none text-sm placeholder-gray-500"
        />

        {/* Email Login (optional for now) */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-[#0BAA3C] text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;