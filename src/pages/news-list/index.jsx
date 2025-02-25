import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import NewsTile from "../../components/news-tile";

const NewsList = () => {
  const [query, setQuery] = useState("latest");
  const [language, setLanguage] = useState("en");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  
  // Debounce the search query to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [query]);

  const { data, loading, error } = useFetch(debouncedQuery, language);
  const articles = data || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 transition-all duration-1000">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8 pt-8 animate-fadeIn">
          📰 Trending News
        </h1>

        {/* Search and Language Selection */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 max-w-3xl mx-auto">
          <div className="relative flex-grow group">
            <input
              type="text"
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-4 border-0 rounded-lg w-full shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10 transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-xl"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-4 border-0 rounded-lg bg-white/90 backdrop-blur-sm cursor-pointer shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:w-36 transition-all duration-300 hover:shadow-xl"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        {/* Display Messages */}
        {loading && (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50/90 backdrop-blur-sm border-l-4 border-red-500 p-4 rounded-lg my-6 max-w-3xl mx-auto shadow-md animate-fadeIn">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {articles.map((article, index) => (
              <div 
                key={article.article_id || index} 
                className="animate-fadeSlideUp" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NewsTile article={article} />
              </div>
            ))}
          </div>
        ) : (
          !loading && !error && (
            <div className="text-center text-gray-600 my-16 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-lg mx-auto animate-fadeIn">
              <svg className="mx-auto h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-8m-4-3h3v3m-3-3v3m0 0v3m0-3h3m-3 3h-3" />
              </svg>
              <p className="mt-4 text-lg font-medium">No news available</p>
              <p className="mt-2">Try a different search term or language</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NewsList;