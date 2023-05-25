import React from "react";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Home = () => {
    return (
        <div className="home bg-primary min-h-screen">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Home</h1>
                </div>
            </header>

            <div className="border-sm bg-black flex items-center justify-center flex-col">
                <div className="flex items-center justify-between flex-col mt-4 mb-12 w-[90%] mx-auto">
                    <img
                        src="https://i.ibb.co/9N1y5yx/profile-v2.png"
                        alt="profile-v2"
                        border="0"
                        className="h-[150px] w-[150px] rounded-full bg-cover bg-orange-300 border-2 border-white"
                    />

                    <div className="mt-3">
                        <h1 className="text-lg font-500 tracking-wide text-fade">
                            Rushikesh Mungse
                        </h1>
                        <b className="text-info section_heading">
                            Software Engineer
                        </b>
                    </div>
                </div>
            </div>
            <section className="pb-12 mt-2 rounded-t-2xl w-full">
                <div className="mx-auto w-[80%]">
                    <h1 className="mt-4 font-500 tracking-wide text-fade ">
                        MERN STACK DEVELOPER
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 lg:mt-16">
                        <div className="bg-pure p-4 py-6 flex gap-4 rounded-sm">
                            <DiMongodb className="text-4xl text-green-700" />
                            <div>
                                <h3 className="text-lg font-medium">
                                    Mongo DB
                                </h3>
                                <p className="text-sm">
                                    A document based NoSql database
                                </p>
                            </div>
                        </div>
                        <div className="bg-pure p-4 py-6 flex gap-4 rounded-sm">
                            <SiExpress className="text-4xl text-black" />
                            <div>
                                <h3 className="text-lg font-medium">
                                    Express JS
                                </h3>
                                <p className="text-sm">
                                    Web framework for Node Js
                                </p>
                            </div>
                        </div>
                        <div className="bg-pure p-4 py-6 flex gap-4 rounded-sm">
                            <DiReact className="text-4xl text-blue-400" />
                            <div>
                                <h3 className="text-lg font-medium">
                                    React JS
                                </h3>
                                <p className="text-sm">
                                    Frontend library for UI development
                                </p>
                            </div>
                        </div>
                        <div className="bg-pure p-4 py-6 flex gap-4 rounded-sm">
                            <DiNodejs className="text-4xl text-gray-700" />
                            <div>
                                <h3 className="text-lg font-medium">Node JS</h3>
                                <p className="text-sm">
                                    Javascript runtime for backend{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
