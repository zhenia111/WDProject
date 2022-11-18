import ButtonComponent from './../../Components/ButtonComponent/index';

import { BUTTON_STYLES, BUTTON_LABELS, BANNER, BACKGROUNG_IMG_STYLES } from './constants';

import './style.scss'

const BannerTemplate = () => {

    return (
        <div style={BACKGROUNG_IMG_STYLES} className="banner">
            <div className="banner__title">{BANNER.title}</div>
            <div className="banner__subtitle">{BANNER.subtitle}</div>
            <div className="banner__buttons">
                <ButtonComponent
                    className={BUTTON_STYLES.transparent}
                    label={BUTTON_LABELS.labelOne} />
                <ButtonComponent
                    className={BUTTON_STYLES.green}
                    label={BUTTON_LABELS.labelTwo} />
            </div>
        </div>
    )
}

export default BannerTemplate;