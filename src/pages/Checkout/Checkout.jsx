import { faXmark, faPlus, faMinus, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { useRemoveCartItem } from "../../services/Cart/services";
import useCart from "../Cart/hooks/useCart";
import { Link } from "react-router-dom";


export default function Checkout() {

    const [quantity, setQuantity] = useState(1);

    const { data } = useCart();

    const [page, setPage] = useState(0);

    const handleNextPage = (currentPage) => {
        setPage(currentPage)
    }

    const { mutate } = useRemoveCartItem();

    const removeItemById = (id) => {
        try {
            mutate({
                id: id,
            });
        } catch (error) {
            console.error(error);
        }

    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };


    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityChange = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 100) {
            setQuantity(newValue);
        }
    };


    return (
        <div className=''>
            <div className='flex flex-row'>
                <div className='basis-[54%] px-20 pb-32 border-b-[1px] border-[#c3c2bc]  mt-[89px]'>
                    <div className='text-[30px] font-bold tracking-widest'>YOUR CART</div>
                    <div className='text-[14px] font-medium '>3 items</div>

                    {data?.map((cart) => (
                        <div key={cart.item.id} className='mt-8 flex flex-row gap-4 relative pb-6 border-b-2 border-black/25 border-dashed'>
                            <img className='max-w-[255px] max-h-[250px]' src={cart?.item?.productImageList[0]?.url} />
                            <div className='flex flex-col gap-3 justify-between'>
                                <div>
                                    <div className='text-[22px] text-black font-semibold pb-3'>{cart.item.name}</div>
                                    <div className='text-[14px] font-medium text-[#272727]'>Còn {cart.item.quantity} sản phẩm có sẵn</div>
                                </div>
                                <div className='flex flex-row gap-3 justify-between items-center mb-4 px-5'>
                                    <div className="flex flex-row items-center">
                                        <FontAwesomeIcon
                                            icon={faMinus}
                                            onClick={decrementQuantity}
                                            className={`text-[12px]  cursor-pointer ${quantity <= 1 ? 'opacity-20' : 'text-[#000]'}`}
                                        />
                                        <input
                                            type="text"
                                            name="quantity"
                                            min="1"
                                            max="100"
                                            value={cart.quantity}
                                            onChange={handleQuantityChange}
                                            className="max-w-[40px] h-[30px] text-center font-semibold text-[18px] mx-4"
                                        />
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className={`text-[12px]  cursor-pointer ${quantity === cart.item.quantity ? 'opacity-20' : 'text-[#000]'}`}
                                            onClick={incrementQuantity}
                                        />
                                    </div>
                                    <div className='text-[20px] font-semibold'>53.000đ</div>
                                </div>
                            </div>
                            <div
                                className="absolute right-0 top-[-20px]"
                                onClick={() => removeItemById(cart.item.id)}
                            >
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    color="#272727"
                                    className="text-[25px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className='basis-[46%] '>
                    <div className="flex flex-row justify-between px-6 font-semibold">
                        <div className={`${page === 0 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Customer information</div>
                        <div className={`${page === 1 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Delivery</div>
                        <div className={`${page === 2 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Payment</div>
                        <div className={`${page === 3 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Summary</div>
                    </div>
                    {page === 0 &&
                        <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
                            <div>
                                <div className='px-16 mb-20 mt-8 '>
                                    <div className="text-[24px] font-bold tracking-widest">
                                        CUSTOMER INFORMATION
                                    </div>
                                    <div className="w-full mt-8">
                                        <div className="flex items-center border-b-[2px] border-[#606060] py-2">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#000] mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#606060]" type="text" placeholder="Địa chỉ email..." aria-label="Full name" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-6">
                                        <div className="flex flex-row gap-3 items-center h-6">
                                            <input type="checkbox" value="" className="w-6 h-6" />
                                            <label className="font-medium text-sm text-[#000] leading-7">  Đăng ký nhận bản tin BoConcept cho tôi.</label>
                                        </div>
                                        <label className="mt-5 font-medium text-sm text-[#000] leading-7">Bằng cách gửi email của bạn, bạn đồng ý nhận các email quảng cáo từ Beautya. Vui lòng xem xét Chính sách bảo mật của chúng tôi,
                                            bao gồm Thông báo Phần khuyến mãi tài chính cho khách hàng Beana.</label>
                                        <label className="mt-4 font-medium text-sm text-[#000] leading-7">Đọc thêm trong Chính sách Riêng tư của chúng tôi, trong đó chúng tôi mô tả cách chúng tôi xử lý thông tin cá nhân, luật pháp và nhiều thông tin khác.</label>
                                    </div>
                                    <div className="mt-10  flex flex-row justify-between">
                                        <div className="tracking-widest text-base font-bold">
                                            BILLING ADDRESS
                                        </div>
                                    </div>

                                    <div className="mt-6 tracking-wider text-sm font-medium">
                                        <div>Province</div>
                                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                                            type="text"
                                            placeholder="Nhập tỉnh..."
                                        />
                                    </div>
                                    <div className="mt-6 tracking-wider text-sm font-medium">
                                        <div>District</div>
                                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                                            type="text"
                                            placeholder="Nhập huyện..."
                                        />
                                    </div>
                                    <div className="mt-6 tracking-wider text-sm font-medium">
                                        <div>Ward</div>
                                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                                            type="text"
                                            placeholder="Nhập phường..."
                                        />
                                    </div>
                                    <div className="mt-6 tracking-wider text-sm font-medium">
                                        <div>Full name</div>
                                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                                            type="text"
                                            placeholder="Nhập tên đầy đủ..."
                                        />
                                    </div>
                                    <div className="mt-6 tracking-wider text-sm font-medium">
                                        <div>Address</div>
                                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                                            type="text"
                                            placeholder="Nhập địa chỉ..."
                                        />
                                    </div>
                                    <div className="mt-6 tracking-wider text-sm font-medium">
                                        <div>Phone</div>
                                        <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
                                            type="text"
                                            placeholder="Nhập số điện thoại..."
                                        />
                                    </div>
                                    <div className="mt-10 flex flex-col gap-5 text-[13px] font-bold">
                                        <button
                                            className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
                                            onClick={() => handleNextPage(page + 1)}
                                        >

                                            CONTINUE TO DELIVERY

                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    }
                    {page === 1 &&
                        <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
                            <div>
                                <div className='px-16 mb-20 mt-8 '>
                                    <div className="text-[24px] font-bold tracking-widest">
                                        DELIVERY
                                    </div>
                                    <div className="mt-10  flex flex-row justify-between">
                                        <div className="tracking-widest text-base font-bold">
                                            DELIVERY INFORMATION
                                        </div>
                                    </div>

                                    <div className="h-[130px] bg-[#FAF9F5] border-[1px] border-dashed border-secondary shadow-lg mt-6 tracking-wider text-sm font-medium relative">
                                        <div className=" px-14 pt-6 pb-12">
                                            <div className="flex flex-col">
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    onClick={decrementQuantity}
                                                    className="text-[25px] text-secondary absolute top-7 left-4"
                                                />
                                                <div className="flex flex-row gap-2">
                                                    <p className="font-semibold">Vũ Trường Giang -</p>
                                                    <p>0981890260</p>
                                                </div>
                                                <p className="mt-2">Tân Lập 1, Phường Hiệp Phú, Quận 9, Phường Đakao, Quận 1, Hồ Chí Minh</p>
                                            </div>

                                        </div>
                                    </div>
                                    <p className="mt-5 underline underline-offset-4 hover:text-secondary cursor-pointer font-medium">+ Thêm đại chỉ giao hàng khác</p>
                                    <div className="mt-10 flex flex-col gap-5 text-[13px] font-bold">
                                        <button
                                            className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
                                            onClick={() => handleNextPage(page + 1)}
                                        >

                                            CONTINUE TO PAYMENT

                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
