import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import OurServices from "./views/OurServices/OurServices";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import ContactSection from "./views/ContactSection/ContactSection";
import AboutUs from "./views/AboutUs/AboutUs";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
function App() {
    return (
        <main>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/services/:slug" element={<ServiceCard />} />
                <Route path="/contact" element={<ContactSection />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </main>
    );
}

export default App;
