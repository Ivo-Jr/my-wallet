import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%{
    transform: translateX(-100px);
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

export const Container = styled.li`
  background: ${props => props.theme.color.tertiary};

  list-style: none;
  border-radius: 12px 10px;

  margin: 10px 0px;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  animation: ${animate} .3s ease-in;

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 10px;
  }

  > div span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Tag = styled.div`
  width: 10px;
  height: 60%;

  background: ${props => props.color};

  position: absolute; 
  left: 0;
`;
