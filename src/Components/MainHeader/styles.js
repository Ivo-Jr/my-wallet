import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  
  background: ${props => props.theme.color.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  border-bottom: 1px solid ${props => props.theme.color.gray};
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  margin: 16px 36px 16px 0px;

  color: ${props => props.theme.color.white};
`;

export const Welcome = styled.div``;

export const UserName = styled.div``;
