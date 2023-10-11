import BreadCrumb from '../../components/BreadCrumb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import ProductDescription from './components/ProductDescription';
import ProductRecommend from './components/ProductRecommend';
import Rating from './components/Rating';
import { Link } from 'react-router-dom';

const category = [
    {
        name: "Cho da nhạy cảm"
    },
    {
        name: "Sáng hoặc tối"
    },
    {
        name: "Làm sáng da"
    }
]
const prices = {
    "50ML": "100.000đ",
    "150ML": "150.000đ",
    "250ML": "250.000đ",
    "500ML": "300.000đ",
};

const images = [
    "./assets/productDetail2.png",
    "./assets/test2.png",
    "./assets/productAds1.jpg",
    "./assets/skintips22.jpg",
    "./assets/skintips11.jpg",
    "./assets/skintips33.jpeg",
    "./assets/skintips44.png",
];

export default function ProductDetail() {

    const maxStars = 5;

    const [selectedSize, setSelectedSize] = useState("50ML");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
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

    return (
        <div>
            <div className='max-w-screen-2xl px-36 py-10 '>
                <BreadCrumb />
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
                                    <img className='w-8  cursor-pointer' src="./assets/facebook.svg" />
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
                                    <img className='w-[34px] cursor-pointer' src="./assets/twitter.svg" />
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
                        <h1 className='font-bold text-[28px]  text-[#49B949]'>Nước Tẩy Trang Bioderma Sensibio H2O 500Ml</h1>
                        <div className="flex flex-row items-center py-2">
                            {Array.from({ length: maxStars }, (_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={`text-[16px] ${index < maxStars ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fixedWidth
                                />
                            ))}
                            <p className="pl-2 ">( 112 đánh giá )</p>
                        </div>
                        <p className='font-bold text-[#0C0C0C] pt-2 leading-6'>
                            Serum Chống Lão Hóa Da Mặt
                        </p>
                        <div className='flex flex-row font-medium text-sm pt-2 text-[#606060]'>
                            {category.map((cate, index) => (
                                <div key={index} className='flex flex-row'>
                                    <div >
                                        {cate.name}
                                    </div>
                                    {index !== category.length - 1 && <div className="border-solid border-r-2 border-[#767373] h-5 pl-3 mr-3"></div>}
                                </div>

                            ))}
                        </div>
                        <p className='font-semibold text-[#868686] pt-3 leading-6'>
                            Công thức với 92% thành phần có nguồn gốc tự nhiên
                        </p>
                        <div className='flex flex-row justify-between items-center border-b-2 border-[#606060] py-3'>
                            <p className='font-bold text-[#0C0C0C] text-[24px] pt-3 pb-3 leading-6'>
                                {prices[selectedSize]}
                            </p>
                            <div>
                                <select
                                    className="w-[100px]  px-1 py-1   outline-none font-semibold text-base text-[#49b949] bg-transparent"
                                    value={selectedSize}
                                    onChange={handleSizeChange}
                                >
                                    <option className="text-[#0C0C0C]" value="50ML">50ML</option>
                                    <option className="text-[#0C0C0C]" value="150ML">150ML</option>
                                    <option className="text-[#0C0C0C]" value="250ML">250ML</option>
                                    <option className="text-[#0C0C0C]" value="500ML">500ML</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-row py-6 justify-between items-center'>
                            <label for="quantity" className='font-medium'>Số lượng:</label>
                            <input className='px-1 py-1 pl-3 w-[60px] bg-[#e1e0e0]' type="number" id="quantity" name="quantity" min="1" max="1000" defaultValue="1" />
                            <p className='text-sm font-medium text-[#757575]'>99 sản phẩm có sẵn</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <button className=" basis-3/5 w-full font-semibold text-[#49B949] bg-[#E0F7CD]  shadow-md shadow-[#E0F7CD] text-[14px] border-2 border-[#86bb86] px-6 py-3 hover:bg-[#dbf1c8]  hover:shadow-md hover:shadow-[#dbf1c8]">
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
                                    <img className='w-[25px]' src='./assets/gift.svg' />
                                    <div className='px-4 font-medium text-[13px] text-[#4CAF50]'>
                                        Nhận 2 Mẫu Miễn Phí Khi Bạn Chi 100.000đ
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <img className='w-[25px]' src='./assets/tag.svg' />
                                    <div className='px-4 font-medium text-[13px] text-[#4CAF50]'>
                                        Nhận 10.000đ Khi Bạn Trả Lại 5 Lọ Rỗng
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <img className='w-[25px]' src='./assets/message.svg' />
                                    <div className='px-4 font-medium text-[13px] text-[#4CAF50]'>
                                        Được Tư Vấn Miễn Phí  Tại Các Chi Nhánh
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDescription />
            </div>
            <div className='pt-6 px-12'>
                <div className=' bg-[#86bb86] '>
                    <div className='px-24 py-8 '>
                        <div className='flex flex-row justify-between pb-6'>
                            <img className='w-[290px]' src='./assets/productDes1.png' />
                            <img className='w-[290px]' src='./assets/productDes2.png' />
                            <img className='w-[290px]' src='./assets/productDes3.png' />
                            <img className='w-[290px]' src='./assets/productDes4.png' />
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
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                    <div className='absolute bottom-0 left-[-6%]'>
                        <img className='w-40 -scale-x-100' src='./assets/bean.png' />
                    </div>
                    <div className='absolute bottom-[-9%] right-[-9%]'>
                        <img className='w-56 ' src='./assets/beautyProduct.png' />
                    </div>
                </div>

            </div>
            <Rating />
            <ProductRecommend />

        </div>
    )
}
