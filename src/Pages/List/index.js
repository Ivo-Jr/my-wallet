import React, { useMemo } from 'react';
import ContentHeader from '../../Components/ContantHeader';
import { useMatch } from 'react-router-dom';
import HistoryFinaceCard from '../../Components/HistoryFinaceCard';
import SelectInput from '../../Components/SelectInput';

import { Container, Content, Filters } from './styles';

export default function List() {

  const { params } = useMatch('list/:type');

  const header = useMemo(() => {
    return params.type === "entry-balance" ? {
      title: 'Entradas',
      lineColor: '#4E41F0'
    } : {
      title:'Saídas',
      lineColor: '#E44C4E'
    }
  },[params])

  const month = [
    {value: 7, label: 'Julho'},
    {value: 8, label: 'Setembro'},
    {value: 9, label: 'Outubro'},
  ];

  const year = [
    {value: 2021, label: 2021},
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},
  ]

  return(
    <Container>
      <ContentHeader title={header.title} lineColor={header.lineColor}> 
        <SelectInput options={month} />
        <SelectInput options={year} />
      </ContentHeader>

      <Filters>
        <button
          type='button'
          className='tag-filter tag-filter-recurent'
        >
          Recorrentes
        </button>
        <button
          type='button'
          className='tag-filter tag-filter-eventual'
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinaceCard
            tagColor='#E44C4E'
            title='Conta de luz'
            subtitle='27/07/2022'
            amount='R$ 130,00'
        />
      </Content>
    </Container>
  );
}
