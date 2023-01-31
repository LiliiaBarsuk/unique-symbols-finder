import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export const TypographyStyledHeader = styled(Typography)({
    color: '#003b46'
});

export const TypographyStyledSymbol = styled(Typography)({
    color: '#003b46',
    fontSize: 40
});

export const PaperContainerStyled = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
        
    '& > :not(style)': {
        width: 128,
        height: 128,
    },
});

export const PaperStyled = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});
