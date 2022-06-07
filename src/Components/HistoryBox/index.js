import React from 'react';
import { 
  CartesianGrid, 
  LineChart, 
  ResponsiveContainer, 
  XAxis, 
  Tooltip,
  Line
} from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

import { 
  Container, 
  ChartContainer, 
  Header, 
  LegendContainer, 
  Legend 
} from './styles';

const HistoryBox = ({ data, lineColorAmountEntry, lineColorAmountOutput}) => {
  return (
    <Container>
      <Header>
        <h2>Balance history</h2>
        
        <LegendContainer>
          <Legend color={lineColorAmountEntry}>
            <div/>
            <span>Entry</span>
          </Legend>

          <Legend color={lineColorAmountOutput}>
            <div/>
            <span>Exits</span>
          </Legend>
        </LegendContainer>
      </Header>

      <ChartContainer>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" />
            <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
            <Line 
              type="monotone" 
              dataKey="amountEntry" 
              name="Entry"
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="amountOutput" 
              name="Exits"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  )
}

export default HistoryBox;