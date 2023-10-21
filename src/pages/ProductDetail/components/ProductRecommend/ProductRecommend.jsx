import SingleProduct from "../../../../components/SingleProduct"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGetProduct from '../../../Product/hooks/useGetProduct';
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-5%] text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708787/Beana_assets/right-arrow_bkeoa6.png" className="w-8" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-5%] text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708780/Beana_assets/left-arrow_gvhyv9.png" className="w-8" />
        </div>
    );
}

export default function ProductRecommend() {
  
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

    const { data, isLoading } = useGetProduct();

    
  
    return (
        <div className="flex flex-col justify-center mt-16 relative group bg-[#EEF6E8]">
            <h1 className='beana-product-title-header pt-6'>CÁC SẢN PHẨM LIÊN QUAN</h1>
            <div className='max-w-screen-2xl px-[136px] pb-20'>
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
                            />
                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    )
}
