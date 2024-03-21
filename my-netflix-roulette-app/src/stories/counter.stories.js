import React from "react";
import CounterApp from "../components/Counter/counter";

export default {
  title: "CounterApp",
  component: CounterApp,
};

export const Increment = () => <CounterApp initialValue={0} />;
export const Decrement = () => <CounterApp initialValue={10} />;