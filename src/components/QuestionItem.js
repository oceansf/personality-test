import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from '../hooks';

const QuestionItem = props => {
  const [value, setValue] = useState(3);

  useEffect(() => {
    props.callbackValue(value, props.id);
    //eslint-disable-next-line
  }, [value]);

  // Update the current question value
  const handleChange = e => {
    setValue(e.target.value);
  };

  const size = useWindowSize();

  return (
    <div className="container p-0">
      <li className="mt-5">
        <h4>{`${props.id}. ${props.prompt}`}</h4>
        <div
          className={`btn-group ${size.width < 500 ? 'btn-group-sm' : null}
          btn-group-toggle mt-2`}
          data-toggle="buttons"
        >
          <label className="btn btn-outline-primary">
            <input
              type="radio"
              name={props.id}
              id="sa"
              value={props.isPositive ? 5 : 1}
              onClick={handleChange}
            />
            Strongly Agree
          </label>
          <label className="btn btn-outline-primary">
            <input
              type="radio"
              name={props.id}
              id="a"
              value={props.isPositive ? 4 : 2}
              onClick={handleChange}
            />
            Agree
          </label>
          <label className="btn btn-outline-primary">
            <input
              type="radio"
              name={props.id}
              id="n"
              value={3}
              onClick={handleChange}
            />
            Neutral
          </label>
          <label className="btn btn-outline-primary">
            <input
              type="radio"
              name={props.id}
              id="d"
              value={props.isPositive ? 2 : 4}
              onClick={handleChange}
            />
            Disagree
          </label>
          <label className="btn btn-outline-primary">
            <input
              type="radio"
              name={props.id}
              id="sd"
              value={props.isPositive ? 1 : 5}
              onClick={handleChange}
            />
            Strongly Disagree
          </label>
        </div>

        {/* Helps to visualize values */}
        {/* <div className="text-light bg-info">
          <h5>Trait: {props.trait}</h5>
          <h5>Weight: {props.isPositive ? '+' : '-'}</h5>
          <h5>Current Value: {value}</h5>
        </div> */}
      </li>
    </div>
  );
};

QuestionItem.propTypes = {
  prompt: PropTypes.string,
  trait: PropTypes.string,
  isPositive: PropTypes.bool,
  id: PropTypes.number,
  callback: PropTypes.func,
};

export default QuestionItem;
