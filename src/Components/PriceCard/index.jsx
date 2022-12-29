import ButtonComponent from "../ButtonComponent"

import "bootstrap/dist/css/bootstrap.min.css"

import { BUTTON_STYLES } from "./constants"

import "./style.scss"

const PriceCard = (props) => {
    const { title, price, lists } = props

    return (
        <>
            <div
                id="priceCard"
                className="priceCard   w-auto mx-3  d-flex  flex-column  border border-success text-center mb-5"
            >
                <div className="priceCard__head bg-primary ">
                    <h2 className="mb-4">{title}</h2>
                    <div className="d-flex justify-content-center">
                        <div className="fs-5">{price.currency}</div>
                        <div className="fs-3 me-2">{price.currentPrice}</div>
                        <div className="fs-6 align-self-end">{price.term}</div>
                    </div>
                </div>
                <ul className="priceCard__list mt-3 mb-4 mx-auto">
                    {lists.map(({ list, id }) => (
                        <li key={id} className="priceCard__li border-bottom border-dark">
                            {list}
                        </li>
                    ))}
                </ul>
                <div className="mb-4">
                    <ButtonComponent
                        className={BUTTON_STYLES.className}
                        label={BUTTON_STYLES.label}
                    />
                </div>
            </div>
        </>
    )
}

export default PriceCard
