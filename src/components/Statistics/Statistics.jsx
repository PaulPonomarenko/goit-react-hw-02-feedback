export const Statistics = ({ good, bad, neutral, total, positive }) => {
  return (
    <div>
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
