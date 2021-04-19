import React, { Component } from 'react';
import Layout from './components/Layout';
import Section from './components/Section';
import FeedbackControls from './components/FeedbackControls';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = label => {
    this.setState(prevState => ({ [label]: prevState[label] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positive = good / (good + neutral + bad);
    return positive && Math.round(positive * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <Section title="Please leave us feedback">
          <FeedbackControls onLeaveFeedback={this.addFeedback} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Layout>
    );
  }
}

export default App;
