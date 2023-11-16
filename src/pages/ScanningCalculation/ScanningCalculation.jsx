import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCaretLeft, faCaretRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import AnglesDown from '../../components/AnimationIcon/AnglesDown'
import UploadImage from './components/UploadImage';
import UserData from './components/UserData'
import AnalyzeSkin from './components/AnalyzeSkin'
import ResultSkin from './components/ResultSkin'



function ScanningCalculation() {

    const location = useLocation();
    const { img } = location.state;
    const helpModal = useRef(null);

    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(0);
    const [skinHelp, setSkinHelp] = useState(false);
    const [analyzeCountDown, setAnalyzeCountDown] = useState(8);

    const handleNextPage = (page) => {
        setPage(page);
    };

    const startAnalyze = () => {
        const countdownInterval = setInterval(() => {
            setAnalyzeCountDown(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            setPage(3);
        }, 10000);
    };

    const handleHelp = () => {
        setSkinHelp(true);
    };

    const handleOutsideClick = (e) => {
        if (helpModal.current && !helpModal.current.contains(e.target)) {
            setSkinHelp(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    useEffect(() => {
        if (page === 2) {
            startAnalyze();
        }
    }, [page]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

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
                <div className='animate-screenAppear'>
                    <UploadImage
                        img={img}
                        loading={loading}
                        handleNextPage={handleNextPage}
                    />
                </div>
            }
            {page === 1 &&
                <div className='animate-screenAppear'>
                    <UserData
                        handleHelp={handleHelp}
                        setPage={setPage}
                    />
                </div>
            }
            {page === 2 &&
                <div className='animate-screenAppear'>
                    <AnalyzeSkin
                        img={img}
                        analyzeCountDown={analyzeCountDown}
                    />
                </div>
            }
            {page === 0 &&
                <div className='animate-screenAppear'>
                    <ResultSkin
                        img={img}
                    />
                </div>
            }
        </div>

    );

}
export default ScanningCalculation;