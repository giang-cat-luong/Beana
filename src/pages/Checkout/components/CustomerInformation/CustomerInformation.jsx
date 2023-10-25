import React from 'react'
import { useState } from 'react';
import { useAddAddress } from '../../../../services/Address/services';
export default function CustomerInformation({ setPage }) {

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
            setPage(1)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
            <div>
                <div className='px-16 mb-20 mt-8 '>
                    <div className="text-[24px] font-bold tracking-widest">
                        THÔNG TIN KHÁCH HÀNG
                    </div>
                    <div className="w-full mt-8">
                        <div className="flex items-center border-b-[2px] border-[#606060] py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-[#000] mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#606060]" type="text" placeholder="Địa chỉ email..." aria-label="Full name" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="flex flex-row gap-3 items-center h-6">
                            <input type="checkbox" value="" className="w-6 h-6" />
                            <label className="font-medium text-sm text-[#000] leading-7">  Đăng ký nhận bản tin Beana cho tôi.</label>
                        </div>
                        <label className="mt-5 font-medium text-sm text-[#000] leading-7">Bằng cách gửi email của bạn, bạn đồng ý nhận các email quảng cáo từ Beautya. Vui lòng xem xét Chính sách bảo mật của chúng tôi,
                            bao gồm Thông báo Phần khuyến mãi tài chính cho khách hàng Beana.</label>
                        <label className="mt-4 font-medium text-sm text-[#000] leading-7">Đọc thêm trong Chính sách Riêng tư của chúng tôi, trong đó chúng tôi mô tả cách chúng tôi xử lý thông tin cá nhân, luật pháp và nhiều thông tin khác.</label>
                    </div>
                    <div className="mt-10  flex flex-row justify-between">
                        <div className="tracking-widest text-base font-bold">
                            ĐỊA CHỈ THANH TOÁN
                        </div>
                    </div>

                    <div className="mt-6 tracking-wider text-sm font-medium">
                        <div>Province</div>
                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                            type="text"
                            placeholder="Nhập tỉnh..."
                            onChange={(event) => setProvince(event.target.value)}
                            value={province || ""}
                        />
                    </div>
                    <div className="mt-6 tracking-wider text-sm font-medium">
                        <div>District</div>
                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                            type="text"
                            placeholder="Nhập huyện..."
                            onChange={(event) => setDistrict(event.target.value)}
                            value={district || ""}
                        />
                    </div>
                    <div className="mt-6 tracking-wider text-sm font-medium">
                        <div>Ward</div>
                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                            type="text"
                            placeholder="Nhập phường..."
                            onChange={(event) => setWard(event.target.value)}
                            value={ward || ""}
                        />
                    </div>
                    <div className="mt-6 tracking-wider text-sm font-medium">
                        <div>Full name</div>
                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                            type="text"
                            placeholder="Nhập tên đầy đủ..."
                            onChange={(event) => setFullName(event.target.value)}
                            value={fullName || ""}
                        />
                    </div>
                    <div className="mt-6 tracking-wider text-sm font-medium">
                        <div>Address</div>
                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                            type="text"
                            placeholder="Nhập địa chỉ..."
                            onChange={(event) => setAddress(event.target.value)}
                            value={address || ""}
                        />
                    </div>
                    <div className="mt-6 tracking-wider text-sm font-medium">
                        <div>Phone</div>
                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                            type="text"
                            placeholder="Nhập số điện thoại..."
                            onChange={(event) => setPhone(event.target.value)}
                            value={phone || ""}
                        />
                    </div>
                    <div className="mt-10 flex flex-col gap-5 text-[13px] font-bold">
                        <button
                            className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
                            onClick={addAddress}
                        >
                            TIẾP TỤC
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
