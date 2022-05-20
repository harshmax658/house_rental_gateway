import HomePage from "./Pages/Home/HomePage";
import { AppStyle } from "./App._style";

import Header from "./components/header/Header";
import HouseCard from "./components/House Card/HouseCard";
import SignInAndSignup from "./Pages/signInSignup/SignInAndSignup";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import RouterHandler from "./RouterHandler";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  return (
    <AppStyle>
      <Header />
      <Routes>
        {!currentUser && <Route path="login" element={<SignInAndSignup />} />}
      </Routes>
      <Routes>
        <Route path="*" element={<RouterHandler />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
