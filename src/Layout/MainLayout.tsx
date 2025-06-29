import { Outlet } from "react-router-dom";

import Header from '../Components2/Header';
import Footer from '../Components2/Footer';


const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};


export default MainLayout;
