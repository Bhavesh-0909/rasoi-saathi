'use client'
import React, { useState } from 'react';

function OTPPage({ className }: { className: string }) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate OTP validation (in a real app, you'd verify this via an API)
    if (otp === '123456') {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <section className={`${className} p-6 w-full bg-gray-900 rounded-lg shadow-md`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Enter OTP</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-black rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="otp" className="block text-white mb-1">Enter the OTP sent to your email/phone</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
            maxLength={6}
            required
          />
        </div>

        {error && (
          <div className="mb-4 text-red-600">
            <p>{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
        >
          Verify OTP
        </button>
      </form>

      {isVerified && (
        <div className="mt-6 text-green-600">
          <p>OTP Verified Successfully! You are now logged in.</p>
        </div>
      )}
    </section>
  );
}

export default OTPPage;
