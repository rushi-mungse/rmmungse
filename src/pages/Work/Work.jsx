import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { MdWork } from "react-icons/md";

const Work = () => {
    return (
        <div className="bg-black min-h-screen">
            <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Projects</h1>
                </div>
            </header>

            <div className="mx-auto w-[95%]">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <MdWork className="mr-4 text-pure" />
                    <h1 className="section_heading">PROJECTS</h1>
                </div>
                <hr className="border-none w-full h-[0.5px] bg-fade" />
                <div className="px-4 mt-2">
                    <div className="text-sm font-semibold mb-4 bg-primary px-1 py-1 rounded-sm">
                        <span className="text-pure tracking-wide font-500">
                            Production of Bio-CNG through anaerobic digestion of
                            Napier grass
                        </span>{" "}
                    </div>

                    <div className="text-sm text-black my-4 rounded-sm">
                        <h1 className="text-md font-semibold bg-gray-200 px-1 py-1 rounded-sm inline">
                            Work Details :
                        </h1>
                        <div className="ml-2 mt-4 text-fade">
                            <h1 className="mb-4 text-sm text-justify">
                                In this project I used a napier grass as raw
                                material and membrane separation as purification
                                method there is significant reduction in energy,
                                time and cost to produce bio-cng. Residue of
                                napier gas can also lead to formation of organic
                                manure which can be used as fertilizer by
                                farmers. Thus by producing Bio-CNG from Napier
                                grass can cause reduction import bills, cause
                                significant reduction in pollution levels,
                                ensures waste management, additional income to
                                farmer and cause employment generation within
                                country.
                            </h1>
                            <div className="my-2">
                                <img
                                    src="https://i.ibb.co/ZX9zbR6/Whats-App-Image-2023-04-20-at-9-42-23-AM.jpg"
                                    alt="Whats-App-Image-2023-04-20-at-9-42-23-AM"
                                    border="0"
                                />
                            </div>
                            <h1 className="mb-4 text-sm text-justify">
                                Because of membrane separation process it became
                                compact, very simple, comparitively easy to
                                operate and control, clarified process and easy
                                to scale up. Pretreatment of Napier grass
                                through thermal, chemical and mechanical methods
                                will increase the yield and decrease the
                                retention time for biogas generation.
                            </h1>
                        </div>
                    </div>
                </div>
                <a
                    href="https://drive.google.com/file/d/1PPDZyFliz30WSk9ab-RDEe7CrKeXfILv/view?usp=drivesdk"
                    className="text-[12px] bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-sm px-2 py-1 text-white"
                    target="_blank"
                >
                    View Report
                </a>
            </div>
        </div>
    );
};

export default Work;
