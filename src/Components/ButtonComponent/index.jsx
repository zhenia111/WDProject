import './style.scss';

const ButtonComponent =({showOrHideUsers,label,className,showModal,state})=>{
    return(
            <button 
            onClick={state ? showModal:showOrHideUsers}
            className={className}
            >{label}</button>  
    )
}

export default ButtonComponent;