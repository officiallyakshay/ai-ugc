import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { AICreator } from "./AICreator";
import "./index.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Nav />
      {/* <button onClick={toggleTheme}>Toggle Dark Mode</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:id" element={<AICreator />} />
      </Routes>
    </div>
  );
};

export default App;
