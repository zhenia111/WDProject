
import NavBarComponent from '../NavBarComponent';

import { Container } from 'react-bootstrap';

import { COPURIGHT } from './constants';

import './style.scss';

const FooterComponent = () => {

    return (
        <Container>
            <footer className="footer">
                <NavBarComponent />
                <div className='copyright'>
                    <h5 className='copyright__text'>{COPURIGHT.text.title}
                        <span>{COPURIGHT.text.year}</span>
                    </h5>
                    <div className='copyright__images'>
                        <img className='copyright__img' src={COPURIGHT.img.google.src} alt={COPURIGHT.img.google.alt} />
                        <img className='copyright__img' src={COPURIGHT.img.twitter.src} alt={COPURIGHT.img.twitter.alt} />
                        <img className='copyright__img' src={COPURIGHT.img.facebook.src} alt={COPURIGHT.img.facebook.alt} />
                    </div>
                </div>
            </footer>
        </Container>
    )
}

export default FooterComponent;