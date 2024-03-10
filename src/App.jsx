import React from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import { Route, Routes } from "react-router-dom";
import AddItemPage from "./components/AddItemPage";
const LazyComponent = React.lazy(() => import("./components/LazyComponent"));

const App = () => {
  const handleAddItem = (newItem) => {
    console.log("New item added:", newItem);
  };

  return (
    <div>
      <h1>My catalog</h1>

      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        {/* <Route path="/add-item" element={<AddItemPage />} />; */}
        <Route
          path="/add-item"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AddItemPage onAddItem={handleAddItem} />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
