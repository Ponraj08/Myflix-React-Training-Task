import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Table from "./pages/Table";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/table/:id" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
