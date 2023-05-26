import React from "react";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";

const DownloadCV = () => {
    return (
        <div className="abou min-h-screen bg-black">
            <div>
                <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                    <ToggleBtn />
                    <div className="flex items-center justify-center">
                        <h1 className="ml-3">Resume</h1>
                    </div>
                </header>
            </div>
            <img
                src="https://i.ibb.co/jW1bNZV/127-removebg-preview.png"
                alt="127-removebg-preview"
                border="0"
            />
            <div className="flex items-center justify-center w-full mt-4">
                <a
                    href="https://drive.google.com/file/d/1C1dKXbY4zuaHWxbDsgk4CiyheVcQjK6C/view?usp=drive_link"
                    target="_blank"
                    className="inline-block py-2 px-6 bg-gradient-to-l from-success to-secondary text-pure tracking-wide font-500 rounded-full"
                >
                    Download CV
                </a>
            </div>
            <div className="flex items-center justify-center mt-10">
                <img
                    src="https://i.ibb.co/tbcRXG8/8083037-removebg-preview.png"
                    alt="8083037-removebg-preview"
                    border="0"
                    className="inline-block w-[80%]"
                />
            </div>
        </div>
    );
};

export default DownloadCV;
