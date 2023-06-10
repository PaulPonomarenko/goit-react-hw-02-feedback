export const Statistics = ({
  good,
  bad,
  neutral,
  onLeaveFeedback,
  options,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {/* <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button> */}
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>Bad:{bad}</p>
        </li>
      </ul>
    </div>
  );
};
