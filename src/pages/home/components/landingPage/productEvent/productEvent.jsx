import React from 'react'

export default function productEvent() {
    return (
        <div className='max-w-screen-2xl px-36 pb-14 flex flex-row '>
            <div className='basis-3/5 '>
                <img className='w-[100%] h-[100%] bg-center bg-cover' src='./assets/productEventGreen.png' />
            </div>
            <div className='basis-4/5 bg-[#FBEFF2] pl-12 pr-12 pt-10 pb-4 text-[#000]'>
                <h1 className='font-bold text-[24px]'>Ưu Đãi Đặc Biệt</h1>
                <h1 className='font-bold text-[28px] text-[#86bb86]'>Tiết Kiệm Đến 50%</h1>
                <p className='font-medium  text-[#0C0C0C] pt-1 leading-6'>
                    Ngày của mẹ đang đến!
                </p>
                <p className='font-medium text-[#0C0C0C] pt-1 leading-6'>
                    Đối với tất cả những gì cô ấy đã cho bạn, đã đến lúc phải trả lại.
                    Hãy tắm cho cô ấy bằng tình yêu, hạnh phúc và vẻ đẹp tuyệt vời nhất.
                </p>
                <p className='font-semibold pt-2 text-[#86bb86]'>Ghé thăm các chi nhánh làm đẹp tạI địa phương
                    của bạn để tìm hiểu thêm về các ưu đãI đặc biệt của chúng tôI đốI vớI
                    các sản phẩm trang đIểm và chăm sóc da.</p>
                <button className="mt-3 bg-[#86bb86] font-normal text-[#fff] float-right  text-[14px] border-2 px-12 py-3 hover:bg-[#49B949] hover:text-[#fff]">Mua ngay</button>

            </div>
        </div>
    )
}
