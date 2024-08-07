import React, { useState } from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  // Initialize state using the useState hook
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the dark mode
  const changeMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
      <Header isDarkMode={isDarkMode} />
      <Main isDarkMode={isDarkMode} />
      <SwitchButton isDarkMode={isDarkMode} changeMode={changeMode} />
    </div>
  );
};

export default App;
