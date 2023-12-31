import SliderBanner from "../../components/Slider";
import BreadCrumb from "../../components/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderUrls = [
    './assets/sliderSkincareTips.jpeg',
];
const sliderTitle = [
    'MẸO CHĂM SÓC DA',
];

const sliderDescription = [
    'Nếu bạn đang tìm kiếm các mẹo và thủ thuật về cách chăm sóc làn da của mình thì bạn đã đến đúng nơi! Khám phá các hướng dẫn chăm sóc da hữu ích, khám phá thói quen hàng ngày hoàn hảo cho loại da của bạn và đồng thời tìm hiểu về chăm sóc da trước và sau khi trang điểm.',
];
const sliderTitleColor = [
    '#49b949',
];
const sliderTitleDescription = [
    '#000',
];

const routines = [
    {
        url: './assets/routines1.png',
        name: "Da thường đến khô nhạy cảm",
    },
    {
        url: './assets/routines2.png',
        name: "Hỗn hợp cho da nhờn nhạy cảm",
    },
    {
        url: './assets/routines3.png',
        name: "Da nhạy cảm khô và mất nước",
    },
    {
        url: './assets/routines4.png',
        name: "Chăm sóc da toàn thân",
    },
];

const guides = [
    {
        url: './assets/guides1.jpg',
        name: "Da Không Đều Là Gì Và Bạn Có Thể Quản Lý Nó Như Thế Nào?",
    },
    {
        url: './assets/guides2.jpg',
        name: "Tẩy Da Chết: Tại Sao Nó Quan Trọng Và Làm Thế Nào Để Thực Hiện Đúng Cách",
    },
    {
        url: './assets/guides3.jpg',
        name: "Kem Chống Nắng Kéo Dài Bao Lâu?",
    },
    {
        url: './assets/guides4.jpg',
        name: "Nguyên Nhân Gây Bệnh Chàm Bùng Phát?",
    },
    {
        url: './assets/guides5.jpg',
        name: "Peptide Trong Chăm Sóc Da: Hướng Dẫn Cho Người Mới Bắt Đầu",
    },
];

const concerns = [
    {
        url: './assets/concerns1.png',
        name: "Mụn & Vết Thâm",
    },
    {
        url: './assets/concerns2.png',
        name: "Da Khô",
    },
    {
        url: './assets/concerns3.png',
        name: "Bệnh Chàm",
    },
    {
        url: './assets/concerns4.png',
        name: "Da Thô Ráp, Sần Sùi, Bong Tróc",
    },
    {
        url: './assets/concerns5.png',
        name: "Da Ngứa",
    },
    {
        url: './assets/concerns6.png',
        name: "Da bị mẩn đỏ",
    },
    {
        url: './assets/concerns7.png',
        name: "Chăm sóc da chống nắng",
    },
    {
        url: './assets/concerns8.png',
        name: "Da không đều màu",
    },
];

const makeup = [
    {
        url: './assets/makeup1.jpg',
        name: "Chăm Sóc Da Mặt Trước Khi Trang Điểm Như Thế Nào?",
    },
    {
        url: './assets/makeup2.jpg',
        name: "Cần Chăm Sóc Da Mặt Thế Nào Sau Khi Trang Điểm",
    },
    {
        url: './assets/makeup3.jpg',
        name: "Bí Quyết Giữ Lâu Lớp Trang Điểm, Da Mịn Mướt",
    },
    {
        url: './assets/makeup4.png',
        name: "Đắp Mặt Nạ Gì Để Trang Điểm Ăn Phấn?",
    },
    {
        url: './assets/makeup5.png',
        name: "Bật Mí Bí Kíp Không Phải Ai Cũng Biết Trước Khi Make Up Với Mặt Nạ Giấy",
    },
];
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className=" block absolute top-[-12%] right-0 text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="./assets/right-arrow.png" className="w-8" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className=" block absolute top-[-12%] right-16 text-2xl rounded-full p-2 bg-black/30 hover:bg-[#86bb86] text-white cursor-pointer">
            <img src="./assets/left-arrow.png" className="w-8" />
        </div>
    );
}

