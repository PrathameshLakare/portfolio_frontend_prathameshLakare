import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "aos/dist/aos.css";
import Home from "./pages/Home";
import ProjectListing from "./pages/ProjectListing";
import BlogPage from "./pages/BlogsPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectListing />} />
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
