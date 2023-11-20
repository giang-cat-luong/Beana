import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CircleLoading from '../../../../../../components/Loading/CircleLoading'

export default function Pending({ data, isLoading }) {
  return (
    <div className=''>
      {isLoading && <div className='flex justify-center items-center mt-16'><CircleLoading /></div>}
      <div>
        {data?.map((order) => (
          <div key={order.id} className='mt-5 border-[1px] border-[#f2f1f6]'>
            <div className='bg-[#f7f7f7] py-[5px] px-3 text-[13px] text-[#333333] font-medium'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='flex flex-row items-center '>
                    <div>Mã đơn hàng: {order.id}</div>
                    <div className='border-l-[1px] border-lightBlack h-4 ml-[5px] pr-[5px]' ></div>
                    <div>Đặt ngày: {order.orderDate}</div>
                    <div className='bg-[#aeaeae] py-[3px] px-6 text-white font-medium text-[12px] rounded mx-3'>Đang giao</div>
                    <div>Thanh toán: {order.payment.id === 1 ? 'Thanh toán qua Momo' : order.payment.id === 2 ? 'Thanh toán khi nhận hàng' : 'Thanh toán ATM/Banking'}</div>
                  </div>
                  <p >
                    Tổng tiền: <strong className='text-secondary'>{order.amount.toLocaleString("vi-VN")} đ</strong>
                  </p>
                </div>
                <div className='text-secondary'>
                  Xem chi tiết
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='pl-1'
                  />
                </div>
              </div>
            </div>
            <div className='py-[5px] px-3 pb-8 flex flex-row flex-wrap'>
              {order?.orderDetailsList?.map((product) => (
                <div key={product.id} className='basis-1/2 flex flex-row mt-2 text-[13px] font-medium'>
                  <img className='w-16 h-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708908/Beana_assets/test1_wsijbu.png' />
                  <div className='flex flex-col px-3 '>
                    <div className='font-bold'>
                      {product?.reputation?.name}
                    </div>
                    <div className='line-clamp-2'>
                      {product.product.name}
                    </div>
                    <div className='font-normal'>
                      {product.quantity} x <strong className='text-secondary'>{product.product.price.toLocaleString("vi-VN")}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {data?.length <= 0 &&
        <div className='flex flex-col justify-center items-center mt-14'>
          <img className='w-40' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699471292/Beana_assets/empty_order_sahbpt.png' />
          <div className='font-semibold text-[20px] mt-2'>Bạn chưa có đơn đặt hàng nào</div>
          <Link to="/products">
            <div className='beana-button-green-shadow px-4 py-2 mt-2  text-[14px]'> Tiếp tục mua hàng</div>
          </Link>
        </div>
      }
    </div>
  )
}
