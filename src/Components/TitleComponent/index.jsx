import './style.css';

const TitleComponent =({title,description})=>{

    return(
        <>
            <h2 className='aboutUs__title'>{title}</h2>
            <p className='aboutUs__subtitle'>{description}</p>
        </>
    );
}

export default TitleComponent;