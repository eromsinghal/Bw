import React from 'react';
import { AppBar, Toolbar, IconButton, Tooltip, Typography, styled, useTheme, Avatar, Menu, MenuItem, Box, InputBase, alpha, keyframes } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Settings as SettingsIcon } from '@mui/icons-material';

interface NavbarProps {
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

// Keyframes for animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled AppBar with theme-aware background and transition
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
  color: theme.palette.text.primary,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s ease, color 0.3s ease',
}));

// Styled IconButton with animation
const ThemeToggleIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: 'auto',
  color: theme.palette.mode === 'dark' ? '#fdd835' : '#4a148c',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#fff176' : '#6a1b9a',
    animation: `${rotate} 0.5s linear`,
  },
}));

// Styled Search Bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// SVG for Sun Icon
const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19.7782 4.22183L17.5563 6.44366" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6.44366 17.5563L4.22183 19.7782" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19.7782 19.7782L17.5563 17.5563" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6.44366 6.44366L4.22183 4.22183" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// SVG for Moon Icon
const MoonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" />
  </svg>
);

export default function Navbar({ mode, onToggleTheme, searchQuery, onSearchChange}: NavbarProps) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User Management Panel
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Notifications" arrow TransitionProps={{ timeout: 400 }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings" arrow TransitionProps={{ timeout: 400 }}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            arrow
            TransitionProps={{ timeout: 400 }}
          >
            <ThemeToggleIconButton onClick={onToggleTheme} aria-label="toggle theme">
              {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </ThemeToggleIconButton>
          </Tooltip>
          <Tooltip title="User Profile" arrow TransitionProps={{ timeout: 400 }}>
            <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 2 }}>
              <Avatar alt="User Profile" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              My account
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}