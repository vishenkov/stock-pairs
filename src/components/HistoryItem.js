import React from 'react';

const About = ({ data }) => (
  <tr className={data.type === 'sell' ? 'table-danger' : 'table-success'}>
    <th scope="row">{data.globalTradeID}</th>
    <td>{data.date}</td>
    <td>{data.type}</td>
    <td>{data.rate}</td>
    <td>{data.amount}</td>
    <td>{data.total}</td>
  </tr>
);

export default About;
