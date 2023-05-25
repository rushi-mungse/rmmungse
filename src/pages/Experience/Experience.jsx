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
                <hr className="border-none w-full h-[0.5px] bg-fade" />
                <div className="px-4 mt-2">
                    <div className="text-sm font-500 text-pure mb-4 bg-primary px-1 py-1 rounded-sm">
                        <span className="mr-2"> Role :</span>
                        <span>Process Engineer</span>{" "}
                        <span>(04/06/2022 – 30/06/2022)</span>
                    </div>
                    <div className="bg-primary px-1 py-1 rounded-sm">
                        <span className="text-sm font-500 text-pure mr-2">
                            Company Name :
                        </span>
                        <a
                            href="https://www.worqhat.com"
                            className="text-sm text-pure cursor-pointer"
                            target="_black"
                        >
                            WorqHat
                        </a>
                    </div>
                    <div className="text-sm text-black my-4 rounded-sm">
                        <h1 className="text-md font-semibold mb-4 bg-mild px-1 py-1 rounded-sm inline">
                            Work Details :
                        </h1>
                        <div className="ml-2 mt-2 text-fade">
                            <h1 className="mb-4 text-md text-justify">
                                If talking to summarize the internship it was
                                very useful experience. I get to known about
                                many facts related to startups, licensing
                                authorities and about well established
                                industries. Here learn about research, problem
                                analysis, problem solving, designing,
                                presentation skills, storage, transportation,
                                oxygen management system in hospital a lot. I
                                learned the different aspects of working within
                                a startup related to core industry.{" "}
                            </h1>
                            <h1 className="mb-4 text-md text-justify">
                                In this internship I worked on Medical oxygen
                                PSA plant. In this project I learn some
                                technology like cryogenic, PSA, VPSA etc.
                                Talking about these techniques cryogenic is a
                                good because talking about its life, efficiency,
                                purity is maximum but I select PSA because of we
                                need purity is 90-96 which get from PSA
                                techniques, aslo it is simple to understand and
                                cost is less than other techniques. Hence I
                                select this technique. In this technique I learn
                                a lot of things, like block diagram, PFD, P and
                                ID,Process of this techniqes, types of
                                equipment, valves, lines, safty valves etc.
                            </h1>
                            <h1 className="mb-4 text-sm text-justify">
                                I learn how to work each and every equipments
                                ,how change pressure, temperature, molar
                                flowrate, volumetric flowrate, composition of
                                component. After that I done sizing of equipment
                                and calculation. Then done cost of equipments.
                                On this I conclude that it helped me to define
                                what skills and knowledge I have and what
                                improve need to be done. So ,this internship is
                                very usefull to me in future work.
                            </h1>
                        </div>
                    </div>
                </div>
                <a
                    href="https://drive.google.com/file/d/1P2r2eY-h4Zl1IBs0FNqJUMD8Anp3LfPh/view?usp=drivesdk"
                    className="inline-block text-[12px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm px-2 py-1 text-black my-4"
                    target="_blank"
                >
                    View Certificate
                </a>
            </div>

            {/* <section className="pb-6">
                <div className="mx-auto w-[95%]">
                    <div className="text-white mt-4 underline font-semibold flex items-center mb-4">
                        <FaFirstOrder className="mr-4" />
                        <h1 className="">ACHIEVEMENTS</h1>
                    </div>
                    <hr className="border-none w-full h-[0.5px] bg-orange-200" />
                    <div className="mb-4">
                        <div className="px-4 my-2">
                            <div className="text-sm text-[#DFE7F1] font-semibold mb-2">
                                <span>LEETCODE</span>{" "}
                            </div>

                            <ul className="text-sm text-gray-300 ml-4 mt-2 rounded-sm list-disc">
                                <li className="p-1">
                                    I solved 800+ coding problems on LeetCode
                                    and learned Data Structure and algorithms.
                                </li>
                                <li className="p-1">
                                    I learned how to optimize code and how to
                                    write readable code.
                                </li>
                                <li className="p-1">
                                    On LeetCode, my contest rating is 1700+.
                                </li>
                            </ul>
                        </div>
                        <a
                            href="https://leetcode.com/code_crazy/"
                            className="text-[12px] bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-sm px-2 py-1 text-[#2a2b2b]"
                            target="_blank"
                        >
                            LeetCode Profile
                        </a>
                    </div>
                    <hr className="border-none w-full h-[0.5px] bg-orange-200" />
                    <div className="mb-b">
                        <div className="px-4 my-2">
                            <div className="text-sm text-[#DFE7F1] font-semibold mb-2">
                                <span>CODEFORCES</span>{" "}
                            </div>

                            <ul className="text-sm text-gray-300 ml-4 mt-2 rounded-sm list-disc">
                                <li className="p-1">
                                    Be a competative programmer.
                                </li>

                                <li className="p-1">
                                    On Codeforces, my contest rating is 800+.
                                </li>
                            </ul>
                        </div>
                        <a
                            href="https://codeforces.com/profile/rushi_mungse"
                            className="text-[12px] bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-sm px-2 py-1 text-[#2a2b2b]"
                            target="_blank"
                        >
                            Codeforces Profile
                        </a>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Experience;
