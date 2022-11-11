import ButtonComponent from './../../Components/ButtonComponent/index';
import bannerBGImg from './images/bannerBGImg.png';
import './style.scss'

const BannerTemplate = () => {

    return (
        <div style={{ backgroundImage: `url(${bannerBGImg})`,objectFit:'cover',backgroundPosition: 'çenter' }} className="banner">
            <div className="banner__title">Web development project</div>
            <div className="banner__subtitle">Very suitable to support all web development projects</div>
            <div className="banner__buttons">
                <ButtonComponent
                    className='btn-transparent'
                    label='OUR SERVICES' />
                <ButtonComponent
                    className='btn-green'
                    label='HIRE IS NOW' />
            </div>
        </div>
    )
}

export default BannerTemplate;