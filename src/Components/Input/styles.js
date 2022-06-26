import styled from "styled-components";

import emailImg from '../../assets/email.svg';
import lockImg from '../../assets/lock.svg';

export const InputComponent = styled.input`
    width: 100%;
  
    margin: 7px 0;
    padding: 10px 10px 10px 40px;

    border: 2px solid transparent;
    border-radius: 5px;

    background-image: url(${props => props.type === 'email' ? `${emailImg}` : `${lockImg}`});
    background-repeat: no-repeat;
    background-position: 4%;
`;
