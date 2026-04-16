import { motion } from "motion/react";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AuthHeader from "../common/AuthHeader";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  isLoading,
  businessName
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md"
    >
      <AuthHeader
        badge="Security Portal"
        title="Account Login"
        subtitle={businessName ? (
          <>Welcome back to <span className="text-slate-900 font-bold">{businessName}</span></>
        ) : "Sign in to manage your business operations."}
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-blue-600">
            Business Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <Mail size={18} />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-3xl text-sm font-semibold placeholder-slate-300 focus:outline-none focus:border-blue-600 transition-all shadow-sm"
              placeholder="admin@company.com"
            />
          </div>
        </div>

        <div className="group">
          <div className="flex justify-between mb-3">
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">
              Password
            </label>
            <Link to="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <Lock size={18} />
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-3xl text-sm font-semibold placeholder-slate-300 focus:outline-none focus:border-blue-600 transition-all shadow-sm"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox" id="remember" className="w-5 h-5 rounded-lg border-2 border-slate-200 text-blue-600 focus:ring-blue-500" />
          <label htmlFor="remember" className="ml-3 text-sm font-bold text-slate-600 cursor-pointer">Stay signed in for 30 days</label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-slate-900 border-2 border-slate-900 text-white py-4 px-8 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 hover:border-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {isLoading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Authenticating...
            </>
          ) : (
            <>
              Access Account
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
