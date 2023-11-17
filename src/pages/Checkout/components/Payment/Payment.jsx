import React from 'react'

export default function Payment({ handlePayment, handleNextPage, selectedPayment }) {

  console.log(selectedPayment)
  return (
    <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
      <div>
        <div className='px-16 mb-20 mt-8 '>
          <div className="text-[24px] font-bold tracking-widest">
            THANH TOÁN
          </div>
          <div className="mt-10  flex flex-row justify-between">
            <div className="tracking-widest text-base font-bold">
              HÌNH THỨC THANH TOÁN
            </div>
          </div>
          <div class="flex items-center mb-4 mt-4">
            <input
              id="default-radio-1"
              type="radio"
              value="2"
              onChange={() => handlePayment("2")}
              name="payment-method"
              checked={selectedPayment === "2"}
              class="w-6 h-6"
            />
            <label class="ml-2 text-md font-medium text-black">Thanh toán tiền khi nhận hàng (COD)</label>
          </div>
          <div class="flex items-center mb-4 mt-4">
            <input
              id="default-radio-2"
              type="radio"
              value="0"
              onChange={() => handlePayment("3")}
              name="payment-method"
              checked={selectedPayment === "3"}
              class="w-6 h-6"
            />
            <label class="ml-2 text-md font-medium text-black">Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)</label>
          </div>
          <div class="flex items-center">
            <input
              id="default-radio-3"
              type="radio"
              value="1"
              onChange={() => handlePayment("1")}
              name="payment-method"
              checked={selectedPayment === "1"}
              class="w-6 h-6"
            />
            <label class="ml-2 text-md font-medium text-black">Thanh toán trực tuyến MOMO</label>
          </div>
          <div className="mt-16 flex flex-col gap-5 text-[13px] font-bold">
            <button
              className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
              onClick={() => handleNextPage(3)}
            >

              TIẾP TỤC

            </button>
          </div>


        </div>
      </div>
    </div>
  )
}
