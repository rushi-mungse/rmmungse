import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Context } from "../../Context";
import { useContext } from "react";

const ToggleBtn = ({ color = "white" }) => {
    const { data } = useContext(Context);
    const closeNavBar = (e) => {
        data.style.left = "0px";
    };
    return (
        <div onClick={(e) => closeNavBar(e)} className={`text-${color}`}>
            <HiMenuAlt2 />
        </div>
    );
};

export default ToggleBtn;
