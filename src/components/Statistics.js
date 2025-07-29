import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortUrls') || '{}');
    setUrls(Object.values(stored));
  }, []);

  return (
    <div>
      <h3>Statistics</h3>
      <ul>
        {urls.map((url) => (
          <li key={url.code}>
            <strong>{url.code}</strong> → {url.originalUrl} <br />
            Clicks: {url.clicks.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
