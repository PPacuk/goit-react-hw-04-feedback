import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import css from './App.module.css';
import PropTypes from 'prop-types';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(good + 1);
  };
  const updateNeutral = () => {
    setNeutral(neutral + 1);
  };
  const updateBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <div className={css.mainContainer}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          updateGood={updateGood}
          updateNeutral={updateNeutral}
          updateBad={updateBad}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"/>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};

App.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};
export default App;
