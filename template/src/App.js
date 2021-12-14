import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Count from "./views/Count";
import { Space } from "antd";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/count">Count</Link>
          </Space>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="count" element={<Count />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
