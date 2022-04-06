import React from 'react';
import {
  Container,
} from 'react-bootstrap';

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  {
    year: "AY 13/14",
    "Under Graduate": 196,
    "Total": 196,
  },
  {
    year: "AY 14/15",
    "Under Graduate": 336,
    "Post Graduate": 19,
    "Total": 355,
  },
  {
    year: "AY 15/16",
    "Under Graduate": 375,
    "Post Graduate": 14,
    "Total": 389,
  },
  {
    year: "AY 16/17",
    "Under Graduate": 256,
    "Post Graduate": 19,
    "Total": 275,
  },
  {
    year: "AY 17/18",
    "Under Graduate": 211,
    "Post Graduate": 14,
    "Total": 225,
  },
  {
    year: "AY 18/19",
    "Under Graduate": 233,
    "Post Graduate": 19,
    "Total": 252,
  },
  {
    year: "AY 19/20",
    "Under Graduate": 280,
    "Post Graduate": 12,
    "Total": 292,
  },
];

export default function PGraph () {
return(<>

  <Container style={{textAlign: "center"}} className="pl-graph" fluid>
    <h3 style={{margin: "20px"}} >Placement Highlights</h3>
    <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="Under Graduate" stroke="#8884d8" />
          <Line type="linear" dataKey="Post Graduate" stroke="#82ca9d" />
          <Line type="linear" dataKey="Total" stroke="#f29961" />
        </LineChart>
      </ResponsiveContainer>
  </Container>

</>);
}
