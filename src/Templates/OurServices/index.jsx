import { Fragment,useEffect,useState } from 'react';

import TitleComponent from '../../Components/TitleComponent';
import ButtonComponent from './../../Components/ButtonComponent/index';
import OurServicesCard from '../../Components/OurServicesCard';
import SpinnerComponent from '../../Components/SpinnerComponent';

import { ToastContainer, toast } from 'react-toastify';

import { TITLE_COMPONENT_OURSERCES,IMG_SMARTPHONE,DATA_URL,REQUEST_SUCCESSFUL, BUTTON_CLASSNAME,BUTTON_LABELS } from './constants';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const OurServices = () => {

    const [state, setState] = useState(false);
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const showOrHideUsers = () => {
        setState(!state);
    }

    const showToast = (text) => toast(text);

    useEffect(() => {
        const getUsers = async () => {
            setUsers([]);
            setLoading(true);
            try {
                const response = await fetch(DATA_URL);
                const usersData = await response.json();
                if(usersData.length !== 0){
                    setUsers(usersData);
                    showToast(REQUEST_SUCCESSFUL);
                }   
            }
            catch (error) {
                showToast(error.message);
            }
            setLoading(false);
        }
        getUsers();

    }, [state])

    return (
        <div className="ourServices">
            < TitleComponent
                title={TITLE_COMPONENT_OURSERCES.title}
                description={TITLE_COMPONENT_OURSERCES.description} />
            <div className="ourServices__loading">
                {isLoading && <SpinnerComponent />}
            </div>
            <div className='ourServices__cards'>
                {state && users.map(({ name, id, email , username, address, phone}) => (
                    <Fragment key={id}>
                        <OurServicesCard
                            state ={state}
                            name={name}
                            email={email}
                            img={IMG_SMARTPHONE.img}
                            alt={IMG_SMARTPHONE.alt}
                            username ={username}
                            address={address}
                            phone ={phone} />
                    </Fragment>

                ))}
            </div>
            <div className="ourServices__btn">
                <ButtonComponent 
                    showOrHideUsers={showOrHideUsers}
                    label={state ? BUTTON_LABELS.hideAll : BUTTON_LABELS.showAll}
                    className={BUTTON_CLASSNAME} />
                <ToastContainer />
            </div>

        </div>
    )
}

export default OurServices;