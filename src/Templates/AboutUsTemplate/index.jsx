import { Fragment } from 'react';

import TitleComponent from '../../Components/TitleComponent';
import AboutUsItemsComponent from '../../Components/AboutUsItemsComponent';

import {TITLE_COMPONENT_ABOUTUS} from './constants';
import { UBOUT_US_DATA } from './constants';

import './style.scss';

const AboutUsTemplate = () => {
    return (
        <div id='aboutUs' className="aboutUs">
            < TitleComponent 
                title={TITLE_COMPONENT_ABOUTUS.title}
                description={TITLE_COMPONENT_ABOUTUS.description} />
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