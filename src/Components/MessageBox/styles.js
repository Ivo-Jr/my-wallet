import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  border-radius: 7px;

  margin: 25px 0;
  padding: 30px 20px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > header img {
    width: 35px;
    margin-left: 5px; 
  }

  > header p {
    font-size: 18px;
  }


`;