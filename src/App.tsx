import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authorization from "./pages/Authorization";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import authContext from "./context/authContext";
import { User } from "./types/User";
import News from "./components/News/News";
import New from "./components/New/New";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<User>({});
  console.log(auth, user);

  return (
    <div className="App">
      <authContext.Provider value={{ auth, user, setAuth, setUser }}>
        <Header />
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<New />} />
          {auth === false && <Route path="/*" element={<Authorization />} />}
          <Route path="/reg" element={<Registration />} />
          <Route path="/auth" element={<Authorization />} />
          {auth && <Route path="/*" element={<Main />} />}
        </Routes>
        <Footer />
      </authContext.Provider>
    </div>
  );
};

export default App;
