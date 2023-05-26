import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Left, Right } from "./Buttons";
import { DiCode, DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import {
    SiFirebase,
    SiMongodb,
    SiNodedotjs,
    SiPython,
    SiTypescript,
} from "react-icons/si";

const Technology = ({ text, hide }) => {
    return (
        <div className="mx-auto w-[90%]">
            <h1 className={`${hide ? "hidden" : " section_heading"} `}>
                {text}
            </h1>

            <Carousel
                show={2}
                slide={2}
                swiping={true}
                transition={0.5}
                useArrowKeys={true}
                leftArrow={<Left />}
                rightArrow={<Right />}
            >
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        JavaScript
                    </h1>
                    <DiJavascript className="text-[30px] text-orange-300" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        React Js
                    </h1>
                    <DiReact className="text-[30px] text-twitter" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        CPP
                    </h1>
                    <TbBrandCpp className="text-[30px] text-danger" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        CSS
                    </h1>
                    <DiCss3 className="text-[30px] text-dribbble" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        HTML
                    </h1>
                    <DiHtml5 className="text-[30px] text-red-800" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        DSA
                    </h1>
                    <DiCode className="text-[30px] text-red-400" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        TypeScript
                    </h1>
                    <SiTypescript className="text-[30px] text-twitter" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        Python
                    </h1>
                    <SiPython className="text-[30px] text-orange-300" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        Node Js
                    </h1>
                    <SiNodedotjs className="text-[30px] text-secondary" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        MongoDb
                    </h1>
                    <SiMongodb className="text-[30px] text-green-500" />
                </div>
                <div className=" h-[100px] flex items-center justify-center flex-col">
                    <h1 className="text-pure tracking-wide font-500 mb-2">
                        Firebase
                    </h1>
                    <SiFirebase className="text-[30px] text-pink-500" />
                </div>
            </Carousel>
        </div>
    );
};

export default Technology;
