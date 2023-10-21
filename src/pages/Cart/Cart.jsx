import { faXmark, faPlus, faMinus, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import useCart from "./hooks/useCart";
import { useRemoveCartItem } from "../../services/Cart/services";
import { Link } from "react-router-dom";

export default function Cart() {

    const [quantity, setQuantity] = useState(1);

    const { data } = useCart();


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
                <div className='basis-[54%] px-20 pb-32 border-b-[1px] border-[#c3c2bc]  mt-12'>
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
                <div className='basis-[46%] border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-4 bg-white'>
                    <div className='px-16 mb-20 mt-8 '>
                        <div className="text-[30px] font-bold tracking-widest">
                            YOUR SUMMARY
                        </div>
                        <div className="mt-8 text-sm font-medium flex flex-row justify-between">
                            <div>
                                Subtotal
                            </div>
                            <div className="tracking-wider">
                                ₫ 206.870.000,00
                            </div>
                        </div>
                        <div className="mt-3 text-sm font-medium flex flex-row justify-between ">
                            <div>
                                Subtotal
                            </div>
                            <div className="tracking-wider">
                                ₫ 20.000
                            </div>
                        </div>
                        <div className="mt-3 text-sm font-medium flex flex-row justify-between cursor-pointer underline">
                            <div>
                                Apply coupon code
                            </div>
                        </div>

                        <div className="mt-8  flex flex-row justify-between">
                            <div className="tracking-widest text-base font-bold">
                                QUOTATION TOTAL
                            </div>
                            <div className="tracking-wider text-base font-bold">
                                ₫ 206.870.000,00
                            </div>
                        </div>

                        <div className="w-full border-t-[1px] border-[#2f2e2e] my-10">
                        </div>

                        <div className="tracking-widest text-base font-bold">
                            YOUR EXPECTED DELIVERY DATE
                        </div>
                        <div className="mt-4 tracking-wider text-sm font-medium">
                            At BoConcept we do not have all our products in stock, as most of our furniture is made just for you and your home.
                        </div>
                        <div className="mt-4 tracking-wider text-sm font-medium">
                            Our normal delivery time is
                        </div>

                        <div className="mt-4 tracking-wider text-sm font-medium">
                            <div className="tracking-wider text-sm font-medium">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    color="#272727"
                                    className="text-[15px] pr-2"
                                />
                                3 - 4 ngày nếu mày ở trong nội thành TPHCM
                            </div>
                            <div className="mt-1 tracking-wider text-sm font-medium">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    color="#272727"
                                    className="text-[15px] pr-2"
                                />
                                6 - 7 nếu mày ở các tỉnh khác
                            </div>
                        </div>

                        <div className="w-full border-t-[1px] border-[#2f2e2e] my-10">
                        </div>

                        <div className="flex flex-col gap-5 text-[13px] font-bold">
                            <button
                                className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
                            >
                                <Link to="/checkout">
                                    CHECKOUT
                                </Link>
                            </button>
                            <button className="bg-white border-secondary border-[1px] py-3 text-secondary hover:bg-secondary hover:text-white duration-500">CONTINUE SHOPPING</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
