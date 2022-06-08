import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  /* display: flex; */
  /* flex-direction: column; */

  background: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;
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
`;

export const LegendContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 5px;
  
  list-style: none;
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


`;