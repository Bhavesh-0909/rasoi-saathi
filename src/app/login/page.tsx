'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    
      const data = await response.json();
    
      if (response.status === 200 && data.token) {
        document.cookie = `authToken=${data.token}; path=/;`; // Set JWT as a cookie
        alert('Login successful');
        router.push('/');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-md text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-6">Rasoi Saathi</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Login Form</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="text-left">
          <label className="block mb-2 text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
          />

          <label className="block mb-2 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 w-full"
          >
            Login
          </button>
        </form>

        {/* Redirect to Sign Up */}
        <p className="mt-4 text-white">
          Dont have an account?{" "}
          <Link href="/signup" passHref>
            <span className="text-blue-500 hover:underline cursor-pointer">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
