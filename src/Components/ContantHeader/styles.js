import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;

  @media(max-width: 380px){
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  > h1 {
    color: ${props => props.theme.color.white};

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.lineColor}; 
    }
  }

  @media(max-width: 420px){
    > h1 {
      font-size: 1.55rem;

      &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 5px solid ${props => props.lineColor}; 
    }

    }
  }

`;

export const Controller = styled.div`
  display: flex;

  @media(max-width: 380px){
    width: 100%;

    justify-content: space-evenly;

    margin-top: 20px;
  }
`;
