import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import Layout from './components/Layout/Layout';
import Users from './pages/Users';

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

   const [searchQuery, setSearchQuery] = useState('');
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Layout mode={mode} onToggleTheme={toggleTheme}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}>
        <Users searchQuery={searchQuery} /> {/* <-- This renders your main page */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;