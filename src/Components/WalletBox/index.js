import React, { useMemo } from 'react';
import Countup from 'react-countup';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

export default function WalletBox({
  title,
  color,
  amount,
  footerLabel,
  icon,
}) {

  const image = useMemo(() => {
    switch (icon) {
      case 'dolar': 
        return dolarImg;
      case 'arrowUp': 
        return arrowUpImg;
      case 'arrowDown': 
        return arrowDownImg;
      default:
        break;
    }
  },[icon]);


  return (
    <Container color={color}>
      <span>{title}</span>
        <h1>
          <Countup
            start={'0'}
            end={amount}
            prefix={"R$ "}
            separator="."
            decimal=','
            decimals={2}
            duration={1}
          />
        </h1>
      <small>{footerLabel}</small>
      <img src={image} alt={title} />
    </Container>
  );
}
