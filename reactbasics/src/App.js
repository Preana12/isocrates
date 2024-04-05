import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import NewClassComponent from "./components/NewClassComponent";
import NewComponents from "./components/NewComponents";
import ParentComponent from "./components/PropComponent";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>

              <li><Link to="/new">NewComponent</Link></li>
            
              <li><Link to="/class">NewClassComponent</Link></li>
              <li><Link to="/prop">PropComponent</Link></li>
          
            </li>
          </ul>
        </nav>
        <h1> Hello Isocrates</h1>
      </div>
      <Routes>
        <Route path="/new" element={<NewComponents />} />
        <Route path="/class" element={<NewClassComponent />} />
        <Route path="/prop" element={<ParentComponent />} />
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
