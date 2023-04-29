import Home from './Home';
import ContactUs from "./ContactUs";
import ViewDetails from "./ViewDetails";
import CreateTask from "./CreateTask";
import Signup from './Signup';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/ViewDetails" element={<ViewDetails />} />
            <Route path="/CreateTask" element={<CreateTask />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            
          </Routes>
        </Router>
      
      
    </div>
  );
}

export default App;
