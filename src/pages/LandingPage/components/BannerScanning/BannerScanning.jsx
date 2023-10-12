import Questionnaire from "../../../../components/Questionnaire/Questionnaire";
import { useState } from "react";

export default function BannerScanning() {

    const [isOpenQA, setIsOpenQA] = useState(false);

    const toggleQuestionQA = () => {
        setIsOpenQA(!isOpenQA);
    }
    return (
        <div className='max-w-screen-2xl px-36 flex flex-row '>
              {isOpenQA && <Questionnaire/>}
            <div className='basis-1/2 bg-[#86BB86] pl-20 py-6 text-[#fff]'>
                <h1 className='font-semibold text-[24px]'>Phân Tích Chăm Sóc Da Ảo Mới</h1>
                <p className='font-light text-sm pt-1 leading-6'>Tìm Kiếm Một Thói Quen Chăm Sóc Da Đầy Đủ? Công Cụ Phân Tích Chăm
                    Sóc Da Ảo Mới Của Chúng Tôi Đánh Giá Làn Da Của Bạn Và Đưa Ra Các
                    Đề Xuất Được Cá Nhân Hóa Nhất.
                </p>
                <div className='flex flex-row justify-between pt-2'>
                    <div className=''>
                        <h1 className='font-bold'>Quét mã QR bằng điện thoại để bắt đầu</h1>
                        <p className='pt-[6px]'>Hoặc</p>
                        <button 
                        className="mt-3 font-normal text-[#fff] text-[13px] border-2 px-6 py-2 hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                        onClick={toggleQuestionQA}
                        >Trả Lời Một Vài Câu Hỏi</button>
                    </div>
                    <div>
                        <img className='w-24 h-24 mt-2 mr-4' src='./assets/qr-code.png' />
                    </div>
                </div>
            </div>
            <div className='basis-1/2 '>
                <img className='w-[100%] h-[100%] bg-center bg-cover' src='./assets/bannerScanning.png' />
            </div>
        </div>
    )
}
