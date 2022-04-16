import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pagase/Home/Home/Home";
import Login from "./Pagase/Login/Login/Login";
import Header from "./Pagase/ShearPage/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
