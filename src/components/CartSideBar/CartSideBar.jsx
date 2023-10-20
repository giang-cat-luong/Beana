import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import useCart from "../../pages/Cart/hooks/useCart";
import { useState, useEffect } from "react";
import EmptyCart from './emptyCart.json'
import Lottie from "lottie-react"

export default function CartSideBar({ isOpen, setIsOpen }) {
    const { data, isLoading } = useCart();

    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = () => {
        let total = 0;

        data?.forEach((cart) => {
            total += cart.item.price * cart.quantity;
        });

        setTotalPrice(total);
    };

    useEffect(() => {
        updateTotalPrice(); // Gọi hàm khi data thay đổi
    }, [data]);

    const navigate = useNavigate();

    const navigateToCart = () => {
        navigate("/cart");
        setIsOpen(false);
    }

    if (isLoading) {
        return <div>hhuhu</div>
    }
    return (
        <div className="relative">
            <div className={`h-full fixed top-0  bg-white w-[480px] duration-500 overflow-hidden z-[7777] ${isOpen ? 'right-0' : 'right-[-480px]'}`}>
                <div className='pt-[60px] px-[70px] pb-[100px]'>
                    <div >
                        <div className='text-md font-medium mb-14'>
                            GIỎ HÀNG
                        </div>

                        {data?.map((cart) => (
                            <div className='mt-16 flex flex-row gap-4 relative items-center pb-3 border-b-2 border-dashed'>
                                <img className='max-w-[85px] max-h-[85px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708889/Beana_assets/test2_ngfftk.png' />
                                <div className='flex flex-col gap-1'>
                                    <div className='text-[11px] font-semibold'>{cart.item.name}</div>
                                    <div className='text-[11px] font-normal text-[#272727]'>Còn {cart.item.quantity} sản phẩm có sẵn</div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#ededed] px-3 py-1 text-[12px] font-normal]'>{cart.quantity}</div>
                                        <div className='text-[14px] font-normal text-[#272727]'>{cart.item.price}</div>
                                    </div>
                                </div>
                                <div className="absolute right-[-5px] top-0">
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        size="1x"
                                    />
                                </div>
                            </div>
                        ))}
                        {data === null &&
                            <div className="relative">
                                <Lottie animationData={EmptyCart} loop={true} />
                                <div>
                                    <img className="w-20 absolute bottom-10 left-[65px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697789641/Beana_assets/beanEmpty_o3a7mg.png" />
                                </div>
                                <div>Không có sản phẩm nào trong giỏ hàng</div>
                            </div>
                        }
                        <div className="border-t-[2px] border-black mt-3"></div>
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex flex-row justify-between gap-4">
                                <div className='text-[14px] font-normal text-[#272727]'>
                                    TỔNG TIỀN
                                </div>
                                <div className='text-[14px] font-semibold text-[#272727]'>
                                    {totalPrice.toLocaleString("vi-VN")}đ
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 justify-between w-full">
                                <div
                                    className='text-[14px] font-normal text-white px-6 py-3 bg-secondary border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500 cursor-pointer'
                                    onClick={navigateToCart}
                                >
                                    XEM GIỎ HÀNG
                                </div>
                                <div className='text-[14px] font-normal bg-white border-secondary border-[1px] px-8 py-3 text-secondary hover:bg-secondary hover:text-white duration-500 cursor-pointer'

                                >
                                    THANH TOÁN
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="absolute top-9 right-4 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                        size="2x"
                    />
                </div>
            </div>
            <div className={`duration-500 ${isOpen ? 'w-full h-full fixed backdrop-opacity-10 top-0 left-0 z-[6666] bg-black/80' : ''}`}></div>
        </div>


    )
}
