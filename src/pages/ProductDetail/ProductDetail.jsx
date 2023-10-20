import BreadCrumb from '../../components/BreadCrumb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import ProductDescription from './components/ProductDescription';
import ProductRecommend from './components/ProductRecommend';
import Rating from './components/Rating';
import useGetSingleProduct from './hooks/useGetSingleProduct';
import { useParams } from "react-router-dom";
import CartSideBar from '../../components/CartSideBar';
import { useAddToCart } from '../../services/Cart/services';


const images = [
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697709671/Beana_assets/test3_zx1yrl.png",
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708889/Beana_assets/test2_ngfftk.png",
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708788/Beana_assets/productAds1_pmojci.jpg",
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/skintips22_hb49pw.jpg",
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/skintips11_gt0nrf.jpg",
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/skintips33_tvps8h.jpg",
    "https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708876/Beana_assets/skintips44_brhkqq.png",
];

export default function ProductDetail() {

    const maxStars = 5;
    const { id } = useParams();

    const { mutate } = useAddToCart();

    const [quantityCart, setQuantityCart] = useState(0);
    const { data, isLoading } = useGetSingleProduct(id);

    const [isOpen, setIsOpen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleAddToCart = () => {
        try {
            mutate({
                id: data.id,
                name: data.id,
                quantity: data.quantity,
                price: data.price,
                cartQuantity: quantityCart,
            });
            setIsOpen(!isOpen);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCartQuantity = (event) => {
        const newValue = event.target.value === '' ? '' : parseInt(event.target.value);
        if (newValue === '' || (!isNaN(newValue) && newValue >= 1 && newValue <= 1000)) {
            setQuantityCart(newValue);
        }
    };

    const handleOpenCart = () => {
        setIsOpen(!isOpen);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;

            }
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const getCurrentIndex = (index) => {
        setCurrentImage(index);
        setSelectedImageIndex(index);
    }

    const visibleImages = [
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
        images[(currentIndex + 3) % images.length],
        images[(currentIndex + 4) % images.length],
        images[(currentIndex + 5) % images.length],
    ];

    if (isLoading) {
        return <div>hhuhu</div>
    }
    return (
        <div>
            <CartSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='max-w-screen-2xl px-36 py-10 '>
                <BreadCrumb breadCrumbName={data.name} breadCrumbName0={"Sản phẩm"} />
                <div className='flex flex-row gap-16 pb-8'>
                    <div className='basis-2/3 flex flex-row gap-7 select-none'>
                        <div className='flex flex-col h-full'>
                            <div
                                onClick={prevSlide}
                                className='flex py-1 justify-center items-center bg-white border-[1px] border-[#DFDFDF]  hover:text-[#49b949] cursor-pointer'
                            >
                                <FontAwesomeIcon
                                    icon={faCaretUp}
                                    size="1x"
                                    className="pt-[3px]"
                                />
                            </div>
                            <div className='flex flex-col gap-4' >
                                {visibleImages.map((image, index) => (
                                    <div
                                        className={`w-[80px] h-[78px] ${index === selectedImageIndex ? 'border-[3px] border-[#86bb86]' : ''}`}
                                        key={index}
                                        onClick={() => getCurrentIndex(index)
                                        } >
                                        <img className='w-full h-full' src={image} />
                                    </div>
                                ))}
                            </div>
                            <div
                                onClick={nextSlide}
                                className='flex py-1 justify-center items-center bg-white border-[1px] border-[#DFDFDF]  hover:text-[#49b949] cursor-pointer'
                            >
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    size="1x"
                                    className="pt-[3px]"
                                />
                            </div>

                        </div>
                        <div className='flex flex-col max-h-[638px] w-full'>
                            <img className='h-full w-full' src={visibleImages[currentImage]} />
                            <div className='flex flex-row justify-between items-center pt-2'>
                                <div className='flex flex-row gap-1 items-center'>
                                    <div className='text-base font-normal pr-2'>
                                        Chia sẻ:
                                    </div>
                                    <img className='w-8  cursor-pointer' src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708782/Beana_assets/facebook_ir5hat.svg" />
                                    <FontAwesomeIcon
                                        icon={faFacebookMessenger}
                                        color='#448AFF'
                                        className="text-[29px] cursor-pointer"
                                    />
                                    <FontAwesomeIcon
                                        icon={faPinterest}
                                        color='#BE0216'
                                        className="text-[29px] cursor-pointer"
                                    />
                                    <img className='w-[34px] cursor-pointer' src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697710360/Beana_assets/twitter_lrrblh.svg" />
                                </div>
                                <div className='flex flex-row gap-4 cursor-pointer'>
                                    <div className="w-full font-semibold text-[#F16D9A] text-[14px] hover:text-[#EE5287]">
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            fixedWidth
                                            className='pr-1 text-[16px]'
                                        />
                                        Thêm vào danh sánh yêu thích
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col basis-1/3'>
                        <h1 className='font-bold text-[28px]  text-[#49B949]'>{data.name}</h1>
                        <div className="flex flex-row items-center py-2">
                            <div className="flex flex-row items-center">
                                {Array.from({ length: maxStars }, (_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        className={`text-[16px] ${index < data.rate ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fixedWidth
                                    />
                                ))}
                                <p className="pl-2 ">( {data.rate} đánh giá)</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="border-solid border-r-2 border-[#767373] h-5 pl-3 mr-3"></div>
                                <div>{data.soldQuantity} đã bán</div>
                            </div>

                        </div>
                        <p className='font-bold text-[#0C0C0C] pt-2 leading-6'>
                            {data.childCategory.name}
                        </p>
                        <div className='flex flex-row font-medium text-sm pt-2 text-[#606060]'>
                            {data.productSkins.map((skin, index) => (
                                <div key={skin.id} className='flex flex-row'>
                                    <div className='normal-case'>
                                        {skin.skin.name}
                                    </div>
                                    {index !== data.productSkins.length - 1 && (<div className="border-solid border-r-2 border-[#767373] h-5 pl-3 mr-3"></div>)}
                                </div>

                            ))}
                        </div>
                        <p className='font-semibold text-[#868686] pt-3 leading-6'>
                            Công thức với 92% thành phần có nguồn gốc tự nhiên
                        </p>
                        <div className='flex flex-row justify-between items-center border-b-2 border-[#606060] py-3'>
                            <p className='font-bold text-[#0C0C0C] text-[24px] pt-3 pb-3 leading-6'>
                                {data.price.toLocaleString("vi-VN")}đ
                            </p>
                            <div>
                                <div
                                    className="px-1 py-1 outline-none font-semibold text-base text-[#49b949] bg-transparent"
                                >
                                    {data.specification}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row py-6 justify-between items-center'>
                            <label className='font-medium'>Số lượng:</label>
                            <input
                                type="text"
                                name="quantity"
                                value={quantityCart}
                                onChange={handleCartQuantity}
                                className='py-1 mr-20 w-[55px] bg-[#e1e0e0] text-center'
                            />
                            <p className='text-sm font-medium text-[#757575]'>{data.quantity} sản phẩm có sẵn</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <button
                                className=" basis-3/5 w-full font-semibold text-[#49B949] bg-[#E0F7CD]  shadow-md shadow-[#E0F7CD] text-[14px] border-2 border-[#86bb86] px-6 py-3 hover:bg-[#dbf1c8]  hover:shadow-md hover:shadow-[#dbf1c8]"
                                onClick={handleAddToCart}
                            >
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    fixedWidth
                                    className='pr-2'
                                />
                                Thêm vào giỏ hàng
                            </button>
                            <button className=" basis-2/5 font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[14px] border-2 border-[#E0F7CD] px-6 py-3 hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]">Mua ngay</button>
                        </div>
                        <div className='bg-[#eef6e8] flex grow mt-8'>
                            <div className='flex flex-col gap-4 pl-7 py-6'>
                                <div className='flex flex-row items-center'>
                                    <img className='w-[25px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708783/Beana_assets/gift_xsrww5.svg' />
                                    <div className='px-4 font-medium text-[13px] text-[#4CAF50]'>
                                        Nhận 2 Mẫu Miễn Phí Khi Bạn Chi 100.000đ
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <img className='w-[25px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697710360/Beana_assets/tag_qvepuv.svg' />
                                    <div className='px-4 font-medium text-[13px] text-[#4CAF50]'>
                                        Nhận 10.000đ Khi Bạn Trả Lại 5 Lọ Rỗng
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <img className='w-[25px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708784/Beana_assets/message_aoeiya.svg' />
                                    <div className='px-4 font-medium text-[13px] text-[#4CAF50]'>
                                        Được Tư Vấn Miễn Phí  Tại Các Chi Nhánh
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDescription data={data} />
            </div>
            <div className='pt-6 px-12'>
                <div className=' bg-[#86bb86] '>
                    <div className='px-24 py-8 '>
                        <div className='flex flex-row justify-between pb-6'>
                            <img className='w-[290px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708897/Beana_assets/productDes1_wcafq0.png' />
                            <img className='w-[290px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697710374/Beana_assets/productDes2_dja3xi.png' />
                            <img className='w-[290px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708883/Beana_assets/productDes3_d3aiew.png' />
                            <img className='w-[290px]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708898/Beana_assets/productDes4_j5frry.png' />
                        </div>
                        <div className='flex flex-col justify-center items-center font-normal text-base text-white capitalize'>
                            <ul>
                                <li><strong>Chỉ trong 1 tuần</strong>: nó trông săn chắc hơn, mạnh mẽ hơn và mượt mà hơn.</li>
                                <li><strong>Trong 3 tuần</strong>: cải thiện gấp 2 lần về vẻ ngoài hoặc cảm giác về độ đàn hồi của da</li>
                                <li><strong>Sau 1 tháng</strong>: Da săn chắc hơn+60% | Da trông dày hơn +56%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-16 '>
                <div className='border-4  shadow-md shadow-grey border-secondary relative'>
                    <iframe
                        width="1100"
                        height="600"
                        src="https://www.youtube.com/embed/nniMQ-cpoaw"
                        title="Dior Prestige - How to Energize Your Skin with Micro-Nutrition?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                    <div className='absolute bottom-0 left-[-6%]'>
                        <img className='w-40 -scale-x-100' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/bean_afjwev.png' />
                    </div>
                    <div className='absolute bottom-[-9%] right-[-9%]'>
                        <img className='w-56 ' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/beautyProduct_ww3qut.png' />
                    </div>
                </div>

            </div>
            <Rating />
            <ProductRecommend />

        </div>
    )
}
