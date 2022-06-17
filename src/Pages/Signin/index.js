import React, {useState} from 'react';

import logoImg from '../../assets/logo.svg'
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

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo my wallet" />
        <h3>My Wallet</h3>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle> Log In </FormTitle> 
          <InputComponent 
            type={'email'}
            placeholder={'e-mail'}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputComponent 
            type='password'
            placeholder='password'
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type='submit'>
            Acessar
          </Button>
      </Form>

    </Container>
  );
}
