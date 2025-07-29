const STORAGE_KEY = "shortened_urls";

export const saveUrl = (shortCode, originalUrl) => {
  const urls = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  urls[shortCode] = { originalUrl, createdAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
};

export const getUrls = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

export const getOriginalUrl = (shortCode) => {
  const urls = getUrls();
  return urls[shortCode]?.originalUrl || null;
};
