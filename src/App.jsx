import React from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>My App</h1>

      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </div>
  );
};

export default App;
