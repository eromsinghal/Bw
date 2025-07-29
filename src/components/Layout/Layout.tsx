import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Box, Container, Theme, useTheme } from '@mui/material';

interface LayoutProps {
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
   searchQuery: string;
  onSearchChange: (query: string) => void;
  children?: React.ReactNode;
}

export default function Layout({ mode, onToggleTheme,  searchQuery,
  onSearchChange, children }: LayoutProps) {
  const theme = useTheme();

  return (
    <>
      <Navbar mode={mode} onToggleTheme={onToggleTheme} searchQuery = {searchQuery} onSearchChange={onSearchChange} />
      <Box
        component="main"
        sx={{
          padding: theme.spacing(4),
          backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f9f9f9',
          minHeight: '100vh',
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </>
  );
}