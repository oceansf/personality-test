import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from '../hooks';

const Results = ({ totals, scrollToRef }) => {
  // Scroll to the bottom on render
  useEffect(() => {
    scrollToRef(QuestionsEndRef);
    //eslint-disable-next-line
  }, []);

  const QuestionsEndRef = useRef(null);

  // Traits
  const extraversion = totals.extraversion;
  const agreeableness = totals.agreeableness;
  const conscientiousness = totals.conscientiousness;
  const neuroticism = totals.neuroticism;
  const openness = totals.openness;

  // Size object that contains the height and width properties of the screen
  const size = useWindowSize();

  // Hide span on smaller screens
  const updateSpan = () => {
    return `${size.width < 500 ? 'd-none d-sm-block' : null}`;
  };

  const headerClass =
    'd-flex justify-content-between align-items-baseline px-4';

  const progressBar = trait => {
    return (
      <div className="progress mb-3 mx-4">
        <div
          className="progress-bar "
          role="progressbar"
          style={{ width: `${trait}%` }}
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {trait}%
        </div>
      </div>
    );
  };

  const arrowIcon = (direction, color) => {
    return <i className={`fas fa-arrow-${direction} text-${color}`}></i>;
  };

  const checkTotal = trait => {
    if (trait <= 20) {
      return (
        <h6>
          {arrowIcon('down', 'danger')}
          {arrowIcon('down', 'danger')}
          <span className={updateSpan()}>LOW</span>
        </h6>
      );
    } else if (trait > 20 && trait <= 40) {
      return (
        <h6>
          {arrowIcon('down', 'danger')}
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
          {arrowIcon('up', 'primary')}
          <span className={updateSpan()}>MODERATELY HIGH</span>
        </h6>
      );
    } else if (trait > 80) {
      return (
        <h6>
          {arrowIcon('up', 'primary')}
          {arrowIcon('up', 'primary')}
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
        <div className={headerClass}>
          <h4>Extraversion</h4>
          {checkTotal(extraversion)}
        </div>
        {progressBar(extraversion)}
        <div className={headerClass}>
          <h4>Agreeableness</h4>
          {checkTotal(agreeableness)}
        </div>
        {progressBar(agreeableness)}
        <div className={headerClass}>
          <h4>Conscientiousness</h4>
          {checkTotal(conscientiousness)}
        </div>
        {progressBar(conscientiousness)}
        <div className={headerClass}>
          <h4>Neuroticism</h4>
          {checkTotal(neuroticism)}
        </div>
        {progressBar(neuroticism)}
        <div className={headerClass}>
          <h4>Openness</h4>
          {checkTotal(openness)}
        </div>
        {progressBar(openness)}
      </div>
      <div ref={QuestionsEndRef}></div>
    </div>
  );
};

Results.propTypes = {
  totals: PropTypes.object,
  scrollToRef: PropTypes.func,
};

export default Results;
