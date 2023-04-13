import React from "react";

export const StartupCard = ({ name, description, amountToRaise, amountRaised }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">
      <img
        className="h-48 w-full object-cover"
        src="https://picsum.photos/800/600"
        alt="Funds collection"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          { name }
        </h2>
        <p className="text-gray-700 text-base mb-4">
         { description }
        </p>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-bold mr-2">Goal:</span>
          <span className="text-gray-900">${ amountToRaise },000</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-bold mr-2">Amount Raised:</span>
          <span className="text-gray-900">${ amountRaised },000</span>
        </div>
        <div className="bg-gray-100 rounded-full">
          <div
            className="bg-blue-500 rounded-full text-xs leading-none py-1 text-center text-white"
            style={{ width: "50%" }}
          >
            50% Funded
          </div>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
