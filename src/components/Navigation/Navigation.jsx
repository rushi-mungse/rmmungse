import React, { useEffect } from "react";
import { BiDownload, BiHomeAlt, BiInfoSquare, BiPackage } from "react-icons/bi";
import { BsChatQuote, BsFileEarmarkPdf } from "react-icons/bs";
import { HiTrendingUp, HiOutlineAcademicCap } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { useLocation } from "react-router-dom";

const Navigation = () => {
    const { setData } = useContext(Context);

    useEffect(() => {
        const _data = document.querySelector(".navbar");
        setData(_data);
    }, []);

    const closeNavBar = () => {
        document.querySelector(".navbar").style.left = "-250px";
    };

    const route = useLocation().pathname;

    return (
        <nav
            className={`${styles.nav} fixed navbar close w-[250px] min-h-screen bg-dark`}
        >
            <div className="h-[200px] bg-primary text-fade tracking-wide font-500 rounded-br-3xl">
                <div className="w-full flex items-center justify-end p-2">
                    <button
                        className=" text-white text-2xl focus:outline-none"
                        onClick={(e) => closeNavBar(e)}
                    >
                        <AiFillCloseCircle />
                    </button>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center overflow-hidden">
                        <img
                            src="https://i.ibb.co/9N1y5yx/profile-v2.png"
                            alt="profile-v1"
                            border="0"
                            className="w-[80px] h-[80px] object-cover rounded-full border border-white bg-yellow-500"
                        />
                    </div>
                    <div className="mt-2 text-md">
                        <span className="name">Rushikesh Mungse</span>
                    </div>
                </div>
            </div>

            <div className="menu-bar">
                <div className="menu mt-4 px-4 h-[400px]">
                    <Link
                        to="/rmmungse/"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <BiHomeAlt className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Home
                        </span>
                    </Link>

                    <Link
                        to="/rmmungse/about"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/about"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <BiInfoSquare className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            About
                        </span>
                    </Link>

                    <Link
                        to="/rmmungse/experience"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/experience"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <HiTrendingUp className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Internship
                        </span>
                    </Link>
                    <Link
                        to="/rmmungse/work"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/work"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <BiPackage className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Projects
                        </span>
                    </Link>

                    <Link
                        to="/rmmungse/education"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/education"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <HiOutlineAcademicCap className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Education
                        </span>
                    </Link>
                    <Link
                        to="/rmmungse/certificates"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/certificates"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <BsFileEarmarkPdf className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Certificate
                        </span>
                    </Link>
                    <Link
                        to="/rmmungse/contact"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/contact"
                                ? "bg-white text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <BsChatQuote className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Contact
                        </span>
                    </Link>
                    <Link
                        to="/rmmungse/download"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/rmmungse/download"
                                ? "bg-white  text-black"
                                : "bg-primary text-fade"
                        }`}
                        onClick={closeNavBar}
                    >
                        <BiDownload className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-500">
                            Download CV
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
