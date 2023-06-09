import {useState} from "react";
import Router from "next/router";
import {Button, Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import world_map from "@/Images/world_map.jpg"
import pic1 from "@/Images/pic1.jpg"
import pic2 from "@/Images/pic2.jpg"
import pic3 from "@/Images/pic3.jpg"
import BKTC_logo from "@/Images/BITVs_logo.png"
import {ChevronRightIcon, AcademicCapIcon} from '@heroicons/react/24/solid'
import SlideImage from "@/components/utilities/slideImage/SlideImage";
import SignUpModal from "@/components/utilities/signUpModal";
import Footer from "@/components/Footer";


export default function Home_page() {
    const [SignUpModalShow, setSignUpModalShow] = useState(false);
    const router = Router

    function EL_ROI_page() {
        router.push("https://elroilondonuniversity.org/")
    }

    return (
        <div className="poppings-font">
            <div className="tw-absolute ">
                <SlideImage/>
                <Image
                    src={BKTC_logo}
                    alt="Logo"
                    className=" mx-auto mx-md-0 my-2 my-md-0 tw-w-[20rem]
                    tw-absolute tw-top-0 tw-right-0 BKTC_logo"/>
                <div className="tw-bg-[#179bd7] tw-bg-con ">
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="my-4" xl={4} lg={4} md={12} sm={12}>
                                <h2 className="tw-text-white">EL ROI LONDON UNIVERSITY</h2>
                                <p className="tw-text-white">In partnership with EL ROI for certification of all our
                                    courses.
                                    El-Roi London University is the Higher education academy of the El-Roi London
                                    Academy. A private university that received degree-awarding powers from The Kingdom
                                    of Hawai'i Royal Accreditation Commission (KOHRAC), Honolulu, the USA.
                                </p>
                                <Button onClick={EL_ROI_page}
                                        className="border border-2 border-white rounded-0 d-flex align-items-center">Learn
                                    More <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>

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
                        </Row>
                    </Container>
                </div>



                {/*New section*/}


                <div className="position-relative landing-page">
                    <Container className="tw-absolute tw-top-0 tw-left-0 tw-right-0 my-2 ">
                        <h2 className='tw-text-[#179bd7] tw-text-center'>
                            ONLINE PROFESSIONAL CERTIFICATE COURSE PROGRAMS
                        </h2>
                    </Container>
                    <div className="tw-absolute tw-top-20 tw-left-1 tw-right-1 tw-mx-3-con">
                        <Row>
                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <div className="w-100 position-relative tw-bg-gray-600/80 card-drop-shadow">
                                    <Image className="card-text w-100 tw-h-[240px] tw-object-cover tw-mix-blend-overlay"
                                           src={pic1} alt="image"/>
                                    <p className="px-2 position-absolute bottom-0 tw-font-extrabold text-white ">
                                        The need for educational flexibility is on the rise. Our Online course are
                                        self-paced
                                        and flexible tailored to meet individual specific career needs.
                                    </p>
                                </div>

                                <h6 className="d-flex tw-text-[#179bd7] tw-my-3"><AcademicCapIcon className="tw-w-5"/>DIPLOMA
                                    PROGRAMS</h6>
                                <Button
                                    variant="outline"
                                    className="border py-2 text-white rounded-0 d-flex align-items-center my-button">
                                    VIEW OUR COURSES
                                    <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>

                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <div className="w-100 position-relative tw-bg-gray-600/90 card-drop-shadow">
                                    <Image className=" w-100 tw-h-[240px] tw-object-cover tw-mix-blend-overlay"
                                           src={pic2} alt="image"/>
                                    <p className="mx-2 position-absolute bottom-0 tw-font-extrabold text-white">
                                        We offer high quality online courses delivered industry professionals and
                                        educators, to give you the best learning experience during your study.
                                    </p>
                                </div>
                                <h6 className="d-flex tw-text-[#179bd7] tw-my-3"><AcademicCapIcon
                                    className="tw-w-5"/> ADVANCED
                                    DIPLOMA PROGRAMS</h6>
                                <Button
                                    variant="outline"
                                    className="border py-2 text-white rounded-0 d-flex align-items-center my-button">
                                    VIEW OUR COURSES
                                    <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>

                            <Col className="my-4" xl={4} lg={4} md={6} sm={12}>
                                <div className="w-100 position-relative tw-bg-gray-600/80 card-drop-shadow">
                                    <Image className=" w-100 tw-h-[240px] tw-object-cover tw-mix-blend-overlay"
                                           src={pic3} alt="image"/>
                                    <p className="mx-2 position-absolute bottom-0 tw-font-extrabold text-white">
                                        Choose a course, study at your own speed and Graduate over the internet.
                                        Students have the opportunity to study from anywhere, at anytime.
                                    </p>
                                </div>
                                <h6 className="d-flex tw-text-[#179bd7] tw-my-3"><AcademicCapIcon className="tw-w-5"/>MASTER
                                    CLASS PROGRAMS</h6>
                                <Button
                                    variant="outline"
                                    className="border py-2 text-white rounded-0 d-flex align-items-center my-button">
                                    VIEW OUR COURSES
                                    <ChevronRightIcon width={"18px"}/>
                                </Button>
                            </Col>
                        </Row>

                        <Container className="d-flex flex-column justify-content-center align-items-center ">
                            <h3 className="text-center tw-text-[#179bd7]">WHAT ARE YOU WAITING FOR!</h3>
                            <div className="">
                                <Button
                                    onClick={() => setSignUpModalShow(true)}
                                    className=" rounded-1 py-2 px-3 my-1 my-apply-btn">
                                    APPLY NOW!
                                </Button>
                            </div>
                        </Container>
                        <Footer/>
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
