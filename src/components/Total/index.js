import React from 'react';

import './styles.css';

const Total = (props) => {
  const { counters } = props;
  return (
    <div className="header">
      <span className="total_items">
        {counters.filter((e) => e.value > 0).length}
      </span>
      Items
    </div>
  );
};

export default Total;
