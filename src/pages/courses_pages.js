import React from 'react';
import Nav_Bar from "@/components/Nav_Bar";
import Banner from "@/Images/courses_banner.jpg"
import course_bg_img from "../Images/course_bg_img.jpg"
import Image from "next/image";
import {Container, Table, Form, InputGroup} from "react-bootstrap";
import {Courses} from "@/components/Courses";


function CoursesPage(props) {
    return (
        <div className="tw-bg-[#9a9dce] course_page_img">
            <Nav_Bar/>
            <div>
                <Image
                    className="banner-image position-relative"
                    src={Banner}
                    alt="Banner"/>

                <Container className="position-relative tw-mt-[-100px]  col-md-4 mx-md-auto mb-3 search-bar">
                    <form className="d-flex " role="search">
                        <input
                            className="form-control border-0 "
                            type="search" placeholder="Search"
                            aria-label="Search"/>
                        <button
                            className="btn btn-outline-dark">Search
                        </button>
                    </form>
                </Container>
            </div>

            <Container className="tw-mt-[60px] curriculum-con">
                <div className='tw-shadow-lg'>
                    <h3 className="text-center  my-title-course-page !tw-text-purple-950 tw-font-bold">
                        BEMS INSTITUTE OF TECHNOLOGY AND VOCATIONAL STUDIES.
                    </h3>
                    <h5 className="text-center my-title-course-page !tw-text-purple-950 tw-font-bold">
                        CURRICULUM FOR ALL COURSES OFFERED AT BITVs.</h5>
                </div>
            </Container>

            <div className=" position-relative top-0 bottom-100">
                <Container>
                    {Courses.map((course, index) => (
                        <Table className="mb-5 tw-shadow-lg" striped bordered hover size="lg">
                            <thead>
                            <tr>
                                <th className="text-center !tw-text-1xl !tw-drop-shadow-lg !tw-font-bold tw-text-blue-900 glow">{course.name}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.entries(course.values).map(([key, value]) => (
                                <tr>
                                    <td className="text-white">{value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    ))}
                </Container>

            </div>

        </div>
    );
}

export default CoursesPage;