'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function SignupPage({ className }: { className: string }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate registration (replace with actual registration logic)
    if (name && contact && email && password) {
      setError('');
      router.push('/otp'); // Redirect to OTP page on successful registration
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <section className={`${className} p-6 w-full bg-gray-900 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-semibold text-white mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-black rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-white mb-1">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>

        {error && <p className="mb-4 text-red-600">{error}</p>}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SignupPage;
