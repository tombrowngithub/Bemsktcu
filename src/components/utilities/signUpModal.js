import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Container, Form} from "react-bootstrap";
import {countryOptions} from "@/components/Countries";
import {Courses} from "@/components/Courses";



export default function signUpModal(props) {
    const [loading, setLoading] = useState(false)
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        setLoginFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    async function SignUpBtn(e) {
        e.preventDefault()
        setLoading(true)
        props.onHide(false)
        setLoading(false)
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="bg-white text-primary"
            contentClassName="!tw-bg-slate-100"
        >
            <Modal.Header closeButton>
                <Container>
                    <h2 className="text-center login-text">Sign Up</h2>
                </Container>
            </Modal.Header>
            <Modal.Body className="col-md-8 mx-md-auto">
                <Form>
                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Control
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Enter email*"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Control
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Enter password*"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Label>Choose a course*</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {Courses.map((option) => (
                                <option value={option.name}>{option.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Control
                            onChange={handleChange}
                            name="firstName"
                            type="text"
                            placeholder="First Name*"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Control
                            onChange={handleChange}
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow-lg ">
                        <Form.Control
                            onChange={handleChange}
                            name="phoneNumber"
                            type="number"
                            placeholder="Phone Number*"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Select aria-label="Default select example">
                            <option>Gender*</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="mb-4 !tw-shadow-lg">
                        <Form.Label>Country*</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {countryOptions.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Button
                        onClick={SignUpBtn}
                        className="w-100 !tw-shadow"
                        variant="primary"
                        type="submit">
                        {loading ?
                            <div className="loading"></div> : "Apply Now"}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
