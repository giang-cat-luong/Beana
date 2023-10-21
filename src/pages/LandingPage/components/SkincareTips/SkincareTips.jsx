import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className=" block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-5%] text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="./assets/right-arrow.png" className="w-8" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className=" block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-5%] text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="./assets/left-arrow.png" className="w-8" />
        </div>
    );
}


export default function SkincareTips() {

    const skincareTips = [
        {
            url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/skintips11_gt0nrf.jpg',
            name: "Quy trình chăm sóc da",
        },
        {
            url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/skintips22_hb49pw.jpg',
            name: "Hướng dẫn chăm sóc da",
        },
        {
            url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708873/Beana_assets/skintips33_tvps8h.jpg',
            name: "Các vấn đề về da mặt",
        },
        {
            url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708876/Beana_assets/skintips44_brhkqq.png',
            name: "Chăm sóc da trước và sau khi trang điểm",
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div className='flex flex-col justify-center mt-16 '>
            <h1 className='beana-product-title-header'>MẸO CHĂM SÓC DA MẶT</h1>
            <div className='px-36 '>
                <Slider {...settings}>
                    {skincareTips.map((tip,index) => (
                        <div className="px-2" key={index}>
                            <img className='w-[100%] h-[400px] rounded-[1.25rem] object-cover border-[1px] border-[#fff]' src={tip.url} />
                            <a href="#" className="flex flex-row justify-between group">
                                <p className='pt-5 pl-2 font-bold text-[20px]  text-[#86bb86] group-hover:text-[#49B949]'> {tip.name}</p>
                                <div className='py-4 pr-3'>
                                    <FontAwesomeIcon
                                        icon={faCircleArrowRight}
                                        color="#86bb86"
                                        size="2x"
                                        className="group-hover:text-[#0E740E]"
                                        fixedWidth
                                    />
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
            
        </div>


    )
}
