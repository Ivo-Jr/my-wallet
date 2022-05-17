import React, { useEffect, useMemo, useState } from 'react';
import { useMatch } from 'react-router-dom';
import api from '../../services/api';

import HistoryFinaceCard from '../../Components/HistoryFinaceCard';
import ContentHeader from '../../Components/ContantHeader';
import SelectInput from '../../Components/SelectInput';

import formatDate from '../../utils/formatDate';
import monthsList from '../../utils/months';
import formatedCurrency from '../../utils/formatCurrency.js';

import { 
  Container, 
  Content, 
  Filters 
} from './styles';

export default function List() {
  const [ data, setData ] = useState([]);
  const [ listData, setListData ] = useState([]);
  const [ monthSelected, setMonthSelected ] = useState(new Date().getMonth() + 1);
  const [ yearSelected, setYearSelected ] = useState(new Date().getFullYear());
  const [ selectedFrequency, setSelectedFrequency ] = useState(['recurrent', 'eventual']);
  const [ loading, setLoading ] = useState(false);

  const { params } = useMatch('list/:type');
  
  const info = useMemo(() => {
    return params.type === "entry-balance" ? {
      title: 'Entrys',
      lineColor: '#4E41F0',
      path: 'gains'
    } : {
      title: 'Exits',
      lineColor: '#E44C4E',
      path: 'expenses'
    }
  },[params]);

  const handleMockedApiData = async () => {
    setLoading(true);

    try{
      const { data } = await api.get(`/${info.path}`);
      setListData(data);

      const filteredData = data.filter(item => {
        const date = item.date;
        const dateList = date.split('-');
        const month = Number(dateList[1]);
        const year = Number(dateList[0]);

        return (
          month === Number(monthSelected) 
          && year === Number(yearSelected)
          && selectedFrequency.includes(item.frequency)
        )
      });

      const newListData = filteredData.map(item => {
        return {
          description: item.description,
          amountFormatted: formatedCurrency(Number(item.amount)),
          type: item.type,
          frequency: item.frequency,
          date: formatDate(item.date),
          tagColor: item.frequency === 'recurrent' ? '#4E41F0' : '#E44C4E'
        }
      })

      setData(newListData);

    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleFrequencyClick = (frequency) => {
    const select = selectedFrequency.findIndex( item => item === frequency );

    if(select >= 0) {
      const alreadySelected = selectedFrequency.filter( item => item !== frequency);
      setSelectedFrequency(alreadySelected);
    }else {
      setSelectedFrequency((prev) => [ ...prev, frequency]);
    }
 };

  const month = useMemo(() => {
    return monthsList.map((month, ind) => {
        return {
          value: ind + 1,
          label: month
        }
    })
  }, []);
  
  const year = useMemo(() => {
    let uniqueYears = [];

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
  
      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
          value: year,
          label: year
        }
    })
  },[listData]);
  
  useEffect(() => {
    handleMockedApiData();
  }, [monthSelected, yearSelected, selectedFrequency]);

  return(
    <Container>
      {
        loading ?
          <h1>LOADING...</h1>  
        :
        <>
          <ContentHeader title={info.title} lineColor={info.lineColor}> 
            <SelectInput 
              options={month} 
              onChange={(e) => 
              setMonthSelected(e.target.value)} 
              defaultValue={monthSelected}/>
            <SelectInput 
              options={year} 
              onChange={(e) => setYearSelected(e.target.value)}
              defaultValue={yearSelected}
              />
          </ContentHeader>

          <Filters>
            <button
              type='button'
              className={`tag-filter tag-filter-recurrent 
              ${selectedFrequency.includes('recurrent') && 'actived'}`}
              onClick={() => handleFrequencyClick('recurrent')}
            >
              Recurrents
            </button>
            <button
              type='button'
              className={`tag-filter tag-filter-eventual
              ${selectedFrequency.includes('eventual') && 'actived'}`}
              onClick={() => handleFrequencyClick('eventual')}
            >
              Eventuals
            </button>
          </Filters>

          <Content>
            {
              data.map((item, ind) => (
                <HistoryFinaceCard
                    key={ind}
                    tagColor={item.tagColor}
                    title={item.description}
                    subtitle={item.date}
                    amount={item.amountFormatted}
                />
              ))
            }
          </Content>
        </>
      }
    </Container>
  );
}
