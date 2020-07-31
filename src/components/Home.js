import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../hooks';

export const Home = () => {
  const size = useWindowSize();

  return (
    <div className="container text-center p-4">
      <h1 className="p-2">Welcome to Ocean's Big 5 Personality Assessment</h1>
      <div className="m-4">
        <p>
          This 50-question personality assessment is designed with the intention
          to help individuals understand their own emotional temperments. To do
          so, this assessment will measure the following personality traits:
        </p>
        <ul className="list-unstyled">
          <li>Extraversion</li>
          <li>Agreeableness</li>
          <li>Conscientiousness</li>
          <li>Neuroticism</li>
          <li>Openness</li>
        </ul>
        <p>
          AKA "The Big 5 Traits." These traits will be explained in further
          detail after the results have been given at the end of the test.
          However, if you'd like to learn more about these before taking the
          test, you can visit the Wikipedia article{' '}
          <a
            href="https://en.wikipedia.org/wiki/Big_Five_personality_traits"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <br />
        <p>
          Please answer the questions as truthfully as possible in order to
          produce the most accurate results.
        </p>
      </div>
      <br />
      <Link to="/questions" className="text-decoration-none">
        <button
          className={`btn btn-warning mx-auto text-light shadow-sm ${
            size.width < 400 ? 'btn-lg btn-block' : 'btn-lg'
          }`}
          type="button"
        >
          Begin
        </button>
      </Link>
    </div>
  );
};

export default Home;
