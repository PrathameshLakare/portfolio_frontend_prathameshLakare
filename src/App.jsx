import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import ProjectListing from "./pages/ProjectListing";
import BlogPage from "./pages/BlogsPage";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/Layout";
import { Toaster } from "sonner";
import ContactCard from "./components/ContactCard";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster closeButton />
          <Layout>
            <div className="min-h-[100vh] w-full">
              <div className="shadow-lg rounded-xl w-full bg-white dark:bg-black p-3 md:p-6 flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectListing />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/about" element={<AboutPage />} />
                  </Routes>
                  <ContactCard />
                </div>
              </div>
            </div>
          </Layout>
          <footer className="py-2 dark:bg-gray-900 w-full text-center text-xs text-gray-500 dark:text-gray-400 bg-transparent">
            <p className="pb-5">
              &copy; {new Date().getFullYear()} Prathamesh Lakare
            </p>
          </footer>
        </ThemeProvider>
      </Router>
    </div>
  );
}
export default App;
