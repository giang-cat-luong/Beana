import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react"
import Spider from './spider.json'
import Rescue from './rescue.json'
import { useToken } from '../../../../services/Auth/services';
import { useNavigate } from 'react-router-dom';
import BeanScream from '../../../../components/Loading/BeanScream';

export default function BannerEvent() {

    const decodedToken = useToken();
    const navigate = useNavigate();

    const [isShow, setIsShow] = useState(true);
    const [openSpider, setOpenSpider] = useState(false);
    const [iSCatchBean, setIsCatchBean] = useState(false);
    const [isRescue, setIsRescue] = useState(false);
    const [isGoRescue, setIsGoRescue] = useState(false);

    const setShow = () => {
        setIsShow(false);
    };
    const handleOpenSpider = () => {
        setOpenSpider(true);
        setIsShow(false)
        setTimeout(() => {
            setIsCatchBean(true);
            setTimeout(() => {
                setIsCatchBean(false);
                setOpenSpider(false);
                setIsRescue(true);
            }, 1000);
        }, 4400);
    };
    const handleRescue = () => {
        setIsGoRescue(true);
        setIsRescue(false)
        setTimeout(() => {
            if (decodedToken) {
                navigate("/products")
            } else {
                navigate("/login")
            }
        }, 3000);
    };

    

    useEffect(() => {
        const adCount = parseInt(localStorage.getItem('adClosedCount') || '1', 10);

        if (adCount < 9) {
            localStorage.setItem('adClosedCount', (adCount + 1).toString());
        } else {
            setIsShow(false)
            const timeoutId = setTimeout(() => {
                setIsShow(true);
                localStorage.setItem('adClosedCount', '1');
            }, 5 * 60 * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, []);


    return (
        <div className='relative visible'>
            {(isShow && !decodedToken) && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9000,
                    }}
                >
                    <div className='relative'>
                        <div onClick={handleOpenSpider} className='flex justify-center '>
                            <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698682641/Beana_assets/halloween_event.png' className='w-[90%] md:w-[30%] shadow-[0_25px_60px_-20px_#86bb86]' />
                        </div>
                        {/* <a href='/products' className='flex justify-center '>
                            <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698682641/Beana_assets/halloween_event.png' className='w-[90%] md:w-[30%] shadow-[0_25px_60px_-20px_#86bb86]' />
                        </a> */}
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                color="#fff"
                                size="2x"
                                fixedWidth
                                className='absolute bottom-[103%] md:bottom-[100%] right-5 md:right-[32%] hover:text-[#86bb86] cursor-pointer'
                                onClick={setShow}
                            />
                        </div>
                    </div>
                </div>
            )}
            {(isShow && decodedToken) && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9000,
                    }}
                >
                    <div className='relative'>
                        <a href='/products' className='flex justify-center '>
                            <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698682641/Beana_assets/halloween_event.png' className='w-[90%] md:w-[30%] shadow-[0_25px_60px_-20px_#86bb86]' />
                        </a>
                        {/* <a href='/products' className='flex justify-center '>
                            <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698682641/Beana_assets/halloween_event.png' className='w-[90%] md:w-[30%] shadow-[0_25px_60px_-20px_#86bb86]' />
                        </a> */}
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                color="#fff"
                                size="2x"
                                fixedWidth
                                className='absolute bottom-[103%] md:bottom-[100%] right-5 md:right-[32%] hover:text-[#86bb86] cursor-pointer'
                                onClick={setShow}
                            />
                        </div>
                    </div>
                </div>
            )}
            {openSpider && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9000,
                    }}
                >
                    <Lottie animationData={Spider} className="absolute w-[20%] top-0" loop={false} />
                    <div
                        className={`w-[90%] md:w-[8%]  absolute  -z-10 ${iSCatchBean ? 'top-[-20%] duration-300' : 'bottom-[25%]'}`}
                    >
                        <BeanScream />
                    </div>
                </div>
            )}
            {isRescue && (
                <div>
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9000,
                        }}
                    >
                        <div className='flex flex-col justify-center items-center'>
                            <img
                                src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698690744/Beana_assets/bean_recuse_full_b9yhgl.png'
                                className='w-[90%] md:w-[50%]'
                            />
                            <p className='text-[25px] text-white py-2'>Oh no! Bean nữ đã bị bắt cóc</p>
                            <button
                                className="font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[13px] border-2 px-6 py-2  hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                                onClick={handleRescue}
                            >Giải cứu Bean ngay
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isGoRescue && (
                <div>
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9000,
                        }}
                    >
                        <div className=''>
                            <div className='relative flex justify-center items-center'>
                                <Lottie animationData={Rescue} className="w-[60%]" loop={true} />
                                <img
                                    src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698684786/Beana_assets/bean_recuse_zqrqdp.png'
                                    className='w-[90%] md:w-[10%] absolute top-[53.8%] left-[35.5%] '
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
