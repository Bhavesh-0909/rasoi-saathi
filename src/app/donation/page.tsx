'use client';
import React from 'react'
import { useState } from 'react';

function Page() {
    const [amount, setAmount] = useState('');
    const [foodtype, setFoodType] = useState('');
    const [people, setPeople] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!amount.trim() || !foodtype.trim() || !people.trim()) return;
        const userId = "672fcddac243759569c3d835";
        try {
            const response = await fetch('http://localhost:8000/api/v1/donation/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, foodtype, people, userId }),
              });

            if (response.status === 200) {
                alert("Donation added successfully!");
                setAmount('');
                setFoodType('');
                setPeople('');
            } else {
                const data = await response.json();
                alert(data.message || 'An error occurred with donation.');
            }
                
        } catch (error) {
            console.error("Error adding donation:", error);
            alert("An error occurred. Please try again.");

        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <form onSubmit={handleSubmit} className='max-w-xl mx-auto p-5 shadow-lg rounded-lg bg-gray-900'>
                <div className="mb-4">
                    <label htmlFor="amount" className="block mb-2 font-bold">Amount of Food:</label>
                    <input type="text" id="amount" name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} className="w-full bg-gray-800 p-2 border rounded" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="foodtype" className="block mb-2 font-bold">Type of Food:</label>
                    <input type="text" id="foodtype" name="foodtype" value={foodtype} onChange={(e)=> setFoodType(e.target.value)} className="w-full bg-gray-800 p-2 border rounded" />
                </div>
                 
                <div className="mb-4">
                    <label htmlFor="people" className="block mb-2 font-bold">Number of People:</label>
                    <input type="number" id="people" name="people" value={people} onChange={(e)=> setPeople(e.target.value)} className="w-full bg-gray-800 p-2 border rounded" />
                </div>
                
                <button type="submit" className="w-full  p-3 bg-blue-500 text-white rounded">Submit</button>
            </form>
        </div>
    )
}

export default Page
