import React from 'react';
import ContentHeader from '../ContantHeader';
import SelectInput from '../SelectInput';

import { Container } from './styles';

export default function Dashboard() {

  const data = [
    {value: 'a', label: 'Ana'},
    {value: 'b', label: 'Bianca'},
    {value: 'c', label: 'Camila'},
  ]


  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff"> 
        <SelectInput options={data} />
      </ContentHeader>
    </Container>
  )
}
