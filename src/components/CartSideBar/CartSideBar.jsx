import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import useCart from "../../pages/Cart/hooks/useCart";
import { useState, useEffect, useRef } from "react";
import { useRemoveCartItem } from "../../services/Cart/services";
import EmptyCart from "../NoData/EmptyCart";
import BeanLoading from "../Loading/BeanLoading";
import { useToken } from "../../services/Auth/services";

export default function CartSideBar({ isOpen, setIsOpen }) {

    const sidebarRef = useRef(null);
    const decodedToken = useToken();
    const handleOutsideClick = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { data } = useCart();

    const { mutate } = useRemoveCartItem();


    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = () => {
        let total = 0;

        data?.forEach((cart) => {
            total += cart.item.price * cart.quantity;
        });

        setTotalPrice(total);
    };

    const removeItemById = (id) => {
        try {
            mutate({
                id: id,
            });
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        updateTotalPrice(); // Gọi hàm khi data thay đổi
    }, [data]);

    const navigateToCart = () => {
        setIsOpen(false);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            navigate("/cart")
        }, 1300)
    }


    return (
        <div className="relative">
            {isLoading && <BeanLoading />}
            <div ref={sidebarRef} className={`h-full fixed top-0  bg-white w-[480px] duration-500 overflow-hidden z-[7777] ${isOpen ? 'right-0' : 'right-[-480px]'}`}>
                <div className='pt-[60px]  h-full overflow-y-scroll px-[70px] pb-[100px]'>
                    <div >
                        <div className='text-md font-medium mb-14'>
                            GIỎ HÀNG
                        </div>

                        {data?.map((cart) => (
                            <div key={cart.item.id} className='mt-3 flex flex-row gap-4 relative items-center pb-3 border-b-2 border-dashed'>
                                <img className='max-w-[85px] max-h-[85px]' src={cart?.item?.productImageList[0]?.url} />
                                <div className='flex flex-col gap-1'>
                                    <div className='text-[11px] font-semibold'>{cart.item.name}</div>
                                    <div className='text-[11px] font-normal text-[#272727]'>Còn {cart.item.quantity} sản phẩm có sẵn</div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#ededed] px-3 py-1 text-[12px] font-normal]'>{cart.quantity}</div>
                                        <div className='text-[14px] font-normal text-[#272727]'>{cart.item.price.toLocaleString("vi-VN")}đ</div>
                                    </div>
                                </div>
                                <div
                                    className="absolute right-[-5px] top-0"
                                    onClick={() => removeItemById(cart.item.id)}
                                >
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        size="1x"
                                    />
                                </div>
                            </div>
                        ))}
                        {data?.length <= 0 &&
                            <div className="relative">
                                <EmptyCart />
                                <img className="w-20 absolute bottom-10 left-16" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697789641/Beana_assets/beanEmpty_o3a7mg.png"></img>
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
                            <div className="flex flex-row gap-3 justify-between w-full">
                                {data?.length <= 0 ? (
                                    <div
                                        className='text-[13px] font-normal px-6 py-3 beana-button-green-hover cursor-pointer'
                                    >
                                        XEM GIỎ HÀNG
                                    </div>) : (
                                    <div
                                        className='text-[13px] font-normal px-6 py-3 beana-button-green-hover cursor-pointer'
                                        onClick={navigateToCart}
                                    >
                                        XEM GIỎ HÀNG
                                    </div>
                                )
                                }
                                {decodedToken ? (
                                    <Link to="/checkout">
                                        <div className='beana-button-white-hover px-8 py-3 text-[13px] font-normal'
                                        >
                                            THANH TOÁN
                                        </div>
                                    </Link>
                                ) : (
                                    <Link to="/login">
                                        <div className='beana-button-white-hover px-8 py-3 text-[13px] font-normal'
                                        >
                                            THANH TOÁN
                                        </div>
                                    </Link>
                                )}
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
