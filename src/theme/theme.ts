import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            background: {
              default: '#18181b',
              paper: '#232329',
            },
          }
        : {}),
    },
    shape: { borderRadius: 12 },
    typography: { fontFamily: 'Inter, sans-serif' },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });