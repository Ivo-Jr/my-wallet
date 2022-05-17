import React from 'react';
import ContentHeader from '../../Components/ContantHeader';
import SelectInput from '../../Components/SelectInput';
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
        <SelectInput options={data} onChange={() => {}}/>
      </ContentHeader>
    </Container>
  );
}
