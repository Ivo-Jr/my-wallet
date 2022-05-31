import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight,
} from './styles';

const PieChartBox = ({ data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>Account movement</h2>
        <LegendContainer>
          {
            data.map((item, ind) => (
              <Legend key={ind} color={item.color}>
                <div>{item.percent}</div>
                <span>{item.name}</span>
              </Legend>
            ))
          }
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value">
              {
                data.map((indicator) => (
                  <Cell key={indicator.name} fill={indicator.color}/>
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
 
    </Container>
  )
};


export default PieChartBox