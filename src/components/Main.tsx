import React from 'react';

function Main({className}:{className:string}) {
  return (
    <section className={`${className} p-6 w-full bg-gray-900 rounded-lg shadow-md`}>
      {/* Analytics Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Analytics</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
          + Add Food Item
        </button>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-black rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Bought</h3>
          <p className="text-2xl font-semibold text-blue-600">24</p>
        </div>
        
        <div className="p-4 bg-black rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Wasted</h3>
          <p className="text-2xl font-semibold text-red-600">5</p>
        </div>
        
        <div className="p-4 bg-black rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Expiring</h3>
          <p className="text-2xl font-semibold text-yellow-600">3</p>
        </div>
        
        <div className="p-4 bg-black rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Saved</h3>
          <p className="text-2xl font-semibold text-green-600">16</p>
        </div>
        
        <div className="p-4 bg-black rounded-lg shadow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Food Donated</h3>
          <p className="text-2xl font-semibold text-purple-600">8</p>
        </div>
      </div>
    </section>
  );
}

export default Main;
