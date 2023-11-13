import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./utilities";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ScanningFaceLoading from '../../components/Loading/ScanningFaceLoading';
import ProgessLoading from '../../components/Loading/ProgessLoading';

const sliderUrls = [
    './assets/cameraBanner.jpg',
    './assets/cameraBanner1.jpg'
]

function ScanningCamera() {

    const [scrolled, setScrolled] = useState(false);
    const [page, setPage] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const [loading, setLoading] = useState(false);


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

    //for camera detection
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runFaceMesh = async () => {
        const model = facemesh.SupportedModels.MediaPipeFaceMesh;
        const detectorConfig = {
            runtime: "tfjs",
            solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
        };
        const detector = await facemesh.createDetector(model, detectorConfig);
        setInterval(() => {
            detect(detector);
        }, 10);
    };

    const detect = async (detector) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const face = await detector.estimateFaces(video);

            const ctx = canvasRef.current.getContext("2d");
            requestAnimationFrame(() => {
                drawMesh(face, ctx);
            });
        }
    };

    useEffect(() => {
        runFaceMesh();
    }, []);


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
            {page === 2 &&
                <div>
                    <div className="w-full min-h-full h-full md:w-full md:h-full bg-center bg-cover z-0 bg-fixed" style={{ backgroundImage: `url(${sliderUrls[0]})` }}>
                        <div className="px-10 py-10 text-white  bg-black/50 backdrop-opacity-10 w-full backdrop-invert">
                            <div className=' flex flex-col'>
                                <div className='min-h-screen flex flex-col justify-between'>
                                    <div>
                                        <img src="./assets/logo.png" alt="Logo" className="pt-10" />
                                        <p className="pt-10 font-semibold text-lg text-center">Quét làn da của bạn để phân tích chăm sóc da tùy chỉnh trong vài giây</p>
                                    </div>
                                    <div className='flex flex-col gap-16 pb-10'>
                                        <p className="pt-10 font-semibold text-base text-center">
                                            Khám phá quy trình chăm sóc da cá nhân hóa của bạn với công nghệ tiên tiến của IT, được phát triển bởi các bác sĩ da liễu</p>
                                        <button
                                            className={`fixed left-[50%] -translate-x-1/2 w-[80%] border-[2px] py-2 hover:bg-white/20 ease-in-out duration-500 ${scrolled ? ' bottom-0 bg-secondary mb-5' : 'bottom-10'}`}
                                            onClick={setShow}
                                        >
                                            Bắt đầu
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <img className='px-8 pt-8 pb-28' src="./assets/cameraAds.png" />
                    </div>
                </div>
            }
            {/* end page 0 */}

            {/* page 1 */}
            {page === 1 &&
                <div className='relative'>
                    <div className="w-full min-h-full h-full md:w-full md:h-full bg-center bg-cover z-0 " style={{ backgroundImage: `url(${sliderUrls[1]})` }}>
                        <div className="px-8 py-10 text-white  bg-black/50 backdrop-opacity-10 w-full backdrop-invert">
                            <div className='min-h-screen flex flex-col'>
                                <div className='flex flex-col justify-between gap-4'>
                                    <div className='flex flex-row'>
                                        <p className='pt-5 text-[29px] font-bold text-secondary'>ĐẾN GIỜ SELFIE RỒI !</p>
                                        <img className='w-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/bean_afjwev.png' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <ul className='pl-5 text-[13px] font-normal'>
                                            <li className="list-decimal pt-4">
                                                Kéo tóc ra, sau không trang điểm.
                                            </li>
                                            <li className="list-decimal pt-4">
                                                Sử dụng máy ảnh mặt trước với ánh sáng tốt
                                            </li>
                                            <li className="list-decimal pt-4">
                                                Giữ cho đôi mắt mở với một biểu cảm bình thường
                                            </li>
                                            <li className="list-decimal pt-4">
                                                Định vị khuôn mặt đúng trong vùng cho trước
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div
                                            className="text-sm mt-20 border-[2px] py-5 px-8 hover:bg-white/20 text-center"
                                        >
                                            Vui lòng cho phép truy cập vào máy ảnh của bạn, để chúng tôi có thể cung cấp trải nghiệm cá nhân dựa trên bức ảnh selfie của bạn.

                                            <br /><strong>Hình selfie của bạn sẽ không được lưu trữ trong cơ sở dữ liệu của chúng tôi.</strong>
                                        </div>
                                    </div>
                                    <div className='bg-white w-full absolute bottom-0 left-0'>
                                        <div
                                            className="ml-6 mt-2 w-[90%] border-[2px] bg-primary shadow-sm shadow-primary text-center py-2 hover:bg-secondary hover:shadow-md hover:shadow-secondary ease-in-out duration-500"
                                            onClick={handleSuccessSend}
                                        >
                                            Bắt đầu
                                        </div>
                                        <p className='mb-3 pt-3 text-black text-center'>Chọn ảnh của bạn</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
            {/* end page 1 */}


            {/* page 2 */}
            {page === 0 &&
                <div className="w-full h-full relative top-0">
                    <div className="">
                    <div className='w-[500px] h-20 bg-black opacity-50'></div>
                        <Webcam
                            ref={webcamRef}
                            className="absolute mx-auto  top-32 left-0 right-[80px] text-center z-10 w-[640px] h-[480px]"
                        />
                        <canvas
                            ref={canvasRef}
                            className="absolute mx-auto  left-4 md:left-0 top-[110px] text-center z-10 w-[380px] h-[500px] "
                        />
                        <div className='text-black font-bold text-lg absolute top-[190px] z-10 left-[50%] -translate-x-1/2'>
                            Đỉnh đầu
                        </div>
                        <div className='text-black font-bold text-lg absolute top-[540px] z-10 left-[50%] -translate-x-1/2'>
                            Cằm
                        </div>
                    </div>
                </div>
                // <div className="w-full h-full relative top-0 px-32">
                //     <div className="">
                //         <Webcam
                //             ref={webcamRef}
                //             className="absolute mx-auto  top-0 left-0 right-[80px] text-center z-10 w-[640px] h-[480px]"
                //         />
                //         <canvas
                //             ref={canvasRef}
                //             className="absolute mx-auto  left-2 md:left-32 top-[-10px] text-center z-10 w-[400px] h-[500px] "
                //         />
                //         <div className='text-black absolute top-[82px] z-10 left-[50%] -translate-x-1/2'>
                //             Đỉnh đầu
                //         </div>
                //         <div className='text-black absolute top-[380px] z-10 left-[50%] -translate-x-1/2'>
                //             Cằm
                //         </div>
                //     </div>
                // </div>
            }
            {/* end page 2 */}
        </div>

    );

}
export default ScanningCamera;