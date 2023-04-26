import React, {useState, useEffect} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'
import slideImage5 from "@/Images/slideImage5.jpg"
import slideImage6 from "@/Images/slideImage6.jpg"
import slideImage7 from "@/Images/slideImage7.jpg"
import slideImage8 from "@/Images/slideImage8.jpg"
import slideImage9 from "@/Images/slideImage9.jpg"
import slideImage10 from "@/Images/slideImage10.jpg"
import BKTC_logo from "@/Images/BKTC_logo.png"
import Image from "next/image";
import {Button, Container} from "react-bootstrap";

const images = [
    slideImage5,
    slideImage6,
    slideImage7,
    slideImage8,
    slideImage9,
    slideImage10
];

const words = [
    <div>
        <h3 className="tw-text-[#179bd7]">Get trained by experts</h3>
        <p className="tw-text-black tw-text-start">
            we offer high quality online courses delivered
            industry professionals and educators, to give you the best learning experience during your
            study
        </p>
    </div>,


    <div>
        <h3 className="tw-text-[#179bd7]">100% Online Institution</h3>
        <p className="tw-text-black tw-text-start">
            The need for educational flexibility is no the rise. Our Online course are self-paced
            and flexible tailored to meet individual specific career needs.
        </p>
    </div>,

    <div>
        <h3 className="tw-text-[#179bd7]">Study at your own Pace</h3>
        <p className="tw-text-black tw-text-start">
            Choose a course, study at your own speed and Graduate over the internet. Students have the
            opportunity to study from anywhere, at anytime.
        </p>
    </div>,

    <div>
        <h3 className="tw-text-[#179bd7]">Study at your own Pace</h3>
        <p className="tw-text-black tw-text-start">
            Choose a course, study at your own speed and Graduate over the internet. Students have the
            opportunity to study from anywhere, at anytime.
        </p>
    </div>,

    <div>
        <h3 className="tw-text-[#179bd7]">Get trained by experts</h3>
        <p className="tw-text-black tw-text-start">
            we offer high quality online courses delivered
            industry professionals and educators, to give you the best learning experience during your
            study
        </p>
    </div>,

    <div>
        <h3 className="tw-text-[#179bd7]">Experience the best virtual class room</h3>
        <p className="tw-text-black tw-text-start">
            we offer high quality online class-rooms,
            our facilities come with a standard quality rooms with AC, and convenient learning environment
        </p>
    </div>,


]

export default function SlideImage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    function Back() {
        if (index <= 0) return
        setIndex((index) => (index - 1))
    }

    function Next() {
        if (index >= words.length - 1) return;
        setIndex((index) => index + 1);
    }


    return (
        <div className="tw-flex flex-column position-relative">
            <Image src={images[index]} alt="Slide"/>
            <Container className="tw-bg-white opacity-50 d-flex flex-column
                align-items-center mt-5 ms-lg-5 ms-md-3 tw-absolute
                tw-top-0 tw-left-0 tw-p-2 d-none d-md-block w-25">
                {words[index]}


            </Container>

            <div className="position-absolute tw-top-1/4 ms-5 mt-3">
                <Button className="tw-h-[45px]" onClick={Back} variant="outline-dark "><ChevronLeftIcon width={"18px"}/></Button>
                <Button className="tw-h-[45px]" onClick={Next} variant="outline-dark tw-ms-3"><ChevronRightIcon width={"18px"}/></Button>
            </div>
        </div>
    )

};


