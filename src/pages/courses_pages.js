import React from 'react';
import Nav_Bar from "@/components/Nav_Bar";
import Banner from "@/Images/courses_banner.jpg"
import course_bg_img from "../Images/course_bg_img.jpg"
import Image from "next/image";
import {Container, Table} from "react-bootstrap";
import {Courses} from "@/components/Courses";


function CoursesPage(props) {
    return (
        <div className="">
            <Nav_Bar/>
            <div className="poppings-font">
                <Image
                    className="banner-image position-relative tw-object-cover"
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

            <Container className="tw-min-w-full tw-mt-[60px] curriculum-con poppings-font">
                <div>
                    <h3 className="text-center  my-title-course-page tw-text-slate-600 tw-font-bold">
                        BEMS INSTITUTE OF TECHNOLOGY AND VOCATIONAL STUDIES.
                    </h3>
                    <h5 className="text-center my-title-course-page tw-text-slate-600 tw-font-bold">
                        CURRICULUM FOR ALL COURSES OFFERED AT BITVs.</h5>
                </div>
            </Container>

            <div className=" position-relative top-0 bottom-100 poppings-font">
                <Container >
                    {Courses.map((course, index) => (
                        <Table key={index} className="mb-5 tw-shadow-lg curriculum-con" striped bordered hover size="lg">
                            <thead>
                            <tr>
                                <th className="text-center !tw-text-1xl !tw-drop-shadow-lg !tw-font-bold text-primary">{course.name}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.entries(course.values).map(([key, value]) => (
                                <tr key={key}>
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