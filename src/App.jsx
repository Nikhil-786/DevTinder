import "./App.css";
import Body from "./components/Body";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
