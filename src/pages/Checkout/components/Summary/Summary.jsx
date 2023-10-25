import { useCheckout } from "../../../../services/Checkout/services";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Summary({ data, totalPrice, defaultAddress, selectedPayment }) {
  console.log(data);
  console.log(selectedPayment)
  //checkout
  const { mutate } = useCheckout();

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

  return (
    <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#c3c2bc] mt-8 bg-white'>
      <div>
        <div className='px-16 mb-20 mt-8 '>
          <div className="text-[24px] font-bold tracking-widest">
            THÔNG TIN TÓM TẮT
          </div>
          <div className="mt-10  ">
            <div className="tracking-widest text-base font-bold">
              THÔNG TIN KHÁCH HÀNG
            </div>
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
                    <p className="font-semibold">Vũ Trường Giang -</p>
                    <p>0981890260</p>
                  </div>
                  <p className="mt-2">Phường Hiệp Phú Quận 9 TPHCM</p>
                </div>
              </div>

            </div>
          </div>
          <div className="mt-12  flex flex-row justify-between">
            <div className="tracking-widest text-base font-bold">
              HÌNH THỨC VẬN CHUYỂN
            </div>
          </div>
          <div class="flex items-center mb-4 mt-6">
            <input
              checked
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

          <div className="mt-10 tracking-widest text-base font-bold">
            PHƯƠNG THỨC THANH TOÁN
          </div>
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
