import "./App.css";
import LoginPage from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import FunComp from "./test components/Functional components/functionalComponents";
import EffectHook from "./test components/Functional components/effectHook";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LifecycleDemo from "./test components/class components/lifecycle";
import HocMain from "./test components/Highorder components/hocMain";
import ParentComp from "./test components/pure components/parentComp";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container-fluid">
            {/* <LoginPage/> */}

            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/funcomp" element={<FunComp />} />
              <Route path="/effectHook" element={<EffectHook />} />
              <Route path="/lifecycle" element={<LifecycleDemo />} />
              <Route path="/hocmain" element={<HocMain />} />
              <Route path="/purecomp" element={<ParentComp />} />

              {/* <Route path="/newProduct" element={<AddProducts />} />  */}
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
