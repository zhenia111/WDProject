import TitleComponent from '../../Components/TitleComponent';

import PriceCard from '../../Components/PriceCard';

import 'bootstrap/dist/css/bootstrap.min.css';

import { TITLE_COMPONENT_PRICINGPLAN, PRICING_PLAN_INFO } from './constants';

import './style.scss';


const PricingPlan = () => {

    return (
        <div className=' pricingPlan '>
            <TitleComponent
                title={TITLE_COMPONENT_PRICINGPLAN.title}
                description={TITLE_COMPONENT_PRICINGPLAN.description} />
            <div className='row d-flex justify-content-around  gx-0'>
                {PRICING_PLAN_INFO.map(({ title, price, lists, id }) => (
                    <PriceCard
                        key={id}
                        title={title}
                        price={price}
                        lists={lists}
                    />
                ))}

            </div>
        </div>
    )
}

export default PricingPlan;