import React from 'react'

export default function ProductEvent() {
    return (
        <div className='max-w-screen-2xl px-36 pb-14 flex flex-row '>
            <div className='basis-4/5 '>
                <img className='w-[100%] h-[100%] bg-center bg-cover' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697817670/Beana_assets/MA_BK_b6k3yv.jpg' />
            </div>
            <div className='basis-3/5 bg-[#FBEFF2] pl-12 pr-12 pt-10 pb-4 text-[#000]'>
                <h1 className='font-bold text-[24px]'>Ưu Đãi Đặc Biệt</h1>
                <h1 className='font-bold text-[28px] text-[#86bb86]'>Tiết Kiệm Đến 50%</h1>
                <p className='font-medium  text-[#0C0C0C] pt-1 leading-6'>
                    Ngày Phụ Nữ Việt Nam Đang Đến!
                </p>
                <p className='font-medium text-[#0C0C0C] pt-1 leading-6'>
                    Nhân dịp này, chúng tôi muốn giới thiệu một sản phẩm đặc biệt, chúng tôi gọi là "Nữ Quyền Tươi Đẹp."

                </p>
                <p className='font-semibold pt-2 text-[#86bb86]'>Sản phẩm này không chỉ là một món quà thú vị để tặng các phụ nữ trong cuộc sống của bạn mà còn mang ý
                    nghĩa về sự tự tin, độc lập và tôn trọng cho người phụ nữ bạn yêu quý..</p>
                <button className="mt-3 bg-[#86bb86] shadow-md shadow-[#86bb86] font-normal text-[#fff] float-right  text-[14px] border-2 px-12 py-3 hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]">Mua ngay</button>

            </div>
        </div>
    )
}
