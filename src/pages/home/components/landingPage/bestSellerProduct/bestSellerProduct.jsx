import SingleProduct from "../../../../../components/singleProduct/singleProduct"
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

export default function bestSellerProduct() {

    const productBestSeller = [
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
            skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
            price: "525.000đ"
        },
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
            skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
            price: "525.000đ"
        },
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
            skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
            price: "145.000đ"
        },
        {
            url: './assets/product.png',
            name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
            skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
            price: "180.000đ"
        },
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
            skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
            price: "145.000đ"
        },
        {
            url: './assets/product.png',
            name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
            skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
            price: "180.000đ"
        },

    ];

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
            <div className='max-w-screen-2xl px-36 pb-20'>
                <Slider {...settings}>
                    {productBestSeller.map((category) => (
                        <SingleProduct
                            url={category.url}
                            name={category.name}
                            skinType={category.skinType}
                            price={category.price}
                        />
                    ))}
                </Slider>
            </div>
        </div >
    )
}
