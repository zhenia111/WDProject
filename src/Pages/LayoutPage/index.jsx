import { Outlet } from 'react-router-dom';

import FooterComponent from '../../Components/FooterComponent';
import HeaderComponent from '../../Components/HeaderComponent';


const LayoutPage = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent/>
        </>
    )
}

export default LayoutPage;