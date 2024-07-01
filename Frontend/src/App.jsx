import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activate from "./pages/Activate/Activate";
import Newproject from "./pages/NewProject/Newproject";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login-user" element={<Login />} />
        <Route path="/register-user" element={<Register />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/feed-projects" element={<Feed />} />
        <Route path="/profile-user" element={<Profile />} />
        <Route path="/new-project" element={<Newproject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
