import { faXmark, faPlus, faMinus, faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import useCart from "./hooks/useCart";
import { useRemoveCartItem } from "../../services/Cart/services";
import { Link, useNavigate } from "react-router-dom";
import EmptyCart from "../../components/NoData/EmptyCart";
import BeanLoading from '../../components/Loading/BeanLoading'
import ScrollToTop from "../../hooks/useScrollToTop";
export default function Cart() {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCouponLoading, setIsCouponLoading] = useState(false);
    const navigate = useNavigate();
    const { data } = useCart();
    console.log(data);

    const [checkoutQuantity, setCheckoutQuantity] = useState(0);

    const [count, setCount] = useState(0);
    const [originTotalPrice, setOriginTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [saleTotalPrice, setSaleTotalPrice] = useState();
    const [coupon, setCoupon] = useState("");
    const [couponNoti, setCouponNoti] = useState("");

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

    const incrementQuantity = (cart, quantity) => {
        updateQuantity(cart, quantity + 1);
    };


    const decrementQuantity = (cart, quantity) => {
        if (quantity > 1) {
            updateQuantity(cart, quantity - 1);
        }
    };
    const updateQuantity = (item, newQuantity) => {
        if (newQuantity > 0 && newQuantity <= item.item.quantity) {
            item.quantity = newQuantity;
            updateTotalPrice();
        }
    };

    const handleQuantityChange = (event, item) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity)) {
            updateQuantity(item, newQuantity);
            console.log(newQuantity)
        }
    };


    const updateTotalPrice = () => {
        let total = 0;

        data?.forEach((cart) => {
            total += cart.item.price * cart.quantity;
        });
        setSaleTotalPrice(total - total * 0.9)
        setTotalPrice(total);
        setOriginTotalPrice(total)
        setCouponNoti("")
    };

    useEffect(() => {
        updateTotalPrice();
    }, [data]);

    const handleCheckoutNavigate = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/checkout')
        }, 1300)
    }

    const handleUseCoupon = () => {
        setIsCouponLoading(true)
        setTimeout(() => {
            setIsCouponLoading(false)
            if (coupon === "GIANGDEPTRAI") {
                setTotalPrice(totalPrice - totalPrice * 0.9)

                setCouponNoti(true);
                setCount(count + 1)
            } else {
                setCouponNoti(false);
                setTotalPrice(originTotalPrice)

            }
            if (count >= 1 && coupon === "GIANGDEPTRAI") {
                setTotalPrice(saleTotalPrice);
            }
        }, 1300)
    }
    const handleOpenCoupon = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className=''>
            <ScrollToTop />
            {isLoading && <BeanLoading />}
            <div className='flex flex-row'>
                <div className='basis-[54%] px-20 pb-32 border-b-[1px] border-[#c3c2bc]  mt-12'>
                    <div className='text-[30px] font-bold tracking-widest'>GIỎ HÀNG CỦA BẠN</div>
                    <div className='text-[14px] font-medium '>{data?.length} sản phẩm {!data && <div>0 sản phẩm</div>}</div>
                    {data?.length <= 0 &&
                        <div className=" flex flex-col items-center justify-center">
                            <div className="w-2/3 relative">
                                <EmptyCart />
                                <img className="w-20 absolute bottom-10 left-28" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697789641/Beana_assets/beanEmpty_o3a7mg.png"></img>
                            </div>
                            <div>Không có sản phẩm nào trong giỏ hàng</div>
                        </div>
                    }
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
                                            onClick={() => decrementQuantity(cart, cart.quantity)}
                                            className={`text-[12px]  cursor-pointer ${cart.quantity <= 1 ? 'opacity-20' : 'text-[#000]'}`}
                                        />
                                        <input
                                            type="text"
                                            name="quantity"
                                            min="1"
                                            max={cart.item.quantity}
                                            value={cart.quantity}
                                            onChange={(event) => handleQuantityChange(event, cart)}
                                            className="max-w-[40px] h-[30px] text-center font-semibold text-[18px] mx-4"
                                        />
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className={`text-[12px]  cursor-pointer ${cart.quantity === cart.item.quantity ? 'opacity-20' : 'text-[#000]'}`}
                                            onClick={() => incrementQuantity(cart, cart.item.cartQuantity)}
                                        />
                                    </div>
                                    <div className='text-[20px] font-semibold'>{cart.item.price.toLocaleString("vi-VN")}đ</div>
                                </div>
                            </div>
                            <div
                                className="absolute right-0 top-[-20px] cursor-pointer"
                                onClick={() => removeItemById(cart.item.id)}
                            >
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    color="#272727"
                                    className="text-[25px] hover:text-secondary"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='basis-[46%] border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-4 bg-white'>
                    <div className='px-16 mb-20 mt-8 '>
                        <div className="text-[30px] font-bold tracking-widest">
                            CHI TIẾT ĐƠN HÀNG
                        </div>
                        <div className="mt-8 text-sm font-medium flex flex-row justify-between">
                            <div>
                                Tạm tính
                            </div>
                            <div className="tracking-wider">
                                ₫ {totalPrice.toLocaleString("vi-VN")}
                            </div>
                        </div>
                        <div className="mt-3 text-sm font-medium flex flex-row justify-between ">
                            <div>
                                Phí vận chuyển
                            </div>
                            <div className="tracking-wider">
                                ₫ 0
                            </div>
                        </div>
                        <div onClick={handleOpenCoupon} className="mt-3 text-sm font-medium flex flex-row justify-between cursor-pointer underline hover:text-secondary">
                            <div>
                                Sử dụng mã giảm giá
                            </div>
                        </div>

                        <div className={`mt-3 w-full cursor-pointer overflow-hidden h-0 duration-500 ${isOpen ? 'h-[96px]' : ''} `}>
                            <div className={`mt-3 flex flex-row text-sm font-medium gap-2 w-full cursor-pointer  `}>
                                <input
                                    type="text"
                                    className="basis-[65%] outline-none border-[1px] border-black pl-5"
                                    placeholder="Nhập mã giảm giá"
                                    value={coupon}
                                    onChange={(event) => setCoupon(event.target.value)}
                                />
                                <button onClick={handleUseCoupon} className="group basis-[35%] w-full bg-secondary py-3 text-center text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500">
                                    ÁP DỤNG
                                    {isCouponLoading &&
                                        <FontAwesomeIcon
                                            icon={faSpinner}
                                            color="#272727"
                                            className="text-[16px] ml-2 text-white animate-spin  group-hover:text-secondary"
                                        />
                                    }
                                </button>
                            </div>
                            {couponNoti === ""
                                ? (
                                    null
                                ) : data.length <= 0 ? (
                                    <div className="text-orange font-medium text-sm pt-1">
                                        Opps ! Bạn chưa có sản phẩm nào trong cửa hàng
                                    </div>
                                ) : couponNoti ? (
                                    <div className="text-secondary font-medium text-sm pt-1">
                                        Áp dụng mã giảm giá thành công.
                                    </div>
                                ) : (
                                    <div className="text-red font-medium text-sm pt-1">
                                        Mã không hợp lệ. Vui lòng nhập lại!
                                    </div>
                                )
                            }
                        </div>

                        <div className="mt-8  flex flex-row justify-between">
                            <div className="tracking-widest text-base font-bold">
                                Thành tiền
                            </div>
                            <div className="tracking-wider text-base font-bold">
                                ₫ {totalPrice.toLocaleString("vi-VN")}
                            </div>
                        </div>

                        <div className="w-full border-t-[1px] border-[#2f2e2e] my-10">
                        </div>

                        <div className="tracking-widest text-base font-bold">
                            NGÀY DỰ KIẾN GIAO HÀNG CỦA BẠN
                        </div>
                        <div className="mt-4 tracking-wider text-sm font-medium">
                            Đơn hàng của bạn sẽ được Beana đóng gói và mang đi giao trong thời gian sớm nhất ngay khi bạn đặt hàng thành công.
                        </div>
                        <div className="mt-4 tracking-wider text-sm font-medium">
                            Thời gian giao hàng bình thường của chúng tôi là:
                        </div>

                        <div className="mt-4 tracking-wider text-sm font-medium">
                            <div className="tracking-wider text-sm font-medium">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    color="#272727"
                                    className="text-[15px] pr-2"
                                />
                                3 - 4 ngày nếu bạn ở trong nội thành TPHCM.
                            </div>
                            <div className="mt-1 tracking-wider text-sm font-medium">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    color="#272727"
                                    className="text-[15px] pr-2"
                                />
                                6 - 7 ngày nếu bạn ở các tỉnh khác.
                            </div>
                        </div>

                        <div className="w-full border-t-[1px] border-[#2f2e2e] my-10">
                        </div>

                        <div className="flex flex-col gap-5 text-[13px] font-bold">
                            <div onClick={handleCheckoutNavigate} className="bg-secondary py-3 text-center text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500">
                                <button>
                                    THANH TOÁN
                                </button>
                            </div>
                            <Link to="/products" className="text-center bg-white border-secondary border-[1px] py-3 text-secondary hover:bg-secondary hover:text-white duration-500">
                                <button>
                                    TIẾP TỤC MUA SẮM
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
