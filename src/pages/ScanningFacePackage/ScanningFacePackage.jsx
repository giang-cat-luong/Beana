import { useState, useRef } from "react"
import OneTime from "./components/OneTime";
import ThreeTimes from "./components/ThreeTimes";
import OneMonth from "./components/OneMonth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAddress from "../Checkout/hooks/useAddress";
import { useCheckout } from "../../services/Checkout/services";

export default function ScanningFacePackage() {

  const packageRef = useRef(null);
  const navigate = useNavigate();

  const [packages, setPackages] = useState(1)
  const { mutate, isFailed, isLoading, isSuccess, data: checkoutData } = useCheckout();
  const { data: addressList } = useAddress();

  const defaultAddress = addressList?.find((address) => address.status === 1)
  
  const setToggle = (index) => {
    setPackages(index);
  }

  const handlePackageRef = () => {
    packageRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePayment = (price) => {
    try {
      mutate({
        amount: price,
        addressId: defaultAddress?.id,
        paymentId: 1,
      });
    } catch (error) {
      console.error(error);
    }
  }
  if (isSuccess) {
    return navigate("/payment-momo", { state: { dataCheckout: checkoutData } });
  }
  return (
    <div className='min-h-screen'>
      <div className='flex flex-row pb-28 bg-white px-4'>
        <div className='basis-1/2 flex flex-col justify-center pl-[100px] pr-24'>
          <p className='text-[45px] font-bold'>Gói Face Scanning</p>
          <p className='text-[20px] font-normal pt-4'>Quét da mặt trong nháy mắt với kết quả cá nhân hóa một cách chi tiết, đưa ra liệu trình phù hợp với từng loại da mặt.
            Tất cả được tính toán và sử dụng dựa trên sức mạnh AI.</p>
          <div className="flex flex-row gap-4 pt-8">
            <p onClick={handlePackageRef} className="beana-button-green-hover py-2 px-5 rounded-md text-sm font-semibold">Xem mức giá các gói cao cấp</p>
            <Link to="/scanning-face">
              <p className="beana-button-white-hover py-2 px-5 rounded-md text-sm font-medium">Dùng thử miễn phí</p>
            </Link>
          </div>
        </div>

        <div className='basis-1/2'>
          <video muted loop autoPlay className='w-[746px] h-[482px]' src='https://res.cloudinary.com/dc4hafqoa/video/upload/v1700499254/Beana_assets/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_2_jz7zlj.mp4'>
          </video>
        </div>
      </div>
      <div ref={packageRef} className='pt-20 bg-[#f8f8f9] pb-40'>
        <p className='text-center text-[32px] font-bold'>Gói Face Scanning gồm những gì?</p>
        <p className='text-center text-base text-[#0d1216db] font-normal pt-3'>Bạn muốn biết tình trạng da mặt của bạn? Quét da mặt, nhận kết quả và liệu trình từ Beana. Đăng kí gói Face scanning ngay.</p>
        <p className='text-center pt-16 font-semibold'>Thanh toán: <span className='text-secondary'>Tiết kiệm từ 73%</span> khi đăng ký theo tháng</p>

        <div className="flex justify-center items-center pt-2 ">
          <div className="relative ">
            <div className="flex flex-row justify-center gap-6 bg-white border py-2 rounded-md px-6">
              <div onClick={() => setToggle(1)} className={`z-10 py-2 px-10 rounded-md duration-500 select-none ${packages === 1 && 'text-white'}`}>
                1 lượt
              </div>
              <div onClick={() => setToggle(2)} className={`z-10 py-2 px-10 rounded-md duration-500 select-none ${packages === 2 && 'text-white'}`}>
                5 lượt
              </div>
              <div onClick={() => setToggle(3)} className={`z-10 py-2 px-10 rounded-md duration-500 select-none ${packages === 3 && 'text-white'}`}>
                1 tháng
              </div>
            </div>
            <div
              className={`duration-300 w-36 z-[9] h-10 bg-secondary rounded-md absolute top-1/2 -translate-y-1/2 ${packages === 1 ? 'left-[14px]' : packages === 2 ? 'left-[33.5%]' : 'left-[65.8%]'}`}
            />
          </div>
        </div>

        <div className="flex flex-row justify-center gap-6 pt-10 ">
          <OneTime
            packages={packages}
            setPackages={setPackages}
            handlePayment={handlePayment}
          />
          <ThreeTimes
            packages={packages}
            setPackages={setPackages}
            handlePayment={handlePayment}
          />
          <OneMonth
            packages={packages}
            setPackages={setPackages}
            handlePayment={handlePayment}
          />
        </div>
      </div>
    </div>
  )
}
