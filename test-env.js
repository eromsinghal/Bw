// Test script to check environment variables
console.log('Testing environment variables...');

// Check if we're in a Vite environment
if (typeof import.meta !== 'undefined' && import.meta.env) {
    console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
    console.log('All env vars:', import.meta.env);
} else {
    console.log('Not in Vite environment');
}

// Check process.env as fallback
if (typeof process !== 'undefined' && process.env) {
    console.log('process.env.VITE_API_URL:', process.env.VITE_API_URL);
} 