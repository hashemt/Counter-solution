import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Reset = (props) => {
  const { reset } = props;
  return (
    <button className="reset_button" type="button" onClick={reset}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  );
};

export default Reset;
