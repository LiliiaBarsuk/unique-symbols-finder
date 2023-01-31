import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { AppBarStyled, TypographyStyled } from './Header.styled';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBarStyled position="static">
        <Toolbar>
          <TypographyStyled variant="h5" component="div" sx={{ flexGrow: 1 }} color='secondary'>
            Unique symbol finder
          </TypographyStyled>
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
}