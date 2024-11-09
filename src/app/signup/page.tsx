'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

function Page() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [location, setLocation] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, contact, email, location, password })
            });
    
            if (response.ok) {
                alert('Registration successful');
                router.push('/login');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('Network error: Unable to connect to server');
        }
    };
    

    return (
        <div className='w-full h-full min-h-screen flex justify-center items-center'>
            <section className="p-6 w-full max-w-md mx-auto bg-gray-900 rounded-lg shadow-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">Sign Up</h2>
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
                        <label htmlFor="location" className="block text-white mb-1">Location</label>
                        <input
                            type="text"
                            id="name"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
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

                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-white text-center">
                    Dont have an account?{" "}
                    <Link href="/login" passHref>
                        <span className="text-blue-500 hover:underline cursor-pointer">Log in</span>
                    </Link>
                </p>
            </section>
        </div>

    );
}

export default Page;