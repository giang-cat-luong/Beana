import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import useCart from "../Cart/hooks/useCart";
import useAddress from "./hooks/useAddress";
import { Link } from "react-router-dom";
import ScrollToTop from "../../hooks/useScrollToTop";
import CustomerInformation from "./components/CustomerInformation";
import Delivery from "./components/Delivery";
import Payment from "./components/Payment/Payment";
import Summary from "./components/Summary/Summary";

export default function Checkout() {

    //data
    const { data } = useCart();

    const { data: addressList } = useAddress();

    //address
    const [defaultAddress, setDefaultAddress] = useState(null);

    const handleSetDefaultAddress = (addressId) => {
        setDefaultAddress(addressId);
    };

    //price
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = () => {
        let total = 0;

        data?.forEach((cart) => {
            total += cart.item.price * cart.quantity;
        });

        setTotalPrice(total);
    };
    useEffect(() => {
        updateTotalPrice();
    }, [data]);

    //payment
    const [selectedPayment, setSelectedPayment] = useState("2"); // Đặt giá trị mặc định

    const handlePayment = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    //page
    const [page, setPage] = useState(0);

    const handleNextPage = (currentPage) => {
        setPage(currentPage)
    }

    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div className='mt-10'>
            <ScrollToTop />
            <div className='flex flex-row'>
                <div className='basis-[54%] px-20 pb-32 border-b-[1px] border-[#c3c2bc]  mt-[89px]'>
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <div className='text-[30px] font-bold tracking-widest'>GIỎ HÀNG CỦA BẠN</div>
                            <div className='text-[14px] font-medium '>{data?.length} sản phẩm {!data && <div>0 sản phẩm</div>}</div>
                        </div>
                        <Link to="/cart">
                            <div className='flex flex-row gap-1 pt-6 group cursor-pointer'>
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    color="#272727"
                                    className="text-[20px] group-hover:text-secondary"
                                />
                                <div className=" text-[14px] font-bold tracking-widest group-hover:text-secondary">Sửa</div>
                            </div>
                        </Link>
                    </div>


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
                                        <div className='text-[16px] text-black font-semibold'>Số lượng:</div>
                                        <input
                                            type="text"
                                            name="quantity"
                                            min="1"
                                            max="100"
                                            value={cart.quantity}
                                            className="max-w-[40px] h-[30px] text-center font-semibold text-[18px] mx-4"
                                        />
                                    </div>
                                    <div className='text-[20px] font-semibold'>{cart.item.price.toLocaleString("vi-VN")}đ</div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                    <div className="mt-3 text-sm font-medium flex flex-row justify-between cursor-pointer underline">
                        <div>
                            Sử dụng mã giảm giá
                        </div>
                    </div>

                    <div className="mt-8  flex flex-row justify-between">
                        <div className="tracking-widest text-base font-bold">
                            Thành tiền
                        </div>
                        <div className="tracking-wider text-base font-bold">
                            ₫ {totalPrice.toLocaleString("vi-VN")}
                        </div>
                    </div>
                </div>

                <div className='basis-[46%] '>
                    <div className="flex flex-row justify-between px-6 font-semibold">
                        <div onClick={() => setPage(0)} className={`cursor-pointer ${page === 0 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Customer information</div>
                        <div onClick={() => setPage(1)} className={`cursor-pointer ${page === 1 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Delivery</div>
                        <div onClick={() => setPage(2)} className={`cursor-pointer ${page === 2 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Payment</div>
                        <div onClick={() => setPage(3)} className={`cursor-pointer ${page === 3 && 'text-secondary border-b-[2px] border-secondary pb-2'}`}>Summary</div>
                    </div>
                    {page === 0 &&
                        <CustomerInformation setPage={setPage} />
                    }
                    {page === 1 &&
                        <Delivery addressList={addressList} defaultAddress={defaultAddress} handleNextPage={handleNextPage} handleSetDefaultAddress={handleSetDefaultAddress} />
                    }
                    {page === 2 &&
                        <Payment handlePayment={handlePayment} handleNextPage={handleNextPage} selectedPayment={selectedPayment} />
                    }
                    {page === 3 &&
                        <Summary data={data} totalPrice={totalPrice} defaultAddress={defaultAddress} selectedPayment={selectedPayment}/>
                    }
                </div>
            </div>
        </div>
    )
}
