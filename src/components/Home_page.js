import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import world_map from "@/Images/world_map.jpg"
import pic1 from "@/Images/pic1.jpg"
import pic2 from "@/Images/pic2.jpg"
import pic3 from "@/Images/pic3.jpg"
import BKTC_logo from "@/Images/BKTC_logo.png"
import {ChevronRightIcon, AcademicCapIcon} from '@heroicons/react/24/solid'
import SlideImage from "@/components/utilities/slideImage/SlideImage";
import SignUpModal from "@/components/utilities/signUpModal";


export default function Home_page() {
    const [SignUpModalShow, setSignUpModalShow] = useState(false);

    return (
        <div className="tw-relative">
            <div className="tw-absolute">
                <SlideImage/>
                <Image
                    src={BKTC_logo}
                    alt="Logo"
                    className=" img-fluid d-block mx-auto mx-md-0 my-2 my-md-0 tw-w-[250px] tw-sm:tw-w-[100px] tw-absolute tw-top-0 tw-right-0"/>
                <div className="tw-bg-[#179bd7]">
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <h2 className="tw-text-white">AWARD WINNING</h2>
                                <p className="tw-text-white">Bems International Institute Of Technology™ has been
                                    recognized
                                    and awarded for:-
                                    Reputable Courses High-Quality Professional
                                    Self-Paced Convenient Free Tutorials
                                    Useful Guidelines and Tips from professionals
                                </p>
                                <Button className="border border-2 border-white rounded-0 d-flex align-items-center">Learn
                                    More <ChevronRightIcon width={"18px"}/></Button>
                            </Col>
                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <h2 className="tw-text-white">TOP 100 RANKED</h2>
                                <p className="tw-text-white">Our courses are ranked top 100 online and recognized by
                                    many academic communities and institutions. We provide
                                    online professional courses ranging from IT, basic computing, digital marketing,
                                    engineering to computer science, data science and professional programming.
                                </p>
                                <Button className="border border-2 border-white rounded-0 d-flex align-items-center">Learn
                                    More <ChevronRightIcon width={"18px"}/></Button>
                            </Col>
                            <Col className="my-4" xl={4} lg={4} md={12} sm={12}>
                                <h2 className="tw-text-white">GLOBAL RECOGNITION</h2>
                                <p className="tw-text-white">We are globally recognized for High-Quality IT Courses and
                                    Technical Certification
                                    Online. Our Mission is to make Technology Education and Certification accessible for
                                    career advancement by providing a Flexible, Affordable and Effective E-Learning
                                    experience.
                                </p>
                                <Button className="border border-2 border-white rounded-0 d-flex align-items-center">Learn
                                    More <ChevronRightIcon width={"18px"}/></Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="position-absolute">
                    <Image className="tw-h-screen position-fix bottom-0 " src={world_map} alt="image"/>
                    <Container className="tw-absolute tw-top-0 tw-left-0 tw-right-0 my-5">
                        <h2 className='tw-text-white tw-text-center'>ONLINE PROFESSIONAL CERTIFICATE COURSE
                            PROGRAMS</h2>
                    </Container>
                    <div className="tw-absolute tw-top-20 tw-left-0 tw-right-0 tw-mx-10">
                        <Row>
                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <Image className="w-100 tw-h-[240px]" src={pic1} alt="image"/>
                                <h5 className="d-flex text-white tw-my-3"><AcademicCapIcon className="tw-w-5"/>DIPLOMA
                                    PROGRAMS</h5>
                                <Button
                                    variant="outline"
                                    className="border py-2 text-white rounded-0 d-flex align-items-center my-button">
                                    VIEW OUR COURSES
                                    <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>

                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <Image className="w-100 tw-h-[240px]" src={pic2} alt="image"/>
                                <h5 className="d-flex text-white tw-my-3"><AcademicCapIcon className="tw-w-5"/> ADVANCED
                                    DIPLOMA PROGRAMS</h5>
                                <Button
                                    variant="outline"
                                    className="border py-2 text-white rounded-0 d-flex align-items-center my-button">
                                    VIEW OUR COURSES
                                    <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>

                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <Image className="w-100 tw-h-[240px]" src={pic3} alt="image"/>
                                <h5 className="d-flex text-white tw-my-3"><AcademicCapIcon className="tw-w-5"/>MASTER
                                    CLASS PROGRAMS</h5>
                                <Button
                                    variant="outline"
                                    className="border py-2 text-white rounded-0 d-flex align-items-center my-button">
                                    VIEW OUR COURSES
                                    <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>
                        </Row>

                        <Container className="d-flex justify-content-center ">
                            <Button
                                onClick={() => setSignUpModalShow(true)}
                                className="w-md-25 w-25 rounded-1 py-3 px-3 my-5">
                                APPLY NOW!
                            </Button>
                        </Container>
                    </div>
                </div>
            </div>

            {/*SignUpModal*/}
            <SignUpModal
                show={SignUpModalShow}
                onHide={() => setSignUpModalShow(false)}
            />
        </div>
    );
}
