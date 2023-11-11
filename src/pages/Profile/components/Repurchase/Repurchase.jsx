import useGetProduct from "../../../Product/hooks/useGetProduct"
import SingleProduct from "../../../../components/SingleProduct";

export default function Repurchase() {

  const { data } = useGetProduct();

  return (
    <div className='pt-[10px] pb-20 px-5'>
      <div className='mt-2 text-[18px] font-semibold '>Sản phẩm mua lại</div>
      <div className='flex flex-row justify-between flex-wrap gap-4 mt-6'>
        {data?.slice(3, 7).map((product, index) => (
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
    </div>
  )
}
