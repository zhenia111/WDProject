import NavBarComponent from "../NavBarComponent"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { LOGO_DATA } from "./constants"
import { BUTTON_DATA } from "./constants"
import { logOutDataActionCreater } from "../../Store/actions-creaters"

import "./style.scss"

const HeaderComponent = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.authenticationReducer.isAuth)
    const navigate = useNavigate()

    const logOutAccount = () => {
        dispatch(logOutDataActionCreater())
        navigate("/")
    }

    return (
        <Container>
            <header className="header">
                <div className="logo">
                    <img className="logo__img" src={LOGO_DATA.src} alt={LOGO_DATA.alt} />
                    <div className="logo__descr">{LOGO_DATA.descr}</div>
                </div>
                <div className="flex-grow-1 d-flex justify-content-end ">
                    <NavBarComponent />
                </div>
                {isAuth && (
                    <button className="header__btn" onClick={logOutAccount}>
                        {BUTTON_DATA.text}
                    </button>
                )}
            </header>
        </Container>
    )
}

export default HeaderComponent
