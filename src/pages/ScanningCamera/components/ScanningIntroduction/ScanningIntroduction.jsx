import React from 'react'

export default function ScanningIntroduction({sliderUrls,scrolled,setShow}) {
    return (
        <div>
            <div className="w-full min-h-full h-full md:w-full md:h-full bg-center bg-cover z-0 bg-fixed" style={{ backgroundImage: `url(${sliderUrls[0]})` }}>
                <div className="px-10 py-10 text-white bg-black/50 backdrop-opacity-10 w-full backdrop-invert">
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
    )
}
