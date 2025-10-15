"use client";

import React from "react";

export default function HomePage() {
  const handleStart = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
        🚀 MediQuery
      </h1>

      <p className="text-gray-300 mb-10 text-center max-w-md">
        Start your backend services for MediQuery by clicking the buttons below.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() =>
            handleStart("https://mediquery-chat-server.onrender.com/")
          }
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
        >
          Start Chat Server
        </button>

        <button
          onClick={() => handleStart("https://mediquery-server.onrender.com/")}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-2xl text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
        >
          Start Main Server
        </button>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} MediQuery Backend Starter By Kunal Sharma
      </footer>
    </div>
  );
}
