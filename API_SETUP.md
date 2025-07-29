# API Setup Guide

## Step 1: Create Environment File

Create a `.env` file in your project root (same level as `package.json`) with the following content:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

## Step 2: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm start
```

## Step 3: Verify API Connection

Open your browser's developer console (F12) and check for:
- "Fetching from API: https://jsonplaceholder.typicode.com/users"
- "API response: [...]" with user data

## Alternative API Options

### Option 1: JSONPlaceholder (Free Mock API)
```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

### Option 2: Local Development Server
```env
VITE_API_URL=http://localhost:3001/api
```

### Option 3: Custom API
```env
VITE_API_URL=https://your-api-domain.com/api
```

## Troubleshooting

1. **No data showing**: Check browser console for error messages
2. **CORS errors**: Make sure your API supports CORS
3. **Network errors**: Verify the API URL is correct and accessible

## File Structure
```
your-project/
├── .env                    <- Create this file
├── package.json
├── src/
│   └── features/
│       └── users/
│           └── userAPI.ts  <- Updated with error handling
└── API_SETUP.md           <- This guide
``` 