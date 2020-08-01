import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Questions from './Questions';
import questionsData from '../questionsData';
import Home from './Home';

const App = () => {
  const [totals, setTotals] = useState({
    extraversion: 0,
    agreeableness: 0,
    conscientiousness: 0,
    neuroticism: 0,
    openness: 0,
  });
  const [showResults, setShowResults] = useState(false);

  // Scroll to a specified location on the page
  const scrollToRef = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  /* Get the current value from the QuestionItem component 
  and update its relative value within the questionsData object */
  const callbackValue = (value, id) => {
    const updatedValue = Number(value, id);
    questionsData[id - 1].value = updatedValue;
    setShowResults(false);
  };

  // Add all the values of questions by trait
  const addValues = trait => {
    let arr = questionsData.filter(q => q.trait === `${trait}`);
    arr = arr.map(q => q.value);
    let total = arr.reduce((a, b) => a + b);
    total = Math.floor((total / 50) * 100);
    return total;
  };

  // Calculates the final results for each trait
  const handleSubmit = e => {
    e.preventDefault();
    setTotals({
      extraversion: addValues('extraversion'),
      agreeableness: addValues('agreeableness'),
      conscientiousness: addValues('conscientiousness'),
      neuroticism: addValues('neuroticism'),
      openness: addValues('openness'),
    });
    setShowResults(true);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/questions"
          render={() => (
            <Questions
              questions={questionsData}
              addValues={addValues}
              handleSubmit={handleSubmit}
              callbackValue={callbackValue}
              totals={totals}
              showResults={showResults}
              scrollToRef={scrollToRef}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
