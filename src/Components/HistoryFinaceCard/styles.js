import styled from 'styled-components';

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
`;

export const Tag = styled.div`
  width: 10px;
  height: 60%;

  background: ${props => props.color};

  position: absolute; 
  left: 0;
`;
