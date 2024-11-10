'use client'
import React, { useState } from 'react';

function Home({ className }: { className: string }) {
  const [foodData, setFoodData] = useState<Array<any>>([]);
  const [foodAdding, setFoodAdding] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [buyingDate, setBuyingDate] = useState('');
  const [expiringDate, setExpiringDate] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [showWastedDetails, setShowWastedDetails] = useState(false);
  const [showExpiringDetails, setShowExpiringDetails] = useState(false); 
  const [showExpenditureDetails, setShowExpenditureDetails] = useState(false);
  const [points, setPoints] = useState(0); 
  const [totalFoodDonated, setTotalFoodDonated] = useState(0); 

  const handleAddClick = () => setShowForm(!showForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFoodData = { 
      foodName: foodAdding, 
      quantity: parseInt(foodQuantity), 
      price: parseFloat(foodPrice), 
      buyingDate, 
      expiringDate, 
      donated: 0 
    };

    const pointsEarned = Math.floor(newFoodData.quantity / 100) * 10; 
    setPoints(points + pointsEarned); 

    setFoodData([...foodData, newFoodData]);
    setFoodAdding('');
    setFoodQuantity('');
    setFoodPrice('');
    setBuyingDate('');
    setExpiringDate('');
    setShowForm(false);
  };

  const calculateTotalFoodBought = () => foodData.reduce((total, food) => total + food.quantity, 0);

  const calculateTotalExpenditure = () => foodData.reduce((total, food) => total + (food.quantity * food.price), 0);

  const calculateFoodWasted = () => {
    const today = new Date();
    return foodData.filter(food => new Date(food.expiringDate) < today).reduce((total, food) => total + food.quantity, 0);
  };

  const calculateFoodExpiringSoon = () => {
    const today = new Date();
    const expiringSoonDate = new Date(today);
    expiringSoonDate.setDate(today.getDate() + 3); 
    return foodData.filter(food => new Date(food.expiringDate) <= expiringSoonDate && new Date(food.expiringDate) > today);
  };

  const calculateFoodWastedPercentage = () => {
    const totalFoodBought = calculateTotalFoodBought();
    const totalWasted = calculateFoodWasted();
    return totalFoodBought === 0 ? 0 : (totalWasted / totalFoodBought) * 100;
  };

  const getMostCommonFood = () => {
    const foodCount = foodData.reduce((acc, food) => {
      acc[food.foodName] = (acc[food.foodName] || 0) + food.quantity;
      return acc;
    }, {} as Record<string, number>);
    const mostCommonFood = Object.entries(foodCount).reduce((max, entry) => entry[1] > max[1] ? entry : max, ['', 0]);
    return mostCommonFood[0] || 'None';
  };

  const expiryMessages = [
    "Don't let your leftovers become tomorrow's trash. Eat up or share!",
    "Your fridge is not a museum, it's a kitchen. Donate that food before it becomes a relic!",
    "That last slice of pizza deserves more than just sitting there – give it a purpose!",
    "Feed your belly, not the landfill. Your food’s expiration date is sooner than you think!",
    "Got leftovers? They're not just food – they’re future meals in disguise!",
    "Don't let your food get a 'Best Before' tattoo. Consume or donate now!",
    "Your fridge called – it’s getting too crowded. Share some love (and food)!",
    "Before that food goes stale, make it a hero – eat it or donate it!",
    "Your leftovers are begging for a second chance. Give them a happy ending!",
    "Why waste food when it could be your next meal (or someone else's)? Eat or donate!"
  ];

  const getRandomExpiryMessage = () => {
    return expiryMessages[Math.floor(Math.random() * expiryMessages.length)];
  };

  const toggleWasteDetails = () => {
    setShowWastedDetails(!showWastedDetails);
  };

  const toggleExpiringDetails = () => {
    setShowExpiringDetails(!showExpiringDetails); 
  };

  const toggleExpenditureDetails = () => {
    setShowExpenditureDetails(!showExpenditureDetails); 
  };

  const calculateWastedFoodDetails = () => {
    const wastedFood = foodData.filter(food => new Date(food.expiringDate) < new Date());
    return wastedFood;
  };

  const calculateExpiringFoodDetails = () => {
    const expiringFood = foodData.filter(food => new Date(food.expiringDate) <= new Date());
    return expiringFood;
  };

  const calculateDetailedExpenditure = () => {
    return foodData.map(food => ({
      foodName: food.foodName,
      quantity: food.quantity,
      price: food.price,
      totalExpenditure: food.quantity * food.price,
    }));
  };

  return (
    <section className={`${className} p-6 w-full h-full bg-gray-900 rounded-lg shadow-md text-white`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Home</h2>
        <button onClick={handleAddClick} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">+ Add Food Item</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-black rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <label className="block text-white mr-2">Add Food By:</label>
            <button type="button" onClick={() => setScanning(!scanning)} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 mr-2">
              {scanning ? "Cancel Barcode" : "Scan Barcode"}
            </button>
            <span>or</span>
            <input type="text" id="foodAdding" value={foodAdding} onChange={(e) => setFoodAdding(e.target.value)} placeholder="Enter Manually" className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 ml-2" required={!scanning} disabled={scanning} />
          </div>

          <div className="mb-4">
            <label htmlFor="foodQuantity" className="block text-white mb-1">Food Quantity</label>
            <input type="number" id="foodQuantity" value={foodQuantity} onChange={(e) => setFoodQuantity(e.target.value)} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required />
          </div>

          <div className="mb-4">
            <label htmlFor="foodPrice" className="block text-white mb-1">Food Price (per unit)</label>
            <input type="number" id="foodPrice" value={foodPrice} onChange={(e) => setFoodPrice(e.target.value)} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required />
          </div>

          <div className="mb-4">
            <label htmlFor="buyingDate" className="block text-white mb-1">Date of Buying</label>
            <input type="date" id="buyingDate" value={buyingDate} onChange={(e) => setBuyingDate(e.target.value)} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required />
          </div>

          <div className="mb-4">
            <label htmlFor="expiringDate" className="block text-white mb-1">Date of Expiring</label>
            <input type="date" id="expiringDate" value={expiringDate} onChange={(e) => setExpiringDate(e.target.value)} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required />
          </div>
          
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700 w-full">
            Add Food Item
          </button>
        </form>
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Total Food Bought</h3>
          <div className="text-2xl text-green-500 font-bold">{calculateTotalFoodBought()} units</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Total Expenditure</h3>
          <div className="text-2xl text-blue-600  font-bold">₹{calculateTotalExpenditure().toFixed(2)}</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Food Wasted</h3>
          <div className="text-2xl text-red-600 font-bold">{calculateFoodWasted()} units</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Wasted Food Percentage</h3>
          <div className="text-2xl text-red-600 font-bold">{calculateFoodWastedPercentage().toFixed(2)}%</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Most Common Food</h3>
          <div className="text-2xl text-green-600 font-bold">{getMostCommonFood()}</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Points Earned</h3>
          <div className="text-2xl text-blue-600 font-bold">{points} points</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Total Food Donated</h3>
          <div className="text-2xl text-blue-600 font-bold">{totalFoodDonated} units</div>
        </div>
      </div>

      <div className="mt-6">
        <button onClick={toggleWasteDetails} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 mb-4 w-full">Show Wasted Food</button>
        {showWastedDetails && (
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Wasted Food Details</h3>
            <ul className="text-white">
              {calculateWastedFoodDetails().map((food, index) => (
                <li key={index}>{food.foodName} - {food.quantity} units wasted</li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={toggleExpiringDetails} className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-700 mb-4 w-full">Show Expiring Food</button>
        {showExpiringDetails && (
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Expiring Food Soon</h3>
            <ul className="text-white">
              {calculateFoodExpiringSoon().map((food, index) => (
                <li key={index}>{food.foodName} - Expiring on {food.expiringDate}</li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={toggleExpenditureDetails} className="bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-700 mb-4 w-full">Show Detailed Expenditure</button>
        {showExpenditureDetails && (
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Detailed Expenditure</h3>
            <ul className="text-white">
              {calculateDetailedExpenditure().map((food, index) => (
                <li key={index}>{food.foodName} - {food.quantity} units, ₹{food.totalExpenditure.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="mt-6 text-gray-300 text-sm">{getRandomExpiryMessage()}</p>
    </section>
  );
}

export default Home;
