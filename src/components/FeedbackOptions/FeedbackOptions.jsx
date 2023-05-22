import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => this.props.onLeaveFeedback('good')}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => this.props.onLeaveFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => this.props.onLeaveFeedback('bad')}
            >
              Bad
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default FeedbackOptions;