export default function SkincareTips() {


    var settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
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
        <div>
            <SliderBanner
                sliderUrls={sliderUrls}
                title={sliderTitle}
                description={sliderDescription}
                colorTitle={sliderTitleColor}
                colorDescription={sliderTitleDescription}
            />
            {/* skin routines */}
            <div className='max-w-screen-2xl px-10 pt-5'>
                <BreadCrumb breadCrumbName="Mẹo chăm sóc da" />
                <div className='flex flex-row gap-6 justify-center mt-10 '>
                    <div className="basis-1/6">
                        <h1 className='font-semibold text-secondary text-[28px] px-3'>QUY TRÌNH CHĂM SÓC DA</h1>
                        <p className='basis-1/6 text-sm leading-7 px-3 pt-2'>Tìm hiểu cách làm sạch, nuôi dưỡng,
                            dưỡng ẩm và bảo vệ làn da nhạy cảm của bạn tốt nhất với nhiều sản phẩm được bác
                            sĩ da liễu khuyên dùng.</p>
                    </div>
                    <div className='basis-5/6 flex flex-col'>
                        <div className='basis-5/6 flex flex-row gap-4'>
                            {routines.map((routine, index) => (
                                <div className="basis-1/4 relative" key={index}>
                                    <a href="#" className="group">
                                        <img className='w-[278px] h-[288px] rounded-3xl object-cover border-[1px] border-[#fff]' src={routine.url} />
                                        <p className='absolute left-6 top-5 max-w-[4.375rem] font-semibold text-[18px]  text-[#004987] '> {routine.name}</p>
                                        <div className='py-4 pr-3'>
                                            <FontAwesomeIcon
                                                icon={faCircleArrowRight}
                                                color="#fff"
                                                size="2x"
                                                className="absolute bottom-14 left-5 group-hover:text-[#0E740E]"
                                                fixedWidth
                                            />
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                        <a href="" className="flex flex-row justify-end group items-center gap-2 cursor-pointer">
                            <p className='font-semibold text-[15px]  text-[#86bb86] group-hover:text-[#0E740E] group-hover:underline'> XEM TẤT CẢ QUY TRÌNH CHĂM SÓC DA</p>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                color="#86bb86"
                                className="text-[20px] group-hover:text-[#0E740E] "
                                fixedWidth
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* end skin routines */}

            {/* skin guide */}
            <div className="bg-[#EEF6E8] my-20">
                <div className='flex flex-col justify-center py-14 pl-12 pr-11'>
                    <h1 className='font-semibold text-secondary text-[28px] px-2 py-3'>HƯỠNG DẪN CHĂM SÓC DA</h1>
                    <a href="" className="flex flex-row group items-center gap-2 px-2 pb-10 cursor-pointer">
                        <p className='font-semibold text-[15px]  text-[#86bb86] group-hover:text-[#0E740E] group-hover:underline'> XEM TẤT CẢ HƯỚNG DẪN CHĂM SÓC DA</p>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            color="#86bb86"
                            className="text-[20px] group-hover:text-[#0E740E] "
                            fixedWidth
                        />
                    </a>
                    <div className=''>
                        <Slider {...settings}>
                            {guides.map((tip, index) => (
                                <div className="px-1" key={index}>
                                    <img className='w-[423px] h-[423px] rounded-[1.25rem] object-cover border-[1px] border-[#fff]' src={tip.url} />
                                    <a href="#" className="flex flex-row justify-between group">
                                        <p className='pl-2 pt-3 font-medium text-[20px]  text-[#86bb86] group-hover:text-[#49B949]'> {tip.name}</p>
                                        <div className='py-4 pr-3'>
                                            <FontAwesomeIcon
                                                icon={faCircleArrowRight}
                                                color="#86bb86"
                                                className="text-[24px] group-hover:text-[#0E740E]"
                                                fixedWidth
                                            />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
            {/* end skin guide */}

            {/* skin concerns */}
            <div className='max-w-screen-2xl px-10 pt-5'>
                <div className='flex flex-row gap-6 justify-center mt-10 '>
                    <div className="basis-1/6">
                        <h1 className='font-semibold text-secondary text-[28px] px-3'>CÁC VẤN ĐỀ VỀ DA MẶT</h1>
                        <p className='basis-1/6 text-sm leading-6 px-3 pt-2'>Tìm hiểu thêm về nguyên nhân gây lo ngại về da, cách chúng tác
                            động đến làn da của bạn và cách một quy trình chăm sóc da nhẹ nhàng, phù hợp có thể giúp mọi người có được làn da
                            sạch hơn.
                        </p>
                    </div>
                    <div className='basis-5/6 flex flex-col'>
                        <div className='basis-5/6 flex flex-row flex-wrap'>
                            {concerns.map((routine, index) => (
                                <div className="basis-1/4 relative" key={index}>
                                    <a href="#" className="group">
                                        <img className='w-[278px] h-[288px] rounded-3xl object-cover' src={routine.url} />
                                        <p className='absolute left-6 top-5 max-w-[4.375rem] font-semibold text-[17px]  text-[#004987] '> {routine.name}</p>
                                        <div className='py-4 pr-3'>
                                            <FontAwesomeIcon
                                                icon={faCircleArrowRight}
                                                color="#fff"
                                                size="2x"
                                                className="absolute bottom-14 left-5 group-hover:text-[#0E740E]"
                                                fixedWidth
                                            />
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                        <a href="" className="flex flex-row justify-end group items-center gap-2 cursor-pointer">
                            <p className='font-semibold text-[15px]  text-[#86bb86] group-hover:text-[#0E740E] group-hover:underline'>XEM TẤT CẢ CÁC VẤN ĐỀ VỀ DA</p>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                color="#86bb86"
                                className="text-[20px] group-hover:text-[#0E740E] "
                                fixedWidth
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* end skin concerns */}

            {/* skin guide */}
            <div className="bg-[#EEF6E8] my-20">
                <div className='flex flex-col justify-center py-14 pl-12 pr-11'>
                    <h1 className='font-semibold text-secondary text-[28px] px-2 py-3'>CHĂM SÓC DA TRƯỚC VÀ SAU KHI TRANG ĐIỂM</h1>
                    <a href="" className="flex flex-row group items-center gap-2 px-2 pb-10 cursor-pointer">
                        <p className='font-semibold text-[15px]  text-[#86bb86] group-hover:text-[#0E740E] group-hover:underline'> XEM TẤT CẢ CHĂM SÓC DA TRƯỚC VÀ SAU KHI TRANG ĐIỂM</p>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            color="#86bb86"
                            className="text-[20px] group-hover:text-[#0E740E] "
                            fixedWidth
                        />
                    </a>
                    <div className=''>
                        <Slider {...settings}>
                            {makeup.map((tip, index) => (
                                <div className="px-1" key={index}>
                                    <img className='w-[423px] h-[423px] rounded-[1.25rem] object-cover border-[1px] border-[#fff]' src={tip.url} />
                                    <a href="#" className="flex flex-row justify-between group">
                                        <p className='pl-2 pt-3 font-medium text-[20px]  text-[#86bb86] group-hover:text-[#49B949]'> {tip.name}</p>
                                        <div className='py-4 pr-3'>
                                            <FontAwesomeIcon
                                                icon={faCircleArrowRight}
                                                color="#86bb86"
                                                className="text-[24px] group-hover:text-[#0E740E]"
                                                fixedWidth
                                            />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
            {/* end skin guide */}

            <div className="w-full bg-gradient-to-br from-[#86bb86] from-45% to-[#E0F7CD] to-95%">
                <div className='max-w-screen-2xl flex flex-row gap-4 justify-center items-center px-10 py-12'>
                    <div className="basis-1/2">
                        <img className="w-[702px] h-[702px] rounded-3xl" src="./assets/skincaretipsBanner.jpg" />
                    </div>
                    <div className="basis-1/2 flex flex-col gap-2">
                        <p className="font-bold text-white text-[40px]">OILY OR DRY? ROUGH AND FLAKY OR REDNESS-PRONE?</p>
                        <p className="font-normal text-white text-[20px]">
                            Not sure where to start on your new skincare regime? Answer a few simple questions to get you on your way.
                        </p>
                        <button className="mt-5 w-44 font-normal text-[#fff] text-[13px] border-2 px-6 py-2 hover:bg-[#49B949] hover:text-[#fff]">Tìm hiểu thêm</button>
                        <p className="text-white font-normal">Hoặc</p>
                        <img className="w-32" src='./assets/qr-code.png' />
                        <p className="text-white font-normal">Scan QR code on mobile device to get started</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
