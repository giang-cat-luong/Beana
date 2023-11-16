import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faCaretLeft, faCaretRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ScanningFaceLoading from '../../components/Loading/ScanningFaceLoading';
import ProgessLoading from '../../components/Loading/ProgessLoading';
import { useLocation } from "react-router-dom";
import ProgressAnalyzeLoading from '../../components/Loading/ProgressAnalyzeLoading/ProgressAnalyzeLoading';
import AnglesDown from '../../components/AnimationIcon/AnglesDown'

const images = [
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068129/Beana_svg/radiance_ybbbwm.png",
        name: "Sáng da",
        index: 1,
    },
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/pores_gjwao2.png",
        name: "Lỗ chân lông",
        index: 2,
    },
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068128/Beana_svg/finelines_a25xtt.png",
        name: "Đốm tối",
        index: 3,
    },
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/wrinkles_l2h7uo.png",
        name: "Độ đàn hồi",
        index: 4,
    },
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/8_aokeh8.png",
        name: "Tổng quan",
        index: 5,
    },
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068119/Beana_svg/darkspot_yv5ul6.png",
        name: "Quầng thâm",
        index: 6,
    },
    {
        src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/firmness_yycjul.png",
        name: "Nếp nhăn",
        index: 7,
    },
];

function ScanningCalculation() {

    const helpModal = useRef(null);

    const resultRef = useRef(null);

    const location = useLocation();

    const { img } = location.state;

    const [loading, setLoading] = useState(false);
    const [analyzeCountDown, setAnalyzeCountDown] = useState(8);
    const [animationKey, setAnimationKey] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageByIndex, setCurrentImageByIndex] = useState(5);
    const [selectedImageIndex, setSelectedImageIndex] = useState(2);

    const [page, setPage] = useState(0);
    const [selectedSkin, setSelectedSkin] = useState(null);
    const [age, setAge] = useState("")
    const [ageError, setAgeError] = useState(null);
    const [skinError, setSkinError] = useState(null);

    const [buttonCheck, setButtonCheck] = useState(false);
    const [skinHelp, setSkinHelp] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;

            }
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;

            } else {
                return prevIndex - 1;
            }
        });
    };

    const getCurrentIndex = (index) => {
        setSelectedImageIndex(index);
    }
    const getCurrentDescriptionByIndex = (index) => {
        setCurrentImageByIndex(index);
        console.log(index)
    }

    const visibleImages = [
        images[(currentIndex + 2) % images.length],
        images[(currentIndex + 3) % images.length],
        images[(currentIndex + 4) % images.length],
        images[(currentIndex + 5) % images.length],
        images[(currentIndex + 6) % images.length],
    ];

    const handleNextPage = (page) => {
        setPage(page);
    };

    const handleInputAge = (age) => {
        setAge(age);
    };

    const handleHelp = () => {
        setSkinHelp(true);
    };

    const handleNexPageClick = () => {
        if (selectedSkin === null) {
            setSkinError(true)
        }
        if (age === "") {
            setAgeError(true)
        }
        if (selectedSkin !== null) {
            setSkinError(false)
        }
        if (age !== "") {
            setAgeError(false)
        }
        if (selectedSkin !== null && age !== "") {
            setSkinError(false)
            setAgeError(false)
            setButtonCheck(true)
            setPage(2)
        }
    };

    const handleOutsideClick = (e) => {
        if (helpModal.current && !helpModal.current.contains(e.target)) {
            setSkinHelp(false);
        }
    };

     const handleScrollToResult = () =>{
            resultRef.current?.scrollIntoView({behavior: 'smooth'})
     }

    const startAnalyze = () => {

        const countdownInterval = setInterval(() => {
            setAnalyzeCountDown(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            setPage(3);
        }, 10000);

    };

    useEffect(() => {

        setAnimationKey(animationKey + 1);
    }, [analyzeCountDown]);

    useEffect(() => {
        if (page === 2) {
            startAnalyze();
        }
    }, [page]);

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    useEffect(() => {
        if (selectedSkin !== null && age !== "") {
            setButtonCheck(true)
        } else {
            setButtonCheck(false);
        }
    }, [age, selectedSkin]);

    return (
        <div className="h-[620px] md:hidden">
            {skinHelp &&
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9000,
                    }}
                >
                    <div ref={helpModal} className='animate-questionAppear relative bg-[#FAF9F5] max-h-[calc(100%-74px)] overflow-auto max-w-[350px] md:max-w-[620px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                        <div className='px-3 mt-6 md:px-10 py-7'>
                            <p className='text-[18px] text-center font-bold text-secondary'>CÁC LOẠI DA</p>
                            <div className='px-2 md:px-16 py-10 '>
                                <div className='border border-black'>
                                    <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699987628/Beana_assets/oily_skin_znpz1g.jpg' ></img>
                                    <div className='px-3 pt-5 pb-3'>
                                        <p className='font-bold text-lg'>Da dầu</p>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img
                                                src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/oily_second_zg9drr.svg'
                                                className='w-[38px] h-[38px]'
                                            />
                                            <p className='text-xss'>Da có xu hướng đổ dầu, đặc biệt là ở vùng T (đầu, mũi và trán).</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-black mt-6'>
                                    <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699987628/Beana_assets/normal_skin_ddvfiy.jpg' ></img>
                                    <div className='px-3 pt-5 pb-3'>
                                        <p className='font-bold text-lg'>Da bình thường</p>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img
                                                src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984692/Beana_svg/normal_second_fwlrtv.svg'
                                                className='w-[38px] h-[38px]'
                                            />
                                            <p className='text-xss'>Da thường là cân bằng—không có quá nhiều dầu hoặc khô</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-black mt-6'>
                                    <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699987627/Beana_assets/combination_skin_qopk38.jpg' ></img>
                                    <div className='px-3 pt-5 pb-3'>
                                        <p className='font-bold text-lg'>Da hỗn hợp</p>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img
                                                src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                className='w-[38px] h-[38px]'
                                            />
                                            <p className='text-xss'>Cùng một lúc, da có vùng T-zone dầu và ở phần còn lại là khô hoặc cân bằng</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-black mt-6'>
                                    <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699987628/Beana_assets/dry_skin_wpxyfu.jpg' ></img>
                                    <div className='px-3 pt-5 pb-3'>
                                        <p className='font-bold text-lg'>Da khô</p>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img
                                                src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/dry_second_vkxzvl.svg'
                                                className='w-[38px] h-[38px]'
                                            />
                                            <p className='text-xss'>Da thường có những vùng da bong tróc hoặc khó chịu, và cảm giác căng trở hoặc ngứa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setSkinHelp(false)} className='flex items-center'>
                                <div className='beana-button-green py-2 w-full'> ĐÓNG</div>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                color="#86bb86"
                                size="2x"
                                fixedWidth
                                className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                onClick={() => setSkinHelp(false)}
                            />
                        </div>
                    </div>
                </div>
            }
            {page === 4 &&
                <div className='relative'>
                    <img
                        src={img}
                        className='h-[620px] w-[800px] z-0'
                    />
                    {loading ? (
                        <div className='fixed bottom-0 w-full h-24 bg-black/50 backdrop-opacity-10 backdrop-invert z-10'>
                            <div className='flex justify-center text-secondary mt-3'> Đang tải hình lên...</div>
                            <div className='w-[50%] absolute bottom-8 left-[50%] text-center -translate-x-1/2'>
                                <ProgessLoading />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='fixed bottom-0 w-full h-24 bg-white z-10 border-2'>
                                <div
                                    className='beana-button-green mx-5 mt-2 h-9 flex items-center justify-center text-black font-bold'
                                    onClick={() => handleNextPage(1)}
                                >
                                    TIẾP TỤC
                                </div>
                                <div className='text-black absolute bottom-2 font-semibold text-xs left-1/2 -translate-x-1/2'>CHỤP LẠI</div>
                            </div>
                            <div className="fixed top-0 h-16 py-5 flex justify-center items-center text-white bg-black/70 backdrop-opacity-10 w-full backdrop-invert">
                                <div className='text-secondary flex flex-row gap-3 justify-center'>
                                    <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>ÁNH SÁNG</div>
                                    <div className='border-l h-5 pr-2 ml-2'></div>
                                    <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>VỊ TRÍ MẶT</div>
                                    <div className='border-l h-5 pr-2 ml-2'></div>
                                    <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>NHÌN THẲNG</div>
                                </div>
                            </div>
                        </div>
                    )}
                    {!loading &&
                        <div className='text-white text-xs tracking-wider font-medium absolute bottom-32 bg-black/70 pl-[6px] pr-2 py-[6px] rounded-3xl flex items-center left-1/2 -translate-x-1/2'>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                color='#49b949'
                                className='text-[18px] mr-1'
                            />
                            SẴN SÀNG PHÂN TÍCH
                        </div>
                    }
                </div>
            }
            {page === 1 &&
                <div className='relative'>
                    <div className='h-full mt-12 px-4'>
                        <div className='font-bold text-xs tracking-wider'>BƯỚC 1/1</div>
                        <div className='font-light text-[#333333] text-[24px] tracking-wider mt-5'>HỒ SƠ VỀ DA CỦA BẠN!</div>
                        <div className='font-bold text-[#333333] text-[18px] tracking-wider mt-6'>TUỔI CỦA BẠN</div>
                        <div className='font-normal text-[#858383] text-[12px] tracking-wider mt-3'>Thông tin này giúp cung cấp thông tin cho việc phân tích và chuẩn đoán khuôn mặt</div>
                        <div className='flex mt-6 justify-center items-center'>
                            <div className='border-b-[3px] border-secondary pb-1 mr-3'>
                                <input
                                    type='number'
                                    value={age}
                                    onChange={(e) => handleInputAge(e.target.value)}
                                    placeholder='--'
                                    className='text-center w-[70px] px-2 h-14 placeholder:text-[40px] text-[40px] font-extralight'
                                />
                            </div>
                            <label className='font-medium text-[#858383] mt-3'>Tuổi</label>
                        </div>
                        {ageError && <div className='text-xs text-red pt-6 text-center'>Vui lòng nhập số tuổi của bạn!</div>}
                        <div className='flex flex-row justify-between mt-8'>
                            <div className='font-bold text-[#333333] text-[18px] tracking-wider'>LOẠI DA CỦA BẠN</div>
                            <div
                                className='font-normal text-[#333333] text-[12px] tracking-wider underline'
                                onClick={handleHelp}
                            >TRỢ GIÚP
                            </div>
                        </div>
                        <div className='font-normal text-[#858383] text-[12px] tracking-wider mt-3'>Chọn mô tả da của bạn một cách chính xác nhất</div>
                        <div className='flex flex-row justify-between mt-6'>
                            {selectedSkin === 'oily' ?
                                (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-black'
                                        onClick={() => setSelectedSkin(null)}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/oily_second_zg9drr.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA DẦU</p>
                                    </div>
                                ) : (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                                        onClick={() => setSelectedSkin("oily")}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984262/Beana_svg/oily_primary_yr99ol.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA DẦU</p>
                                    </div>
                                )}
                            {selectedSkin === 'normal' ?
                                (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-black'
                                        onClick={() => setSelectedSkin(null)}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984692/Beana_svg/normal_second_fwlrtv.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA BÌNH THƯỜNG</p>
                                    </div>
                                ) : (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                                        onClick={() => setSelectedSkin("normal")}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984692/Beana_svg/normal_primary_jkyyua.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA BÌNH THƯỜNG</p>
                                    </div>
                                )}
                            {selectedSkin === 'combination' ?
                                (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-black'
                                        onClick={() => setSelectedSkin(null)}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA HỖN HỢP</p>
                                    </div>
                                ) : (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                                        onClick={() => setSelectedSkin("combination")}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_primary_x8r3l6.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA HỖN HỢP</p>
                                    </div>
                                )}
                            {selectedSkin === 'dry' ?
                                (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-black'
                                        onClick={() => setSelectedSkin(null)}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/dry_second_vkxzvl.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA KHÔ</p>
                                    </div>
                                ) : (
                                    <div
                                        className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                                        onClick={() => setSelectedSkin("dry")}
                                    >
                                        <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/dry_primary_k1jonj.svg' className='w-[50px] h-[50px]' />
                                        <p className='text-[10px] font-medium'>DA KHÔ</p>
                                    </div>
                                )}
                        </div>
                        {skinError && <div className='text-xs text-red pt-6 text-center'>Bạn phải lựa chọn loại da của bạn!</div>}
                    </div>
                    <div
                        className={`fixed bottom-2 left-1/2 -translate-x-1/2 w-[90%] beana-button-green mt-2 h-9 flex items-center justify-center text-black font-bold ${buttonCheck === false && 'opacity-40'}`}
                        onClick={handleNexPageClick}
                    >
                        TIẾP TỤC
                    </div>
                </div>
            }
            {page === 2 &&
                <div className='relative'>
                    <div key={animationKey} className="h-[620px] z-0 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                        {analyzeCountDown >= 7
                            ? (
                                <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert ">
                                    <div className='animate-analyzeAppear'>
                                        <img className='w-36 absolute top-40 left-1/2 -translate-x-1/2 opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/tran_qxc9hz.png' />
                                        <img className='w-10 absolute top-[262px] left-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-ma_sspixz.png' />
                                        <img className='w-6 absolute bottom-[266px] left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045965/Beana_assets_analyze/left-camtren_fcod48.png' />
                                        <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                                        <img className='w-10 absolute top-[262px] right-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-ma_qdbws4.png' />
                                        <img className='w-6 absolute bottom-[266px] right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-camtren_es1drv.png' />
                                        <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />

                                    </div>
                                </div>
                            ) : analyzeCountDown >= 6 ?
                                (
                                    <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert ">
                                        <div className='animate-analyzeAppear'>
                                            <img className='w-16 absolute top-[274px] left-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matrai_v1t691.png' />
                                            <img className='w-16 absolute top-[274px] right-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/maphai_wrrr6p.png' />
                                        </div>
                                    </div>
                                ) : analyzeCountDown >= 5 ?
                                    (
                                        <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                                            <div className='animate-analyzeAppear'>
                                                <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                                                <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
                                            </div>
                                        </div>
                                    ) : analyzeCountDown >= 4 ?
                                        (
                                            <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                                                <div className='animate-analyzeAppear'>
                                                    <img className='w-12 absolute top-[272px] left-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                                                    <img className='w-12 absolute top-[272px] right-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                                                </div>
                                            </div>
                                        ) : analyzeCountDown >= 3 ?
                                            (
                                                <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                                                    <div className='animate-analyzeAppear'>
                                                        <img className='w-36 absolute top-40 left-1/2 -translate-x-1/2 opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/tran_qxc9hz.png' />
                                                        <img className='w-10 absolute top-[262px] left-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-ma_sspixz.png' />
                                                        <img className='w-6 absolute bottom-[266px] left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045965/Beana_assets_analyze/left-camtren_fcod48.png' />
                                                        <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                                                        <img className='w-10 absolute top-[262px] right-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-ma_qdbws4.png' />
                                                        <img className='w-6 absolute bottom-[266px] right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-camtren_es1drv.png' />
                                                        <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
                                                    </div>
                                                </div>
                                            ) : analyzeCountDown >= 2 ?
                                                (
                                                    <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                                                        <div className='animate-analyzeAppear'>
                                                            <img className='w-16 absolute top-[274px] left-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matrai_v1t691.png' />
                                                            <img className='w-16 absolute top-[274px] right-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/maphai_wrrr6p.png' />
                                                        </div>
                                                    </div>
                                                ) : analyzeCountDown >= 1 ?
                                                    (
                                                        <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                                                            <div className='animate-analyzeAppear'>
                                                                <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                                                                <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
                                                            </div>
                                                        </div>
                                                    ) : analyzeCountDown >= 0 &&
                                                    (
                                                        <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                                                            <div className='animate-analyzeAppear'>
                                                                <img className='w-12 absolute top-[272px] left-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                                                                <img className='w-12 absolute top-[272px] right-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                                                            </div>
                                                        </div>
                                                    )
                        }
                    </div>
                    <div className='w-full absolute bottom-20 left-[50%] text-center -translate-x-1/2 mb-6'>
                        <div className='flex justify-center text-white mb-4 text-xs'>
                            {analyzeCountDown >= 6
                                ? 'Công nghệ quét da tiên tiến đang hoạt động'
                                : analyzeCountDown >= 4 ?
                                    'Được phát triển với bác sĩ da liễu, cá nhân hóa cho da của bạn'
                                    : analyzeCountDown >= 2 ?
                                        'Phân tích da cá nhân của bạn đang được xử lý'
                                        :
                                        'Kết quả của bạn chỉ còn trong vài khoảnh khắc'
                            }
                        </div>
                    </div>
                    <div className='w-[90%] absolute bottom-[-10px] left-[50%] text-center -translate-x-1/2'>
                        <ProgressAnalyzeLoading />
                    </div>
                </div>
            }
            {page === 0 &&
                <div className='relative'>
                    <div className="h-[620px] z-0 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                        <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert ">
                            {currentImageByIndex === 5 &&
                                <div className='animate-analyzeLineAppear'>
                                    <div className='absolute right-12 bottom-72'>
                                        <p className='absolute bottom-1 right-0 text-white text-[10px]'>Đốm Tối</p>
                                        <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                    </div>
                                    <div className='absolute right-12 bottom-60'>
                                        <p className='absolute bottom-1 right-0 text-white text-[10px]'>Độ Đàn Hồi</p>
                                        <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                    </div>
                                    <div className='absolute left-12 bottom-64'>
                                        <p className='absolute bottom-1 left-0 text-white text-[10px]'>Lỗ Chân Lông</p>
                                        <img className="w-24 scale-x-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                    </div>
                                    <div className='absolute left-12 top-36'>
                                        <p className='flex justify-start text-white text-[10px]'>Sáng Da</p>
                                        <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                    </div>
                                    <div className='absolute left-16 bottom-[350px]'>
                                        <p className='flex justify-start text-white text-[10px]'>Quầng Thâm</p>
                                        <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                                    </div>
                                    <div className='absolute right-14 top-48 flex flex-col'>
                                        <p className='flex justify-end text-white text-[10px]'>Nếp nhăn</p>
                                        <img className="w-24 scale-y-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                                    </div>
                                </div>
                            }
                            {currentImageByIndex === 4 &&
                                <div className='absolute right-12 bottom-60 animate-analyzeLineAppear'>
                                    <p className='absolute bottom-1 right-0 text-white text-[10px]'>Độ Đàn Hồi</p>
                                    <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                </div>
                            }
                            {currentImageByIndex === 3 &&
                                <div className='absolute right-12 bottom-72 animate-analyzeLineAppear'>
                                    <p className='absolute bottom-1 right-0 text-white text-[10px]'>Đốm Tối</p>
                                    <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                </div>
                            }
                            {currentImageByIndex === 2 &&
                                <div className='absolute left-12 bottom-64 animate-analyzeLineAppear'>
                                    <p className='absolute bottom-1 left-0 text-white text-[10px]'>Lỗ Chân Lông</p>
                                    <img className="w-24 scale-x-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                </div>
                            }
                            {currentImageByIndex === 1 &&
                                <div className='absolute left-12 top-36 animate-analyzeLineAppear'>
                                    <p className='flex justify-start text-white text-[10px]'>Sáng Da</p>
                                    <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                                </div>
                            }
                            {currentImageByIndex === 6 &&
                                <div className='absolute left-16 bottom-[350px] animate-analyzeLineAppear'>
                                    <p className='flex justify-start text-white text-[10px]'>Quầng Thâm</p>
                                    <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                                </div>
                            }
                            {currentImageByIndex === 7 &&
                                <div className='absolute right-14 top-48 flex flex-col animate-analyzeLineAppear'>
                                    <p className='flex justify-end text-white text-[10px]'>Nếp nhăn</p>
                                    <img className="w-24 scale-y-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                                </div>
                            }
                        </div>
                        <div className='w-full text-center absolute py-12 bottom-0 left-0 z-50 drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] bg-gradient-to-b from-transparent from-0%  via-transparent via-5% to-[#0c1b1f] to-85%'>
                            <div className='flex flex-row justify-center h-full pb-6'>
                                <div
                                    onClick={prevSlide}
                                    className='flex pr-2 justify-center items-center'
                                >
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                        size="2x"
                                        className="pt-[3px]"
                                        color='#fff'
                                    />
                                </div>
                                <div className='flex flex-row gap-4 justify-center' >
                                    {visibleImages.map((image, index) => (
                                        <div
                                            className={`w-[55px] h-[55px] ${index === selectedImageIndex ? 'scale-125' : ''}`}
                                            key={index}
                                            onClick={() => {
                                                getCurrentIndex(index)
                                                getCurrentDescriptionByIndex(image.index)
                                            }
                                            } >
                                            <img className='w-full h-full' src={image.src} />
                                            <p className='text-[8px] text-white'>{image.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    onClick={nextSlide}
                                    className='flex pl-2 justify-center items-center'
                                >
                                    <FontAwesomeIcon
                                        icon={faCaretRight}
                                        size="2x"
                                        className="pt-[3px]"
                                        color='#fff'
                                    />
                                </div>
                            </div>
                            <div onClick={handleScrollToResult} className='w-6 absolute bottom-2 left-1/2 -translate-x-1/2'>
                                <AnglesDown />
                            </div>
                            <div className='w-30 absolute bottom-5 left-2 text-[10px] text-secondary'>
                                <FontAwesomeIcon
                                    icon={faAngleDoubleLeft}
                                    className="pt-[3px] pr-2"
                                    color='#fff'
                                />
                                Khu vực da tốt
                            </div>
                            <div className='w-30 absolute bottom-5 right-2 text-[10px] text-red'>
                                Khu vực da yếu
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="pt-[3px] pl-2"
                                    color='#fff'
                                />
                            </div>
                        </div>
                        <div ref={resultRef} className='relative pb-24'>
                            {currentImageByIndex === 5 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN</p>
                                    <p className='font-light text-[12px] text-center mt-8'>Khám phá những kết quả được phát hiện từ phân tích da IT beana™ cá nhân của bạn</p>

                                    <div>
                                        <p className='font-bold text-[18px] text-center mt-10'>DA BẠN TRÔNG CÓ VẺ ỔN</p>
                                        <p className='font-light text-[12px] text-center mt-3'>Da của bạn đang phát triển xuất sắc ở những lĩnh vực này!</p>

                                        <div>
                                            <div className='px-3 pt-5 pb-3'>
                                                <p className='font-bold text-base text-secondary'>Độ đàn hồi</p>
                                                <div className='flex flex-row gap-3 items-center'>
                                                    <img
                                                        src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                        className='w-[38px] h-[38px]'
                                                    />
                                                    <p className='text-xss'>Da của bạn trông đàn hồi và mềm mại! Việc sử dụng kem chống nắng phổ rộng hàng ngày và sử dụng các sản phẩm chăm sóc da chống lão hóa có thể giúp da duy trì độ săn chắc.</p>
                                                </div>
                                            </div>
                                            <div className='px-3 pt-2 pb-3'>
                                                <p className='font-bold text-base text-secondary'>Đốm tối</p>
                                                <div className='flex flex-row gap-3 items-center'>
                                                    <img
                                                        src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                        className='w-[38px] h-[38px]'
                                                    />
                                                    <p className='text-xss'>Độ đồng đều của làn da bạn trông rất tốt! Việc sử dụng kem chống nắng phổ rộng hàng ngày có thể giúp ngăn chặn việc xuất hiện của các đốm tối, và việc sử dụng sản phẩm chăm sóc da chứa các thành phần được biết đến có khả năng làm sáng da có thể giúp duy trì làn da có màu đồng đều.</p>
                                                </div>
                                            </div>
                                            <div className='px-3 pt-2 pb-3'>
                                                <p className='font-bold text-base text-secondary'>Lỗ chân lông</p>
                                                <div className='flex flex-row gap-3 items-center'>
                                                    <img
                                                        src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                        className='w-[38px] h-[38px]'
                                                    />
                                                    <p className='text-xss'>Lỗ chân lông của bạn trông rất tốt và nhỏ! Việc sử dụng sữa rửa mặt có các hoạt chất giúp thu hẹp lỗ chất lông và ngăn chăn mụn có thể làm lỗ chân lông bạn to ra.</p>
                                                </div>
                                            </div>
                                            <div className='px-3 pt-2 pb-3'>
                                                <p className='font-bold text-base text-secondary'>Sáng da</p>
                                                <div className='flex flex-row gap-3 items-center'>
                                                    <img
                                                        src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                        className='w-[38px] h-[38px]'
                                                    />
                                                    <p className='text-xss'>Da bạn trông rạng rỡ và sáng bóng! Khi chúng ta già đi, quá trình tái tạo tế bào da chậm lại, vì vậy việc sử dụng các sản phẩm chăm sóc da chứa thành phần tẩy tế bào da sẽ giúp da trông trẻ trung hơn. Sử dụng các sản phẩm chăm sóc da với các thành phần làm sáng và bảo vệ da khỏi các gốc tự do, bao gồm tia UV và ô nhiễm, có thể giúp da trông rạng ngời.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-[#fdf0f3] py-4 mt-4'>
                                        <p className='font-bold text-[18px] text-center'>DA BẠN CẦN ĐƯỢC GIÚP ĐỠ</p>
                                        <p className='font-light text-[12px] text-center mt-3 px-3'>Chúng ta đều có mỗi quan tâm về da. Không sao đã có giải pháp cung cấp bởi Beana!</p>

                                        <div>
                                            <div className='px-3 pt-5 pb-3'>
                                                <p className='font-bold text-base text-[#ff007e]'>Quầng thâm</p>
                                                <div className='flex flex-row gap-3 items-center'>
                                                    <img
                                                        src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                        className='w-[38px] h-[38px]'
                                                    />
                                                    <p className='text-xss'>Quầng thâm dưới mắt của bạn trông có vẻ không được sáng.Việc thức khuyu, stress cũng góp phần làm cho quầng thâm dưới mắt của bạn xuất hiện.Các sản phẩm chăm sóc da có thành phần tẩy tế bào và giảm dầu thừa có thể giúp giảm thiểu quầng thâm một cách rõ ràng</p>
                                                </div>
                                            </div>
                                            <div className='px-3 pt-2 pb-3'>
                                                <p className='font-bold text-base text-[#ff007e]'>Nếp nhăn</p>
                                                <div className='flex flex-row gap-3 items-center'>
                                                    <img
                                                        src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                                                        className='w-[38px] h-[38px]'
                                                    />
                                                    <p className='text-xss'>"Tất cả chúng ta đều có nếp nhăn, chúng có thể từ rất khó nhận thấy đến nếp nhăn đã hiện rõ. Việc thức khuyu hay stress hoặc vấn đề tuổi tác có thể làm hiện rõ nếp nhăn, làm cho cấu trúc da trở nên không đồng đều và mịn màng hơn. Các sản phẩm chăm sóc da có thành phần tẩy tế bào và giảm dầu thừa có thể giúp giảm thiểu nếp nhăn một cách rõ ràng.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {currentImageByIndex === 5}

                                </div>
                            }
                            {currentImageByIndex === 4 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                                    <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                                    <p className='font-bold text-[24px] text-center'>Độ đàn hồi</p>
                                    <p className='font-light text-[12px] text-center mt-4 px-6'>
                                        Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                                        Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                                    </p>

                                    <div className='px-5 relative'>
                                        <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                                        <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                                        <div className='absolute left-[38%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                                            <p className='text-[8px] text-center'>My result</p>
                                            <div className='flex flex-row items-center justify-center'>
                                                <p className='text-[14px]'>4.5</p>
                                                <p className='text-[12px]'>/10</p>
                                            </div>
                                            <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                                            </div>
                                        </div>

                                        <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                                            <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                                        </div>

                                        <div className='flex flex-row justify-between pt-3'>
                                            <p className='text-[10px] text-left'>0</p>
                                            <p className='text-[9px] text-center'>Average</p>
                                            <p className='text-[10px] text-right'>10</p>
                                        </div>

                                    </div>
                                </div>
                            }
                            {currentImageByIndex === 3 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                                    <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                                    <p className='font-bold text-[24px] text-center'>Đốm tối</p>
                                    <p className='font-light text-[12px] text-center mt-4 px-6'>
                                        Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                                        Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                                    </p>

                                    <div className='px-5 relative'>
                                        <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                                        <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                                        <div className='absolute left-[40%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                                            <p className='text-[8px] text-center'>My result</p>
                                            <div className='flex flex-row items-center justify-center'>
                                                <p className='text-[14px]'>4.6</p>
                                                <p className='text-[12px]'>/10</p>
                                            </div>
                                            <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                                            </div>
                                        </div>

                                        <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                                            <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                                        </div>

                                        <div className='flex flex-row justify-between pt-3'>
                                            <p className='text-[10px] text-left'>0</p>
                                            <p className='text-[9px] text-center'>Average</p>
                                            <p className='text-[10px] text-right'>10</p>
                                        </div>

                                    </div>
                                </div>
                            }
                            {currentImageByIndex === 2 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                                    <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                                    <p className='font-bold text-[24px] text-center'>Lỗ chân lông</p>
                                    <p className='font-light text-[12px] text-center mt-4 px-6'>
                                        Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                                        Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                                    </p>

                                    <div className='px-5 relative'>
                                        <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                                        <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                                        <div className='absolute left-[36%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                                            <p className='text-[8px] text-center'>My result</p>
                                            <div className='flex flex-row items-center justify-center'>
                                                <p className='text-[14px]'>4.3</p>
                                                <p className='text-[12px]'>/10</p>
                                            </div>
                                            <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                                            </div>
                                        </div>

                                        <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                                            <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                                        </div>

                                        <div className='flex flex-row justify-between pt-3'>
                                            <p className='text-[10px] text-left'>0</p>
                                            <p className='text-[9px] text-center'>Average</p>
                                            <p className='text-[10px] text-right'>10</p>
                                        </div>

                                    </div>
                                </div>
                            }
                            {currentImageByIndex === 1 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                                    <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                                    <p className='font-bold text-[24px] text-center'>Sáng da</p>
                                    <p className='font-light text-[12px] text-center mt-4 px-6'>
                                        Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                                        Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                                    </p>

                                    <div className='px-5 relative'>
                                        <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                                        <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                                        <div className='absolute left-[40%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                                            <p className='text-[8px] text-center'>My result</p>
                                            <div className='flex flex-row items-center justify-center'>
                                                <p className='text-[14px]'>4.8</p>
                                                <p className='text-[12px]'>/10</p>
                                            </div>
                                            <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                                            </div>
                                        </div>

                                        <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                                            <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                                        </div>

                                        <div className='flex flex-row justify-between pt-3'>
                                            <p className='text-[10px] text-left'>0</p>
                                            <p className='text-[9px] text-center'>Average</p>
                                            <p className='text-[10px] text-right'>10</p>
                                        </div>

                                    </div>
                                </div>
                            }
                            {currentImageByIndex === 6 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[10px] text-red text-center mt-6'>Khu Vực Da Yếu #1</p>
                                    <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                                    <p className='font-bold text-[24px] text-center'>Quầng thâm</p>
                                    <p className='font-light text-[12px] text-center mt-4 px-6'>
                                        Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                                        Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                                    </p>

                                    <div className='px-5 relative'>
                                        <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                                        <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                                        <div className='absolute left-[25%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                                            <p className='text-[8px] text-center'>My result</p>
                                            <div className='flex flex-row items-center justify-center'>
                                                <p className='text-[14px]'>3.5</p>
                                                <p className='text-[12px]'>/10</p>
                                            </div>
                                            <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                                            </div>
                                        </div>

                                        <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                                            <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                                        </div>

                                        <div className='flex flex-row justify-between pt-3'>
                                            <p className='text-[10px] text-left'>0</p>
                                            <p className='text-[9px] text-center'>Average</p>
                                            <p className='text-[10px] text-right'>10</p>
                                        </div>

                                    </div>
                                </div>
                            }
                            {currentImageByIndex === 7 &&
                                <div className='animate-cartAppear'>
                                    <p className='font-bold text-[10px] text-red text-center mt-6'>Khu Vực Da Yếu #2</p>
                                    <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                                    <p className='font-bold text-[24px] text-center'>Nếp nhăn</p>
                                    <p className='font-light text-[12px] text-center mt-4 px-6'>
                                        Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                                        Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                                    </p>

                                    <div className='px-5 relative'>
                                        <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                                        <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                                        <div className='absolute left-[22%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                                            <p className='text-[8px] text-center'>My result</p>
                                            <div className='flex flex-row items-center justify-center'>
                                                <p className='text-[14px]'>3.0</p>
                                                <p className='text-[12px]'>/10</p>
                                            </div>
                                            <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                                            </div>
                                        </div>

                                        <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                                            <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                                        </div>

                                        <div className='flex flex-row justify-between pt-3'>
                                            <p className='text-[10px] text-left'>0</p>
                                            <p className='text-[9px] text-center'>Average</p>
                                            <p className='text-[10px] text-right'>10</p>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                        <div className='fixed bottom-0 w-[100%] bg-white py-3 px-4'>
                            <div className='bg-white'>
                                <div className='beana-button-green py-2 '>XEM LỊCH TRÌNH CHĂM SÓC DA</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );

}
export default ScanningCalculation;