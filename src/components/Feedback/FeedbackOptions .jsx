import React from "react";
import { Button } from "./styled/FeedbackOptions.styled";
import { PropTypes } from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <Button
            key={option}
            feedbackType={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.array.isRequired,
};
