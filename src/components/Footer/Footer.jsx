import React from "react";

const Footer = () => {
    return (
        <footer className="py-4 bg-dark">
            <div className="w-full flex justify-center items-center flex-col">
                <h1 className="px-2 py-1 rounded-sm bg-fade shadow-lg shadow-indigo-500/50">
                    RM
                </h1>
                <span className="text-sm text-pure mt-2">
                    &copy; Copyright @2023
                </span>
            </div>
        </footer>
    );
};

export default Footer;
