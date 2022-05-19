import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authorization from "./pages/Authorization";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
