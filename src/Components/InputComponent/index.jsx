import { useContext } from "react"

import { UserContext } from "../../Templates/OurServices"

import { InputGroup } from "react-bootstrap"
import { Person } from "react-bootstrap-icons"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"

import "./style.scss"

const InputComponent = (props) => {
    const { label, placeholder, onInputChange } = props

    const styles = useContext(UserContext)

    return (
        <div className="input">
            <InputGroup className="input-inner">
                <InputGroup.Text className={styles.inputStyles}>
                    <Person />
                    {/* <i class="bi bi-airplane-engines"></i>  */}
                </InputGroup.Text>
                <Form.Control
                    className={styles.formStyles}
                    placeholder={placeholder.name}
                    aria-label={label}
                    onChange={onInputChange}
                />
            </InputGroup>
        </div>
    )
}

export default InputComponent
