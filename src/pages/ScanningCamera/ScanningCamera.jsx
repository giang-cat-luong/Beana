import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ScanningFaceLoading from '../../components/Loading/ScanningFaceLoading';
import ProgessLoading from '../../components/Loading/ProgessLoading';
import { useNavigate } from "react-router-dom";
import ScanningIntroduction from './components/ScanningIntroduction';
import ScanningTips from './components/ScanningTips'
import ScanningCameraOpen from './components/ScanningCameraOpen'

const sliderUrls = [
    './assets/cameraBanner.jpg',
    './assets/cameraBanner1.jpg'
]

function ScanningCamera() {

    const navigate = useNavigate();

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [scrolled, setScrolled] = useState(false);
    const [page, setPage] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const [captureCountdown, setCaptureCountdown] = useState(10);
    const [imgSrc, setImgSrc] = useState(null);

    const handleNextPage = (page) => {
        setPage(page);
        setShow(false)
    };
    const setShow = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSuccessSend = () => {
        setPage(1);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPage(2);
        }, 3500);
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setTimeout(() => {
            navigate("/scanning-calculation", { state: { img: imageSrc } });
        }, 2000);
    }, [webcamRef]);

    const startCaptureCountdown = () => {
        setTimeout(() => {
            const countdownInterval = setInterval(() => {
                setCaptureCountdown(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
            }, 1000);

            setTimeout(() => {
                clearInterval(countdownInterval);
                capture();
            }, 10000);
        }, 5000);
    };

    useEffect(() => {
        if (page === 0) {
            startCaptureCountdown();
        }
    }, [page]);


    return (
        <div className=" min-h-full h-full md:hidden">
            <div className='relative visible'>
                {/* loading */}
                <div style={{ position: "relative" }}>
                    {loading && (
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 1)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 9000,
                            }}
                        >
                            <div className=' w-full mb-64'>
                                <ScanningFaceLoading />
                                <p className='text-white absolute bottom-24 left-[50%] text-center -translate-x-1/2'>
                                    IT's Beana đang khởi tạo môi trường selfie cho bạn.
                                </p>
                                <div className='w-[50%] absolute bottom-12 left-[50%] text-center -translate-x-1/2'>
                                    <ProgessLoading />
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                {/* end loading */}
                {isShow && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9000,
                        }}
                    >
                        <div className='relative'>
                            <div>
                                <div className='animate-questionAppear relative bg-[#FAF9F5] max-w-[370px] md:max-w-[620px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                                    <div className='px-3 mt-6 py-7 '>
                                        <p className='pt-5 text-[16px] text-center font-bold text-secondary'>ĐIỀU KHOẢN VÀ CHÍNH SÁCH RIÊNG TƯ</p>
                                        <div className='px-6 pt-3 pb-16'>
                                            <p className='text-sm pt-2'>IT Beana sẽ xử lý thông tin cá nhân về bạn để cung cấp cho bạn phân tích và đề xuất.
                                                Ảnh selfie mà bạn tải lên để quét </p>
                                            <p className='text-sm pt-3'>IT Beana sẽ bị xóa sau khi được phân tích, và thông tin được giữ lại bởi IT Beana sẽ được sử dụng theo cách được mô tả trong Thông báo này.
                                            </p>
                                            <div className="flex mt-2">
                                                <div className="flex items-center h-6">
                                                    <input type="checkbox" value="" className="w-5 h-5" />
                                                </div>
                                                <div className="ml-2 text-sm">
                                                    <label className="font-medium text-sm text-[#000]">Tôi đồng ý về việc quét khuôn mặt của tôi và xử lý hình ảnh của tôi như đã mô tả trong THÔNG BÁO QUÉT DA MẶT BEANA và đồng ý với tất cả các điều khoản được quy định trong đó.</label>
                                                </div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="flex items-center h-6">
                                                    <input type="checkbox" value="" className="w-5 h-5" />
                                                </div>
                                                <div className="ml-2 text-sm">
                                                    <label className="font-medium text-sm text-[#000]">Tôi đồng ý rằng tôi đã xem xét các ĐIỀU KHOẢN SỬ DỤNG của IT Beana (Bao gồm Điều khoản Trách Nhiệm) và đồng ý với tất cả các điều khoản được nêu trong đó, tôi đã đủ 18 tuổi và là cư dân Việt Nam. Chính sách bảo mật.</label>
                                                </div>
                                            </div>
                                            <button
                                                className="absolute bottom-3 w-[90%] -translate-x-1/2 left-[50%] font-normal text-[#fff] text-[13px] border-2 px-6 py-2 bg-primary shadow-md shadow-primary hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                                                onClick={() => handleNextPage(page + 1)}
                                            >
                                                Bắt Đầu
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCircleXmark}
                                            color="#86bb86"
                                            size="2x"
                                            fixedWidth
                                            className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                            onClick={setShow}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div>

                </div>
            </div>
            {/* page 0 */}
            {page === 0 &&
                <ScanningIntroduction
                    scrolled={scrolled}
                    setShow={setShow}
                    sliderUrls={sliderUrls}
                />
            }
            {/* end page 0 */}

            {/* page 1 */}
            {page === 1 &&
                <ScanningTips
                    sliderUrls={sliderUrls}
                    handleSuccessSend={handleSuccessSend}
                />
            }
            {/* end page 1 */}

            {/* page 2 */}
            {page === 2 &&
                <ScanningCameraOpen
                    captureCountdown={captureCountdown}
                    imgSrc={imgSrc}
                    webcamRef={webcamRef}
                    canvasRef={canvasRef}
                />
            }
            {/* end page 2 */}
        </div>

    );

}
export default ScanningCamera;