import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

export const FormContainerStyled = styled(Box)({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  
  '& .MuiTextField-root': { marginRight: 10 },
})

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#003b46',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#003b46',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#07575b',
    },
    '&:hover fieldset': {
      borderColor: '#003b46',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#003b46',
    },
  },
  flexGrow: 1

});

export const CustomButton = styled(Button)({
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  fontSize: 16,
  backgroundColor: '#07575b',
  padding: '5px 20px',
  borderRadius: 12,
  color: '#c4dfe6',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  border: 'none',

  '&:hover': {
    backgroundColor: '#003b46',
  },

  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});



