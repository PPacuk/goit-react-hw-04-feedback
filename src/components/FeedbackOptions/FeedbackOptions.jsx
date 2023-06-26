import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ updateGood, updateNeutral, updateBad }) => {
  return (
    <ul className={css.btnList}>
      <li>
        <button
          className={css.feedbackBtn}
          type="button"
          onClick={() => updateGood()}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.feedbackBtn}
          type="button"
          onClick={() => updateNeutral()}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.feedbackBtn}
          type="button"
          onClick={() => updateBad()}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
