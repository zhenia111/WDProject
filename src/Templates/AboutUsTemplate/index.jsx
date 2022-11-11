import { Fragment } from 'react';
import TitleComponent from '../../Components/TitleComponent';
import AboutUsItemsComponent from '../../Components/AboutUsItemsComponent';
import { TITLE_COMPONENT_DATA } from '../../Components/TitleComponent/constants';
import { UBOUT_US_DATA } from './constants';
import './style.scss';

const AboutUsTemplate = () => {
    return (
        <div className="aboutUs">
            < TitleComponent 
                title={TITLE_COMPONENT_DATA[0].title}
                description={TITLE_COMPONENT_DATA[0].description} />
            <div className='aboutUs__items'>
                {UBOUT_US_DATA.map(({ id, src, alt, title, description }) => (
                    <Fragment key={id}>
                        <AboutUsItemsComponent src={src} alt={alt} title={title} description={description} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default AboutUsTemplate;