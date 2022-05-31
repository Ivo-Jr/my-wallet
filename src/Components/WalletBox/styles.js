import styled from 'styled-components';

export const Container = styled.div`
  width: 32%;
  height: 150px;

  margin: 10px 0;

  background: ${props => props.color};
  color: ${props => props.theme.color.white};
  font-weight: 700;

  border-radius: 7px;
  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  > span {
    font-size: 20px;
    line-height: 23px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    font-weight: 400;

    position: absolute;
    bottom: 10px;
  }

  > img {
    height: 110%;

    position: absolute;
    top: -10px;
    right: -30px;
    
    opacity: .3;
  }
`;