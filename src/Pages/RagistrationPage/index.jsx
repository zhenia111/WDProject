import { useState  } from "react";
import { Container, InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Envelope, Lock } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';


import { MY_FORM_DATA } from "./constants";
import { SIGH_IN_RESULT } from "./constants";
import { authDataActionCreater } from "../../Store/actions-creaters";

import './style.scss';


const RagistrationPage = () => {

const dispatch = useDispatch();
const navigate = useNavigate();

const correctPassword = useSelector(state=> state.authenticationReducer.password);
console.log(correctPassword);

const [email, setEmail]= useState('');
const [password, setPassword] = useState('');

const getInputEmail =(e)=>{
    setEmail(e.target.value);
}

const getInputPassword =(e)=>{
    setPassword(e.target.value);
}

const sendData = ()=>{
    const loginData ={
        email: email,
        password: password,
    }
    
    if(correctPassword === +loginData.password){
        dispatch(authDataActionCreater());
       navigate(SIGH_IN_RESULT.seccess.path);
    } else{
        alert(SIGH_IN_RESULT.wrong.info);
    }
}

    return (
        <Container>
            <div className="registration__title">
                <h2 className="text fs-1 fw-bold">{MY_FORM_DATA.title}</h2>
            </div>
        
            <div className="myForm">
                <Form className="myForm_window">

                    <Form.Group className=" mb-3" controlId="formBasicEmail">
                        <Form.Label className='myForm_label fs-3 fw-bold'>{MY_FORM_DATA.labelEmail}</Form.Label>
                        <InputGroup >
                            <Form.Control className="myForm_control fs-4 p-4" type="email" placeholder={MY_FORM_DATA.placeholderEmail}
                            onChange={(e)=> getInputEmail(e)} defaultValue={email}
                            />
                            <InputGroup.Text  >
                                <Envelope className="myForm__icon" />
                            </InputGroup.Text >
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='myForm_label fs-3 fw-bold'>{MY_FORM_DATA.labelPassword}</Form.Label>
                        <InputGroup >
                            <Form.Control className="myForm_control fs-4 p-4" type="password" placeholder={MY_FORM_DATA.placeholderPassword} 
                            onChange = {(e)=> getInputPassword(e)} defaultValue ={password}
                            />
                            <InputGroup.Text  >
                                <Lock className="myForm__icon" />
                            </InputGroup.Text >
                        </InputGroup>
                    </Form.Group>
                    
                    <div className="myForm__btn">
                        <Button variant="success" className="btn bg-success fs-3 w-100" type="submit"
                        onClick={sendData}
                        >
                            {MY_FORM_DATA.btn}
                        </Button>
                    </div>

                </Form>
            </div>

        </Container>

    )
}

export default RagistrationPage;