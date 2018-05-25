import React from 'react';
import { Link } from 'react-router-dom';

const Pair = ({stock, rates, acive}) => (
  <Link to={`/${stock}`}  className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100">
      <h5 className="mb-1">{stock}</h5>
    </div>
    {Object.keys(rates).map(rate =>
        <small className="text-truncate d-block" key={rate}>{rate}: {rates[rate]}</small>
    )}
  </Link>
);

export default Pair;
