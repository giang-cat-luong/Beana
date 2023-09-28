

export default function popularProduct({url, name, skinType, price}) {
    return (
        <div className='flex flex-col  bg-[#fff] border-[1px] border-[#DFDFDF]'>
            <img className=' w-[100%] h-[220px] rounded-sm' src={url} />
            <p className='basis-1/3 pt-5 pl-4 pr-2 font-bold text-sm  text-[#86bb86] hover:text-[#49B949]'> {name}</p>
            <p className='basis-1/2 pt-2 pl-4 pr-2 font-medium  text-xs truncate whitespace-normal '> {skinType}</p>
            <div className='basis-1/4 flex flex-row justify-between pb-3'>
                <p className='pt-5 pl-4 font-semibold text-lg'> {price}</p>
            </div>
        </div>
    )
}
