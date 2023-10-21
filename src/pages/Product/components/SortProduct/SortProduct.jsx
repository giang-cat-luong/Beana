import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const category = [
    {
        name: "Trang điểm mặt",
    },
    {
        name: "Chăm sóc da mặt",
    }
];
const makeup = [
    {
        name: "Kem lót",
    },
    {
        name: "Kem nền",
    },
    {
        name: "Kem che khuyết điểm",
    },
    {
        name: "Phẩn phủ",
    },
    {
        name: "Tạo khối",
    },
    {
        name: "Kẻ chân mày / Kẻ mắt",
    },
    {
        name: "Mascara",
    },
    {
        name: "Phấn mắt",
    },
    {
        name: "Má hồng",
    },
    {
        name: "Son môi",
    }
];
const skincare = [
    {
        name: "Nước tẩy trang",
    },
    {
        name: "Bông tẩy trang",
    },
    {
        name: "Kem chống nắng",
    },
    {
        name: "Sữa rửa mặt",
    },
    {
        name: "Serum - Tinh chất",
    },
    {
        name: "Chăm sóc da mụn",
    }
];
const skinStatus = [
    {
        name: "Da sáng",
    },
    {
        name: "Hydrat hóa",
    },
    {
        name: "Mụn",
    },
    {
        name: "Chống lão hóa",
    },
    {
        name: "Mẩn đỏ",
    },
    {
        name: "Da nhạy cảm",
    },
    {
        name: "Bảo vệ khỏi ánh nắng",
    }
];

