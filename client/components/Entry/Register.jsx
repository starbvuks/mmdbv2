import Link from "next/link";
import axios from "axios";

const Register = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-mainFadedSteel text-mainGrey py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="/mmdb-logo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold ">
            Register a New Account
          </h2>
        </div>
        <form
          class="mt-8 space-y-6 text-mainFadedSteel"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="username" class="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autocomplete="username"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between text-right">
            <div>
              <button
                type="submit"
                class="group relative w-64 flex text-mainGrey justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mainNavHead hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
                class="font-medium text-sm text-mainGrey hover:text-indigo-500"
              >
                already have an account? <br />{" "}
                <span className="font-bold">Login Instead</span>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;