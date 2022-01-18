import "./App.css";
import CompLogin from "./components/company/login";
import "bootstrap/dist/css/bootstrap.min.css";
import FunComp from "./test components/Functional components/functionalComponents";
import EffectHook from "./test components/Functional components/effectHook";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LifecycleDemo from "./test components/class components/lifecycle";
import HocMain from "./test components/Highorder components/hocMain";
import ParentComp from "./test components/pure components/parentComp";
import Usemem from "./test components/Functional components/usemem";
import CompSignup from "./components/company/signup";
import Basic from "./test components/validations/formik";
import UserLogin from "./components/user/userLogin";
import StateMovies from "./test components/state managment/movies";
import StateMovie from "./test components/state managment/movie";
import { MovieList } from "./test components/state managment/movieContext";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container-fluid">
            {/* <LoginPage/> */}
            <MovieList>
              <Routes>
                <Route path="/" element={<CompLogin />} />
                <Route path="/signupa" element={<CompSignup />} />
                <Route path="/userlogin" element={<UserLogin />} />

                <Route path="/funcomp" element={<FunComp />} />
                <Route path="/effectHook" element={<EffectHook />} />
                <Route path="/lifecycle" element={<LifecycleDemo />} />
                <Route path="/hocmain" element={<HocMain />} />
                <Route path="/purecomp" element={<ParentComp />} />
                <Route path="/usemem" element={<Usemem />} />
                <Route path="/formik" element={<Basic />} />
                <Route path="/statemovs" element={<StateMovies />} />
                <Route path="/statemov" element={<StateMovie />} />

                {/* <Route path="/newProduct" element={<AddProducts />} />  */}
              </Routes>
            </MovieList>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
