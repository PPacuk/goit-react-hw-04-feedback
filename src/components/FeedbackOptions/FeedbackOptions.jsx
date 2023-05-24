import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <ul className={css.btnList}>
        <li>
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={() => this.props.onLeaveFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={() => this.props.onLeaveFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={() => this.props.onLeaveFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}
export default FeedbackOptions;
