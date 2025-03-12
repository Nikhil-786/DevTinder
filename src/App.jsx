import "./App.css";
import Body from "./Body";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
