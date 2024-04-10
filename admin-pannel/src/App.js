//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar";
import HomeDashboard from "./components/HomeDashboard";
import UserSignUp from "./components/UserSignUp";
import UserLogin from "./components/UserLogin";
import PrivateCompo from "./components/PrivateCompo";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<PrivateCompo />}>
          <Route path="/" element={<HomeDashboard />} />
        </Route>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
