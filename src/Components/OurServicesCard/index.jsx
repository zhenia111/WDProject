import ButtonComponent from '../ButtonComponent';
import './style.scss'

const OurServicesCard = ({ name, email, img }) => {

    return (
        <div className='card'>
            <img 
             src={img} 
             alt="Not found" />
            <h3>{name}</h3>
            <a href='mailto:gmail.com'>{email}</a>
            <ButtonComponent
                className='btn-smale-transparent'
                label='READ MORE' />
        </div>
    )
}

export default OurServicesCard;