import React from 'react';

import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell,
  Tooltip
} from 'recharts';
import formatCurrency from '../../utils/formatCurrency'

import { 
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend
} from './styles';

const BarChartBox = ({ data, title }) => (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

        <LegendContainer>
          {
            data.map((item, ind) => (
              <Legend key={ind} color={item.color}>
                <div>{item.percent}%</div>
                <span>{item.name}</span>
              </Legend>
            ))
          }
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data} >
            <Bar dataKey="amount">
              {data.map((indicator) => (
                <Cell 
                  key={indicator.name} 
                  fill={indicator.color}
                  cursor="pointer"
                />
              ))}
            </Bar>
            <Tooltip 
              formatter={(value) => formatCurrency(Number(value))}
              cursor={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
)

export default BarChartBox;