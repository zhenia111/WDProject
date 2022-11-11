import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TitleComponent from '../../Components/TitleComponent';
import ButtonComponent from './../../Components/ButtonComponent/index';
import OurServicesCard from '../../Components/OurServicesCard';
import SpinnerComponent from '../../Components/SpinnerComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TITLE_COMPONENT_DATA } from '../../Components/TitleComponent/constants';
import imgSmartphone from './images/smartphone.png';
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
                const response = await fetch('https://jsonplaceholder.typicode.com/users?_page=0&_limit=5  ');
                const usersData = await response.json();
                if(usersData.length !== 0){
                    setUsers(usersData);
                    showToast('request successful');
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
                title={TITLE_COMPONENT_DATA[1].title}
                description={TITLE_COMPONENT_DATA[1].description} />
            <div className="ourServices__loading">
                {isLoading && <SpinnerComponent />}
            </div>
            <div className='ourServices__cards'>
                {state && users.map(({ name, id, email }) => (
                    <Fragment key={id}>
                        <OurServicesCard
                            name={name}
                            email={email}
                            img={imgSmartphone} />
                    </Fragment>

                ))}
            </div>
            <div className="ourServices__btn">
                <ButtonComponent
                    showOrHideUsers={showOrHideUsers}
                    label={state ? 'HIDE ALL' : 'VIEW ALL'}
                    className='btn-green' />
                <ToastContainer />
            </div>

        </div>
    )
}

export default OurServices;