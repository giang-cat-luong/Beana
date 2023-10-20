import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAddToCart } from '../../services/Cart/services';
import CartSideBar from "../../components/CartSideBar";
import { useState } from "react";
import Success from "../Notification/Success";

export default function SingleProduct({ id, url, name, skinType, price, totalStars, totalRates, quantity }) {

    const { mutate } = useAddToCart();
    const maxStars = 5;
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const minPercentage = 10;
    const maxPercentage = 15;
    const randomPercentage = Math.floor(Math.random() * (maxPercentage - minPercentage + 1)) + minPercentage;

    function formatPrice(price) {
        return price.toLocaleString("vi-VN");
    }
    const handleAddToCart = () => {
        try {
            mutate({
                id: id,
                name: name,
                quantity: quantity,
                price: price,
                cartQuantity: 1,
            });
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
            setIsOpen(!isOpen);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='flex flex-col  bg-[#fff] border-[1px] border-[#DFDFDF]'>
            <Success isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
            <CartSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Link to={`/product/${id}`}>
                <img className=' w-[100%] h-[400px] rounded-sm' src={url} />
            </Link>
            <Link to={`/product/${id}`}>
                <p className='basis-1/3 pt-5 pl-4 font-bold text-base  text-[#86bb86] hover:text-[#49B949] cursor-pointer text-ellipsis line-clamp-2 overflow-hidden'> {name}</p>
            </Link>
            <div className='basis-1/3 pl-4 min-h-[47px] flex flex-row flex-wrap font-medium justify-start text-sm pt-2 text-[#606060]'>
                {Array.isArray(skinType) && skinType.length > 0 ? (
                    skinType.map((skin, index) => (
                        <div key={skin.id} className='flex flex-row'>
                            <div >
                                {skin.skin.name}
                            </div>
                            {index < skinType.length - 1 && <div className="border-solid border-r-2 border-[#767373] h-4 mt-1 pl-3 mr-3"></div>}
                        </div>
                    ))
                ) : (
                    <div>Không có thông tin về loại da.</div>
                )}
            </div>
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
                <div className="flex flex-col">
                    <p className='pt-3 pl-4 font-semibold text-lg'> {formatPrice(price)}đ</p>
                    <div className="flex flex-row">
                        <p className='pl-4 font-normal text-sm line-through'> {formatPrice(price * (1 + randomPercentage / 100))}đ</p>
                        <p className='pl-2 font-semibold text-[#fe8549] text-sm'> {randomPercentage}%</p>
                    </div>

                </div>
                <div className='py-4 pr-3'>
                    <button
                        className="font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[13px] border-2 px-6 py-2  hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                        onClick={handleAddToCart}
                    >Mua ngay
                    </button>
                </div>
            </div>
        </div>
    )
}
