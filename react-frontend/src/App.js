import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Register} from './Components/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import Employee from "./Components/Employee";
import Employe from "./Components/Employe";

function App() {
  const showToastMessage = (props) => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AdminDashboard/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Employee" element={<Employee/>}/>
          <Route exact path="/employee/:user_email" element={<Employe/>}/>
        </Routes>
      </div>
    </Router>
     <ToastContainer />
     </>
  );
}

export default App;
