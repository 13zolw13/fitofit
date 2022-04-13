import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container,IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Link from 'next/link';
import * as React from 'react';

import { menuLinks } from '../data/menuLinks'

const mockedUser = 'Potato';

export const HeaderBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link href="/">
              <a>El Fitofit</a>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuLinks.map((link) => (
                <Link href={link.href} key={link.id}>
                  <a>
                    <MenuItem
                      key={link.id}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{link.title}</Typography>
                    </MenuItem>
                  </a>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link href="/">
              <a>El Fitofit</a>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuLinks.map((link) => (
              <Link href={link.href} key={link.id}>
                <a>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    {link.title}
                  </Button>
                </a>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, mr: '1rem' }}>
            <Link href="/ranking">
              <a>
                <EmojiEventsIcon />
              </a>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>Hello {mockedUser}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}