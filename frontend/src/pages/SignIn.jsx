import { useState } from "react";
import { signIn } from "../api/auth.api";

const EyeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function SignIn({ onNavigateSignUp, onSignInSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);
    signIn({ email: email.trim(), password })
      .then((res) => {
        onSignInSuccess?.(res);
      })
      .catch((err) => {
        setError(
          err?.message || "Invalid email or password. Please try again.",
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
            ✦ <span className="text-gray-700">Snip</span>
          </p>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to manage your links
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          {/* Global error */}
          {error && (
            <div className="mb-4 px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="you@example.com"
                className="h-11 px-3.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100 transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-600">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="••••••••"
                  className="w-full h-11 px-3.5 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-1 h-11 rounded-lg bg-gray-900 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Don't have an account?{" "}
          <button
            onClick={onNavigateSignUp}
            className="text-gray-700 font-medium hover:underline cursor-pointer"
          >
            Sign up free
          </button>
        </p>
      </div>
    </div>
  );
}
