import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      <div className="bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-xl max-w-md w-full text-center transform transition-all duration-500 hover:shadow-2xl">
        <div className="mb-6 flex justify-center">
          <svg className="h-32 w-32 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or might have been moved.
        </p>
        
        <Link 
          to="/news" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Go to News Page
        </Link>
      </div>
      
      <div className="mt-8 text-gray-600">
        <p>Lost? Need help? Contact us at <span className="text-blue-600">aayushsoodhp@gmail.com</span></p>
      </div>
    </div>
  );
};

export default NotFound;