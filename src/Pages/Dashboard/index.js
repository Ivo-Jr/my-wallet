import React, {useMemo, useState, useEffect} from 'react';

import ContentHeader from '../../Components/ContantHeader';
import MessageBox from '../../Components/MessageBox';
import SelectInput from '../../Components/SelectInput';
import WalletBox from '../../Components/WalletBox';
import api from '../../services/api';

import monthsList from '../../utils/months';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg'
import phewImg from '../../assets/grinning.svg'

import { Container, Content } from './styles';
import PieChartBox from '../../Components/PieChartBox';

export default function Dashboard() {
  const [ expensesList, setExpensesList ] = useState([]);
  const [ gainsList, setGainsList ] = useState([]);
  const [ monthSelected, setMonthSelected ] = useState(new Date().getMonth() + 1);
  const [ yearSelected, setYearSelected ] = useState(new Date().getFullYear());
  const [ messageRecord, setMessageRecord ] = useState('');

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

    [...expensesList, ...gainsList].forEach(item => {
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
  },[expensesList, gainsList]);

  const handleMockedApiData = async () => {
    try{
      const [ expenses, gains ] = await Promise.all([
        api.get(`/expenses`),
        api.get(`/gains`)
      ]);
      
      setExpensesList(expenses.data);
      setGainsList(gains.data);
      
    } catch(err) {
      console.log(err);
    }
  }

  const handleMonthSelected = (month) => {
    if (month) {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    }
  }

  const handleYearSelected = (year) => {
    if (year) {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    }
  }

  const totalExits = useMemo(() => {
    let total = 0;

    expensesList.forEach(item => {
      const date = item.date.split('-');
      const month = Number(date[1]);
      const year = Number(date[0]);
      // const date = new Date(item.date);
      // const month = date.getMonth() + 1;
      // const year = date.getFullYear();

      if(month === monthSelected && year === yearSelected){
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number');
        }
      }
    })

    return total;

  }, [monthSelected, yearSelected, expensesList]);

  const totalEntry = useMemo(() => {
    let total = 0;

    gainsList.forEach(item => {
      const date = item.date.split('-');
      const month = Number(date[1]);
      const year = Number(date[0]);

      if(month === monthSelected && year === yearSelected){
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number');
        }
      }
    })

    return total;

  }, [monthSelected, yearSelected, gainsList]);

  const totalBalance = useMemo(() => {
    return totalEntry - totalExits;
  },[totalEntry, totalExits]);

  const mesage = useMemo(() => {
    if(totalBalance > 0){
      return {
        title: 'Very well!',
        description: 'Your wallet is positive',
        footerText: 'Keep it up. Consider investing your balance.',
        icon: happyImg
      }
    } else if(totalBalance === 0){
      return {
        title: 'Phew!',
        description: 'This month you spent exactly what you earned',
        footerText: 'Be careful, and in next month, try save your money',
        icon: phewImg
      }
    } else {
      return {
        title: 'Who sad!',
        description: 'This month you spent more that you should',
        footerText: 'Check your expenses and try to cut something',
        icon: sadImg
      }
    }

  }, [totalBalance]);

  const relativeExpensesVersusGains = useMemo(() => {
    const total = totalEntry + totalExits;
    const percentGains = (totalEntry / total) * 100;
    const percentExpenses = (totalExits / total) * 100;

    return [
      {
        name: 'Entry',
        value: totalEntry,
        percent: `${Number(percentGains.toFixed(0))}%`,
        color: '#F7931B'

      },
      {
        name: 'Exitis',
        value: totalExits,
        percent: `${Number(percentExpenses.toFixed(0))}%`,
        color: '#E44C4E'
      }
    ];
    
  },[totalEntry, totalExits]);

  useEffect(() => {
    handleMockedApiData();
  },[])

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectInput 
          options={month} 
          onChange={(e) => handleMonthSelected(e.target.value)} 
          defaultValue={monthSelected}
        />
        <SelectInput 
          options={year} 
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title='balance'
          color='#4E41F0'
          amount={totalBalance}
          footerLabel='Updaded based on entries and exits'
          icon='dolar'
        />
        <WalletBox
          title='entry'
          color='#F7931B'
          amount={totalEntry}
          footerLabel='Updaded based on entries and exits'
          icon='arrowUp'
        />
        <WalletBox
          title='exits'
          color='#E44C4E'
          amount={totalExits}
          footerLabel='Updaded based on entries and exits'
          icon='arrowDown'
        />

        <MessageBox
          title={mesage.title}
          description={mesage.description}
          footerText={mesage.footerText}
          icon={mesage.icon}
        />

        <PieChartBox data={relativeExpensesVersusGains}/>

      </Content>
    </Container>
  );
}
