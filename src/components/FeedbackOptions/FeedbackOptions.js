import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ good, bad, neutral, onLeaveFeedback }) => {
  const options = { good, bad, neutral };
  return (
    <>
      {Object.keys(options).map(option => (
        <button key={option} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
