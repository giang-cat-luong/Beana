import SingleProduct from "../../../../components/SingleProduct"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-5%] text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="./assets/right-arrow.png" className="w-8" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-5%] text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="./assets/left-arrow.png" className="w-8" />
        </div>
    );
}
const productBestSeller = [
    {
        url: './assets/product.png',
        name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
        skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
        price: "525.000đ",
        totalStars: "3",
        totalRates: "34"
    },
    {
        url: './assets/product.png',
        name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
        skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
        price: "525.000đ",
        totalStars: "3",
        totalRates: "71"
    },
    {
        url: './assets/product.png',
        name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
        skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
        price: "145.000đ",
        totalStars: "3",
        totalRates: "12"
    },
    {
        url: './assets/product.png',
        name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
        skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
        price: "180.000đ",
        totalStars: "2",
        totalRates: "34"
    },
    {
        url: './assets/product.png',
        name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
        skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
        price: "145.000đ",
        totalStars: "4",
        totalRates: "112"
    },
    {
        url: './assets/product.png',
        name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
        skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
        price: "180.000đ",
        totalStars: "5",
        totalRates: "4"
    },

];


export default function BestSellerProduct({data}) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex flex-col justify-center mt-16 relative group'>
            <h1 className='beana-product-title-header'>SẢN PHẨM BÁN CHẠY NHẤT</h1>
            <div className='  px-[136px] pb-20'>
                <Slider {...settings}>
                    {data?.map((product, index) => (
                        <div className="px-2" key={index}>
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
                </Slider>
            </div>
        </div >
    )
}
