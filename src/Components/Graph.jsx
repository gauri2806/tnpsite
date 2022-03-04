import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';
const data = [
  {
    year: 2012,
    "No. of students": 300,
  },
  {
    year: 2013,
    "No. of students": 220,
  },
  {
    year: 2014,
    "No. of students": 320,
  },
  {
    year: 2015,
    "No. of students": 330,
  },
  {
    year: 2016,
    "No. of students": 120,
  },
  {
    year: 2017,
    "No. of students": 350,
  },
  {
    year: 2018,
    "No. of students": 170,
  },
  {
    year: 2019,
    "No. of students": 440,
  },
  {
    year: 2020,
    "No. of students": 380,
  },
  {
    year: 2021,
    "No. of students": 390,
  },
];

export default function Graph () {
return(<>

<h3 className="ms-5 mt-3">Students' Placements</h3>
<ResponsiveContainer width="100%" height={200}>
  <BarChart
    data={data}
    margin={{top: 0, right: 20, bottom: 20, left: 0}}
  >
    <XAxis dataKey="year" />
    <YAxis interval="preserveStartEnd" />
    <Tooltip />
    <Bar dataKey="No. of students" fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>

</>);
}
