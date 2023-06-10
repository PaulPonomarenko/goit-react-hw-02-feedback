import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((total, value) => total + value, 0);
  }
  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  // };
  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(good, total);
    return (
      <>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.onLeaveFeedback}
          options={options}
          total={total}
          positive={positiveFeedback}
        />
      </>
    );
  }
}
// {
//   /* <Section title="">
//         <FeedbackOptions />
//       </Section>
//       <Section>
//         <Statistics />
//       </Section> */
// }
