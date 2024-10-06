import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../../../frontend/src/components/MainPage/MainPage";
import NotFound from "../../../frontend/src/components/NotFound/NotFound";
import Header from "./Components/Header/Header"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;