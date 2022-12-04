
import { Container, InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Envelope, Lock } from 'react-bootstrap-icons';

import { MY_FORM_DATA } from "./constants";

import './style.scss';

const RagistrationPage = () => {

    return (
        <Container>
            <div className="registration__title">
                <h2 className="text fs-1 fw-bold">{MY_FORM_DATA.title}</h2>
            </div>
        
            <div className="myForm">
                <Form className="myForm_window">

                    <Form.Group className=" mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-3 fw-bold'>{MY_FORM_DATA.labelEmail}</Form.Label>
                        <InputGroup >
                            <Form.Control className="fs-4 p-4" type="email" placeholder={MY_FORM_DATA.placeholderEmail} />
                            <InputGroup.Text  >
                                <Envelope className="myForm__icon" />
                            </InputGroup.Text >
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-3 fw-bold'>{MY_FORM_DATA.labelPassword}</Form.Label>
                        <InputGroup >
                            <Form.Control className="fs-4 p-4" type="password" placeholder={MY_FORM_DATA.placeholderPassword} />
                            <InputGroup.Text  >
                                <Lock className="myForm__icon" />
                            </InputGroup.Text >
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <div className="myForm__btn">
                        <Button variant="success" className="btn bg-success fs-3 w-100" type="submit">
                            {MY_FORM_DATA.btn}
                        </Button>
                    </div>

                </Form>
            </div>

        </Container>

    )
}

export default RagistrationPage;