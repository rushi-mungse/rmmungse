import { Carousel } from "@trendyol-js/react-carousel";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import styles from "./Education.css";
import { HiAcademicCap } from "react-icons/hi";
import { Left, Right } from "../../components/Buttons";

const Education = () => {
    return (
        <div className="bg-black min-h-screen">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Education</h1>
                </div>
            </header>
            <section className="bg-dark">
                <div className="mx-auto w-[95%]">
                    <div className="font-semibold flex items-center py-4">
                        <HiAcademicCap className="text-pure text-md" />
                        <h5 className="ml-4 section_heading">Education</h5>
                    </div>
                    <hr className="border-none w-full h-[0.5px] bg-fade" />
                    <Carousel
                        className="mt-4"
                        show={1}
                        slide={1}
                        swiping={true}
                        transition={0.5}
                        useArrowKeys={true}
                        leftArrow={<Left />}
                        rightArrow={<Right />}
                    >
                        <div className="mx-auto h-[170px] py-2 ">
                            <p className="text-fade">
                                Those who educate children well are more to be
                                honored than they who produce them; for these
                                only gave them life, those the art of living
                                well.
                            </p>
                            <p className="text-secondary flex items-center justify-end">
                                - Aristotle
                            </p>
                        </div>
                        <div className="mx-auto h-[170px] py-2">
                            <p className="text-fade">
                                Those who educate children well are more to be
                                honored than they who produce them; for these
                                only gave them life, those the art of living
                                well.
                            </p>
                            <p className="text-secondary flex items-center justify-end">
                                - Aristotle
                            </p>
                        </div>

                        <div className="mx-auto h-[170px] py-2 ">
                            <p className="text-fade">
                                We spend the first year of a child’s life
                                teaching it to walk and talk and the rest of its
                                life to shut up and sit down. There’s something
                                wrong there.
                            </p>
                            <p className="text-secondary flex items-center justify-end">
                                - Neil deGrasse Tyson
                            </p>
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="skill pt-8">
                <div className="content">
                    <div className="left mt-4">
                        <div className="inner-left">
                            <div className="timeline_wrapper">
                                <div className="item">
                                    <p>2019 - 2023</p>
                                    <p className="center">
                                        Mechanical Engineering - B.Tech
                                    </p>
                                    <p>Pune University</p>
                                    <p>8.01 CGPA</p>
                                </div>
                                <div className="item">
                                    <p>2018 - 2019</p>
                                    <p className="center">
                                        Higher Secondary Education
                                    </p>
                                    <p>B.H Chate JR College Pune</p>
                                    <p>73.23% in HSC</p>
                                </div>
                                <div className="item">
                                    <p>2016 - 2017</p>
                                    <p className="center">
                                        Secondary Education
                                    </p>
                                    <p>
                                        Bhairavnath Madhyamic vidyalay Gulpoli
                                    </p>
                                    <p>90.80% in SSC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
