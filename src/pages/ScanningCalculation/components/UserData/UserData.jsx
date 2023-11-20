import React, { useRef, useEffect, useState } from 'react';

export default function UserData({handleHelp,setPage}) {
 
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [age, setAge] = useState("")
  const [ageError, setAgeError] = useState(null);
  const [skinError, setSkinError] = useState(null);
  const [buttonCheck, setButtonCheck] = useState(false);
 

  const handleInputAge = (age) => {
    setAge(age);
  };

  const handleNexPageClick = () => {
    if (selectedSkin === null) {
      setSkinError(true)
    }
    if (age === "") {
      setAgeError(true)
    }
    if (selectedSkin !== null) {
      setSkinError(false)
    }
    if (age !== "") {
      setAgeError(false)
    }
    if (selectedSkin !== null && age !== "") {
      setSkinError(false)
      setAgeError(false)
      setButtonCheck(true)
      setPage(2)
    }
  };

  useEffect(() => {
    if (selectedSkin !== null && age !== "") {
      setButtonCheck(true)
    } else {
      setButtonCheck(false);
    }
  }, [age, selectedSkin]);

  return (
    <div className='relative'>
      <div className='h-full mt-12 px-4'>
        <div className='font-bold text-xs tracking-wider'>BƯỚC 1/1</div>
        <div className='font-light text-[#333333] text-overLg tracking-wider mt-5'>HỒ SƠ VỀ DA CỦA BẠN!</div>
        <div className='font-bold text-[#333333] text-[18px] tracking-wider mt-6'>TUỔI CỦA BẠN</div>
        <div className='font-normal text-[#858383] text-[12px] tracking-wider mt-3'>Thông tin này giúp cung cấp thông tin cho việc phân tích và chuẩn đoán khuôn mặt</div>
        <div className='flex mt-6 justify-center items-center'>
          <div className='border-b-[3px] border-secondary pb-1 mr-3'>
            <input
              type='number'
              value={age}
              onChange={(e) => handleInputAge(e.target.value)}
              placeholder='--'
              className='text-center w-[70px] px-2 h-14 placeholder:text-[40px] text-[40px] font-extralight'
            />
          </div>
          <label className='font-medium text-[#858383] mt-3'>Tuổi</label>
        </div>
        {ageError && <div className='text-xs text-red pt-6 text-center'>Vui lòng nhập số tuổi của bạn!</div>}
        <div className='flex flex-row justify-between mt-8'>
          <div className='font-bold text-[#333333] text-[18px] tracking-wider'>LOẠI DA CỦA BẠN</div>
          <div
            className='font-normal text-[#333333] text-[12px] tracking-wider underline'
            onClick={handleHelp}
          >TRỢ GIÚP
          </div>
        </div>
        <div className='font-normal text-[#858383] text-[12px] tracking-wider mt-3'>Chọn mô tả da của bạn một cách chính xác nhất</div>
        <div className='flex flex-row justify-between mt-6'>
          {selectedSkin === 'oily' ?
            (
              <div
                className='flex flex-col justify-center items-center gap-1 text-black'
                onClick={() => setSelectedSkin(null)}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/oily_second_zg9drr.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA DẦU</p>
              </div>
            ) : (
              <div
                className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                onClick={() => setSelectedSkin("oily")}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984262/Beana_svg/oily_primary_yr99ol.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA DẦU</p>
              </div>
            )}
          {selectedSkin === 'normal' ?
            (
              <div
                className='flex flex-col justify-center items-center gap-1 text-black'
                onClick={() => setSelectedSkin(null)}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984692/Beana_svg/normal_second_fwlrtv.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA BÌNH THƯỜNG</p>
              </div>
            ) : (
              <div
                className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                onClick={() => setSelectedSkin("normal")}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984692/Beana_svg/normal_primary_jkyyua.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA BÌNH THƯỜNG</p>
              </div>
            )}
          {selectedSkin === 'combination' ?
            (
              <div
                className='flex flex-col justify-center items-center gap-1 text-black'
                onClick={() => setSelectedSkin(null)}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA HỖN HỢP</p>
              </div>
            ) : (
              <div
                className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                onClick={() => setSelectedSkin("combination")}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_primary_x8r3l6.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA HỖN HỢP</p>
              </div>
            )}
          {selectedSkin === 'dry' ?
            (
              <div
                className='flex flex-col justify-center items-center gap-1 text-black'
                onClick={() => setSelectedSkin(null)}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/dry_second_vkxzvl.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA KHÔ</p>
              </div>
            ) : (
              <div
                className='flex flex-col justify-center items-center gap-1 text-[#858383]'
                onClick={() => setSelectedSkin("dry")}
              >
                <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/dry_primary_k1jonj.svg' className='w-[50px] h-[50px]' />
                <p className='text-[10px] font-medium'>DA KHÔ</p>
              </div>
            )}
        </div>
        {skinError && <div className='text-xs text-red pt-6 text-center'>Bạn phải lựa chọn loại da của bạn!</div>}
      </div>
      <div
        className={`fixed bottom-2 left-1/2 -translate-x-1/2 w-[90%] beana-button-green mt-2 h-9 flex items-center justify-center text-black font-bold ${buttonCheck === false && 'opacity-40'}`}
        onClick={handleNexPageClick}
      >
        TIẾP TỤC
      </div>
    </div>
  )
}
