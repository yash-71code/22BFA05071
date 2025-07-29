export const logEvent = (type, data) => {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push({ type, timestamp: new Date().toISOString(), data });
  localStorage.setItem('logs', JSON.stringify(logs));
};
