import React from 'react';
import './Charts.css';

import {
  Container,
} from 'react-bootstrap';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  LabelList,
  Legend
} from 'recharts';
import { Tooltip } from 'bootstrap';

const deptcolors = ["#ee7b0c", "#dc2e27", "#0db4df", "#dd74a1", "#44d269", "#6ab6da", "#00ffff", "#0000ff", "#32a195", "#a764e6"];

// DATA
const pl2015 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2016 = [
  {dept: "Chem", fill: deptcolors[0], value: 5 },
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2017 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2018 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2019 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2020 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2021 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];
const pl2022 = [
  {dept: "Chem", fill: deptcolors[0], value: 5},
  {dept: "Civil", fill: deptcolors[1], value: 21 },
  {dept: "CSE", fill: deptcolors[2], value: 93 },
  {dept: "Elec", fill: deptcolors[3], value: 15 },
  {dept: "EXTC", fill: deptcolors[4], value: 101 },
  {dept: "Inst", fill: deptcolors[5], value: 39 },
  {dept: "IT", fill: deptcolors[6], value: 42 },
  {dept: "Mech", fill: deptcolors[7], value: 3 },
  {dept: "Prod", fill: deptcolors[8], value: 19 },
  {dept: "Text", fill: deptcolors[9], value: 15 },
];

// DATA ENDS

export default function Charts() {
  return(<>

    <Container className="charts" fluid>
      <ResponsiveContainer width="20%" height={400}>
        <PieChart>
          <Pie
            dataKey = "value"
            data = {pl2015}
            fill = "#ffffff"
          >
            <LabelList dataKey="value" position="inside" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Container>

</>);
}