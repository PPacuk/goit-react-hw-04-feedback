import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import css from './App.module.css';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const onLeaveFeedback = type => this.updateFeedback(type);
    const { good, neutral, bad } = this.state;
    const options = this.state;

    return (
      <div className={css.mainContainer}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};
