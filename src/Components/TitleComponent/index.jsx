import './style.scss';

const TitleComponent =({title,description})=>{

    return(
        <div className="mainTitle">
            <h2 className='mainTitle__title'>{title}</h2>
            <p className='mainTitle__subtitle'>{description}</p>
        </div>
    );
}

export default TitleComponent;