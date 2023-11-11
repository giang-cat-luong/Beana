import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Pending() {
    return (

        <div className='mt-5 border-[1px] border-[#f2f1f6]'>
            <div className='bg-[#f7f7f7] py-[5px] px-3 text-[13px] text-[#333333] font-medium'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center '>
                            <div>Mã đơn hàng: 23110255230</div>
                            <div className='border-l-[1px] border-lightBlack h-4 ml-[5px] pr-[5px]' ></div>
                            <div>Đặt ngày: 02/11/2023</div>
                            <div className='bg-[#aeaeae] py-[3px] px-6 text-white font-medium text-[12px] rounded mx-3'>Đang giao</div>
                            <div>Thanh toán: Thanh toán qua Momo</div>
                        </div>
                        <p >
                            Tổng tiền: <strong className='text-secondary'>1.262.000 đ</strong>
                        </p>
                    </div>
                    <div className='text-secondary'>
                        Xem chi tiết
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className='pl-1'
                        />
                    </div>
                </div>
            </div>
            <div className='py-[5px] px-3 pb-8 flex flex-row flex-wrap'>
                <div className='basis-1/2 flex flex-row mt-2 text-[13px] font-medium'>
                    <img className='w-16 h-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708908/Beana_assets/test1_wsijbu.png' />
                    <div className='flex flex-col px-3 '>
                        <div className='font-bold'>
                            LACOON
                        </div>
                        <div className='line-clamp-2'>
                            Kem Chống Nắng Dành Cho Da Dầu Bioderma Akn Mat SPF30 PA++++ 40Ml
                        </div>
                        <div className='font-normal'>
                            4 x <strong className='text-secondary'>119.000đ</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
