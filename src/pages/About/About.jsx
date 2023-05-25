import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { Carousel } from "@trendyol-js/react-carousel";
import { Left, Right } from "../../components/Buttons";
import {
    DiCode,
    DiCss3,
    DiHtml5,
    DiJavascript,
    DiReact,
    DiScriptcs,
} from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import {
    SiFirebase,
    SiMongodb,
    SiNodedotjs,
    SiPython,
    SiTypescript,
} from "react-icons/si";

const About = () => {
    return (
        <div className="abou min-h-screen bg-black">
            <div className="">
                <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                    <ToggleBtn />
                    <div className="flex items-center justify-center">
                        <h1 className="ml-3">About</h1>
                    </div>
                </header>
                <section className="bg-black py-8">
                    <div className="container mx-auto px-6">
                        <header className="text-fade">
                            <h2 className="section_heading">Who am I?</h2>
                            <p className="pt-3">Software Engineer</p>
                        </header>
                        <div className="flex-col lg:flex-row flex items-center gap-4 lg:gap-16 mt-8 lg:mt-16">
                            <div>
                                <img
                                    src="https://i.ibb.co/9N1y5yx/profile-v2.png"
                                    alt="profile-v2"
                                    border="0"
                                    className="h-[150px] w-[150px] rounded-full bg-cover bg-orange-300 border-2 border-indigo"
                                />
                            </div>
                            <div className="text-fade">
                                <p className="mt-6">
                                    <span className="font-bold ml-2">
                                        Hello,
                                    </span>
                                </p>
                                <div className="flex items-start mt-4">
                                    <span className="ml-2 text-md text-justify">
                                        I am Rushikesh Mungse currently pursuing
                                        my B.Tech in Mechanical Engineering from
                                        MIT Academy of Engineering, Alandi, But
                                        my interest in Software Engineering.
                                    </span>
                                </div>
                                {/* <img
                                    src="https://i.ibb.co/5rLcjT0/m502t0009-08jun22-spaceship-01.jpg"
                                    alt="101"
                                    border="0"
                                /> */}
                                <div className="flex items-start mt-2">
                                    <span className="ml-2 text-md text-justify">
                                        Software Engineer with excellent
                                        problem-solving skill and ability to
                                        perform well in a team. Passionate about
                                        Full-Stack developer with creative
                                        designing.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mx-auto w-[90%]">
                    <h1 className="section_heading">SKILLS</h1>
                    <hr className="border-none w-full h-[0.5px] bg-fade mt-3" />
                    <Carousel
                        show={2}
                        slide={1}
                        swiping={true}
                        transition={0.5}
                        useArrowKeys={true}
                        leftArrow={<Left />}
                        rightArrow={<Right />}
                    >
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                JavaScript
                            </h1>
                            <DiJavascript className="text-[30px] text-orange-300" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                React Js
                            </h1>
                            <DiReact className="text-[30px] text-twitter" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                CPP
                            </h1>
                            <TbBrandCpp className="text-[30px] text-danger" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                CSS
                            </h1>
                            <DiCss3 className="text-[30px] text-dribbble" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                HTML
                            </h1>
                            <DiHtml5 className="text-[30px] text-red-800" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                DSA
                            </h1>
                            <DiCode className="text-[30px] text-red-400" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                TypeScript
                            </h1>
                            <SiTypescript className="text-[30px] text-twitter" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                Python
                            </h1>
                            <SiPython className="text-[30px] text-orange-300" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                Node Js
                            </h1>
                            <SiNodedotjs className="text-[30px] text-secondary" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                MongoDb
                            </h1>
                            <SiMongodb className="text-[30px] text-green-500" />
                        </div>
                        <div className="px-4 py-4 h-[150px] flex items-center justify-center flex-col">
                            <h1 className="text-pure tracking-wide font-500 mb-2">
                                Firebase
                            </h1>
                            <SiFirebase className="text-[30px] text-pink-500" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
// bg-[#7DC8D2]
export default About;
