import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';
import Results from './Results';
import { Link } from 'react-router-dom';

const Questions = props => {
  // Scroll to the top of page on start
  useEffect(() => {
    props.scrollToRef(TopOfPageRef);
    //eslint-disable-next-line
  }, []);

  const TopOfPageRef = useRef(null);

  return (
    <div className="container" ref={TopOfPageRef}>
      <div className="container p-0">
        <Link to="/">
          <button className="btn btn-light mt-4 shadow-sm">
            <i className="fas fa-arrow-left"></i> BACK
          </button>
        </Link>
        <div className="text-center">
          <form onSubmit={props.handleSubmit}>
            <ul className="list-unstyled">
              {props.questions.map(q => (
                <QuestionItem
                  prompt={q.prompt}
                  trait={q.trait}
                  isPositive={q.isPositive}
                  value={props.value}
                  id={q.id}
                  key={q.id}
                  callbackValue={props.callbackValue}
                  handleChange={props.handleChange}
                />
              ))}
            </ul>
            <div>
              <button
                className="btn btn-warning btn-lg btn-block my-5 p-3 rounded-pill"
                type="submit"
              >
                Get results
              </button>
            </div>
          </form>
          {props.showResults && (
            <Results totals={props.totals} scrollToRef={props.scrollToRef} />
          )}
        </div>
      </div>
    </div>
  );
};

Questions.propTypes = {
  addValues: PropTypes.func,
  handleSubmit: PropTypes.func,
  callback: PropTypes.func,
  totals: PropTypes.object,
  showResults: PropTypes.bool,
  scrollToRef: PropTypes.func,
};

export default Questions;
