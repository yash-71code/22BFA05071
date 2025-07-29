// src/components/UrlShortenerForm.jsx
import React, { useState } from 'react';
import { generateShortCode } from '../utils/shortCodeGenerator';

const UrlShortenerForm = ({ onShorten }) => {
  const [longUrl, setLongUrl] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;

    const shortCode = generateShortCode();
    const expiresAt = expiry ? new Date(Date.now() + parseInt(expiry) * 60000) : null; // expiry in minutes

    const shortUrl = `https://short.ly/${shortCode}`;
    onShorten({ longUrl, shortUrl, expiresAt });

    setLongUrl('');
    setExpiry('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Expiration (in minutes)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlShortenerForm;
