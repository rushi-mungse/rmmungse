import Technology from "../../components/Technology";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { MdWork } from "react-icons/md";

const Experience = () => {
    return (
        <div className="bg-black">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Internship</h1>
                </div>
            </header>

            <div className="mx-auto w-[95%]">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <MdWork className="mr-4 text-pure" />
                    <h1 className="section_heading">INTERNSHIPS</h1>
                </div>
                <div className="px-4 mt-2">
                    <div className="mb-4">
                        <h1 className="text-secondary tracking-wide font-500 mb-2">
                            ROLE
                        </h1>
                        <div className="text-fade w-[90%] mx-auto">
                            <span>Web Developer</span>{" "}
                            <span>(06/2022 – 12/2022)</span>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-secondary tracking-wide font-500 mb-2">
                            COMPANY NAME
                        </h1>
                        <div className="text-fade cursor-pointer w-[90%] mx-auto ">
                            <a href="https://www.worqhat.com" target="_black">
                                WorqHat
                            </a>
                        </div>
                    </div>
                    <div className="text-black my-4">
                        <h1 className="text-secondary tracking-wide font-500 mb-2">
                            WORK DETAILS
                        </h1>
                        <ul className=" text-fade ml-4">
                            <li className="mb-4 text-md text-justify">
                                If talking to summarize the internship it was
                                very useful experience. I get to known about
                                many facts related to startups, licensing
                                authorities and about well established
                                industries.{" "}
                            </li>
                            <li className="mb-4 text-md text-justify">
                                Here learn about problem analysis, problem
                                solving, designing, database system, high level
                                designing, low level designing. I learned the
                                different aspects of working within a startup
                                related to IT industry.
                            </li>
                            <img
                                src="https://i.ibb.co/qpLyvkH/5741225.jpg"
                                className="my-2"
                            />

                            <li className="mb-4 text-md text-justify">
                                In this internship I worked on web developement.
                                In this project I learn some technology like
                                firebase, node js, api's etc.
                            </li>
                            <li className="mb-4 text-md text-justify">
                                In this internship, I worked on Node.js and also
                                JavaScript for UI and Backend servers.
                            </li>
                            <li className="mb-4 text-md text-justify">
                                Used firebase for database and tailwind CSS for
                                styling.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-[90%] mx-auto">
                    <h1 className="text-secondary tracking-wide font-500">
                        TECHNOLOGY STACK
                    </h1>
                    <Technology text="TECHNOLOGY STACK" hide={true} />
                </div>
                <a
                    href="https://drive.google.com/file/d/1nQWrRzp6rAaWeDZnj4BwlST9yMwyS7uu/view?usp=drive_link"
                    className="inline-block text-[12px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm px-2 py-1 text-black my-4"
                    target="_blank"
                >
                    View Certificate
                </a>
            </div>
        </div>
    );
};

export default Experience;
