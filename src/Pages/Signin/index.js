import React from 'react';

import logoImg from '../../assets/logo.svg'
import Button from '../../Components/Button';
import InputComponent from '../../Components/Input';

import { 
  Container, 
  Logo,
  Form,
  FormTitle
} from './styles';

export default function Signin() {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo my wallet" />
        <h3>My Wallet</h3>
      </Logo>

      <Form onSubmit={() => {}}>
        <FormTitle> Log In </FormTitle> 
          <InputComponent 
            type={'email'}
            placeholder={'e-mail'}
            required={true}
          />
          <InputComponent 
            type='password'
            placeholder='password'
            required={true}
          />

          <Button type='submit'>
            Acessar
          </Button>
      </Form>

    </Container>
  );
}
