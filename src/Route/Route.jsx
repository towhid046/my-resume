import Navbar from './../layout/Header/Navbar';
import Footer from './../layout/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Route = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Route;