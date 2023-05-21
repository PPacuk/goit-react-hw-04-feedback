import React, { Component } from 'react';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  updateFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={() => this.updateFeedback('good')}>
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => this.updateFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={() => this.updateFeedback('bad')}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            Good: <span>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.state.bad}</span>
          </li>
          <li>
            Total: <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            Positive feedback:{' '}
            <span>
              {this.countPositiveFeedbackPercentage()
                ? this.countPositiveFeedbackPercentage()
                : 0}{' '}
              %
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
