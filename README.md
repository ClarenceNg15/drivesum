# Drivesum — Singapore Car Cost Calculator

A free, Singapore-specific car ownership cost calculator. Estimates the true monthly cost of owning a car including depreciation, loan repayments, insurance, road tax, ERP, parking, fuel/EV charging, and maintenance.

## Getting Started

```bash
npm install
npm start
# → http://localhost:3000
```

For development with auto-restart (Node 18+):
```bash
npm run dev
```

## Project Structure

```
drivesum/
├── package.json
├── src/
│   └── server.js       # Express server
└── public/
    └── index.html      # Calculator UI (all logic client-side)
```

## How It Works

All calculation logic runs client-side in the browser. The Node.js server simply serves the static `index.html` file. This means:
- Zero server load per calculation
- Works offline once loaded
- Easy to deploy anywhere

## Deployment

Deploy to any Node.js host — Railway, Render, Fly.io, or a basic VPS.

Set `PORT` environment variable if needed (defaults to 3000).

## Disclaimer

This calculator provides estimates for informational purposes only and does not constitute financial advice. See the in-app disclaimer for full terms.
