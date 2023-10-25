import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom";
import BreadCrumb from '../../components/BreadCrumb';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  // Hàm này sẽ xác định trạng thái ban đầu dựa trên URL hiện tại.
  const determineInitialPage = () => {
    const path = location.pathname;
    if (path.includes("account-management")) return 1;
    if (path.includes("account-info")) return 2;
    if (path.includes("my-order")) return 3;
    if (path.includes("address-management")) return 4;
    if (path.includes("wishlist")) return 5;
    if (path.includes("repurchase")) return 6;
    return 1; // Trạng thái mặc định nếu không khớp URL nào.
  };

  useEffect(() => {
    setPage(determineInitialPage());
  }, [location]);

  const handleNextPage = (page) => {
    if (page === 1) {
      navigate("account-management")
    }
    if (page === 2) {
      navigate("account-info")
    }
    if (page === 3) {
      navigate("my-order")
    }
    if (page === 4) {
      navigate("address-management")
    }
    if (page === 5) {
      navigate("wishlist")
    }
    if (page === 6) {
      navigate("repurchase")
    }
  }

  return (
    <div className="px-36 md:pt-[35px] font-Montserrat">
      <BreadCrumb breadCrumbName="Thông tin tài khoản" />
      <div className='flex flex-row gap-5 justify-between'>
        <div className='basis-[27%] bg-white'>
          <div className='px-5 pt-3 pb-1 rounded-sm shadow-sm'>
            <div className='flex flex-row gap-3 pb-3 w-full'>
              <img className='w-16' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png' />
              <div>
                <p className='text-[13px] font-medium text-secondary'>Xin chào,</p>
                <p className='text-[13px] font-medium '>Trường Giang</p>
              </div>
            </div>
          </div>
          <div className='rounded-sm shadow-md'>
            <p onClick={() => handleNextPage(1)} className={`text-[13px]  py-[12px] px-5 cursor-pointer ${page === 1 ? 'font-bold text-secondary' : 'font-medium'} `}>Quản lý tài khoản</p>
            <p onClick={() => handleNextPage(2)} className={`text-[13px]  py-[12px] px-5 cursor-pointer ${page === 2 ? 'font-bold text-secondary' : 'font-medium'} `}> Thông tin tài khoản</p>
            <p onClick={() => handleNextPage(3)} className={`text-[13px]  py-[12px] px-5 cursor-pointer ${page === 3 ? 'font-bold text-secondary' : 'font-medium'} `}> Đơn hàng của tôi</p>
            <p onClick={() => handleNextPage(4)} className={`text-[13px]  py-[12px] px-5 cursor-pointer ${page === 4 ? 'font-bold text-secondary' : 'font-medium'} `}> Sổ địa chỉ nhận hàng</p>
            <p onClick={() => handleNextPage(5)} className={`text-[13px]  py-[12px] px-5 cursor-pointer ${page === 5 ? 'font-bold text-secondary' : 'font-medium'} `}> Danh sách yêu thích</p>
            <p onClick={() => handleNextPage(6)} className={`text-[13px]  py-[12px] px-5 cursor-pointer ${page === 6 ? 'font-bold text-secondary' : 'font-medium'} `}> Mua lại</p>
          </div>
        </div>
        <div className='basis-[73%] bg-white rounded-sm shadow-md'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}
