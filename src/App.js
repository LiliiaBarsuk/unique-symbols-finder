import { useEffect, useState } from "react";
import { ContainerStyled, ContentContainerStyled, TypographyStyled } from "./App.styled";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Result } from "./components/Result/Result";
import { findUniqueSymbol } from "./utils/uniqueSymbolFinder";

const App = () => {
  const [text, setText] = useState('');
  const [uniqueSymbol, setUniqueSymbol] = useState(null);

  const onSubmit = (value) => {
    setText(value);
 
  }
  
 
  useEffect(() => {

     if (text) {
       setUniqueSymbol(findUniqueSymbol(text))
     }
  }, [text])
  
  return (
    <>
      <Header />
      <ContainerStyled maxWidth="100vw" align='center'>
        <TypographyStyled variant="h6">
          Hello! This app helps you find the unique symbol in your text.
        </TypographyStyled>
        <TypographyStyled variant="subtitle1" align='center' sx={{mt: 1,}}>
          How it works? The application finds the first unique character in each word, and then finds the first unique character among those characters.
        </TypographyStyled>
        <ContentContainerStyled>
          <Form onSubmit={onSubmit} /> 
          <Result uniqueSymbol={uniqueSymbol}/>
        </ContentContainerStyled>
      </ContainerStyled>    
    </>
  );
}

export default App;
