
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faChevronRight, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SuccessLoading from '../Loading/SuccessLoading/SuccessLoading';

export default function PackageUpgrade() {
    const [isShow, setIsShow] = useState(true);

    const setShow = () => {
        setIsShow(false);
    };

    return (
        <div className='relative select-none'>
            {isShow && (
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
                    <div className='animate-questionAppear relative bg-[#fff] w-full md:w-[60%] my-4 mx-8 border-secondary rounded-lg shadow-[0_5px_20px_-5px_#86bb86]'>
                        <div className='inline-block md:flex flex-row'>
                            <div className='md:basis-[40%] inline-block relative'>
                                <div className='p-8 max-h-[485px] overflow-auto'>
                                    <p className='text-overLg font-bold text-[#0d1216]'>Tận hưởng trải nghiệm các dịch vụ Face scanning của Beana</p>
                                    <div>
                                        <p className='text-sm pt-4'>Sử dụng các dịch vụ chất lượng. Nâng cấp các gói <span className='font-semibold'>Face scanning cao cấp</span> và trải nghiệm:</p>
                                        <div className='flex flex-row gap-2 pt-4'>
                                            <img className='w-6 h-6' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700487738/Beana_svg/crownScanning_h4yjxf.png' />
                                            <div className='text-sm'>
                                                <p className='font-semibold'>Dịch vụ cao cấp ngay trong tầm tay</p>
                                                <p className='leading-6'>Quét, phân tích, ưu, nhược điểm da, kết quả, v.v. phù hợp mọi loại da mặt</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row gap-2 pt-3'>
                                            <img className='w-6 h-6' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700487386/Beana_svg/scanning_ezrwaw.png' />
                                            <div className='text-sm'>
                                                <p className='font-semibold'>Quét và phân tích da mặt một cách nhanh chóng</p>
                                                <p className='leading-6'>Sử dụng AI để phân tích từng vị trí của làn da mặt </p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row gap-2 pt-3'>
                                            <img className='w-6 h-6' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700487749/Beana_svg/result_ism001.png' />
                                            <div className='text-sm'>
                                                <p className='font-semibold'>Kết quả chi tiết và liệu trình chăm sóc da mặt cho từng cá nhân</p>
                                                <p className='leading-6'>Uư, nhược điểm chi tiết của da và đưa ra liệu trình chăm sóc da cụ thể</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-6 py-8 border-t w-full bg-white'>
                                    <Link to="/scanning-packages">
                                        <div className='beana-button-green-hover py-2 px-2 rounded'>Trải nghiệm ngay</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='hidden md:flex md:basis-[60%] w-[554px] h-[592px]'>
                                <img className='object-cover w-full h-full' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700489568/Beana_assets/bg_package_shducu.png' />
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
            )}
        </div>
    )
}
