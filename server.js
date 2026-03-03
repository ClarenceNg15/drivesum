'use strict';

const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from same directory as server.js
app.use(express.static(path.join(__dirname)));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve index.html for all routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Drivesum running at http://localhost:${PORT}\n`);
});

module.exports = app;
