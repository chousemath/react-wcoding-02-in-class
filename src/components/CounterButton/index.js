import "./styles.css";
import { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  //const resetCount = () => {
  //  setCount(0);
  //};
  return (
    <div onClick={handleClick} className="counter-button">
      {count}
    </div>
  );
};

export default CounterButton;
