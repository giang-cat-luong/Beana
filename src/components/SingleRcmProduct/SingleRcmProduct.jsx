

export default function SingleRcmProduct({ data }) {
    return (
        <div className='flex flex-row flex-wrap gap-2'>
            {data?.map((product) => (
                <div key={product.id} className='basis-[48%] flex flex-col justify-between bg-[#fff] border-[1px] border-[#DFDFDF]'>
                    <img className=' w-[100%] h-[220px] rounded-sm' src={product.productImageList[0].url} />
                    <p className='pt-5 pl-4 pr-2 font-bold text-sm  text-[#86bb86] hover:text-[#49B949] line-clamp-2'> {product.name}</p>
                    <p className='pt-2 pl-4 pr-2 font-medium  text-xs truncate whitespace-normal '> {product.specification}</p>
                    <div className='flex flex-row justify-between pb-3'>
                        <p className='pt-3 pl-4 font-semibold text-lg'> {product.price.toLocaleString("vi-VN")}đ</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
