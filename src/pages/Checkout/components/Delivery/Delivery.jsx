import {  faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Delivery({addressList,defaultAddress, handleSetDefaultAddress, handleNextPage}) {

    return (
        <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
            <div>
                <div className='px-16 mb-20 mt-8 '>
                    <div className="text-[24px] font-bold tracking-widest">
                        GIAO HÀNG
                    </div>
                    <div className="mt-10  flex flex-row justify-between">
                        <div className="tracking-widest text-base font-bold">
                            THÔNG TIN GIAO HÀNG
                        </div>
                    </div>
                    {addressList?.map((address) => (
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

                            </div>
                        </div>
                    ))}
                    <div className="mt-12  flex flex-row justify-between">
                        <div className="tracking-widest text-base font-bold">
                            HÌNH THỨC VẬN CHUYỂN
                        </div>
                    </div>
                    <div class="flex items-center mb-4 mt-6">
                        <input
                            id="default-radio-2"
                            type="radio"
                            value="0"
                            name="payment-method"
                            class="w-8 h-8"
                        />
                        <label class="ml-2 text-md font-medium text-black">
                            <span className="text-secondary">[NowFree]</span>  Giao hàng nhanh trong  <span className="text-secondary">2 giờ (Trễ tặng 100k)</span> <strong>: 0 đ</strong> (Nhận hàng trước <span className="text-secondary">10h</span> ngày mai)
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input
                            id="default-radio-3"
                            type="radio"
                            value="1"
                            name="payment-method"
                            class="w-6 h-6"
                        />
                        <label class="ml-2 text-md font-medium text-black">
                            Giao hàng trong 48 giờ<strong> : 0 đ</strong>
                        </label>
                    </div>
                    <div className="mt-16 flex flex-col gap-5 text-[13px] font-bold">
                        <button
                            className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
                            onClick={() => handleNextPage(2)}
                        >

                            TIẾP TỤC

                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
