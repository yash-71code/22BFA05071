// src/components/UrlList.jsx
import React from 'react';

const UrlList = ({ urls }) => {
  if (urls.length === 0) return null;

  return (
    <div className="url-list">
      <h3>Shortened URLs</h3>
      {urls.map((item, index) => (
        <div key={index} className="url-card">
          <p><strong>Original:</strong> {item.longUrl}</p>
          <p><strong>Short:</strong> <a href={item.longUrl} target="_blank" rel="noopener noreferrer">{item.shortUrl}</a></p>
          {item.expiresAt && (
            <p><strong>Expires at:</strong> {item.expiresAt.toLocaleString()}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default UrlList;
