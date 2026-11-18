import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, increasebyvalue } from "./Redux/countslice";

const Counter = () => {
  const { count } = useSelector((state) => state.countslice);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      Counter
      <p>{count}</p>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
      <button onClick={() => dispatch(increasebyvalue(6))}>by value </button>
    </div>
  );
};

export default Counter;
