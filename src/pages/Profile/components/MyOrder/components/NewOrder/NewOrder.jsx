import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function NewOrder() {
  return (
    <div className='flex flex-col justify-center items-center mt-14'>
      <img className='w-40' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699471292/Beana_assets/empty_order_sahbpt.png' />
      <div className='font-semibold text-[20px] mt-2'>Bạn chưa có đơn đặt hàng nào</div>
      <Link to="/products">
        <div className='beana-button-green-shadow px-4 py-2 mt-2  text-[14px]'> Tiếp tục mua hàng</div>
      </Link>
    </div>
  )
}
