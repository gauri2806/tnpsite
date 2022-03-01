import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
const data = [
    {
      name: 'Page A',
      pv: 2400,
    },
    {
      name: 'Page B',
      pv: 1398,
    },
    {
      name: 'Page C',
      pv: 9800,
    },
];

export default function Graph () {
return(<>

<BarChart
    width={500}
    height={300}
    data={data}
>
    <XAxis dataKey="name" />
    <YAxis interval="preserveEnd" />
    <Tooltip />
    <Bar dataKey="pv" fill="#8884d8" />
</BarChart>

</>);
}
