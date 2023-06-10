export const Statistics = ({
  good,
  bad,
  neutral,
  onLeaveFeedback,
  options,
  total,
  positive,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
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
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p>Positive feedback:{positive}%</p>
        </li>
      </ul>
    </div>
  );
};
