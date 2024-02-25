import React, { useState } from "react";
import Navbar from "./Navbar"; 
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="max-w-md w-full mx-auto bg-gray-800 p-8 rounded-md shadow-md">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Sign In</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
              />
            </div>

            <div className="mb-6">
              <button
                type="button"
                onClick={handleSignIn}
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>

            <div className="text-center">
              <p className="text-white">
                New user?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