export default function SortProduct() {

    const [isToggle, setIsToggle] = useState(false);

    const [isDropdownCategory, setIsDropdownCategory] = useState(true);

    const [isDropdownMakeup, setIsDropdownMakeup] = useState(false);

    const [isDropdownSkincare, setIsDropdownSkincare] = useState(false);

    const [isDropdownSkinStatus, setIsDropdownSkinStatus] = useState(false);

    const [isDropdownPrice, setIsDropdownPrice] = useState(true);

    const setToggle = () => {
        setIsToggle(!isToggle);
    }

    const setDropDownCategory = () => {
        setIsDropdownCategory(!isDropdownCategory);
    }

    const setDropDownMakeup = () => {
        setIsDropdownMakeup(!isDropdownMakeup);
    }

    const setDropDownSkincare = () => {
        setIsDropdownSkincare(!isDropdownSkincare);
    }

    const setDropDownSkinStatus = () => {
        setIsDropdownSkinStatus(!isDropdownSkinStatus);
    }

    const setDropDownPrice = () => {
        setIsDropdownPrice(!isDropdownPrice);
    }

    return (
        <>
            <div className="border-t-2 border-[#dfdfdf]">
                <div className="py-4 px-3">
                    <div className="flex flex-row justify-between">
                        <p className="text-sm font-bold">Hết Hàng</p>
                        <div onClick={setToggle} >
                            {isToggle ? (
                                <div className="bg-[#49b949] px-6 py-3 ring-[#fff] ring-1 shadow-lg shadow-[#86bb86] relative">
                                    <div className="absolute bg-[#fff] px-2 py-2 top-1  right-1 ring-1 ring-white/50 duration-500 select-none">
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-gradient-to-r from-[#c8c3c3] to-[#a8a2a2] px-6 py-3 ring-[#fff] ring-1 shadow-lg shadow-[#a8a2a2] relative">
                                    <div className="absolute bg-[#fff] px-2 py-2 top-1  right-7 ring-1 ring-black/25 duration-500 select-none">
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* price */}
            <div className="border-t-2 border-[#dfdfdf] py-4 px-3">
                {isDropdownPrice ? (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold text-[#49b949]">Khoảng Giá</p>
                        <FontAwesomeIcon
                            icon={faCaretUp}
                            color='#49b949'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownPrice}
                        />
                    </div>
                ) : (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold">Khoảng Giá</p>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color='#868686'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownPrice}
                        />
                    </div>
                )}
                <div className={`select-none duration-500 max-h-0 overflow-hidden ${isDropdownPrice ? 'max-h-[400px]' : ''}`}>
                    <div className='flex flex-row justify-between py-4'>
                        <input type='text' placeholder='0' className='w-20 h-[30px] ring-[1px] ring-[#c2c2c2] ring-inset rounded-sm outline-none pl-2 placeholder:text-sm placeholder:font-normal placeholder:text-inherit placeholder:font-Montserrat' />
                        <div className='flex border-solid border-t-[1px] border-[#bdbdbd] w-4 mt-[14px]'></div>
                        <input type='text' placeholder='&#8363; ĐẾN' className='w-20 h-[30px] ring-[1px] ring-[#c2c2c2] ring-inset rounded-sm outline-none pl-2 placeholder:text-sm placeholder:font-normal placeholder:text-inherit placeholder:font-Montserrat' />
                    </div>
                    <button className="w-full font-medium text-[#fff] bg-[#86bb86]  shadow shadow-[#86bb86] text-[16px] border-2 px-6 py-[6px] hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]">ÁP DỤNG</button>
                </div>
            </div>
            {/* category  */}
            <div className="border-t-2 border-[#dfdfdf] py-4 px-3">
                {isDropdownCategory ? (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold text-[#49b949]">Phân Loại </p>
                        <FontAwesomeIcon
                            icon={faCaretUp}
                            color='#49b949'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownCategory}
                        />
                    </div>
                ) : (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold">Phân Loại </p>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color='#868686'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownCategory}
                        />
                    </div>
                )}
                <div className={`select-none duration-300 max-h-0 overflow-hidden ${isDropdownCategory ? 'max-h-[400px]' : ''}`}>
                    <ul className="pt-2 w-48 text-sm font-medium text-gray-900 ">
                        {category.map((category, index) => (
                            <li className="w-full" key={index}>
                                <div className="flex items-center">
                                    <input id="react-checkbox" type="checkbox" value={category.name} className="w-5 h-5 accent-[#49b949]" />
                                    <label className="w-full py-[6px] ml-2 text-sm font-medium text-[#0C0C0C]">{category.name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* makeup */}
            <div className="border-t-2 border-[#dfdfdf] py-4 px-3">
                {isDropdownMakeup ? (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold text-[#49b949]">Trang Điểm Mặt</p>
                        <FontAwesomeIcon
                            icon={faCaretUp}
                            color='#49b949'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownMakeup}
                        />
                    </div>
                ) : (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold">Trang Điểm Mặt </p>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color='#868686'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownMakeup}
                        />
                    </div>
                )}
                <div className={`select-none duration-500 max-h-0 overflow-hidden ${isDropdownMakeup ? 'max-h-[400px]' : ''}`}>
                    <ul className="pt-2 w-48 text-sm font-medium text-gray-900 ">
                        {makeup.map((makeup, index) => (
                            <li className="w-full" key={index}>
                                <div className="flex items-center">
                                    <input id="react-checkbox" type="checkbox" value={makeup.name} className="w-5 h-5 accent-[#49b949]" />
                                    <label className="w-full py-[6px] ml-2 text-sm font-medium text-[#0C0C0C]">{makeup.name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* skincare */}
            <div className="border-t-2 border-[#dfdfdf] py-4 px-3">
                {isDropdownSkincare ? (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold text-[#49b949]">Chăm Sóc Da Mặt</p>
                        <FontAwesomeIcon
                            icon={faCaretUp}
                            color='#49b949'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownSkincare}
                        />
                    </div>
                ) : (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold">Chăm Sóc Da Mặt </p>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color='#868686'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownSkincare}
                        />
                    </div>
                )}
                <div className={`select-none duration-500 max-h-0 overflow-hidden ${isDropdownSkincare ? 'max-h-[400px]' : ''}`}>
                    <ul className="pt-2 w-48 text-sm font-medium text-gray-900 ">
                        {skincare.map((skincare, index) => (
                            <li className="w-full" key={index}>
                                <div className="flex items-center">
                                    <input id="react-checkbox" type="checkbox" value={skincare.name} className="w-5 h-5 accent-[#49b949]" />
                                    <label className="w-full py-[6px] ml-2 text-sm font-medium text-[#0C0C0C]">{skincare.name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* skin status */}
            <div className="border-t-2 border-[#dfdfdf] py-4 px-3">
                {isDropdownSkinStatus ? (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold text-[#49b949]">Tình Trạng Da</p>
                        <FontAwesomeIcon
                            icon={faCaretUp}
                            color='#49b949'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownSkinStatus}
                        />
                    </div>
                ) : (
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-bold">Tình Trạng Da </p>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color='#868686'
                            size="1x"
                            className="pt-[3px]"
                            onClick={setDropDownSkinStatus}
                        />
                    </div>
                )}
                <div className={`select-none duration-500 max-h-0 overflow-hidden ${isDropdownSkinStatus ? 'max-h-[400px]' : ''}`}>
                    <ul className="pt-2 w-48 text-sm font-medium text-gray-900 ">
                        {skinStatus.map((skinStatus, index) => (
                            <li className="w-full" key={index}>
                                <div className="flex items-center">
                                    <input id="react-checkbox" type="checkbox" value={skinStatus.name} className="w-5 h-5 accent-[#49b949]" />
                                    <label className="w-full py-[6px] ml-2 text-sm font-medium text-[#0C0C0C]">{skinStatus.name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}
