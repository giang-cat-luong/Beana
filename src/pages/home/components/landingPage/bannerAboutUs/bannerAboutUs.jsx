import React from 'react'

export default function bannerAboutUs() {
    return (
        <div className='max-w-screen-2xl px-48 flex flex-row '>
            <div className='basis-4/5 bg-[#86BB86] pl-20 pr-6 py-10 text-[#fff]'>
                <h1 className='font-semibold text-[24px]'>Về Chúng Tôi</h1>
                <p className='font-normal text-sm pt-2 leading-6'>
                    Chúng tôi tin rằng vẻ đẹp phát triển trong sự đa dạng và khám phá.
                    Mục đích của chúng tôi là mở rộng cách thế giới nhìn nhận vẻ đẹp bằng cách
                    trao quyền cho Điều phi thường trong mỗi chúng ta.
                </p>
                <button className="mt-3 font-normal text-[#fff] text-[13px] border-2 px-6 py-3 hover:bg-[#49B949] hover:text-[#fff]">Khám Phá Thêm</button>
            </div>
            <div className='basis-3/5'>
                <img className='w-[100%] h-[100%] bg-center bg-cover' src='./assets/bannerAboutUs.png' />
            </div>
        </div>
    )
}
