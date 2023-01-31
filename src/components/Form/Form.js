import { useState } from 'react';
import { CustomTextField, CustomButton, FormContainerStyled } from './Form.styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Form = ({onSubmit}) => {
  const [formValue, setFormValue] = useState('');

  const handleChange = (e) => {
    const {value} = e.target;
    setFormValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValue);
  }
  
  return(
    <FormContainerStyled component="form" noValidate autoComplete="off" onSubmit={handleSubmit}> 
      <CustomTextField label="Type your text here" multiline value={formValue} onChange={handleChange}/>
      <CustomButton variant="contained" endIcon={<ArrowForwardIcon />} type="submit" >
        Find
      </CustomButton>
    </FormContainerStyled>
  ) 
}