import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;