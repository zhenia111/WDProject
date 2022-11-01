import './style.css';
import TitleComponent from '../../Components/TitleComponent';
import { TITLE_COMPONENTS_DATA } from '../../Components/TitleComponent/constants';
import {UBOUT_US_DATA} from './constants';
import AboutUsItemsComponent from '../../Components/AboutUsItemsComponent';


const AboutUsTemplate =()=>{

    let filtredTitleComponentsData = TITLE_COMPONENTS_DATA.filter(item => item.id === 1);
    
    
    return(
        <div className="aboutUs">
            {filtredTitleComponentsData.map(({id,title,description}) =>(
                <div className="aboutUs__inner" key ={id}>
                    < TitleComponent title ={title} description ={description}/>
                </div>
            ))}
            <div className='aboutUs__items'>
            {UBOUT_US_DATA.map(({id,src,alt,title,description})=>(
                <div className='aboutUs__item' key={id}>
                    <AboutUsItemsComponent src={src} alt={alt} title ={title} description ={description}/>
                </div>
            ))}
            </div>
        </div>
    );
}

export default AboutUsTemplate;