import Box from '@mui/material/Box';
import { PaperContainerStyled, PaperStyled, TypographyStyledHeader, TypographyStyledSymbol } from './Result.styled';

export const Result = ({uniqueSymbol}) => {
  if (uniqueSymbol) {
    return (
      <Box >
      <TypographyStyledHeader variant="h5">Your unique symbol is:</TypographyStyledHeader>
      <PaperContainerStyled>
        <PaperStyled elevation={3}><TypographyStyledSymbol variant="h5">{uniqueSymbol}</TypographyStyledSymbol> </PaperStyled>
      </PaperContainerStyled>
    </Box>
  );
  }

  return (
  <Box >
    <TypographyStyledHeader variant="h5">There is no unique symbols in your text</TypographyStyledHeader>
    </Box>
  )

  
  
}