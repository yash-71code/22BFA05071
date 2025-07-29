// src/pages/Home.js
import React, { useState } from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';
import UrlList from '../components/UrlList';

const Home = () => {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleShorten = (urlData) => {
    setShortenedUrls([...shortenedUrls, urlData]);
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <UrlShortenerForm onShorten={handleShorten} />
      <UrlList urls={shortenedUrls} />
    </div>
  );
};

export default Home;
