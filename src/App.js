import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import { Context } from "./Context";
import { useState } from "react";
import Certificates from "./pages/Certificates/Certificates";
import Footer from "./components/Footer/Footer";
import DownloadCV from "./pages/DownloadCV/DownloadCV";

function App() {
    const [data, setData] = useState({});

    return (
        <Router>
            <Context.Provider value={{ data, setData }}>
                <Navigation />
                <Routes>
                    <Route path="/rmmungse" element={<Home />}></Route>
                    <Route path="/rmmungse/about" element={<About />}></Route>
                    <Route path="/rmmungse/work" element={<Work />}></Route>
                    <Route
                        path="/rmmungse/experience"
                        element={<Experience />}
                    ></Route>
                    <Route
                        path="/rmmungse/education"
                        element={<Education />}
                    ></Route>
                    <Route
                        path="/rmmungse/contact"
                        element={<Contact />}
                    ></Route>
                    <Route
                        path="/rmmungse/certificates"
                        element={<Certificates />}
                    ></Route>
                    <Route
                        path="/rmmungse/download"
                        element={<DownloadCV />}
                    ></Route>
                </Routes>
                <Footer />
            </Context.Provider>
        </Router>
    );
}

export default App;
