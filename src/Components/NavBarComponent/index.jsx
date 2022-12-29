import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from "react-redux"

import { NAV_DATA } from "../HeaderComponent/constants"

const NavBarComponent = () => {
    const isAuth = useSelector((state) => state.authenticationReducer.isAuth)

    return (
        <>
            {isAuth && (
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {NAV_DATA.map(({ link, href, id }) => (
                                    <li key={id} className="nav-item">
                                        <a className="nav-link" aria-current="page" href={href}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </>
    )
}

export default NavBarComponent
