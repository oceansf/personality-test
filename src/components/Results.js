import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from '../hooks';

const Results = props => {
  const QuestionsEndRef = useRef(null);

  useEffect(() => {
    props.scrollToRef(QuestionsEndRef);
    //eslint-disable-next-line
  }, [props.showResults]);

  const extraversion = props.totals.extraversion;
  const agreeableness = props.totals.agreeableness;
  const conscientiousness = props.totals.conscientiousness;
  const neuroticism = props.totals.neuroticism;
  const openness = props.totals.openness;

  const size = useWindowSize();

  const updateSpan = () => {
    return `${size.width < 500 ? 'd-none d-sm-block' : null}`;
  };

  const checkTotal = trait => {
    if (trait <= 20) {
      return (
        <h6>
          <i className="fas fa-arrow-down text-danger"></i>
          <i className="fas fa-arrow-down text-danger"></i>{' '}
          <span className={updateSpan()}>LOW</span>
        </h6>
      );
    } else if (trait > 20 && trait <= 40) {
      return (
        <h6>
          <i className="fas fa-arrow-down text-danger"></i>{' '}
          <span className={updateSpan()}>MODERATELY LOW</span>
        </h6>
      );
    } else if (trait > 40 && trait <= 60) {
      return (
        <h6>
          <span className={updateSpan()}>AVERAGE</span>
        </h6>
      );
    } else if (trait > 60 && trait <= 80) {
      return (
        <h6>
          <i className="fas fa-arrow-up text-primary"></i>{' '}
          <span className={updateSpan()}>MODERATELY HIGH</span>
        </h6>
      );
    } else if (trait > 80) {
      return (
        <h6>
          <i className="fas fa-arrow-up text-primary"></i>
          <i className="fas fa-arrow-up text-primary"></i>{' '}
          <span className={updateSpan()}>HIGH</span>
        </h6>
      );
    } else {
      return 'UNKNOWN';
    }
  };

  return (
    <div className="card text-left mb-3 shadow border-0">
      <div className="card-body">
        <h2 className="p-2">Your results: </h2>
        <div
          className={`d-flex justify-content-between align-items-baseline px-4`}
        >
          <h4>Extraversion</h4>
          {checkTotal(extraversion)}
        </div>

        <div className="progress mb-3 mx-4">
          <div
            className="progress-bar "
            role="progressbar"
            style={{ width: `${extraversion}%` }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {extraversion}%
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-baseline px-4">
          <h4>Agreeableness</h4>
          {checkTotal(agreeableness)}
        </div>
        <div className="progress mb-3 mx-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${agreeableness}%` }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {agreeableness}%
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-baseline px-4">
          <h4>Conscientiousness</h4>
          {checkTotal(conscientiousness)}
        </div>
        <div className="progress mb-3 mx-4">
          <div
            className="progress-bar "
            role="progressbar"
            style={{ width: `${conscientiousness}%` }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {conscientiousness}%
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-baseline px-4">
          <h4>Neuroticism</h4>
          {checkTotal(neuroticism)}
        </div>
        <div className="progress mb-3 mx-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${neuroticism}%` }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {neuroticism}%
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-baseline px-4">
          <h4>Openness</h4>
          {checkTotal(openness)}
        </div>
        <div className="progress mb-3 mx-4">
          <div
            className="progress-bar "
            role="progressbar"
            style={{ width: `${openness}%` }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {openness}%
          </div>
        </div>
      </div>
      <div ref={QuestionsEndRef}></div>
    </div>
  );
};

Results.propTypes = {
  totals: PropTypes.object,
};

export default Results;
