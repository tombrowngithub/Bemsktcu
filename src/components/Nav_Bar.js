import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {XMarkIcon, Bars3Icon, ArrowRightOnRectangleIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import LoginModal from "@/components/utilities/LoginModal";
import SignUpModal from "@/components/utilities/signUpModal";
import AllCourses from "@/components/utilities/All_courses";
import {useState} from "react";
import BKTC_logo from "@/Images/BITVs_logo.png";
import Image from "next/image";


export default function NavBar() {
    const [LoginModalShow, setLoginModalShow] = useState(false);
    const [SignUpModalShow, setSignUpModalShow] = useState(false);
    return (
        <Navbar className="tw-shadow-2xl tw-z-10" expand="lg" variant="white">
            <Container className="ms-0">
                <Navbar.Brand className=" tw-font-bold">
                    <Link className="text-decoration-none BITVs-pc my-title text-primary" href="/">
                        Bems Institute of Technology and Vocational studies
                    </Link>

                    <Link className="text-decoration-none text-primary BITVs-mb" href="/">
                        <div className="d-flex align-items-center">
                            BITVs
                            <Image
                                src={BKTC_logo}
                                alt="Logo"
                                className="tw-w-[8rem]"/>
                        </div>
                    </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className="vl d-none d-md-block"></div>
                        <NavDropdown className="tw-font-bold" menuVariant="light" title="Benefits"
                                     id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Scholarship programs
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Internship programs
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Visit our promotions
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://elroilondonuniversity.org/">
                                Certification issuer EL ROI UK
                            </NavDropdown.Item>
                        </NavDropdown>

                        <div className="vl d-none d-md-block"></div>
                        <NavDropdown className="tw-font-bold" menuVariant="light" title="All Courses"
                                     id="basic-nav-dropdown">

                            {/*ALL COURSES DROPDOWN*/}
                            <AllCourses/>

                        </NavDropdown>

                        <div className="vl d-none d-md-block"></div>
                        <NavDropdown menuVariant="light" className="tw-font-bold" title="Free Tutorials"
                                     id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                IT Fundamental Tutorial
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                HTML and CSS
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Python
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                JavaScript
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item >
                                <Link className="text-decoration-none text-primary" href="/certification_programs">
                                    View all our certification program
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <div className="d-flex flex-col md:flex-row md:items-center !tw-ml-40">
                            <div className="vl d-none d-md-block"></div>
                            <Nav.Link
                                className=" text-primary !tw-font-bold d-flex align-items-center"
                                onClick={() => setLoginModalShow(true)}
                            >
                                <ArrowRightOnRectangleIcon width={"18px"}/>
                                Login
                            </Nav.Link>

                            <div className="vl d-none d-md-block"></div>

                            <Nav.Link
                                onClick={() => setSignUpModalShow(true)}
                                className="text-primary !tw-font-bold sign-up-text"
                            >
                                Apply!
                            </Nav.Link>
                        </div>

                    </Nav>
                </Navbar.Collapse>

            </Container>

            {/*Login popup Modal*/}
            <LoginModal
                show={LoginModalShow}
                onHide={() => setLoginModalShow(false)}
            />

            {/*SignUpModal*/}
            <SignUpModal
                show={SignUpModalShow}
                onHide={() => setSignUpModalShow(false)}
            />
        </Navbar>
    )
        ;
}
