import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;

  width: 48%;
  height: 260px;

  background: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  border-radius: 7px;

  margin: 25px 0;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 40px;
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
  display: flex;
  flex: 1;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const WithoutRecords = styled.main`
  /* display: flex; */
`;