import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  return (
    <div className='pt-[10px] pb-20 px-5'>
      <div className='mt-2 text-[18px] font-semibold '>Danh sách yêu thích</div>
      <div className='flex flex-col justify-center items-center mt-14'>
        <img className='w-32' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699472922/Beana_assets/empty_wishlist_nzzurj.png' />
        <div className='font-semibold text-[14px] mt-2'>Hãy <FontAwesomeIcon icon={faHeart} color='red'></FontAwesomeIcon>  sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện nhất</div>
        <Link to="/products">
          <div className='beana-button-green-shadow px-4 py-2 mt-2  text-[14px]'> Tiếp tục mua hàng</div>
        </Link>
      </div>
    </div>
  )
}
