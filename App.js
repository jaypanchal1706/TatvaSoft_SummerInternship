import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage";
import { About } from "./about";
import { ContactUs } from "./ContactUs";
import { NotFound } from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" style={{ marginLeft: 10 }}>
          Home Page
        </Link>
        <Link to="/about" style={{ marginLeft: 10 }}>
          About
        </Link>
        <Link to="/contact" style={{ marginLeft: 10 }}>
          Contact Us
        </Link>
      </div>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
