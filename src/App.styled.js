import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const ContainerStyled = styled(Container)({
    height: '100vh',
    paddingTop: 20,
    paddingBottom: 20,
    margin: 0,
    backgroundImage: 'linear-gradient(17deg, rgba(102,165,173,1) 0%, rgba(196,223,230,0.9416141456582633) 100%)',
    justifyContent: 'center'
});

export const TypographyStyled = styled(Typography)({
    color: '#003b46'
});

export const ContentContainerStyled = styled(Box)({
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-evenly'
});

