import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {PhoneIcon, MapPinIcon, LinkIcon} from '@heroicons/react/24/solid'
import {FaFacebook, FaMailBulk, FaMapMarker, FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import El_Roi_Logo from "@/Images/El-Roi-Logo.png"
import educloud_logo from "@/Images/educloud_logo.png"
import Image from "next/image";

function Footer(props) {
    return (
        <footer className="footer-bg tw-text-white mt-5 bg-footer-radius">
            <Container className="text-white ">
                <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center" xl={4} lg={4} md={6}
                         sm={12}>
                        <div className="tw-flex tw-flex-col tw-items-center">
                            <h5 className="tw-shadow-lg tw-flex tw-items-center
                            tw-justify-items-center my-2">
                                <PhoneIcon className="tw-w-5 tw-me-1"/>
                                Contact us
                            </h5>

                            <div>
                                <ul>
                                    <li className="tw-text-zinc-400 tw-text-sm py-1 tw-flex tw-items-center tw-justify-items-center">
                                        <FaFacebook className="tw-mr-2"/>Facebook
                                    </li>
                                    <li className="tw-text-zinc-400 tw-text-sm py-1 tw-flex tw-items-center tw-justify-items-center">
                                        <FaWhatsapp className="tw-mr-2"/>08037447068
                                    </li>
                                    <li className="tw-text-zinc-400 tw-text-sm py-1 tw-flex tw-items-center tw-justify-items-center">
                                        <FaMailBulk className="tw-mr-2"/>Tbemsgroup@gmail.com
                                    </li>
                                    <li className="tw-text-zinc-400 tw-text-sm py-1 tw-flex tw-items-center tw-justify-items-center">
                                        <MapPinIcon className=" tw-w-8"/>
                                        3 Bende Road by Finbers Road Umuahia, Abia State, Nigeria.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </Col>

                    <Col className="d-flex flex-column align-items-center justify-content-center" xl={4} lg={4} md={6}
                         sm={12}>
                        <div className="tw-flex tw-flex-col tw-items-center">
                            <h5 className="tw-shadow-lg tw-flex tw-items-center
                            tw-justify-items-center">
                                <LinkIcon className="tw-w-5 tw-me-1"/>Useful links</h5>
                            <br/>
                            <div className="d-flex flex-column">
                                <ul>
                                    <li>
                                        <Link className='d-inline-block tw-text-zinc-400 tw-text-sm py-1
                                        text-decoration-underline'
                                              href="https://elroilondonuniversity.org/">
                                            EL ROI London
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='tw-text-sm py-1
                                            text-decoration-underline tw-text-zinc-400'
                                            href="https://educlouds.app/">
                                            Edu-Cloud
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='tw-text-sm py-1
                                            text-decoration-underline tw-text-zinc-400'
                                            href="/courses_pages">Visit our courses</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </Col>

                    <Col className="d-flex flex-column align-items-center justify-content-center" xl={4} lg={4} md={6}
                         sm={12}>
                        <div className="tw-flex tw-flex-col tw-items-center">
                            <h5 className="tw-shadow-lg tw-flex tw-items-center
                            tw-justify-items-center">Partnership</h5>
                            <br/>
                            <div className="d-flex flex-column">
                                <ul>
                                    <li>
                                        <Image
                                            className="tw-w-[8rem]"
                                            src={El_Roi_Logo}
                                            alt="EL ROI logo"/>
                                    </li>
                                    <li>
                                        <Image
                                            className="mt-1 tw-w-[8rem]"
                                            src={educloud_logo}
                                            alt="EL ROI logo"/>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;