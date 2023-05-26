import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { MdWork } from "react-icons/md";
import { Carousel } from "@trendyol-js/react-carousel";
import { Left, Right } from "../../components/Buttons";

const Work = () => {
    return (
        <div className="bg-black min-h-screen">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Projects</h1>
                </div>
            </header>

            <div className="mx-auto w-[95%] ">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <MdWork className="mr-4 text-pure" />
                    <h1 className="section_heading">PROJECTS</h1>
                </div>
                <hr className="border-none w-full h-[0.5px] bg-fade" />
                <div className="px-4 mt-2 mb-4">
                    <div className="mb-4 bg-primary px-1 py-1 rounded-sm flex items-center justify-center">
                        <span className="text-pure tracking-wide font-500 ">
                            MEETHOUSE
                        </span>{" "}
                    </div>

                    <div className="text-sm text-black my-4 rounded-sm">
                        <h1 className="text-md font-500 bg-gray-200 px-1 py-1 rounded-sm inline-block">
                            Project Details :
                        </h1>
                        <div className="ml-2 mt-4 text-fade">
                            <h1 className="mb-4 text-sm text-justify">
                                • This one is the voice chat web application
                                using webRTC API.
                            </h1>
                            <h1 className="mb-4 text-sm text-justify">
                                • With that application, we create room for
                                voice chat on any topic. This application's main
                                characteristic is we make room in open, private
                                and public types.
                            </h1>
                            <h1 className="mb-4 text-sm text-justify">
                                • I used react js for the frontend and Node js
                                for the backend.
                            </h1>
                            <Carousel
                                className="my-4"
                                show={1}
                                slide={1}
                                swiping={true}
                                transition={0.5}
                                useArrowKeys={true}
                                leftArrow={<Left />}
                                rightArrow={<Right />}
                            >
                                <img
                                    src="https://i.ibb.co/h7yRcfJ/Screenshot-2023-05-26-at-9-01-33-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-01-33-AM"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/GCr2DdX/Screenshot-2023-05-26-at-9-01-14-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-01-14-AM"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/gr52rPn/Screenshot-2023-05-26-at-9-02-00-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-02-00-AM"
                                    border="0"
                                />

                                <img
                                    src="https://i.ibb.co/PcR4ph4/Screenshot-2023-05-26-at-9-00-22-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-00-22-AM"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/jWf5gmD/Screenshot-2023-05-26-at-9-00-47-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-00-47-AM"
                                    border="0"
                                />
                            </Carousel>
                            <h1 className="mb-4 text-sm text-justify">
                                • For state management used redux js & redux
                                toolkit.
                            </h1>
                            <h1 className="mb-4 text-sm text-justify">
                                • MongoDB is used as a database and OTP services
                                used Twilio communication API.
                            </h1>
                        </div>
                    </div>
                    <a
                        href="https://github.com/rushi-mungse/MeetHouse"
                        className="text-[12px] bg-secondary shadow-lg shadow-secondary/50 rounded-sm px-2 py-1 text-white"
                        target="_blank"
                    >
                        View Code
                    </a>
                </div>

                <hr className="border-none w-full h-[0.5px] bg-fade" />
                <div className="px-4 mt-2 pb-4">
                    <div className="mb-4 bg-primary px-1 py-1 rounded-sm flex items-center justify-center">
                        <span className="text-pure tracking-wide font-500 ">
                            ONLINE PIZZA DELIVERY
                        </span>
                    </div>

                    <div className="text-sm text-black my-4 rounded-sm">
                        <h1 className="text-md font-500 bg-gray-200 px-1 py-1 rounded-sm inline-block">
                            Project Details :
                        </h1>
                        <div className="ml-2 mt-4 text-fade">
                            <h1 className="mb-4 text-sm text-justify">
                                • This is a web application, for online pizza
                                delivery with tracking functionality.
                            </h1>
                            <pre></pre>
                            <h1 className="mb-4 text-sm text-justify">
                                • JavaScript and node.js for implementing a UI
                                and Backend server.
                            </h1>
                            <h1 className="mb-4 text-sm text-justify">
                                • In this web app, implemented custom API using
                                express js.
                            </h1>
                            <Carousel
                                className="my-4"
                                show={1}
                                slide={1}
                                swiping={true}
                                transition={0.5}
                                useArrowKeys={true}
                                leftArrow={<Left />}
                                rightArrow={<Right />}
                            >
                                <img
                                    src="https://i.ibb.co/jR0cyjd/Screenshot-2023-05-26-at-9-19-44-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-01-33-AM"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/MS2BFP2/Screenshot-2023-05-26-at-9-20-35-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-01-14-AM"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/1rrFfyR/Screenshot-2023-05-26-at-9-20-53-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-02-00-AM"
                                    border="0"
                                />

                                <img
                                    src="https://i.ibb.co/MBSbGDN/Screenshot-2023-05-26-at-9-23-56-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-00-22-AM"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/vVkTvBQ/Screenshot-2023-05-26-at-9-24-21-AM.png"
                                    alt="Screenshot-2023-05-26-at-9-00-47-AM"
                                    border="0"
                                />
                            </Carousel>
                            <h1 className="mb-4 text-sm text-justify">
                                • For compiling modern JavaScript and triggering
                                a CSS preprocessor, I used the Laravel Mix tool.
                            </h1>
                            <h1 className="mb-4 text-sm text-justify">
                                • In that web app, I used the Tailwind CSS
                                framework for designing a web.
                            </h1>
                        </div>
                    </div>
                    <a
                        href="https://github.com/rushi-mungse/realtime-pizza-app"
                        className="text-[12px] bg-secondary shadow-lg shadow-secondary/50 rounded-sm px-2 py-1 text-white"
                        target="_blank"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Work;
