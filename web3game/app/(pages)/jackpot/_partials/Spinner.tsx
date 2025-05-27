"use client";

import React, { useCallback, useState } from "react";
import EquityImage from "@/public/assets/images/equity.png";
import LuhImage from "@/public/assets/images/imperial.png";
import MjhonirImage from "@/public/assets/images/mjolnir.png";
import PncImage from "@/public/assets/images/pnc.png";
import SalImage from "@/public/assets/images/sal.png";
import Image from "next/image";
import JackpotSpinner from "@/public/assets/svg/jackpot-spinner.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
    EquityImage,
    LuhImage,
    MjhonirImage,
    PncImage,
    SalImage,
    EquityImage,
    LuhImage,
    MjhonirImage,
    PncImage,
    SalImage,
    LuhImage,
    MjhonirImage,
    PncImage,
    SalImage,
    EquityImage,
    LuhImage,
    MjhonirImage,
    PncImage,
    SalImage,
];

const Spinner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(23);
    const [extendedImages, setExtendedImages] = useState([
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
    ]);
    const handleClick = useCallback(() => {
        setCurrentImageIndex(currentImageIndex + 3025);
        setExtendedImages([
            ...extendedImages,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
        ]);
    }, [currentImageIndex]);

    return (
        <div className="relative lg:w-[990px] w-[330px]  rounded-[22px]">
            <JackpotSpinner
                className="absolute lg:left-[44.9%] left-[34.68%] -top-[44px] scale-[75%] z-50 cursor-pointer"
                onClick={handleClick}
            />
            <div className="absolute left-[47.7%] blur-lg top-[6px] bg-black z-30 w-[50px] h-[55px] opacity-10" />
            <div
                className={` bg-black bg-opacity-50  relative  pb-2 border-[#222121] border-[2px] rounded-[22px] overflow-hidden duration-200 `}
                style={{ maxHeight: "fit-content" }}
            >
                <img
                    src="./assets/svg/jackpotbg.svg"
                    alt="bg2"
                    className="absolute  z-10 opacity-55 bg-opacity-55 lg:-left-[0.7%] scale-[3.1] -left-[2.3%] lg:scale-[1.08] top-[24px] lg:top-[6px]"
                />
                <div className="absolute w-[98%]  mr-[1%] bg-opacity-35 brightness-[0.7] h-[63px] mt-[1px] blur-[5px] bg-[gray] rounded-r-[22px] right-0 z-20"></div>
                <div
                    className="flex"
                    style={{
                        marginLeft: -currentImageIndex,
                        transition: "3500ms",
                        transitionTimingFunction:
                            "cubic-bezier(0.1, 0.7, 0.7, 1)",
                        transitionDelay: "300ms",
                    }}
                >
                    <div className="flex gap-[5px]">
                        {extendedImages.map((image, index) => (
                            <Image
                                src={image}
                                alt={"user"}
                                key={index}
                                width={50}
                                height={40}
                                className={
                                    index % 2 === 1
                                        ? `border-[#1DD6FF] max-w-none rounded-[11px] border-2 border-solid w-[50px]  mt-2 h-[50px] object-cover `
                                        : `rounded-[11px] max-w-none border-2 border-solid w-[50px]  mt-2 h-[50px] object-cover border-[#ED3440] `
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Spinner;
