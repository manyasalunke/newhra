
import './App.css';
import FooterComponent from './components/Layout/FooterComponent';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import HeaderComponent from './components/Layout/HeaderComponent';
import LoginPage from './components/Pages/LoginPage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ServicesPage from './components/Pages/ServicePage';
import DashboardPage from './components/Pages/Dashboard';
import AddEmployee from './components/Pages/Employees/AddEmployee';
import EditEmployee from './components/Pages/Employees/EditEmployee';
import AttendanceForm from './components/Pages/Employees/AttendanceForm';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
            <Route exact path = "/" Component={HomePage}> </Route>
            <Route path = "/login" Component={LoginPage}> </Route>
            <Route path = "/about" Component={AboutPage}> </Route>
            <Route path = "/services" Component={ServicesPage}> </Route>
            <Route path = "/contact" Component={ContactPage}> </Route>
            <Route path = "/dashboard" Component={DashboardPage}> </Route>
            <Route path = "//add-employee" Component={AddEmployee}> </Route>
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
            <Route path="/attendance-form" element={<AttendanceForm />} />
            
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
