import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ScanningFaceLoading from '../../components/Loading/ScanningFaceLoading';
import ProgessLoading from '../../components/Loading/ProgessLoading';
import { useLocation } from "react-router-dom";
import ProgressAnalyzeLoading from '../../components/Loading/ProgressAnalyzeLoading/ProgressAnalyzeLoading';

function ScanningCalculation() {

    const helpModal = useRef(null);

    const location = useLocation();

    const { img } = location.state;

    const [loading, setLoading] = useState(false);
    const [analyzeCountDown, setAnalyzeCountDown] = useState(8);


    const [page, setPage] = useState(0);
    const [selectedSkin, setSelectedSkin] = useState(null);
    const [age, setAge] = useState("")
    const [ageError, setAgeError] = useState(null);
    const [skinError, setSkinError] = useState(null);

    const [buttonCheck, setButtonCheck] = useState(false);
    const [skinHelp, setSkinHelp] = useState(false);


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
            setPage(0)
        }
    };

    const handleOutsideClick = (e) => {
        if (helpModal.current && !helpModal.current.contains(e.target)) {
            setSkinHelp(false);
        }
    };

    const startAnalyze = () => {

        const countdownInterval = setInterval(() => {
            setAnalyzeCountDown(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            setPage(0);
        }, 10000);

    };

    useEffect(() => {
        if (page === 0) {
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
                                        <p className='font-bold text-lg'>Oily</p>
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
                                        <p className='font-bold text-lg'>Normal</p>
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
                                        <p className='font-bold text-lg'>Combination</p>
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
                                        <p className='font-bold text-lg'>Dry</p>
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
            {page === 2 &&
                <div className='relative'>
                    <img
                        src={img}
                        className='h-[620px] w-[800px] z-0'
                    />
                    {/* {!loading ? (
                <div className='fixed bottom-0 w-full h-24 bg-black/50 backdrop-opacity-10 backdrop-invert z-10'>
                    <div className='flex justify-center text-secondary mt-3'> Đang tải hình lên...</div>
                    <div className='w-[50%] absolute bottom-8 left-[50%] text-center -translate-x-1/2'>
                        <ProgessLoading />
                    </div>
                </div>
            ) : ( */}
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
                    {/* )} */}
                    <div className='text-white text-xs tracking-wider font-medium absolute bottom-32 bg-black/70 pl-[6px] pr-2 py-[6px] rounded-3xl flex items-center left-1/2 -translate-x-1/2'>
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            color='#49b949'
                            className='text-[18px] mr-1'
                        />
                        SẴN SÀNG PHÂN TÍCH
                    </div>
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
            {page === 0 &&
                <div className='relative'>
                    <div className="h-[620px] w-[800px] z-0 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                        <div className="h-[620px] bg-black/30 backdrop-opacity-10 w-[800px] backdrop-invert">
                            <img className='w-36 absolute top-32 left-1/2 -translate-x-1/2 opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/tran_qxc9hz.png' />
                            <img className='w-10 absolute top-64 left-[25%] opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-ma_sspixz.png' />
                            <img className='w-6 absolute bottom-64 left-[35%] opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045965/Beana_assets_analyze/left-camtren_fcod48.png' />
                            <img className='w-10 absolute bottom-52 left-[30%] opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                            <img className='w-10 absolute top-64 right-[25%] opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-ma_qdbws4.png' />
                            <img className='w-6 absolute bottom-64 right-[35%] opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-camtren_es1drv.png' />
                            <img className='w-10 absolute bottom-52 right-[30%] opacity-60' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
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
                </div>
            }
            {page === 3 &&
                <div className='relative'>
                    <div>
                        <div className="h-[620px] w-[800px] md:w-full md:h-full bg-center bg-cover z-0 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                            <div className="h-[620px] bg-black/30 backdrop-opacity-10 w-[800px] backdrop-invert">

                            </div>
                            <div className='w-full absolute bottom-20 left-[50%] text-center -translate-x-1/2 mb-6'>
                                <div className='flex justify-center text-white mb-4 text-xs'>PAGE 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );

}
export default ScanningCalculation;