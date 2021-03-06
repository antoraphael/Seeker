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
import Basic from "./test components/Validations/formik";
import UserLogin from "./components/user/userLogin";
import StateMovies from "./test components/State managment/movies";
import StateMovie from "./test components/State managment/movie";
import { MovieList } from "./test components/State managment/movieContext";
import DemoIndexRedux from "./test components/Redux/demIndexRe";
import ReduxIndex from "./test components/Redux/ReIndex";
import MainAxios from "./test components/axios/axios";
import CompList from "./components/company/compList";
import Hire from "./components/company/hire";
import UserSignup from "./components/user/userSignup";
import UserList from "./components/user/userList";
import UserNav from "./components/user/userNav";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<CompLogin />} />
              <Route path="/signupa" element={<CompSignup />} />
              <Route path="/complist" element={<CompList />} />
              <Route path="/hire" element={<Hire />} />
              <Route path="/userlogin" element={<UserLogin />} />
              <Route path="/usersingup" element={<UserSignup />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/usernav" element={<UserNav />} />
              {/* <Route path="/newProduct" element={<AddProducts />} />  */}
            </Routes>
            {/*Practice Compoenets------------------------------------------------- */}
            <MovieList>
              <Routes>
                <Route path="/funcomp" element={<FunComp />} />
                <Route path="/effectHook" element={<EffectHook />} />
                <Route path="/lifecycle" element={<LifecycleDemo />} />
                <Route path="/hocmain" element={<HocMain />} />
                <Route path="/purecomp" element={<ParentComp />} />
                <Route path="/usemem" element={<Usemem />} />
                <Route path="/formik" element={<Basic />} />
                <Route path="/statemovs" element={<StateMovies />} />
                <Route path="/statemov" element={<StateMovie />} />
                <Route path="/dreindex" element={<DemoIndexRedux />} />
                <Route path="/reindex" element={<ReduxIndex />} />
                <Route path="/mainaxios" element={<MainAxios />} />
              </Routes>
            </MovieList>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
