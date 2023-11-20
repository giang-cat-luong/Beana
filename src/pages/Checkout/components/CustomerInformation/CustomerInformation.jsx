import React from 'react'
import { useState, useRef } from 'react';
import { useAddAddress } from '../../../../services/Address/services';
import { faCircleCheck, faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Success from '../../../../components/Notification/Success/Success';
import Failed from '../../../../components/Notification/Failed';

export default function CustomerInformation({ setPage, addressList, defaultAddress, handleSetDefaultAddress, }) {

    const addressRef = useRef(null);

    const [newAddress, setNewAddress] = useState(false);
    const [isFailedOpen, setIsFailedOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    //slice address
    const [showMore, setShowMore] = useState(false);
    const [visibleAddress, setVisibleAddress] = useState(3);

    const handleShowMore = () => {
        setShowMore(!showMore);
        setVisibleAddress(prevCount => prevCount + addressList.length);
    };
    
    const handleScrollAddress = () => {
        setShowMore(!showMore);
        setVisibleAddress(3);
        addressRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    //address
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [address, setAddress] = useState("");

    const { mutate, isFailed, isSuccess } = useAddAddress();

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
        <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
            {isFailed && (
                <Failed
                    isFailed={isFailed}
                    setIsFailed={() => setIsFailedOpen(false)}
                    title="Thêm thất bại"
                    description="Thêm địa chỉ mới thất bại!"
                />
            )}
            {isSuccess &&
                <Success
                    title="Thêm thành công"
                    description="Bạn đã thêm thành công địa chỉ mới"
                    isSuccess={isSuccess}
                    setIsSuccess={() => setIsSuccessOpen(false)}
                />}
            <div>
                <div className='px-16 mb-20 mt-8 '>
                    <div className="text-overLg font-bold tracking-widest">
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
                        <div ref={addressRef} className="tracking-widest text-base font-bold">
                            ĐỊA CHỈ THANH TOÁN
                        </div>
                    </div>
                    {addressList
                        ?.sort((a, b) => (a.status === 1 ? -1 : b.status === 1 ? 1 : 0))
                        .slice(0, visibleAddress)
                        .map((address) => (
                            <div

                                key={address.id}
                                className={`cursor-pointer h-[130px] border-[2px] shadow-lg mt-6 tracking-wider text-sm font-medium relative ${defaultAddress === address.id ? "border-dashed border-secondary  " : "border-dashed border-[#faf9f5]"
                                    }`}
                                onClick={() => handleSetDefaultAddress(address.id)}
                            >
                                <div className=" px-14 pt-6 pb-12">
                                    <div className="flex flex-col">
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className={`text-[25px] absolute top-7 left-4 ${defaultAddress === address.id ? 'text-secondary ' : 'text-grey '}`}
                                        />
                                        <div className={`${defaultAddress === address.id ? 'text-black ' : 'text-[#71716e] '}`}>
                                            <div className="flex flex-row gap-2">
                                                <p className="font-semibold">{address?.fullName} -</p>
                                                <p>{address.phone}</p>
                                            </div>
                                            <p className="mt-2">{address.address}</p>
                                        </div>
                                    </div>
                                    {defaultAddress === address.id &&
                                        <div className="absolute right-0 top-0">
                                            <img className="w-8" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699474594/Beana_assets/default_w3ztfr.png" />
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    {addressList?.length >= 4 &&
                        <div>
                            {!showMore ? (
                                <div onClick={handleShowMore} className={`text-center mt-3 ${showMore ? 'text-secondary' : ''}`}>
                                    Xem thêm
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        className='text-[15px] ml-2'
                                    />
                                </div>
                            ) : (
                                <div onClick={handleScrollAddress} className={`text-center mt-3 ${showMore ? 'text-secondary' : ''}`}>
                                    Thu gọn
                                    <FontAwesomeIcon
                                        icon={faCaretUp}
                                        className='text-[15px] ml-2'
                                    />
                                </div>)
                            }
                        </div>
                    }
                    <div className="mt-10 flex flex-row items-center gap-3">
                        <div className="text-[14px]">
                            Bạn muốn giao hàng đến địa chỉ khác?
                        </div>
                        <div
                            className="beana-button-green-hover rounded px-4 py-1"
                            onClick={() => setNewAddress(!newAddress)}
                        >
                            Thêm địa chỉ mới
                        </div>
                    </div>

                    <div className={`h-0 overflow-hidden duration-500 ${newAddress ? 'h-[680px]' : ''}`}>
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
                        <div
                            onClick={addAddress}
                            className='beana-button-green-hover py-1 px-4 rounded-md inline-block mt-2'>
                            Thêm
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-5 text-[13px] font-bold">
                        <button
                            className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
                            onClick={() => setPage(1)}
                        >
                            TIẾP TỤC
                        </button>
                    </div>


                </div>
            </div>
        </div >
    )
}
