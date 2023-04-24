import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Container, Form} from "react-bootstrap";

export default function LoginModal(props) {
    const [loading, setLoading] = useState(false)
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    async function LoginBtn(e) {
        e.preventDefault()
        setLoading(true)
        props.onHide(false)
        setLoading(false)
    }


    function handleChange(e) {
        setLoginFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="!tw-bg-slate-100"
        >
            <Modal.Header className="p-2" closeButton>
                <Container>
                    <h2 className="text-center login-text">Login to Portal</h2>
                </Container>
            </Modal.Header>
            <Modal.Body className="col-md-8 mx-md-auto">
                <Form>
                    <Form.Group className="mb-4 !tw-shadow">
                        <Form.Control
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow">
                        <Form.Control
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Enter password"/>

                    </Form.Group>

                    <Button onClick={LoginBtn} className="w-100" variant="primary" type="submit">
                        {loading ? <div className="loading">
                        </div> : "Login"}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
