import { useCheckout } from "../../../../services/Checkout/services";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import Failed from "../../../../components/Notification/Failed";
import BeanLoading from "../../../../components/Loading/BeanLoading";
import { useNavigate } from "react-router-dom";

export default function Summary({ data, totalPrice, addressList, defaultAddress, selectedPayment, selectedDelivery, setPage }) {

  const navigate = useNavigate();
  //checkout
  const { mutate, isFailed, isLoading, isSuccess, data: checkoutData } = useCheckout();
  const [isFailedOpen, setIsFailedOpen] = useState(false);

  const orderDetailsList = data?.map((item) => ({
    productId: item.item.id,
    quantity: item.quantity,
  }));
  const handleCheckout = () => {
    try {
      mutate({
        amount: totalPrice,
        addressId: defaultAddress,
        paymentId: selectedPayment,
        orderDetailsList,
      });
    } catch (error) {
      console.error(error);
    }
  }
  //address default
  const [defaultAddressSelected, setDefaultAddressSelected] = useState();

  useEffect(() => {
    const findDefaultAddress = addressList?.find((address) => address.id === defaultAddress)
    setDefaultAddressSelected(findDefaultAddress);
  }, [addressList]);

  if (isLoading) {
    return <BeanLoading />;
  }
  if (isSuccess) {
    return navigate("/payment-momo", { state: { dataCheckout: checkoutData } });
  }


  return (
    <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
      {isFailed && (
        <Failed
          isFailed={isFailed}
          setIsFailed={() => setIsFailedOpen(false)}
          title="Đặt hàng thất bại"
          description="Có vấn đề xảy ra khi đặt hàng!"
        />
      )}
      <div>
        <div className='px-16 mb-20 mt-8 '>
          <div className="text-overLg font-bold tracking-widest">
            THÔNG TIN TÓM TẮT
          </div>
          <div className="mt-10 flex flex-row justify-between ">
            <div className="tracking-widest text-base font-bold">
              THÔNG TIN KHÁCH HÀNG
            </div>
            <div onClick={() => setPage(0)} className="text-sm font-medium hover:underline text-secondary cursor-pointer">Sửa</div>
          </div>
          <div
            className={`cursor-pointer h-[130px] border-[2px] shadow-lg mt-6 tracking-wider text-sm font-medium relative border-dashed border-secondary
                                            `}
          >
            <div className=" px-14 pt-6 pb-12">
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className={`text-[25px] absolute top-7 left-4 text-secondary`}
                />
                <div className={`text-black`}>
                  <div className="flex flex-row gap-2">
                    <p className="font-semibold">{defaultAddressSelected?.fullName} -</p>
                    <p>{defaultAddressSelected?.phone}</p>
                  </div>
                  <p className="mt-2">{defaultAddressSelected?.address}</p>
                </div>
              </div>

            </div>
          </div>
          <div className="mt-12  flex flex-row justify-between">
            <div className="tracking-widest text-base font-bold">
              HÌNH THỨC VẬN CHUYỂN
            </div>
            <div onClick={() => setPage(1)} className="text-sm font-medium hover:underline text-secondary cursor-pointer">Sửa</div>
          </div>
          {selectedDelivery === "0" &&
            <div class="flex items-center mb-4 mt-6">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="0"
                name="delivery-method"
                class="w-8 h-8"
              />
              <label class="ml-2 text-md font-medium text-black">
                <span className="text-secondary">[NowFree]</span>  Giao hàng nhanh trong  <span className="text-secondary">2 giờ (Trễ tặng 100k)</span> <strong>: 0 đ</strong> (Nhận hàng trước <span className="text-secondary">10h</span> ngày mai)
              </label>
            </div>
          }
          {selectedDelivery === "1" &&
            <div class="flex items-center  mb-4 mt-6">
              <input
                id="default-radio-3"
                type="radio"
                value="1"
                name="delivery-method"
                class="w-6 h-6"
                checked
              />
              <label class="ml-2 text-md font-medium text-black">
                Giao hàng trong 48 giờ<strong> : 0 đ</strong>
              </label>
            </div>
          }

          <div className="mt-10  flex flex-row justify-between">
            <div className="tracking-widest text-base font-bold">
              PHƯƠNG THỨC THANH TOÁN
            </div>
            <div onClick={() => setPage(2)} className="text-sm font-medium hover:underline text-secondary cursor-pointer">Sửa</div>
          </div>
          {selectedPayment === "1" &&
            <div class="mt-6 flex items-center">
              <input
                checked
                id="default-radio-3"
                type="radio"
                value="1"
                class="w-6 h-6"
              />
              <label class="ml-2 text-md font-medium text-black">Thanh toán trực tuyến MOMO</label>
            </div>
          }
          {selectedPayment === "2" &&
            <div class="flex items-center mt-6">
              <input
                id="default-radio-1"
                type="radio"
                value="2"
                name="payment-method"
                checked
                class="w-6 h-6"
              />
              <label class="ml-2 text-md font-medium text-black">Thanh toán tiền khi nhận hàng (COD)</label>
            </div>
          }
          {selectedPayment === "3" &&
            <div class="flex items-center mt-6">
              <input
                id="default-radio-2"
                type="radio"
                value="0"
                name="payment-method"
                checked
                class="w-6 h-6"
              />
              <label class="ml-2 text-md font-medium text-black">Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)</label>
            </div>
          }

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

          <div className="w-full border-t-[1px] border-[#2f2e2e] my-10">
          </div>

          <div className="flex flex-col gap-5 text-[13px] font-bold">
            <button
              onClick={handleCheckout}
              className="bg-secondary py-3 text-white border-[1px] border-secondary hover:bg-white hover:text-secondary hover:border-[1px] hover:border-primary duration-500"
            >
              ĐẶT HÀNG

            </button>
            <button className="bg-white border-secondary border-[1px] py-3 text-secondary hover:bg-secondary hover:text-white duration-500">CONTINUE SHOPPING</button>
          </div>


        </div>
      </div>
    </div>
  )
}
