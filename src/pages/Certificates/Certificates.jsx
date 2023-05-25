import React from "react";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { MdCamera } from "react-icons/md";
import { BiStopCircle } from "react-icons/bi";
import { Carousel } from "@trendyol-js/react-carousel";
import { Left, Right } from "../../components/Buttons";

const Certificates = () => {
    return (
        <div className="bg-black min-h-screen">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Certificates</h1>
                </div>
            </header>

            <div className="w-[90%] mx-auto mt-4">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <MdCamera className="mr-4 text-pure" />
                    <h1 className="section_heading">CERTIFICATES</h1>
                </div>
                <hr className="border-none w-full h-[0.5px] bg-fade mb-3" />
                <div>
                    <div className="p-4">
                        <span className="text-fade font-500 inline-block mb-2">
                            React Js
                        </span>
                        <img src="https://i.ibb.co/6Hx0Bvz/UC-132054ff-a465-4bf0-93c5-585e151d80dd.jpg" />
                        <button className="text-sm bg-gradient-to-l from-success to-secondary px-2 py-1 mt-2 text-pure">
                            View Certificate
                        </button>
                    </div>
                    <div className="p-4">
                        <span className="text-fade font-500 inline-block mb-2">
                            Object Oriented Programing
                        </span>
                        <img src="https://i.ibb.co/TYX5FXS/1-08d96b1f-d4bf-45c8-800d-900721b8a294.jpg" />
                        <button className="text-sm bg-gradient-to-l from-success to-secondary px-2 py-1 mt-2 text-pure">
                            View Certificate
                        </button>
                    </div>
                    <div className="p-4">
                        <span className="text-fade font-500 inline-block mb-2">
                            Cloud Computing
                        </span>
                        <img src="https://i.ibb.co/3YXPwbm/e-Certificate.jpg" />
                        <button className="text-sm bg-gradient-to-l from-success to-secondary px-2 py-1 mt-2 text-pure">
                            View Certificate
                        </button>
                    </div>

                    <div className="p-4">
                        <span className="text-fade font-500 inline-block mb-2">
                            Python
                        </span>
                        <img src="https://i.ibb.co/BNdfc7y/courcera-python-for-everybody.jpg" />
                        <button className="text-sm bg-gradient-to-l from-success to-secondary px-2 py-1 mt-2 text-pure">
                            View Certificate
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[90%] mx-auto py-4">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <BiStopCircle className="mr-4 text-pure" />
                    <h1 className="section_heading"> ACHIEVEMENTS</h1>
                </div>
                <hr className="border-none w-full h-[0.5px] bg-fade mb-3" />
                <Carousel
                    className=" mt-4"
                    show={1}
                    slide={1}
                    swiping={true}
                    transition={0.5}
                    useArrowKeys={true}
                    leftArrow={<Left />}
                    rightArrow={<Right />}
                >
                    <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col bg-gradient-to-l from-success to-secondary ">
                        <h1 className="text-dark tracking-wide font-500">
                            {" "}
                            LeetCode{" "}
                        </h1>
                        <p className="text-secondary">Contest Rating : 1850+</p>
                        <p className="text-secondary">Solved Problems : 600+</p>
                        <a
                            href="https://drive.google.com/file/d/1HLzyqg3H410w9xbr27RWW1SQ6rMWjrS6/view?usp=drivesdk"
                            target="_blank"
                            className="text-sm bg-secondary px-2 py-1 mt-2 text-white"
                        >
                            View Profile
                        </a>
                    </div>
                    <div className="text-gray-700 w-full mb-4 px-4 py-4 h-[150px] flex flex-col items-center justify-center  bg-gradient-to-l from-dribbble to-twitter ">
                        <h1 className="text-black tracking-wide font-500">
                            {" "}
                            CodeChef{" "}
                        </h1>
                        <p className="text-secondary">Contest Rating : 1617+</p>
                        <a
                            href="https://drive.google.com/file/d/1HLzyqg3H410w9xbr27RWW1SQ6rMWjrS6/view?usp=drivesdk"
                            target="_blank"
                            className="text-sm bg-secondary px-2 py-1 mt-2 text-white"
                        >
                            View Profile
                        </a>
                    </div>
                    <div className="text-gray-700 w-full mb-4 px-4 py-4 h-[150px] flex items-center justify-center  flex-col bg-gradient-to-l from-orange-200 to-pink-200 ">
                        <h1 className="text-dark tracking-wide font-500">
                            {" "}
                            CodeForces{" "}
                        </h1>
                        <p className="text-secondary">Contest Rating : 900+</p>
                        <a
                            href="https://drive.google.com/file/d/1HLzyqg3H410w9xbr27RWW1SQ6rMWjrS6/view?usp=drivesdk"
                            target="_blank"
                            className="text-sm bg-secondary px-2 py-1 mt-2 text-white"
                        >
                            View Profile
                        </a>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Certificates;
