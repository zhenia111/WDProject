import './style.scss';

const AboutUsItemsComponent = ({title,description,src,alt}) =>{

    return(
        <div className='item'>
            <img className="item__img" src={src} alt={alt} />
            <h2 className='item__text'>{title}</h2>
            <p className='item__descr'>{description}</p>
        </div>
    )
}

export default AboutUsItemsComponent;