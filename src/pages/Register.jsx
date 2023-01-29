import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";
import Error from "../shared/ui/Error";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  //  register api request
  const [register, { data: user, isLoading }] = useRegisterMutation();
  // empty from
  const emptyForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgree(false);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    if (agree && password === confirmPassword) {
      register(data);
      emptyForm();
    }
  };
  // if successfully register then navigate to home page
  useEffect(() => {
    if (user?.accessToken) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);
  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="Name"
                  autoComplete="Name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-slate-400 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-slate-400 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-slate-400 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-confirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-slate-400 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="accept-terms"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-slate-400 focus:ring-slate-400 border-gray-300 rounded"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block cursor-pointer text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-400 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                disabled={isLoading}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
          </form>
          {!(password === confirmPassword) && (
            <Error message={"password not match"} />
          )}
        </div>
      </div>
    </div>
  );
}
