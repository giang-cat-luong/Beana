import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.css'
import { faEnvelope, faSearch, faLocationDot, faUser, faCartShopping, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PopularProduct from './popularProduct/popularProduct'
import Loading from '../loading/loading'
import ProductEvent from '../../pages/landingPage/productEvent/productEvent'

const popularProduct = [
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
];

const skincareTips = [
    {
        url: './assets/skintips11.jpg',
        name: "Routines",
        skinType: "Phấn Nước Che Phủ Mỏng Nhẹ, Mịn Mượt Lâu Trôi Maybelline New York Fit Me Matte + Poreless Oil Control Cushion",
        price: "525.000đ"
    },
    {
        url: './assets/skintips22.jpg',
        name: "Skincare Guides",
        skinType: "Sữa Rửa Mặt Nghệ Hưng Yên Da Sạch Mịn Và Rạng Rỡ Hung Yen Turmeric Cleanser Clean And Radiant Skin Cocoon 140Ml",
        price: "525.000đ"
    },
    {
        url: './assets/skintips33.jpeg',
        name: "Skin Concerns",
        skinType: "Sữa Rửa Mặt Nghệ Hưng Yên Da Sạch Mịn Và Rạng Rỡ Hung Yen Turmeric Cleanser Clean And Radiant Skin Cocoon 140Ml",
        price: "525.000đ"
    },
    {
        url: './assets/skintips44.png',
        name: "Skin Before Makeup",
        skinType: "Sữa Rửa Mặt Nghệ Hưng Yên Da Sạch Mịn Và Rạng Rỡ Hung Yen Turmeric Cleanser Clean And Radiant Skin Cocoon 140Ml",
        price: "525.000đ"
    },
];


export default function header() {

    const [scrolled, setScrolled] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const navigate = useNavigate();

    const openSearchMenu = () => {
        setToggleSearch(true);
    }
    const closeSearchMenu = () => {
        setToggleSearch(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavigateLogin = () => {

        setRedirecting(true);

        setTimeout(() => {
            navigate("./login")
        }, 2000);
    };


    const handleNavigateSignup = () => {

        setRedirecting(true);

        setTimeout(() => {
            navigate("./signup")
        }, 2000);
    };

    return (
        <div className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ''}`}>
            <div style={{ position: "relative" }}>
                {redirecting && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9999,
                        }}
                    >
                        {/* Add your loading spinner or animation here */}
                        <Loading />
                    </div>
                )}
                {/* Form content */}
            </div>
            
            <div className={styles.headerTop}>
                {scrolled ? (<div></div>) : (<div className={styles.headerTopContent}>
                    <div className={styles.contentLeft}>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            color="#0E740E"
                            size="lg"
                            style={{ paddingRight: '5px' }}
                            fixedWidth
                        />
                        <p className={styles.headerTopText}>VIETNAM</p>
                    </div>
                    <div className={styles.contentLeft}>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            color="#0E740E"
                            size="lg"
                            style={{ paddingRight: '5px' }}
                            fixedWidth
                        />
                        <p className={styles.headerTopText}>CONTACT US</p>
                    </div>
                    <div className={styles.contentRight}>
                        <img src='../assets/facebook.svg' className={styles.headerIcon} />
                        <a href='https://www.facebook.com/profile.php?id=61551793473535' style={{ alignItems: 'center' }}> <p className={styles.headerTopText} >JOIN FANPAGE</p></a>
                    </div>
                </div>)}

            </div>
            <div >
                <nav class={styles.headerBot}>
                    <div class=" flex justify-between  lg:py-5 px-20 py-20 border-b ">
                        <div className='flex items-center '>
                            <a href="https://beana.com" class="flex items-center pt-1 ">
                                <img src="./assets/logo.png" class="w-60" alt="Beana Logo" />
                            </a>
                        </div>

                        {/* <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                        <div class=" items-center justify-between ml-8  font-bold  w-full md:flex md:w-auto md:order-1 ">
                            <ul class="flex gap-8 mr-16 text-[14px]">
                                <Link to='./'>
                                    <li className='beana-top-menu-item'>
                                        TRANG CHỦ
                                    </li >
                                </Link>
                                <Link to='./product'>
                                    <div className='group'>
                                        <li className='beana-top-menu-item'>
                                            SẢN PHẨM
                                        </li >
                                        <div class='hidden group-hover:flex flex-col absolute left-0 p-10  w-full bg-transparent z-20 text-black duration-300'>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'} hidden group-hover:flex flex-col absolute left-0 p-10 w-full border-t-2 border-b-[1px] border-b-[#e6e1e1] bg-white z-20 text-black duration-800`}>
                                            <div class="grid grid-cols-4 gap-5 mx-28 pb-16">
                                                <div className='flex flex-col'>
                                                    <h3 className='beana-top-menu-text'>Theo Loại</h3>
                                                    <a href='' className='beana-top-menu-text-links'>Sữa rửa mặt</a>
                                                    <a href='' className='beana-top-menu-text-links'>Tẩy tế bào chết</a>
                                                    <a href='' className='beana-top-menu-text-links'>Toners</a>
                                                    <a href='' className='beana-top-menu-text-links'>Retinols (vitamin a1)</a>
                                                    <a href='' className='beana-top-menu-text-links'>Vỏ và mặt nạ</a>
                                                    <a href='' className='beana-top-menu-text-links'>Kem dưỡng ẩm</a>
                                                    <a href='' className='beana-top-menu-text-links'>Dầu dưỡng da mặt</a>
                                                    <a href='' className='beana-top-menu-text-links'>Kem chống nắng</a>
                                                    <a href='' className='beana-top-menu-text-links'>Chăm sóc mắt</a>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h3 className='beana-top-menu-text'>Theo Tình Trạng Da</h3>
                                                    <a href='' className='beana-top-menu-text-links'>Da sáng</a>
                                                    <a href='' className='beana-top-menu-text-links'>Hydrat hóa</a>
                                                    <a href='' className='beana-top-menu-text-links'>Mụn</a>
                                                    <a href='' className='beana-top-menu-text-links'>Chống lão hóa</a>
                                                    <a href='' className='beana-top-menu-text-links'>Mẩn đỏ</a>
                                                    <a href='' className='beana-top-menu-text-links'>Da nhạy cảm</a>
                                                    <a href='' className='beana-top-menu-text-links'>Bảo vệ khỏi ánh nắng</a>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h3 className='beana-top-menu-text'>Bộ Sưu Tập</h3>
                                                    <a href='' className='beana-top-menu-text-links'>Sữa rửa mặt</a>
                                                    <a href='' className='beana-top-menu-text-links'>Sy tín</a>
                                                    <a href='' className='beana-top-menu-text-links'>Vẻ đẹp nhẹ nhàng </a>
                                                    <a href='' className='beana-top-menu-text-links'>Nắm bắt tổng số</a>
                                                    <a href='' className='beana-top-menu-text-links'>Nắm bắt tuổi trẻ</a>
                                                    <a href='' className='beana-top-menu-text-links'>Nắm bắt giấc mơ</a>
                                                    <a href='' className='beana-top-menu-text-links'>Một điều cần thiết</a>
                                                    <a href='' className='beana-top-menu-text-links'>Giải pháp chuyên nghiệp</a>
                                                    <a href='' className='beana-top-menu-text-links'>Bẻ đẹp cuộc sống hydra</a>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <img src='./assets/sales.png'></img>
                                                    <h3 className='beana-top-menu-text'>   Sản phẩm mới ra mắt</h3>
                                                    <a href='' className='beana-top-menu-text-links'>Kem phong phú chống lão hóa toàn cầu - nuôi dưỡng & phục hồi mạnh mẽ</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='./'>
                                    <li className='beana-top-menu-item group'>
                                        FACE SCANNING
                                    </li >
                                </Link>
                                <Link to='./'>
                                    <div className='group'>
                                        <li className='beana-top-menu-item group'>
                                            MẸO CHĂM SÓC DA
                                        </li >
                                        <div class='hidden group-hover:flex flex-col absolute left-0 p-10  w-full bg-transparent z-20 text-black duration-300'>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'} hidden group-hover:flex flex-col absolute left-0 p-10 w-full border-t-2 border-b-[1px] border-b-[#e6e1e1] bg-white z-20 text-black duration-800`}>
                                            <div className='flex flex-col justify-center pt-2 pb-10'>
                                                <div className='mx-28 flex flex-row gap-10 '>
                                                    {skincareTips.map((category) => (
                                                        <div>
                                                            <img className='w-[100%] h-[250px] rounded-[1.25rem] object-cover border-[1px] border-[#fff]' src={category.url} />
                                                            <a href="#" className="flex flex-row justify-between">
                                                                <p className='pt-5 pl-2 font-bold text-[20px]  text-[#86bb86] hover:text-[#49B949] hover:underline'> {category.name}</p>
                                                                <div className='py-4'>
                                                                    <FontAwesomeIcon
                                                                        icon={faCircleArrowRight}
                                                                        color="#86bb86"
                                                                        size="2x"
                                                                        className="hover:text-[#0E740E]"
                                                                        fixedWidth
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='./'>
                                    <li className='beana-top-menu-item group'>
                                        VỀ BEANA
                                    </li >
                                </Link>
                            </ul>
                        </div>
                        <div className='items-center justify-between  font-bold  w-full md:flex md:w-auto md:order-1'>
                            <div
                            // onMouseLeave={() => closeSearchMenu()}
                            >
                                <li className='flex flex-row select-none '>
                                    {toggleSearch ? (
                                        <FontAwesomeIcon
                                            icon={faSearch}
                                            color="#0E740E"
                                            size="lg"
                                            onClick={() => closeSearchMenu()}
                                            className='cursor-pointer'
                                            fixedWidth
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faSearch}
                                            color="#000"
                                            size="lg"
                                            onClick={() => openSearchMenu()}
                                            className='cursor-pointer'
                                            fixedWidth
                                        />
                                    )}
                                    {toggleSearch ? (
                                        <div className='-z-10 border-2 border-[#606060]'>
                                            <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'} flex flex-col absolute left-0 px-10 pb-10 pt-5 w-full border-t-2 bg-white z-20 text-black`}>
                                                <div class="flex items-center max-w-screen-2xl border-b-2 border-[#606060] mx-28 mb-10">
                                                    <img src='./assets/bean.png' className='w-6 absolute top-4 left-[10]' />
                                                    <input class="appearance-none bg-transparent border-none w-full text-[#000] font-medium pl-8 leading-tight focus:outline-none  placeholder:text-[#404040] placeholder:font-normal text-lg" type="text" placeholder="Bạn đang tìm gì?" aria-label="Full name" />
                                                    <FontAwesomeIcon
                                                        icon={faSearch}
                                                        color="#0E740E"
                                                        className='pb-1 float-left cursor-pointer'
                                                        size="2x"
                                                        fixedWidth
                                                    />
                                                </div>
                                                <div class="flex flex-row gap-5 mx-28">
                                                    <div className='basis-1/4'>
                                                        <div className='flex flex-col '>
                                                            <h3 className='beana-top-menu-text-search'>Sản phẩm đang hot</h3>
                                                            <a href='' className='beana-top-menu-text-links-search'>Sữa rửa mặt</a>
                                                            <a href='' className='beana-top-menu-text-links-search'>Tẩy tế bào chết</a>
                                                            <a href='' className='beana-top-menu-text-links-search'>Toners</a>
                                                            <a href='' className='beana-top-menu-text-links-search'>Retinols (vitamin a1)</a>
                                                        </div>
                                                        <div className='flex flex-col pt-4'>
                                                            <h3 className='beana-top-menu-text-search'>Tìm kiếm gần đây của bạn</h3>
                                                            <a href='' className='beana-top-menu-text-links-search'>Sữa rửa mặt</a>
                                                            <a href='' className='beana-top-menu-text-links-search'>Tẩy tế bào chết</a>
                                                            <a href='' className='beana-top-menu-text-links-search'>Toners</a>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col  basis-3/4'>
                                                        <div className='flex flex-row justify-between mb-2'>
                                                            <h1 className='font-bold text-lg '>Sản phẩm phổ biến</h1>
                                                            <p className='font-bold text-sm text-[#86bb86] hover:text-[#0E740E] hover:underline hover:cursor-pointer'>Xem tất cả</p>
                                                        </div>
                                                        <div className='flex flex-row gap-6'>
                                                            {popularProduct.map((category) => (
                                                                <PopularProduct
                                                                    url={category.url}
                                                                    name={category.name}
                                                                    skinType={category.skinType}
                                                                    price={category.price}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                        </div>
                                    )}


                                </li>

                            </div>
                        </div>
                        <div className='items-center justify-between  font-bold  w-full md:flex md:w-auto md:order-1'>
                            <div className='border-solid border-r-2 border-[#767373] h-6 pl-3'></div>
                        </div>
                        <div className='items-center justify-between  font-bold  w-full md:flex md:w-auto md:order-1'>
                            <div className='group'>
                                <li className='flex flex-row'>
                                    <div className='flex flex-row group cursor-pointer'>
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            color="#000"
                                            size="lg"
                                            style={{ paddingLeft: '10px' }}
                                            className='group-hover:text-[#0E740E]'
                                            fixedWidth
                                        />
                                        <p className='pl-1 text-sm font-semibold text-[#000] group-hover:text-[#0E740E]' > Đăng Nhập</p>
                                        <div class={`group ${scrolled ? 'top-[55%]' : 'bottom-[-4%]'} hidden group-hover:block absolute top-[64%] right-[18%] w-32 h-5 bg-transparent  z-20duration-300`}>
                                        </div>
                                        <div class={`group ${scrolled ? 'top-[70%]' : 'bottom-[-4%]'} hidden group-hover:block absolute right-[23.5%] w-10 h-10 bg-[#0E740E] z-20 rotate-45 duration-300`}>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[70%]' : 'bottom-[-55%]'} hidden group-hover:block absolute right-[18%] px-4 py-3 w-50 h-30 border-2 rounded-sm bg-white z-20 text-black duration-800`}>
                                            <div class="flex flex-col gap-3 ">
                                                {/* <Link to='./login'> */}
                                                <div onClick={handleNavigateLogin} className='flex justify-center bg-[#86bb86] text-sm text-[#fff] py-2 px-12 hover:bg-[#0E740E] cursor-pointer'>
                                                    Đăng nhập
                                                </div>
                                                {/* </Link> */}
                                                {/* <Link to='./signup'> */}
                                                <div onClick={handleNavigateSignup} className='flex justify-center  bg-[#86bb86] text-sm text-[#fff] py-2 px-12 hover:bg-[#0E740E] cursor-pointer'>
                                                    Đăng ký
                                                </div>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between bg-[#86bb86] px-4 ml-8 my-2  rounded-[40px] w-full md:flex md:w-auto md:order-1'>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    color="#fff"
                                    size="lg"
                                    style={{ paddingLeft: '10px' }}
                                    fixedWidth
                                />
                            </div>
                            <div className='flex flex-col text-[#fff] pl-3'>
                                <div className='font-bold text-sm'>
                                    3.000.000đ
                                </div>
                                <div className='font-light text-xs'>
                                    12 sản phẩm
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    )
}
