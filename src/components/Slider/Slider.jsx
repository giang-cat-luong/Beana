import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function Slider({ sliderUrls, title, description, button, colorTitle, colorDescription }) {
    // const slider = [
    //     {
    //         url: { sliderUrl1 }
    //     },
    //     {
    //         url: { sliderUrl2 }
    //     },
    //     {
    //         url: { sliderUrl3 }
    //     },
    // ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliderUrls.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === sliderUrls.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToNextSlide = (sliderIndex) => {
        setCurrentIndex(sliderIndex);

    }

    return (
        <div className="max-w-screen-2xl h-[600px] w-full  relative group">
            <div style={{ backgroundImage: `url(${sliderUrls[currentIndex]})` }} className="w-full h-full  bg-center bg-cover duration-500">
                {currentIndex === 0 ?
                    (
                        <div className="flex flex-row w-full h-full">
                            <div className="basis-1/2 flex flex-col justify-center px-14  gap-1">
                                <p className={`font-bold text-[${colorTitle[currentIndex]}] text-[40px]`}>{title[currentIndex]}</p>
                                <p className={`font-normal text-[${colorDescription[currentIndex]}] text-[20px]`}>
                                    {description[currentIndex]}
                                </p>
                                {button &&
                                    <button className="mt-5 w-44 font-normal text-[#fff] text-[13px] border-2 px-6 py-2 hover:bg-[#49B949] hover:text-[#fff]">{button[currentIndex]}</button>
                                }
                            </div>
                            <div className="basis-1/2">

                            </div>
                        </div>

                    ) :
                    currentIndex === 1 ?
                        (
                            <div className="flex flex-row w-full h-full">
                                <div className="basis-1/2 flex flex-col justify-center px-14  gap-1">
                                    <p className={`font-bold text-[${colorTitle[currentIndex]}] text-[40px]`}>{title[currentIndex]} </p>
                                    <p className={`font-normal text-[${colorDescription[currentIndex]}] text-[20px]`}>
                                        {description[currentIndex]}
                                    </p>
                                    {button &&
                                        <button className="mt-5 w-44 font-normal text-[#49B949] text-[13px] border-2 border-[#49B949] px-6 py-2 hover:bg-[#49B949] hover:text-[#fff]">{button[currentIndex]}</button>
                                    }
                                </div>
                                <div className="basis-1/2">

                                </div>
                            </div>
                        ) : (
                            <div>

                            </div>
                        )}


            </div>
            {sliderUrls.length > 1 &&
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-white/20 text-white cursor-pointer">
                    <img src="./assets/left-arrow.png" className="w-8" onClick={prevSlide} />
                </div>
            }
            {sliderUrls.length > 1 &&
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-white/20 text-white cursor-pointer">
                    <img src="./assets/right-arrow.png" className="w-8" onClick={nextSlide} />
                </div>
            }
            <div className="flex top-4 justify-center py-2 ">
                {sliderUrls.map((slider, sliderIndex) => (
                    <div
                        key={sliderIndex}
                        onClick={() => goToNextSlide(sliderIndex)}
                        className="text-2xl px-2 cursor-pointer"
                    >
                        {sliderUrls.length > 1 &&
                            <div>
                                {sliderIndex === currentIndex ? (
                                    <FontAwesomeIcon size="2xs" color="#86bb86" icon={faCircle} />
                                ) : (
                                    <FontAwesomeIcon size="2xs" color="#000" icon={faCircle} />
                                )}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

