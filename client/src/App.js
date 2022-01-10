import './App.css';
import LoginPage from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunComp from './test components/functionalComponents';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className='container-fluid'>
        {/* <LoginPage/> */}

        <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/funcomp" element={<FunComp />} />
              {/* <Route path="/products" element={<Products />} />
              <Route path="/newProduct" element={<AddProducts />} /> */}
            </Routes>
        </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
