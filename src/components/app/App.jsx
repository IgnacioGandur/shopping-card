// Packages
import { Outlet } from "react-router-dom";
// Components
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
