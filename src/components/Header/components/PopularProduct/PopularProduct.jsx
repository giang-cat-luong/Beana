

export default function PopularProduct({ data }) {
    return (
        <div className='flex flex-row gap-6'>
            {data?.slice(4, 8).map((product, index) => (
                <div className='basis-1/4 flex flex-col  bg-[#fff] border-[1px] border-[#DFDFDF]'>
                    <img className=' w-[100%] h-[220px] rounded-sm' src={product.productImageList[0].url} />
                    <p className='basis-1/3 pt-5 pl-4 pr-2 font-bold text-sm  text-[#86bb86] hover:text-[#49B949]'> {product.name}</p>
                    <p className='basis-1/2 pt-2 pl-4 pr-2 font-medium  text-xs truncate whitespace-normal '> {product.specification}</p>
                    <div className='basis-1/4 flex flex-row justify-between pb-3'>
                        <p className='pt-5 pl-4 font-semibold text-lg'> {product.price.toLocaleString("vi-VN")}đ</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
