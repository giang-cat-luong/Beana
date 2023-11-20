import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';

export default function PaymentMomo() {

    const location = useLocation();
    const { dataCheckout } = location.state || { dataCheckout: null };
    const { packageCheckout } = location.state || { packageCheckout: null };
    

    const initialTime = {
        hours: 0,
        minutes: 15,
        seconds: 0,
    };

    const [time, setTime] = useState(() => {
        const storedTime = JSON.parse(localStorage.getItem('countdownTime'));
        return storedTime || initialTime;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                const { hours, minutes, seconds } = prevTime;
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return initialTime;
                }

                let newHours = hours;
                let newMinutes = minutes;
                let newSeconds = seconds - 1;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;

                    if (newMinutes < 0) {
                        newMinutes = 59;
                        newHours -= 1;
                    }
                }

                const newTime = {
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds,
                };
                localStorage.setItem('countdownTime', JSON.stringify(newTime));
                return newTime;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
            localStorage.removeItem('countdownTime');
        };
    }, []);

    const formatTime = (value) => (value < 10 ? `0${value}` : value);
    return (
        <div className='bg-[#fffcff] min-h-screen'>
            <div className='fixed top-0 z-50 w-full px-12 flex flex-row items-center gap-6 py-3 bg-white shadow-lg'>
                <div className='flex flex-row items-center gap-4'>
                    <img className='w-14' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700214808/Beana_assets/momo_bgfhmw.png' />
                    <p> Cổng thanh toán MoMo</p>
                </div>
                <img className='w-48' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708868/Beana_assets/logo_wvawux.png' />
            </div>
            <div className='px-56 py-10 flex flex-row gap-8 pt-36'>
                <div className='basis-2/6 '>
                    <div className='border rounded shadow-md py-4 px-8 bg-white'>
                        <p className='text-lg font-semibold tracking-wider'>Thông tin đơn hàng</p>

                        <p className='pt-6 text-gray-500 font-medium]'>Nhà cung cấp</p>
                        <div className='flex flex-row gap-2 pt-3'>
                            <img className='w-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708868/Beana_assets/logo_wvawux.png' />
                            <p className='text-base font-bold'>Công ty cổ phần Beana</p>
                        </div>

                        <div className='border-b w-full mt-5'></div>

                        <p className='pt-5 text-gray-500 font-medium]'>Mã đơn hàng</p>
                        <div className='flex flex-row gap-2 pt-2'>
                            <p className='text-base font-semibold tracking-wide'>{dataCheckout?.id + dataCheckout?.amount}{dataCheckout?.id + dataCheckout?.amount} </p>
                        </div>

                        <div className='border-b w-full mt-5'></div>

                        <p className='pt-5 text-gray-500 font-medium]'>Mô tả</p>
                        <div className='flex flex-col pt-2'>
                            <p className='text-base font-semibold tracking-wide'>Khách hàng: Vũ Trường Giang </p>
                            <p className='text-base font-semibold tracking-wide'>Nội dung: Thanh toán giao dịch tại Beana </p>
                        </div>

                        <div className='border-b w-full mt-5'></div>

                        <p className='pt-5 text-gray-500 first-line:font-medium]'>Số tiền</p>
                        <div className='flex flex-row gap-2 pt-2'>
                            <p className='text-overLg font-medium tracking-wide'>{dataCheckout?.amount.toLocaleString("vn")}đ </p>
                        </div>
                    </div>
                    <div className=' rounded shadow-md py-3 px-8 bg-[#ffeff7] mt-5'>
                        <p className='text-center text-[#dd3eaa] font-medium'>Giao dịch sẽ hết hạn sau:</p>
                        <div className='flex flex-row justify-center items-center gap-3 pt-3 pb-1'>
                            <div className='bg-[#f3d2e9] px-2 py-[10px] rounded-lg text-center'>
                                <p className='text-[#dd3eaa] font-bold'> {formatTime(time.hours)}</p>
                                <p className='text-sm text-[#dd3eaa]'>Giờ</p>
                            </div>
                            <div className='bg-[#f3d2e9] px-2 py-[10px] rounded-lg text-center'>
                                <p className='text-[#dd3eaa] font-bold'> {formatTime(time.minutes)}</p>
                                <p className='text-sm text-[#dd3eaa]'>Phút</p>
                            </div>
                            <div className='bg-[#f3d2e9] px-2 py-[10px] rounded-lg text-center'>
                                <p className='text-[#dd3eaa] font-bold'> {formatTime(time.seconds)}</p>
                                <p className='text-sm text-[#dd3eaa]'>Giây</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/">
                        <div className='text-center font-semibold text-[#dd3eaa] pt-4 cursor-pointer'>Quay về</div>
                    </Link>

                </div>
                <div className='basis-4/6 bg-[#d70097] rounded-lg shadow-md h-[590px] flex flex-col items-center py-8 relative'>
                    <p className='text-[22px] text-white font-medium'>Quét mã QR để thanh toán</p>
                    <div className='bg-white rounded-2xl w-[320px] h-[320px] mt-8 flex items-center justify-center relative'>
                        <img className='w-[80%]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700218117/Beana_assets/qr-momo_jn5fo7.png' />
                        <img className='w-6 absolute top-6 right-6' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                        <img className='w-6 absolute top-6 left-6 scale-x-[-1]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                        <img className='w-6 absolute bottom-6 right-6 scale-y-[-1]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                        <img className='w-6 absolute bottom-6 left-6 rotate-180' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                    </div>
                    <img className='w-32 absolute top-6 left-12 opacity-25' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226033/Beana_assets/bg-dot_tjwh9s.png' />
                    <img className='w-32 absolute top-44 left-12 opacity-25 rotate-45' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226033/Beana_assets/bg-dot_tjwh9s.png' />
                    <img className='w-32 absolute top-16 left-48 opacity-25 ' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <img className='w-28 absolute top-[85px] left-[200px] opacity-25 ' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <img className='w-12 absolute top-[75px] right-[200px] opacity-25 rotate-45' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <img className='w-12 absolute top-[80px] right-[225px] opacity-25 rotate-[225deg]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <p className='pt-7 text-white/90 max-w-[350px] text-center'>
                        <FontAwesomeIcon icon={faQrcode} className='pr-1' />
                        Sử dụng <strong>App MoMo</strong> hoặc ứng dụng camera hỗ trợ QR code để quét mã</p>
                    <div className='flex flex-row pt-5'>
                        <p className='text-white/90'>Gặp khó khăn khi thanh toán? </p>
                        <p className='text-[#e6cb01] font-medium pl-1'>Xem hưỡng dẫn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
