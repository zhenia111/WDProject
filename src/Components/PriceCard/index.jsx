
import ButtonComponent from '../ButtonComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BUTTON_STYLES } from './constants';

import './style.scss';

const PriceCard = ({ title, price, lists }) => {

    return (
        <>
            <div  className='priceCard   w-auto mx-3  d-flex  flex-column  border border-success text-center mb-5' >
                <div className='priceCard__head bg-primary '>
                    <h2 className='mb-4'>{title}</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='fs-5'>$</div>
                        <div className='fs-3 me-2'>{price}</div>
                        <div className='fs-6 align-self-end'>per month</div>
                    </div>
                </div>
                <ul className='priceCard__list mt-3 mb-4 mx-auto'>
                    <li className='priceCard__li border-bottom border-dark'>{lists.list1}</li>
                    <li className='priceCard__li border-bottom border-dark'>{lists.list2}</li>
                    <li className='priceCard__li border-bottom border-dark'>{lists.list3}</li>
                    <li className='priceCard__li border-bottom border-dark'>{lists.list4}</li>
                </ul>
                <div className='mb-4'>
                    <ButtonComponent
                        className={BUTTON_STYLES.className}
                        label={BUTTON_STYLES.label} />
                </div>

            </div>

        </>

    )
}

export default PriceCard;