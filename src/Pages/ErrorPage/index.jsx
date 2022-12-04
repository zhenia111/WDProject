
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './style.scss';

const ErrorPage = () => {

    const errorData ={
        error: '404',
        info: 'File not found',
        button: 'Back Home',
        src: 'http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif',
        alt:'adsfd'
        
    }
   
    return (
        <Container>
            <div className='asd'>
            <div className="error">{errorData.error}</div>
            {/* <br /><br /> */}
            <span className="info">
                {errorData.info}
                <button className='button'>
                    <Link id='link' to='/' >{errorData.button}</Link>
                </button>
            </span>
            {/* <img src={errorData.src} alt={errorData.alt} className="static" /> */}
        </div>
        </Container>
        
    )
}

export default ErrorPage;