import React, { Component } from "react";

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";



export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleLeaveFeedback = Event => {
    const {name} = Event.target;
    this.setState(state => ({ [name]: state[name] + 1}));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
      < Section title="Please Leave Feedback">
      <FeedbackOptions
      options={this.state}
      onLeaveFeedback={this.handleLeaveFeedback}
      />
      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>) : (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
          />)}
          </Section>
          </>
    );
  }
} 
