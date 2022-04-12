import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ManagerLogin from './components/ManagerLogin';
import CustomerLogin from './components/CustomerLogin';
import AddCustomer from './components/AddCustomer';
import CustomerDetail from './components/CustomerDetail';
import Home from './components/Home';
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/manager" element={<ManagerLogin/>} />
                <Route exact path="/customer" element={<CustomerLogin />} />
                <Route exact path="/addCustomer" element={<AddCustomer />} />
                <Route exact path="/customerDetail" element={<CustomerDetail/>} />
            </Routes>
        </Router>
  );
}

export default App;
