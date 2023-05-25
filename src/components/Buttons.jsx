import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
export const Left = () => {
    return (
        <h1 className="text-secondary flex items-center justify-center h-full mx-2">
            <BiLeftArrow />
        </h1>
    );
};

export const Right = () => {
    return (
        <h1 className="text-secondary flex items-center justify-center h-full mx-2">
            <BiRightArrow />
        </h1>
    );
};
