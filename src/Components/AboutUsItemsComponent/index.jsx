import './style.css';

const AboutUsItemsComponent = ({title,description,src,alt}) =>{

    return(
        <>
            <img className="aboutUs__img" src={src} alt={alt} />
            <h2 className='aboutUs__text'>{title}</h2>
            <p className='aboutUs__descr'>{description}</p>
        </>
    )
}

export default AboutUsItemsComponent;