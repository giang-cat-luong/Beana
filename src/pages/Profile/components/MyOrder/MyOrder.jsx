import { useState } from 'react'

import AllOrder from '../MyOrder/components/AllOrder';
import Cancelled from '../MyOrder/components/Cancelled';
import NewOrder from '../MyOrder/components/NewOrder';
import Pending from '../MyOrder/components/Pending';
import Success from '../MyOrder/components/Success';
import useOrder from './hooks/useOrder';

export default function MyOrder() {

  const { data, isLoading } = useOrder();
  //data NewOrder
  const today = new Date();

  const dataNewOrder = data?.filter(item => {
    const itemDate = new Date(item.orderDate);
    return (
      itemDate.getDate() === today.getDate() &&
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getFullYear() === today.getFullYear()
    );
  });
  //data pending
  const dataPending = data?.filter(item => item.status === 1)

  //data success
  const dataSuccess = data?.filter(item => item.status === 5)

  //data cancel
  const dataCancel = data?.filter(item => item.status === 0)



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

      {status === 1 && <AllOrder data={data} isLoading={isLoading} />}
      {status === 2 && <NewOrder data={dataNewOrder} isLoading={isLoading} />}
      {status === 3 && <Pending data={dataPending} isLoading={isLoading} />}
      {status === 4 && <Success data={dataSuccess} isLoading={isLoading} />}
      {status === 5 && <Cancelled data={dataCancel} isLoading={isLoading} />}

    </div>
  )
}
