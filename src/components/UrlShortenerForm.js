import React, { useState } from 'react';
import { generateShortCode } from '../utils/shortCodeGenerator';
import { logEvent } from '../middleware/loggerMiddleware';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = customCode || generateShortCode();
    const shortUrl = `${window.location.origin}/${code}`;

    const newEntry = {
      code,
      originalUrl,
      shortUrl,
      createdAt: new Date().toISOString(),
      clicks: [],
    };

    // Store in localStorage
    const urls = JSON.parse(localStorage.getItem('shortUrls') || '{}');
    urls[code] = newEntry;
    localStorage.setItem('shortUrls', JSON.stringify(urls));

    // Log event
    logEvent('SHORTEN_CREATED', newEntry);

    alert(`Shortened URL: ${shortUrl}`);
    setOriginalUrl('');
    setCustomCode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Custom code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlShortenerForm;
