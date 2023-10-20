import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSearch, faLocationDot, faUser, faCartShopping, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PopularProduct from './components/PopularProduct'
import Loading from '../Loading/BeanLoading'
import CartSideBar from '../CartSideBar'

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
        name: "Quy trình chăm sóc da",
    },
    {
        url: './assets/skintips22.jpg',
        name: "Hướng dẫn chăm sóc da",
    },
    {
        url: './assets/skintips33.jpeg',
        name: "Các vấn đề về da mặt",
    },
    {
        url: './assets/skintips44.png',
        name: "Chăm sóc da trước và sau khi trang điểm",
    },
];


export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const [redirecting, setRedirecting] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const openSearchMenu = () => {
        setToggleSearch(true);
    }
    const closeSearchMenu = () => {
        setToggleSearch(false);
    }

    const toggleMobileMenu = () => {
        setToggleMenu(!toggleMenu);
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
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

    const handleOpenCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`font-Montserrat w-full fixed top-0 z-[1000] duration-500 ease-in-out ${scrolled ? 'bg-[#d6fcdf]' : 'bg-white'}`}>
            <CartSideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
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
                        <Loading />
                    </div>
                )}
            </div>

            <div className="bg-[#d6fcdf] pl-[10px]">
                {scrolled ? (<div></div>) : (
                    <div className="flex justify-center md:justify-end md:pr-[50px]">
                        <div className="flex flex-row items-center color-[#0e740e] p-[0.2rem] mr-[10px]">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                color="#0E740E"
                                size="lg"
                                style={{ paddingRight: '5px' }}
                                fixedWidth
                            />
                            <p className="text-[13px]">VIETNAM</p>
                        </div>
                        <div className="flex flex-row items-center justify-between color-[#0e740e] px-[10px] mr-[10px]">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                color="#0E740E"
                                size="lg"
                                style={{ paddingRight: '5px' }}
                                fixedWidth
                            />
                            <p className="text-[13px]">CONTACT US</p>
                        </div>
                        <div className="flex flex-row items-center bg-[#0E740E] text-white px-[0.2rem] mr-[10px]">
                            <img src='../assets/facebook.svg' className="mr-[5px] w-[25px]" />
                            <a href='https://www.facebook.com/profile.php?id=61551793473535' style={{ alignItems: 'center' }}> <p className="text-[13px]" >JOIN FANPAGE</p></a>
                        </div>
                    </div>
                )}
            </div>
            <div >
                <nav >
                    <div className="flex flex-row px-5 py-5 md:px-20 md:py-5 border-b ">
                        <a className='flex  md:pt-1' href="https://beana.com">
                            <img src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708868/Beana_assets/logo_wvawux.png" className="w-full md:w-60" alt="Beana Logo" />
                        </a>

                        <div className="hidden ml-8  font-bold  w-full md:flex md:w-auto md:items-center md:justify-between md:order-1 ">
                            <ul className="flex gap-8 mr-16 text-[14px]">
                                <div>
                                    <li className='beana-top-menu-item'>
                                        <Link to='./'>
                                            TRANG CHỦ
                                        </Link>
                                    </li >
                                </div>
                                <div>
                                    <div className='group'>
                                        <li className='beana-top-menu-item'>
                                            <Link to='./products'>
                                                SẢN PHẨM
                                            </Link>
                                        </li >
                                        <div className='hidden group-hover:flex flex-col absolute left-0 p-10  w-full bg-transparent z-20 text-black duration-300'>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'}  duration-500 h-0 overflow-hidden group-hover:h-[430px] absolute left-0 w-full  bg-white z-20 text-black duration-800`}>
                                            <div className="border-t-2 border-b-[1px] border-b-[#e6e1e1]">
                                                <div className="grid grid-cols-4 gap-5  mx-36  pt-12 pb-[67px]">
                                                    <div className='flex flex-col'>
                                                        <h3 className='beana-top-menu-text'>Trang điểm mặt</h3>
                                                        <Link to="/" className='beana-top-menu-text-links'>Kem lót</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Kem nền</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Kem che khuyết điểm</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Phẩn phủ</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Tạo khối</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Kẻ chân mày / Kẻ mắt</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Mascara</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Phấn mắt</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Má hồng</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Son môi</Link>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h3 className='beana-top-menu-text'>Chăm sóc da mặt</h3>
                                                        <Link to="/" className='beana-top-menu-text-links'>Nước tẩy trang</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Bông tẩy trang</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Kem chống nắng</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Sữa rửa mặt</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Serum - Tinh chất</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Chăm sóc da mụn</Link>
                                                        {/* <Link to="/" className='beana-top-menu-text-links'>Toners</Link>
                                                    <Link to="/" className='beana-top-menu-text-links'>Mặt nạ</Link>
                                                    <Link to="/" className='beana-top-menu-text-links'>Kem dưỡng ẩm</Link> */}
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h3 className='beana-top-menu-text'>Theo Tình Trạng Da</h3>
                                                        <Link to="/" className='beana-top-menu-text-links'>Da sáng</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Hydrat hóa</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Mụn</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Chống lão hóa</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Mẩn đỏ</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Da nhạy cảm</Link>
                                                        <Link to="/" className='beana-top-menu-text-links'>Bảo vệ khỏi ánh nắng</Link>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <img className='pb-3' src='./assets/sales.png'></img>
                                                        <h3 className='beana-top-menu-text'>   Sản phẩm mới ra mắt</h3>
                                                        <Link to="/" className='beana-top-menu-text-links'>Kem phong phú chống lão hóa toàn cầu - nuôi dưỡng & phục hồi mạnh mẽ</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <li className='beana-top-menu-item group'>
                                        <Link to='./scanning-face'>
                                            FACE SCANNING
                                        </Link>
                                    </li >
                                </div>
                                <div>
                                    <div className='group'>
                                        <li className='beana-top-menu-item group'>
                                            <Link to='./skincare-tips'>
                                                MẸO CHĂM SÓC DA
                                            </Link>
                                        </li >
                                        <div className='hidden group-hover:flex flex-col absolute left-0 p-10  w-full bg-transparent z-20 text-black duration-300'>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'} duration-500 h-0 overflow-hidden group-hover:h-[430px] flex-col absolute w-full left-0 bg-white z-20 text-black duration-800`}>
                                            <div className='flex flex-col justify-center pt-12 pb-[67px] border-t-2 border-b-[1px] border-b-[#e6e1e1]'>
                                                <div className='mx-36 flex flex-row gap-10 '>
                                                    {skincareTips.map((category, index) => (
                                                        <div key={index} className='basis-1/4'>
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
                                </div>
                                <div>
                                    <li className='beana-top-menu-item group'>
                                        <Link to='./about-us'>
                                            VỀ BEANA
                                        </Link>
                                    </li >
                                </div>
                            </ul>
                        </div>
                        <div className='hidden md:flex items-center justify-between  font-bold  w-auto md:order-1'>
                            <div
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
                                        <div className='-z-10 '>
                                            <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'} flex flex-col absolute left-0 px-10 pb-10 pt-5 w-full border-t-2 border-b-[1px] border-b-[#e6e1e1] bg-white z-20 text-black`}>
                                                <div className="flex items-center max-w-screen-2xl border-b-2 border-[#606060] mx-28 mb-10">
                                                    <img src='./assets/bean.png' className='w-6 absolute top-4 left-[10]' />
                                                    <input className="appearance-none bg-transparent border-none w-full text-[#000] font-medium pl-8 leading-tight focus:outline-none  placeholder:text-[#404040] placeholder:font-normal text-lg" type="text" placeholder="Bạn đang tìm gì?" aria-label="Full name" />
                                                    <FontAwesomeIcon
                                                        icon={faSearch}
                                                        color="#0E740E"
                                                        className='pb-1 float-left cursor-pointer'
                                                        size="2x"
                                                        fixedWidth
                                                    />
                                                </div>
                                                <div className="flex flex-row gap-5 mx-28">
                                                    <div className='basis-1/4'>
                                                        <div className='flex flex-col '>
                                                            <h3 className='beana-top-menu-text-search'>Sản phẩm đang hot</h3>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Sữa rửa mặt</Link>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Tẩy tế bào chết</Link>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Toners</Link>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Retinols (vitamin a1)</Link>
                                                        </div>
                                                        <div className='flex flex-col pt-4'>
                                                            <h3 className='beana-top-menu-text-search'>Tìm kiếm gần đây của bạn</h3>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Sữa rửa mặt</Link>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Tẩy tế bào chết</Link>
                                                            <Link to="/" className='beana-top-menu-text-links-search'>Toners</Link>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col  basis-3/4'>
                                                        <div className='flex flex-row justify-between mb-2'>
                                                            <h1 className='font-bold text-lg '>Sản phẩm phổ biến</h1>
                                                            <p className='font-bold text-sm text-[#86bb86] hover:text-[#0E740E] hover:underline hover:cursor-pointer'>Xem tất cả</p>
                                                        </div>
                                                        <div className='flex flex-row gap-6'>
                                                            {popularProduct.map((category, index) => (
                                                                <PopularProduct
                                                                    key={index}
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
                        <div className='hidden md:flex items-center font-bold w-auto md:order-1'>
                            <div className='border-solid border-r-2 border-[#767373] h-6 pl-3'></div>
                        </div>
                        <div className='hidden md:flex items-center font-bold w-auto md:order-1'>
                            <div className='group'>
                                <li className='flex flex-row'>
                                    <div className='flex flex-row items-center group cursor-pointer'>
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            color="#000"
                                            size="lg"
                                            style={{ paddingLeft: '10px' }}
                                            className='group-hover:text-[#0E740E]'
                                            fixedWidth
                                        />
                                        <p className='text-xs pl-1 md:text-sm font-semibold text-[#000] group-hover:text-[#0E740E]' > Đăng Nhập</p>
                                        <div className={`group ${scrolled ? 'top-[54%]' : 'bottom-[-4%]'} hidden group-hover:block absolute top-[64%] right-[18%] w-32 h-5 bg-transparent  z-20duration-300`}>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[70%]' : 'bottom-[-4%]'} hidden group-hover:block absolute right-[23.5%] w-10 h-10 bg-[#0E740E] z-20 rotate-45 duration-300`}>
                                        </div>
                                        <div className={`group ${scrolled ? 'top-[70%]' : 'bottom-[-55%]'} hidden group-hover:block absolute right-[18%] px-4 py-3 w-50 h-30 border-2 rounded-sm bg-white z-20 text-black duration-800`}>
                                            <div className="flex flex-col gap-3 ">
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
                        <div className='flex flex-row items-center bg-[#86bb86] px-4 py-2 ml-8 md:my-2  rounded-[40px] w-auto md:order-1 cursor-pointer'
                        onClick={handleOpenCart}
                        >
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
                        <div
                            className='pl-5 flex items-center md:hidden'
                            onClick={toggleMobileMenu}
                        >
                            <li className='flex flex-row select-none '>
                                <button className="flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg  hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black dark:hover:bg-secondary dark:hover:text-white ">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                                {toggleMenu ? (
                                    <div class={`duration-500 ease absolute top-[119px] w-full right-0 bg-white p-4 pb-0 ${scrolled ? 'top-[93px]' : ''}`}>
                                        <ul class="space-y-4 pt-3 pb-6 flex flex-col items-center">
                                            <li >
                                                <a href="#" class="text-black hover:text-secondary font-medium ">
                                                    TRANG CHỦ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-black hover:text-secondary font-medium ">
                                                    SẢN PHẨM
                                                </a>
                                            </li>
                                            <li>
                                                <Link to="/scanning-face">
                                                <a href="#" class="text-black hover:text-secondary font-medium ">
                                                    FACE SCANNING
                                                </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="#" class="text-black hover:text-secondary font-medium ">
                                                    MẸO CHĂM SÓC DA
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-black hover:text-secondary font-medium ">
                                                    VỀ BEANA
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div>
                                    </div>
                                )}


                            </li>
                        </div>

                    </div>
                </nav>
            </div>
        </div>


    )
}
