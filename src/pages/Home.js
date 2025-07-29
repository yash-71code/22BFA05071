import React from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';
import UrlList from '../components/UrlList';

const Home = () => {
  return (
    <div className="container">
      <h2>URL Shortener</h2>
      <UrlShortenerForm />
      <UrlList />
    </div>
  );
};

export default Home;
