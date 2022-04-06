import React from 'react';
import {
  y1415,
  y1516,
  y1617,
  y1718,
  y1819,
  y1920,
} from './PData.jsx';
import {
  Container,
} from 'react-bootstrap';

import YearData from './YearData';

export default function PList () {
  return(<>

    <Container style={{ marginTop: "50px" }} >
      <h3>Year-wise Placement Record <span style={{ fontSize: "15px" }}>(Click to expand)</span></h3>
      <YearData label = "2014-2015" senddata={y1415} dwlink="https://drive.google.com/open?id=1eokvctueuVW8sgdKqJMDGr7M8dBkGASN_jFJKVAX_sI" />
      <YearData label = "2015-2016" senddata={y1516} dwlink="https://drive.google.com/open?id=1no43j1BZOxR_f4zU6NySVI5N1OCF3BGs1zuea_xkB-U" />
      <YearData label = "2016-2017" senddata={y1617} dwlink="https://drive.google.com/open?id=1lE9RIKAvC0Y-vnyeUwj8BhyeFUxeIqrYwfE-79gsn0A" />
      <YearData label = "2017-2018" senddata={y1718} dwlink="https://drive.google.com/open?id=1IkQGaqRHFaFuYEVjS6nmGRow8xGPO334Tze3ui146ww" />
      <YearData label = "2018-2019" senddata={y1819} dwlink="https://drive.google.com/open?id=1ynP20HWQtukjFU2-SKvLld7q9ju84fyQ1LUnnwZ1lps" />
      <YearData label = "2019-2020" senddata={y1920} dwlink="https://drive.google.com/open?id=1h29aO09MM555Z2sp3Jvykeb4B3JNUQw9qsFEPqE-xZg" />
    </Container>

</>);
}