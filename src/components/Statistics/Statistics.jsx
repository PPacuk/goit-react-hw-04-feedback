import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.props;

    return (
      <ul className={css.statList}>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{totalFeedback}</span>
        </li>
        <li>
          Positive feedback: <span>{positivePercentage}%</span>
        </li>
      </ul>
    );
  }
}

export default Statistics;
