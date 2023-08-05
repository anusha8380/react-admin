import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Register} from './Components/Register';
import Header from './Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";


function App() {
  const showToastMessage = (props) => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  let urlLink = '/res';
  let logout = () =>{
    console.log('logout');
  }
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </div>
    </Router>
    {/* <button onClick={showToastMessage}>Notify</button> */}
     <ToastContainer />
     </>
  );
}

export default App;
