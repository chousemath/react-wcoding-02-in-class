import "./styles.css";
import { useState } from "react";

const ColorButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  const handleClick = () => {
    switch (backgroundColor) {
      case "red":
        setBackgroundColor("green");
        break;
      case "green":
        setBackgroundColor("blue");
        break;
      case "blue":
        setBackgroundColor("red");
        break;
    }
  };
  return (
    <div
      style={{
        backgroundColor,
      }}
      onClick={handleClick}
      className="color-button"
    ></div>
  );
};

export default ColorButton;
