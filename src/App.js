import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pagase/About/About";
import Blooks from "./Pagase/Blooks/Blooks";
import CheackOut from "./Pagase/CheackOut/CheackOut";
import CoursDatalice from "./Pagase/CurseDetalic/CoursDatalice";
import Home from "./Pagase/Home/Home/Home";
import Login from "./Pagase/Login/Login/Login";
import Reagister from "./Pagase/Login/Reagister/Reagister";
import RequrieAuth from "./Pagase/Login/RequireAuth/RequrieAuth";
import NotFound from "./Pagase/NotFound/NotFound";
import Footer from "./Pagase/ShearPage/Footer/Footer";
import Header from "./Pagase/ShearPage/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/course/:courseId"
          element={<CoursDatalice></CoursDatalice>}
        ></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reagister" element={<Reagister></Reagister>}></Route>
        <Route
          path="cheackout"
          element={
            <RequrieAuth>
              <CheackOut></CheackOut>
            </RequrieAuth>
          }
        ></Route>
        <Route path="/blooks" element={<Blooks></Blooks>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
