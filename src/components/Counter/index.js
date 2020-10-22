import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Counter = (props) => {
  const {
    counter: { value, id },
    increment,
    decrement,
  } = props;

  const classes = `${
    value === 0 ? 'zero' : 'not_zero'
  } counter_value_span`;

  return (
    <div className="counter">
      <div className="counter_value">
        <span className={classes}>
          {value === 0 ? 'Zero' : value}
        </span>
      </div>
      <div>
        <button
          type="button"
          className="button add_button"
          onClick={() => increment(id)}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          type="button"
          className="button minus_button"
          onClick={() => decrement(id)}
          disabled={value === 0 ? 'disabled' : ''}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
