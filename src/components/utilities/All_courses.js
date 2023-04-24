import React from 'react';
import {Accordion, NavDropdown} from "react-bootstrap";
import Link from "next/link";

function AllCourses(props) {
    return (
        <div>
            <NavDropdown.Item href="#action/3.1">
                BUSINESS/ACCOUNTANCY/STATISTICS
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                ENGINEERING/ARCHITECTURAL/STRUCTURAL
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
                COMPUTER ENGINEERING
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                DIGITAL SECURITY
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                VOCATIONAL TRAINING
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                ELECTRICAL ENGINEERING
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                ENTREPRENEURSHIP STUDIES
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                BUSINESS STUDIES COURSES
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                CONTENT AND SOCIAL MEDIA MARKETING MASTERY
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                PUBLIC ADMINISTRATION
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                INFORMATION TECHNOLOGY MANAGEMENT
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                INTRODUCTION TO THE INTERNET
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                MICROSOFT OFFICE WORD
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                MICROSOFT OFFICE EXCEL
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                MICROSOFT OFFICE POWER POINT
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                MICROSOFT OFFICE ACCESS
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
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