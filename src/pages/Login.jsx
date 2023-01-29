import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApi";
import Error from "../shared/ui/Error";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // login api request
  const [login, { data: user }] = useLoginMutation();
  // empty from
  const emptyForm = () => {
    setEmail("");
    setPassword("");
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    login(data);
    emptyForm();
  };

  // if successfully login then navigate to home page
  useEffect(() => {
    if (user?.accessToken) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);
  return (
    <div className="grid h-screen  place-items-center">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-slate-400 focus:border-slate-400 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-400 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-slate-400 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link
                  to="/registration"
                  className="font-medium text-black hover:text-black"
                >
                  Register
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-400 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Sign in
              </button>
            </div>

            {user?.errorMessage && <Error message={user.errorMessage} />}
          </form>
        </div>
      </div>
    </div>
  );
}
