import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Activate from "./pages/Activate/Activate";
import Feed from "./pages/Feed/Feed";
import Newproject from "./pages/NewProject/Newproject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-user" element={<Register />} />
        <Route path="/login-user" element={<Login />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/feed-projects" element={<Feed />} />
        <Route path="/new-project" element={<Newproject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
