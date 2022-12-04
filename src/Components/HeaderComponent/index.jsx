
import NavBarComponent from '../NavBarComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { LOGO_DATA } from './constants';

import './style.scss';


const HeaderComponent = () => {
    return (
        <Container>
            <header className="header">
                <div className="logo">
                    <img className='logo__img' src={LOGO_DATA.src} alt={LOGO_DATA.alt} />
                    <div className='logo__descr'>{LOGO_DATA.descr}</div>
                </div>
                <NavBarComponent />
            </header>
        </Container>

    )
}

export default HeaderComponent;