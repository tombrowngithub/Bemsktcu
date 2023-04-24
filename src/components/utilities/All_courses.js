import React from 'react';
import {Accordion, NavDropdown} from "react-bootstrap";
import Link from "next/link";

function AllCourses(props) {
    return (
        <div>
            <NavDropdown.Item href="/courses_page">
                BUSINESS/ACCOUNTANCY/STATISTICS
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                ENGINEERING/ARCHITECTURAL/STRUCTURAL
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                COMPUTER ENGINEERING
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                DIGITAL SECURITY
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                VOCATIONAL TRAINING
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                ELECTRICAL ENGINEERING
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                ENTREPRENEURSHIP STUDIES
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                BUSINESS STUDIES COURSES
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                CONTENT AND SOCIAL MEDIA MARKETING MASTERY
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                PUBLIC ADMINISTRATION
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                INFORMATION TECHNOLOGY MANAGEMENT
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                INTRODUCTION TO THE INTERNET
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                MICROSOFT OFFICE WORD
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                MICROSOFT OFFICE EXCEL
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                MICROSOFT OFFICE POWER POINT
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                MICROSOFT OFFICE ACCESS
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses_page">
                MICROSOFT PUBLISHER
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item >
                <Link className="text-decoration-none text-white" href="/courses_pages">
                    VIEW ALL AVAILABLE COURSES
                </Link>
            </NavDropdown.Item>
        </div>

    );
}

export default AllCourses;