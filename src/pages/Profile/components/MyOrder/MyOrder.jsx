import { useState } from 'react'

import AllOrder from './AllOrder';
import Cancelled from './Cancelled';
import NewOrder from './NewOrder';
import Pending from './Pending';
import Success from './Success';

export default function MyOrder() {
  const [status, setStatus] = useState(1);

  const handleClickStatus = (index) => {
    setStatus(index);
  }
  return (
    <div className='pt-[10px] pb-20 px-5'>
      <div className='mt-2 text-[18px] font-semibold '>Đơn hàng của tôi</div>
      <div className='border-b-2 mt-2 mb-4 '></div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <div onClick={() => handleClickStatus(1)} className={`py-[3px] px-4 font-medium text-[15px] rounded ${status === 1 ? 'beana-button-green' : 'beana-button-white-hover'}`}>Tất cả</div>
          <div onClick={() => handleClickStatus(2)} className={`py-[3px] px-4 font-medium text-[15px] rounded ${status === 2 ? 'beana-button-green' : 'beana-button-white-hover'}`}>Mới đặt</div>
          <div onClick={() => handleClickStatus(3)} className={`py-[3px] px-4 font-medium text-[15px] rounded ${status === 3 ? 'beana-button-green' : 'beana-button-white-hover'}`}>Đang xử lý</div>
          <div onClick={() => handleClickStatus(4)} className={`py-[3px] px-4 font-medium text-[15px] rounded ${status === 4 ? 'beana-button-green' : 'beana-button-white-hover'}`}>Thành công</div>
          <div onClick={() => handleClickStatus(5)} className={`py-[3px] px-4 font-medium text-[15px] rounded ${status === 5 ? 'beana-button-green' : 'beana-button-white-hover'}`}>Đã hủy</div>
        </div>
        <div>
          <div className="custom-select shadow-lg shadow-[#DFDFDF]">
            <select className="w-[130px] px-2 py-2  outline-2 font-semibold text-xs text-[#49b949] outline-[#49b949] border-[2px] border-[#DFDFDF]">
              <option className="text-[#0C0C0C]" value="0">Trong 1 ngày</option>
              <option className="text-[#0C0C0C]" value="1">Trong 1 tuần</option>
              <option className="text-[#0C0C0C]" value="2">Trong 1 tháng</option>
              <option className="text-[#0C0C0C]" value="3">Trong 3 tháng</option>
              <option className="text-[#0C0C0C]" value="3">Trong 6 tháng</option>
              <option className="text-[#0C0C0C]" value="3">Trong 1 năm</option>
            </select>
          </div>
        </div>
      </div>

      {status === 1 && <AllOrder />}
      {status === 2 && <NewOrder />}
      {status === 3 && <Pending />}
      {status === 4 && <Success />}
      {status === 5 && <Cancelled />}

    </div>
  )
}
