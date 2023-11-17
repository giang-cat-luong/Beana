import React from 'react'
import { useState } from 'react';
import ScrollToTop from '../../../../../../hooks/useScrollToTop';
import { useAddAddress } from '../../../../../../services/Address/services';

export default function NewAddress() {

  //address
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");

  const { mutate } = useAddAddress();

  const addAddress = () => {
    try {
      mutate({
        fullName,
        phone,
        province,
        district,
        ward,
        address,
      });

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='pt-[10px] pb-20 px-5'>
      <ScrollToTop />
      <div className='mt-2 text-[18px] font-semibold '>Thêm địa chỉ</div>
      <div className='flex flex-row w-full gap-4'>
        <div className='basis-[48%]'>
          <div className="mt-6 tracking-wider text-sm font-medium">
            <div className='font-semibold'>Tỉnh/ Thành phố</div>
            <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
              type="text"
              placeholder="Nhập tỉnh..."
              onChange={(event) => setProvince(event.target.value)}
              value={province || ""}
            />
          </div>
          <div className="mt-6 tracking-wider text-sm font-medium">
            <div className='font-semibold'>Quận/ Huyện</div>
            <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
              type="text"
              placeholder="Nhập huyện..."
              onChange={(event) => setDistrict(event.target.value)}
              value={district || ""}
            />
          </div>
          <div className="mt-6 tracking-wider text-sm font-medium">
            <div className='font-semibold'>Phường/ Xã</div>
            <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
              type="text"
              placeholder="Nhập phường..."
              onChange={(event) => setWard(event.target.value)}
              value={ward || ""}
            />
          </div>
        </div>
        <div className='basis-[48%]'>
          <div className="mt-6 tracking-wider text-sm font-medium">
            <div className='font-semibold'>Địa chỉ nhận hàng</div>
            <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
              type="text"
              placeholder="Nhập địa chỉ (số nhà, xã/phường)..."
              onChange={(event) => setAddress(event.target.value)}
              value={address || ""}
            />
          </div>
          <div className="mt-6 tracking-wider text-sm font-medium">
            <div className='font-semibold'>Họ và tên</div>
            <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
              type="text"
              placeholder="Nhập tên đầy đủ..."
              onChange={(event) => setFullName(event.target.value)}
              value={fullName || ""}
            />
          </div>
          <div className="mt-6 tracking-wider text-sm font-medium">
            <div className='font-semibold'>Số điện thoại</div>
            <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
              type="text"
              placeholder="Nhập số điện thoại..."
              onChange={(event) => setPhone(event.target.value)}
              value={phone || ""}
            />
          </div>
        </div>
      </div>
      <div
        onClick={addAddress}
        className='beana-button-green-hover py-2 px-8 rounded-md inline-block mt-4'>
        Thêm
      </div>
    </div>
  )
}
