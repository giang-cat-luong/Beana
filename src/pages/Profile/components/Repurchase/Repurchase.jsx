import SingleProduct from "../../../../components/SingleProduct";
import useOrder from './hooks/useOrder'
import { Link } from "react-router-dom";
import CircleLoading from "../../../../components/Loading/CircleLoading";
export default function Repurchase() {

  const { data, isLoading } = useOrder();
  const dataSuccess = data?.filter(item => item.status === 5)

  return (
    <div className='pt-[10px] pb-20 px-5'>
      {isLoading && <div className='flex justify-center items-center mt-16'><CircleLoading /></div>}
      <div className='mt-2 text-[18px] font-semibold '>Sản phẩm mua lại</div>
      <div className='flex flex-row justify-between flex-wrap gap-4 mt-6'>
        {dataSuccess?.slice(3, 7).map((product, index) => (
          <div className='basis-[32%] flex flex-row' key={index}>
            <SingleProduct
              id={product.id}
              url={product.productImageList}
              name={product.name}
              skinType={product?.productSkins}
              price={product.price}
              totalStars={product.rate}
              totalRates={product.rate}
              quantity={product.quantity}
            />
          </div>
        ))}
      </div>
      {dataSuccess?.length <= 0 &&
        <div className='flex flex-col justify-center items-center mt-14'>
          <img className='w-40' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699471292/Beana_assets/empty_order_sahbpt.png' />
          <div className='font-semibold text-[20px] mt-2'>Bạn chưa mua đơn hàng nào</div>
          <Link to="/products">
            <div className='beana-button-green-shadow px-4 py-2 mt-2  text-[14px]'> Tiếp tục mua hàng</div>
          </Link>
        </div>
      }
    </div>
  )
}
