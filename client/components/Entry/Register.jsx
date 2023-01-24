import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://mmdb-api.onrender.com/auth/register", {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          Router.push("/login");
        }
      })
      .catch((err) => setError(err.response));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-mainFadedSteel text-mainGrey py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/mmdb-logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            Register a New Account
          </h2>
          <p className="mt-2 text-center text-sm font-medium text-red-500">
            {error && error.status == 400 ? error.data.message : null}
          </p>
        </div>
        <form
          className="mt-8 space-y-6 text-mainFadedSteel"
          method="POST"
          onSubmit={submitHandler}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autocomplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="username" className="sr-only">
                Username
              </label>
              <input
                name="username"
                type="username"
                autocomplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-right">
            <div>
              <button
                type="submit"
                className="group relative w-64 flex text-mainGrey justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-mainNavHead hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>Register</span>
              </button>
            </div>

            <Link href="/login">
              <a
                href="#"
                className="font-medium text-sm text-mainGrey hover:text-indigo-500"
              >
                already have an account? <br />{" "}
                <span classNameName="font-bold">Login Instead</span>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
