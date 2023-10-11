import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SingleProduct({ id, url, name, skinType, price, totalStars, totalRates }) {

    const maxStars = 5;
    // const navigate = useNavigate();
    // const navigateProductDetail = () => {
    //     navigate(`/product/${id}`, { state: { id: id, url: url, name: name, skinType: skinType, price: price, totalStars: totalStars, totalRates: totalRates } })
    // }

    return (
        <div className='flex flex-col  bg-[#fff] border-[1px] border-[#DFDFDF]'>
            <Link to={"/product"}>
                <img className=' w-[100%] h-[400px] rounded-sm' src={url} />
            </Link>
            <Link to={"/product"}>
                <p className='basis-1/3 pt-5 pl-4 font-bold text-base  text-[#86bb86] hover:text-[#49B949] cursor-pointer'> {name}</p>
            </Link>
            <p className='basis-1/3 pt-1 pl-4 pr-2 font-medium  text-sm truncate whitespace-normal '> {skinType}</p>
            <div className='basis-1/3 py-3 pl-3 font-medium  text-sm '>
                <div className="flex flex-row items-center">
                    {Array.from({ length: maxStars }, (_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={`text-[16px] ${index < totalStars ? 'text-yellow-400' : 'text-gray-300'}`}
                            fixedWidth
                        />
                    ))}
                    <p className="pl-2 ">( {totalRates} đánh giá )</p>
                </div>
            </div>
            <div className='basis-1/4 flex flex-row justify-between pb-3'>
                <p className='pt-5 pl-4 font-semibold text-lg'> {price}</p>
                <div className='py-4 pr-3'>
                    <button className="font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[13px] border-2 px-6 py-2  hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]">Mua ngay</button>
                </div>
            </div>
        </div>
    )
}
