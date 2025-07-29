import React, { useEffect, useState } from 'react';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortUrls') || '{}');
    setUrls(Object.values(stored));
  }, []);

  return (
    <div>
      <h3>Shortened URLs</h3>
      <ul>
        {urls.map((item) => (
          <li key={item.code}>
            <a href={`/${item.code}`} target="_blank" rel="noopener noreferrer">
              {item.shortUrl}
            </a>
            <p>{item.originalUrl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
