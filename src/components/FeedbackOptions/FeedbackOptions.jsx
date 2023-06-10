import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.options__list}>
        {options.map(option => {
          return (
            <li key={option} className={css.option__item}>
              <button
                type="button"
                className={css.option__button}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
