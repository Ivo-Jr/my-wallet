import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%{
    transform: translateX(100px);
    opacity: 0;
  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;

  background: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;

  animation: ${animate} .5s;
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  > h2 {
      font-size:  28px;
      margin-bottom: 20px;
      padding-left: 16px;
    }

  @media(max-width: 1200px){
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 5px;
  
  list-style: none;

  @media(max-width: 1200px){
    padding-left: 16px;
    margin-bottom: 8px;
  }
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;

  padding-right: 22px;

  > span {
    margin-left: 10px;
    font-size: 18px;
  }

  > div {
    width: 40px;
    height: 40px;

    background: ${props => props.color};

    border-radius: 7px;
  }

  @media(max-width: 1200px){
    > div {
      width: 30px;
      height: 30px;
    }
  }
`;