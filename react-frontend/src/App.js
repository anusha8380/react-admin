import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Header from './Components/Header';

function App() {
  let urlLink = '/res';
  return (
    <Router>
      <div>
        <Header url={urlLink} />
        <ul>
          <li>
            <Link to="/register">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
        </ul>

        <hr />
        <Routes>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
