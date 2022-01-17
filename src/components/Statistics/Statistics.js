import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({ good, neutral, bad, totalCount, feedbackCount }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalCount}</p>
      <p>Positive feedback:{feedbackCount}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalCount: PropTypes.number,
  feedbackCount: PropTypes.number,
};

export default Statistics;
