import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useAddress from "../../../../../Checkout/hooks/useAddress";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from '../../../../../../hooks/useScrollToTop'

export default function AddressBook() {

  const { data: addressList } = useAddress();

  const [defaultAddress, setDefaultAddress] = useState(null);

  const handleSetDefaultAddress = (addressId) => {
    setDefaultAddress(addressId);
  };

  return (
    <div className='pt-[10px] pb-20 px-5'>
      <div className='mt-2 text-[18px] font-semibold '>Sổ địa chỉ</div>
      <div className="flex flex-row justify-between flex-wrap">
        {addressList?.map((address) => (
          <div
            key={address.id}
            className={`w-[48%] cursor-pointer h-[130px] border-[2px] shadow-lg mt-6 tracking-wider text-[13px] font-medium relative ${defaultAddress === address.id ? "border-dashed border-secondary  " : "border-dashed border-[#faf9f5]"
              }`}
            onClick={() => handleSetDefaultAddress(address.id)}
          >
            <div className=" px-14 pt-6 pb-12">
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className={`text-[25px] absolute top-7 left-4 ${defaultAddress === address.id ? 'text-secondary ' : 'text-grey '}`}
                />
                <div className={`${defaultAddress === address.id ? 'text-black ' : 'text-[#71716e] '}`}>
                  <div className="flex flex-row gap-2">
                    <p className="font-semibold">{address?.fullName} -</p>
                    <p>{address.phone}</p>
                  </div>
                  <p className="mt-2">{address.address}</p>
                </div>
              </div>
              {defaultAddress === address.id &&
                <div className="absolute right-0 top-0">
                  <img className="w-8" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699474594/Beana_assets/default_w3ztfr.png" />
                </div>
              }
            </div>
          </div>
        ))}
      </div>
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
