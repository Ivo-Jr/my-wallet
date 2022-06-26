import React, {useState} from 'react';

import logoImg from '../../assets/logo.svg';
import Button from '../../Components/Button';
import InputComponent from '../../Components/Input';
import { useAuth } from '../../hooks/auth';

import { 
  Container, 
  Logo,
  Form,
  FormTitle
} from './styles';

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn, logged } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    signIn(email, password);
  }  

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo my wallet" />
        <h3>My Wallet</h3>
      </Logo>

      <Form onSubmit={(e) => handleLogin(e)} logged={logged}>
        <FormTitle> Sign In </FormTitle> 
          <InputComponent 
            type={'email'}
            placeholder={'e-mail'}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus={true}
          />
          <InputComponent 
            type='password'
            placeholder='password'
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type='submit'>
            Login
          </Button>
      </Form>

    </Container>
  );
}
