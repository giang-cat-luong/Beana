import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function Slider() {
    const slider = [
        {
            url: './assets/slider1.jpg'
        },
        {
            url: './assets/slider2.jpeg'
        },
        {
            url: './assets/slider3.png'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToNextSlide = (sliderIndex) => {
        setCurrentIndex(sliderIndex);

    }

    return (
        <div className="max-w-screen-2xl h-[600px] w-full  relative group">
            <div style={{ backgroundImage: `url(${slider[currentIndex].url})` }} className="w-full h-full  bg-center bg-cover duration-500">
                {currentIndex === 0 ?
                    (
                        <div>
                            <h1 className="absolute bottom-[55%] left-14 font-bold text-[#fff] text-[40px]">PHÂN TÍCH DA MẶT AI BEANA </h1>
                            <p className="absolute bottom-[40%] left-14 font-normal text-[#fff] text-[20px]">
                                Tìm kiếm một thói quen chăm sóc da đầy đủ?
                                Công cụ phân tích <br />
                                chăm sóc da ảo MỚI của chúng tôi đánh
                                giá làn da của bạn và <br />
                                đưa ra các đề xuất được cá nhân hóa nhất.
                            </p>
                            <button className="absolute bottom-[30%] left-14 font-normal text-[#fff] text-[13px] border-2 px-6 py-2 hover:bg-[#49B949] hover:text-[#fff]">Tìm hiểu thêm</button>
                        </div>
                    ) :
                    currentIndex === 1 ?
                        (
                            <div>
                                <h1 className="absolute bottom-[55%] left-14 font-bold text-[#49B949] text-[40px]">PHÂN TÍCH DA MẶT AI BEANA </h1>
                                <p className="absolute bottom-[40%] left-14 font-normal text-[#49B949] text-[20px]">
                                    Tìm kiếm một thói quen chăm sóc da đầy đủ?
                                    Công cụ phân tích <br />
                                    chăm sóc da ảo MỚI của chúng tôi đánh
                                    giá làn da của bạn và <br />
                                    đưa ra các đề xuất được cá nhân hóa nhất.
                                </p>
                                <button className="absolute bottom-[30%] left-14 font-normal text-[#49B949] text-[13px] border-2 border-[#49B949] px-6 py-2 hover:bg-[#49B949] hover:text-[#fff]">Tìm hiểu thêm</button>
                            </div>
                        ) : (
                            <div>

                            </div>
                        )}


            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-white/20 text-white cursor-pointer">
                <img src="./assets/left-arrow.png" className="w-8" onClick={prevSlide} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-white/20 text-white cursor-pointer">
                <img src="./assets/right-arrow.png" className="w-8" onClick={nextSlide} />
            </div>
            <div className="flex top-4 justify-center py-2 ">
                {slider.map((slider, sliderIndex) => (
                    <div
                        key={sliderIndex}
                        onClick={() => goToNextSlide(sliderIndex)}
                        className="text-2xl px-2 cursor-pointer"
                    >
                        {sliderIndex === currentIndex ? (
                            <FontAwesomeIcon size="2xs" color="#86bb86" icon={faCircle} />
                        ) : (
                            <FontAwesomeIcon size="2xs" color="#000" icon={faCircle} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

