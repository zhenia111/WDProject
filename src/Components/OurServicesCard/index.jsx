import { useState } from 'react';

import ButtonComponent from '../ButtonComponent';
import ModalComponent from '../ModalComponent';

import { BUTTON, LINK } from './constants';

import './style.scss'

const OurServicesCard = ({ name, email, img, alt, username, address, phone, state }) => {

    const [show, setShow] = useState(false);

    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <div className='ourSeviceCard'>
            <img
                src={img}
                alt={alt} />
            <h3>{name}</h3>
            <a href={LINK.href}>{email}</a>
            <ButtonComponent
                state={state}
                showModal={showModal}
                className={BUTTON.className}
                label={BUTTON.label} />
            <ModalComponent
                show={show}
                closeModal={closeModal}
                username={username}
                name={name}
                address={address}
                phone={phone} />
        </div>
    )
}

export default OurServicesCard;