import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.color.primary};
  
`;

export const Logo = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;

  margin-bottom: 40px;

  img {
    margin-right: 13px;
    width: 50px;
    height: 50px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;

    color: ${props => props.theme.color.white};
  }

`;

export const Form = styled.form`
  display: flex;

  height: 350px;
  width: 354px;

  flex-direction: column;

  border-radius: 10px;
  padding: 35px;

  border-radius: 10px;

  background: ${props => props.theme.color.tertiary};

  input {
    & + input {
          margin-bottom: 29px; 
        }
        
    border: ${props => props.logged === 'invalid' && '2px solid red'}
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 36px;

  color: ${props => props.theme.color.white};

  &::after{
    content: '';
    display: block;
    width: 55px;
    height: 3px;
    border-bottom: 8px solid ${props => props.theme.color.warning}
  }
`;

