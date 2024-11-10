'use client'
import React, { useState } from 'react';

function Home({ className }: { className: string }) {
  const [showForm, setShowForm] = useState(false);
  const [foodAdding, setFoodAdding] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [buyingDate, setBuyingDate] = useState('');
  const [expiringDate, setExpiringDate] = useState('');

  const handleAddClick = () => setShowForm(!showForm);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Food Adding: ${foodAdding}, Food Quantity: ${foodQuantity}, Buying Date: ${buyingDate}, Expiring Date: ${expiringDate}`);
    setFoodAdding('');
    setFoodQuantity('');
    setBuyingDate('');
    setExpiringDate('');
    setShowForm(false);
  };

  // Sample donation locations with random distances
  const donationLocations = [
    { location: "St. John's Shelter", distance: "2.5 km" },
    { location: "Food Bank Center", distance: "5.1 km" },
    { location: "Community Care", distance: "3.3 km" },
    { location: "Local Soup Kitchen", distance: "1.2 km" },
    { location: "City Mission", distance: "4.7 km" },
  ];

  return (
    <section className={`${className} p-6 w-full bg-gray-800 rounded-lg shadow-md`}>
      {/* Analytics Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Home</h2>
        <button
          onClick={handleAddClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
        >
          + Add Food Item
        </button>
      </div>

      {/* Conditional Form Section */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-900 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="foodAdding" className="block text-white mb-1">Food Adding</label>
            <input
              type="text"
              id="foodAdding"
              value={foodAdding}
              onChange={(e) => setFoodAdding(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="foodQuantity" className="block text-white mb-1">Food Quantity</label>
            <input
              type="number"
              id="foodQuantity"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buyingDate" className="block text-white mb-1">Date of Buying</label>
            <input
              type="date"
              id="buyingDate"
              value={buyingDate}
              onChange={(e) => setBuyingDate(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiringDate" className="block text-white mb-1">Date of Expiring</label>
            <input
              type="date"
              id="expiringDate"
              value={expiringDate}
              onChange={(e) => setExpiringDate(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-900 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Bought</h3>
          <p className="text-2xl font-semibold text-blue-600">24</p>
        </div>
        
        <div className="p-4 bg-gray-900 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Wasted</h3>
          <p className="text-2xl font-semibold text-red-600">5</p>
        </div>
        
        <div className="p-4 bg-gray-900 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Expiring</h3>
          <p className="text-2xl font-semibold text-yellow-600">3</p>
        </div>
        
        <div className="p-4 bg-gray-900 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Saved</h3>
          <p className="text-2xl font-semibold text-green-600">16</p>
        </div>
        
        <div className="p-4 bg-gray-900 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Donated</h3>
          <p className="text-2xl font-semibold text-purple-600">8</p>
        </div>
      </div>

      {/* Donation Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white mb-6">Food Bank in Your Area</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donationLocations.map((location, index) => (
            <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center">
              <p className="text-lg font-medium text-white">{location.location}</p>
              <div className="flex items-center mt-2">
                <p className="text-sm text-white mr-2">{location.distance}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700">
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
