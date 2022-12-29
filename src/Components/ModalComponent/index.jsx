import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"

import { MODAL_DATA } from "./constants"

const ModalComponent = ({ username, name, address, phone, closeModal, show }) => {
    return (
        <>
            <Modal className="" show={show} onHide={closeModal} animation={false}>
                <div className=" border border-light border-1 rounded-3">
                    <Modal.Header className="bg-success " closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-secondary">
                        <Container>
                            <Row className="justify-content-center mb-4">
                                <Col className="col-4 text-center p-3 bg-success text-uppercase fs-4 border border-light rounded-3">
                                    Address
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between mb-4">
                                <Col xs={12} className=" d-flex justify-content-center mb-2">
                                    <div className=" bg-success p-2 border border-light">
                                        {MODAL_DATA.sity}
                                    </div>
                                    <div className="bg-light border p-2">{address.city}</div>
                                </Col>
                                <Col xs={12} className=" d-flex justify-content-center mb-2">
                                    <div className="bg-success p-2 border border-light">
                                        {MODAL_DATA.street}
                                    </div>
                                    <div className="bg-light border p-2">{address.street}</div>
                                </Col>
                                <Col xs={12} className=" d-flex justify-content-center ">
                                    <div className="bg-success p-2 border border-light ">
                                        {MODAL_DATA.suite}
                                    </div>
                                    <div className="bg-light border p-2">{address.suite}</div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-4 ">
                                <Col className="col-4 p-3 text-center bg-success text-uppercase fs-4 border border-light rounded-3">
                                    Contacts
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col xs={7} className=" d-flex justify-content-center ">
                                    <div className=" bg-success p-2 border border-light">
                                        {MODAL_DATA.phone}
                                    </div>
                                    <div className="bg-light border p-2">{phone}</div>
                                </Col>
                                <Col xs={5} className=" d-flex justify-content-center ">
                                    <div className=" bg-success p-2 border border-light">
                                        {MODAL_DATA.nickName}
                                    </div>
                                    <div className="bg-light border p-2">{username}</div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer className="bg-secondary">
                        <Button variant="secondary" className="bg-danger" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}

export default ModalComponent
