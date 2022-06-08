import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
  min-height: 260px;

  display: flex;

  margin: 10px 0;

  background: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 30px 20px;

  h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  height: 130px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.color.tertiary}
  }
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;

  padding-right: 15px;
  padding-left: 16px;

  & + li {
    margin-top: 15px;
  }
  
  > span {
    font-size: 18px;
    font-weight: 400;
    
    margin-left: 7px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 18px;
    line-height: 40px;

    background: ${props => props.color};

    border-radius: 7px;
    
    height: 47px;
    width: 47px;
  }
`;

export const SideRight = styled.main`
  flex: 1;

  display: flex;
  justify-content: center;

  min-height: 150px;

  padding: 30px 20px;
`;

