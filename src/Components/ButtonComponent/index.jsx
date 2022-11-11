import './style.scss';

const ButtonComponent =({showOrHideUsers,label,className})=>{
    return(
            <button 
            onClick={showOrHideUsers}
            className={className}
            >{label}</button>  
    )
}

export default ButtonComponent;