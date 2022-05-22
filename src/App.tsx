import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authorization from "./pages/Authorization";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import authContext from "./context/authContext";
import { User } from "./types/User";
import UserPage from "./pages/User";
const App = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<User>({});

  return (
    <div className="App">
      <authContext.Provider value={{ auth, user, setAuth, setUser }}>
        <Header />
        <Routes>
          {auth === false && <Route path="/*" element={<Authorization />} />}
          <Route path="/reg" element={<Registration />} />
          <Route path="/auth" element={<Authorization />} />
          {auth && <Route path="/*" element={<Main />} />}
          {auth && <Route path="/user/*" element={<UserPage />} />}
        </Routes>
        <Footer />
      </authContext.Provider>
    </div>
  );
};

export default App;
