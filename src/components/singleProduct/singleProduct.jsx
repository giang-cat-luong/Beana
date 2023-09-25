

export default function singleProduct({url, name, skinType, price}) {
    return (
        <div className='flex flex-col basis-1/4 bg-[#fff] border-[1px] border-[#DFDFDF]'>
            <img className=' w-[100%] h-[400px] rounded-sm' src={url} />
            <p className='basis-1/3 pt-5 pl-4 font-bold text-base  text-[#86bb86] hover:text-[#49B949]'> {name}</p>
            <p className='basis-1/2 pt-1 pl-4 pr-2 font-medium  text-sm truncate whitespace-normal '> {skinType}</p>
            <div className='basis-1/4 flex flex-row justify-between pb-3'>
                <p className='pt-5 pl-4 font-semibold text-lg'> {price}</p>
                <div className='py-4 pr-3'>
                    <button className="font-normal text-[#fff] bg-[#86bb86] text-[13px] border-2 px-6 py-2  hover:bg-[#49B949] hover:text-[#fff]">Mua ngay</button>
                </div>
            </div>
        </div>
    )
}
