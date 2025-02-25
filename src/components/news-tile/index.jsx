import React, { useState } from "react";

const NewsTile = ({ article }) => {
  if (!article) return null;
  
  const [isHovered, setIsHovered] = useState(false);
  
  // Format publication date if available
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Generate category badges
  const renderCategories = () => {
    if (!article.category || !article.category.length) return null;
    
    return (
      <div className="flex flex-wrap gap-1 mt-2">
        {article.category.slice(0, 3).map((cat, index) => (
          <span 
            key={index} 
            className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5"
          >
            {cat}
          </span>
        ))}
      </div>
    );
  };

  const publishedDate = article.pubDate ? formatDate(article.pubDate) : "";

  return (
    <div 
      className={`bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform ${isHovered ? 'scale-102 -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 10px 30px -10px rgba(0, 0, 100, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      {article.image_url ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image_url}
            alt={article.title || "News image"}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/400/200";
              e.target.alt = "No image available";
            }}
          />
          {article.source_id && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {article.source_id}
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center">
          <svg className={`h-16 w-16 text-blue-300 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}

      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex items-center mb-2">
            <p className="text-xs text-gray-500 mr-2 flex items-center">
              📰 {article.source_name || "Unknown Source"}
            </p>
            {publishedDate && (
              <p className="text-xs text-gray-500 flex items-center">
                <span className="mx-1">•</span> 
                <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {publishedDate}
              </p>
            )}
          </div>
          
          <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-800">
            {article.title || "Untitled"}
          </h2>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {article.description || "No description available."}
          </p>
          
          {renderCategories()}
        </div>
        
        <div className="mt-auto pt-4">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium group`}
          >
            Read more
            <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsTile;