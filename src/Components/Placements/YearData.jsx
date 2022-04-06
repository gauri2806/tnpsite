import React, { useState, useRef } from 'react';
import './YearData.css'


import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function YearData(props) {

  const [isOpen, setIsOpen] = useState(false);
  const contentdiv = useRef();

  return (<>

    <div className="collapsible">
      <button onClick={() => setIsOpen(!isOpen)}>{props.label}</button>
      <div
        className="content"
        ref={contentdiv}
        style={isOpen ? { height: contentdiv.current.scrollHeight + "px", } : { height: "0px", }}
      >
        <div className="parent">
          <ResponsiveContainer height={400} width="100%">
            <BarChart
              data={props.senddata}
              margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 50,
              }}
            >
              <XAxis dataKey="dept" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Undergrad Total" stackId='a' fill="#8884d8" />
              <Bar dataKey="Undergrad Placed" stackId='a' fill="#aaa6fa" />
              <Bar dataKey="Postgrad Total" stackId='b' fill="#82ca9d" />
              <Bar dataKey="Postgrad Placed" stackId='b' fill="#a4ecaf" />
            </BarChart>
          </ResponsiveContainer>
          <p className="download">Click <a href={props.dwlink}>here</a> to download recruiter details.</p>
        </div>
      </div>
    </div>

  </>);

}