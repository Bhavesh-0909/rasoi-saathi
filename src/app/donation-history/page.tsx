'use client';
import React, { useState, useEffect } from 'react';

function Page() {
    const [loading, setLoading] = useState(true);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Simulate a network request
        const historyCall = async () => {
            const response = await fetch('http://localhost:8000/api/v1/donation/all/672fcddac243759569c3d835', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                setDonations(data);
                console.log(data);
                setLoading(false);
            } else {
                console.error('Error fetching donation history');
                setLoading(false);
            }
        }

        historyCall();
    }, []);

    if (loading) {
        return (
            <div className='w-full h-full flex items-center justify-center p-4 bg-gray-800'>
                <h1 className='text-2xl font-bold text-white'>Loading...</h1>
            </div>
        );
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-evenly p-4 bg-gray-800'>
            <h1 className='text-2xl font-bold mb-4'>Donation History</h1>
            <div className='w-full max-w-md'>
                {donations.map(donation => (
                    <div key={donation._id} className="card bg-gray-900 shadow-md rounded-lg p-4 mb-4">
                        <p className='text-white font-semibold'>Food Type: <span className='text-gray-400'>{donation.foodType}</span></p>
                        <p className='text-white font-semibold'>Number of People Fed: <span className='text-gray-400'>{donation.noOfPeopleFed}</span></p>
                        <p className='text-white font-semibold'>Amount of Food: <span className='text-gray-400'>{donation.amountOfFood}</span></p>
                        <p className='text-white font-semibold'>Donated By: <span className='text-gray-400'>{donation.donatedBy}</span></p>
                        <p className='text-white font-semibold'>Received By: <span className='text-gray-400'>{donation.receivedBy}</span></p>
                        <p className='text-white font-semibold'>Donated At: <span className='text-gray-400'>{new Date(donation.donatedAt).toLocaleDateString()}</span></p>
                        <p className='text-white font-semibold'>Status: <span className='text-gray-400'>{donation.status}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;

