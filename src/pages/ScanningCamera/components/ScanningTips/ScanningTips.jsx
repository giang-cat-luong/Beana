import React from 'react'

export default function ScanningTips({sliderUrls,handleSuccessSend}) {
  return (
    <div className='relative'>
      <div className="w-full min-h-full h-full md:w-full md:h-full bg-center bg-cover z-0 " style={{ backgroundImage: `url(${sliderUrls[1]})` }}>
        <div className="px-8 py-10 text-white  bg-black/50 backdrop-opacity-10 w-full backdrop-invert">
          <div className='min-h-screen flex flex-col'>
            <div className='flex flex-col justify-between gap-4'>
              <div className='flex flex-row'>
                <p className='pt-5 text-[29px] font-bold text-secondary'>ĐẾN GIỜ SELFIE RỒI !</p>
                <img className='w-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/bean_afjwev.png' />
              </div>
              <div className='flex flex-col'>
                <ul className='pl-5 text-[13px] font-normal'>
                  <li className="list-decimal pt-4">
                    Kéo tóc ra, sau không trang điểm.
                  </li>
                  <li className="list-decimal pt-4">
                    Sử dụng máy ảnh mặt trước với ánh sáng tốt
                  </li>
                  <li className="list-decimal pt-4">
                    Giữ cho đôi mắt mở với một biểu cảm bình thường
                  </li>
                  <li className="list-decimal pt-4">
                    Định vị khuôn mặt đúng trong vùng cho trước
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className="text-sm mt-20 border-[2px] py-5 px-8 hover:bg-white/20 text-center"
                >
                  Vui lòng cho phép truy cập vào máy ảnh của bạn, để chúng tôi có thể cung cấp trải nghiệm cá nhân dựa trên bức ảnh selfie của bạn.

                  <br /><strong>Hình selfie của bạn sẽ không được lưu trữ trong cơ sở dữ liệu của chúng tôi.</strong>
                </div>
              </div>
              <div className='bg-white w-full absolute bottom-0 left-0'>
                <div
                  className="ml-6 mt-2 w-[90%] border-[2px] bg-primary shadow-sm shadow-primary text-center py-2 hover:bg-secondary hover:shadow-md hover:shadow-secondary ease-in-out duration-500"
                  onClick={handleSuccessSend}
                >
                  Bắt đầu
                </div>
                <p className='mb-3 pt-3 text-black text-center'>Chọn ảnh của bạn</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
