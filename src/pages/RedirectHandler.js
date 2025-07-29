import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logEvent } from '../middleware/loggerMiddleware';

const RedirectHandler = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem('shortUrls') || '{}');
    const item = urls[shortCode];

    if (!item) {
      alert('Short link not found.');
      navigate('/');
      return;
    }

    // Log the click
    item.clicks.push({
      timestamp: new Date().toISOString(),
      referrer: document.referrer || 'direct',
    });

    urls[shortCode] = item;
    localStorage.setItem('shortUrls', JSON.stringify(urls));

    logEvent('SHORTEN_CLICKED', { code: shortCode });

    // Redirect
    window.location.href = item.originalUrl;
  }, [shortCode, navigate]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;
