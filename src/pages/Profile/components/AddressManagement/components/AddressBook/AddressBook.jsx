import useAddress from "../../../../../Checkout/hooks/useAddress";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { faCircleCheck, faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSetDefaultAddress } from "../../../../../../services/Address/services";
import Success from "../../../../../../components/Notification/Success/Success";

export default function AddressBook() {

  const addressRef = useRef(null);

  const { data: addressList } = useAddress();

  const { mutate, isSuccess } = useSetDefaultAddress();

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [visibleAddress, setVisibleAddress] = useState(4);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleAddress(prevCount => prevCount + addressList.length);
  };

  const handleScrollAddress = () => {
    setShowMore(!showMore);
    setVisibleAddress(4);
    addressRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSetDefaultAddress = async (addressId) => {
    try {
      mutate(
        addressId
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='pt-[10px] pb-20 px-5'>
      {isSuccess &&
        <Success
          title="Thành công"
          description="Bạn đã đặt địa chỉ mặc định thành công"
          isSuccess={isSuccess}
          setIsSuccess={() => setIsSuccessOpen(false)}
        />}
      <div ref={addressRef} className='mt-2 text-[18px] font-semibold '>Sổ địa chỉ</div>
      <div className="flex flex-row justify-between flex-wrap">
        {addressList
          ?.sort((a, b) => (a.status === 1 ? -1 : b.status === 1 ? 1 : 0))
          ?.slice(0, visibleAddress)
          ?.map((address) => (
            <div
              key={address.id}
              className={`w-[48%] cursor-pointer h-[130px] border-[2px] shadow-lg mt-6 tracking-wider text-[13px] font-medium relative ${address.status === true ? "border-dashed border-secondary  " : "border-dashed border-[#faf9f5]"
                }`}
              onClick={() => handleSetDefaultAddress(address.id)}
            >
              <div className=" px-14 pt-6 pb-12">
                <div className="flex flex-col">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={`text-[25px] absolute top-7 left-4 ${address.status === 1 ? 'text-secondary ' : 'text-grey '}`}
                  />
                  <div className={`${address.status === 1 ? 'text-black ' : 'text-[#71716e] '}`}>
                    <div className="flex flex-row gap-2">
                      <p className="font-semibold">{address?.fullName} -</p>
                      <p>{address.phone}</p>
                    </div>
                    <p className="mt-2">{address.address}, {address.ward}, {address.district}, {address.province}</p>
                  </div>
                </div>
                {address.status === 1 &&
                  <div className="absolute right-0 top-0">
                    <img className="w-8" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699474594/Beana_assets/default_w3ztfr.png" />
                  </div>
                }
              </div>
            </div>
          ))}
      </div>
      {addressList?.length >= 4 &&
        <div>
          {!showMore ? (
            <div onClick={handleShowMore} className={`text-center cursor-pointer block mt-4  ${showMore ? 'text-secondary' : ''}`}>
              Xem thêm
              <FontAwesomeIcon
                icon={faCaretDown}
                className='text-[15px] ml-2'
              />
            </div>
          ) : (
            <div onClick={handleScrollAddress} className={`text-center cursor-pointer block mt-4 ${showMore ? 'text-secondary' : ''}`}>
              Thu gọn
              <FontAwesomeIcon
                icon={faCaretUp}
                className='text-[15px] ml-2'
              />
            </div>)
          }
        </div>
      }
      <div className="mt-10 flex flex-row items-center gap-3">
        <div className="text-[14px]">
          Bạn muốn giao hàng đến địa chỉ khác?
        </div>
        <Link to="/profile/address-management/new-address">
          <div className="beana-button-green-hover rounded px-4 py-1">
            Thêm địa chỉ mới
          </div>
        </Link>
      </div>

    </div>
  )
}
