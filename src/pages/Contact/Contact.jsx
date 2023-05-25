import React from "react";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import {
    FaMailBulk,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaAddressBook,
    FaWhatsapp,
    FaFacebook,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
    return (
        <div className="bg-black min-h-screen">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Contact</h1>
                </div>
            </header>
            <section className="bg-mild-1 py-8 lg:py-16">
                <div className="container mx-auto px-6">
                    <header>
                        <h1 className="section_heading">
                            I am always happy to talk
                        </h1>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-16">
                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaMailBulk className="text-2xl mr-4 text-red-500" />
                                <h3 className="text-lg font-medium">
                                    Personel Email id
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <a
                                        href="mailto:vaibhavshelake@gmail.com"
                                        target="_blank"
                                        className="text-primary-orange"
                                    >
                                        mungse.rushi@gmail.com
                                    </a>{" "}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <BiMailSend className="text-2xl mr-4 text-orange-500" />
                                <h3 className="text-lg font-medium">
                                    Institute Email id
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <a
                                        href="mailto:vlshelake@mitaoe.ac.in"
                                        target="_blank"
                                        className="text-primary-orange"
                                    >
                                        rmmungse@mitaoe.ac.in
                                    </a>{" "}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaPhone className="text-2xl mr-4 text-secondary" />
                                <h3 className="text-lg font-medium">
                                    Phone Number
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <span> +91-7499487810</span>{" "}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaAddressBook className="text-2xl mr-4 text-twitter" />
                                <h3 className="text-lg font-medium">
                                    Permanent Address
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <span>
                                        Barshi,Tal-Barshi,Dist-solapur,Maharashtra,
                                        India
                                    </span>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <h1 className="section_heading mt-8">Social Links</h1>
                    <div className="flex items-center justify-between w-full mt-6">
                        <a
                            href="https://twitter.com/Vaibhav83612404"
                            target="_blank"
                        >
                            <FaTwitter className="text-blue-600 text-2xl" />
                        </a>
                        <a
                            href=" http://linkedin.com/in/vaibhav-shelake-79656b240"
                            target="_blank"
                        >
                            <FaLinkedin className="text-blue-500 text-2xl" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUgZtY6jwFCCO4jw5z6zStg"
                            target="_blank"
                        >
                            <FaYoutube className="text-red-600 text-2xl" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUgZtY6jwFCCO4jw5z6zStg"
                            target="_blank"
                        >
                            <FaGithub className="text-pure text-2xl" />
                        </a>
                        <a href="mailto:mungse.rushi@gmail.com" target="_blank">
                            <FaMailBulk className="text-red-600 text-2xl" />
                        </a>
                        <a href="https://wa.me/7499487810" target="_blank">
                            <FaWhatsapp className="text-green-600 text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/vaibhav.shelake.921?mibextid=ZbWKwL"
                            target="_blank"
                        >
                            <FaFacebook className="text-blue-600 text-2xl" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
