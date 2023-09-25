import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.css'
import { faEnvelope, faSearch, faLocationDot, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function header() {

    const [scrolled, setScrolled] = useState(false);
    const [toogleMenu, setToogleMenu] = useState(false);

    const openMegaMenu = () => {
        setToogleMenu(true);
    }
    const closeMegaMenu = () => {
        setToogleMenu(false);
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


    return (
        <div className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ''}`}>
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
                        <a href='#' style={{ alignItems: 'center' }}> <p className={styles.headerTopText} >JOIN FANPAGE</p></a>
                    </div>
                </div>)}

            </div>
            <div>
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
                                <div className='group'>
                                    <li className='beana-top-menu-item'>
                                        SẢN PHẨM
                                    </li >
                                    <div className={`group ${scrolled ? 'top-[110px]' : 'top-[136px]'} hidden group-hover:flex flex-col absolute left-0 p-10 w-full border-t-2 bg-white z-20 text-black duration-800`}>
                                        <div class="grid grid-cols-2 grid-cols-4 gap-5 mx-28">
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
                                <Link to='./'>
                                    <li className='beana-top-menu-item group'>
                                        FACE SCANNING
                                    </li >
                                </Link>
                                <Link to='./'>
                                    <li className='beana-top-menu-item group'>
                                        MẸO CHĂM SÓC DA
                                    </li >
                                </Link>
                                <Link to='./'>
                                    <li className='beana-top-menu-item group'>
                                        VỀ BEANA
                                    </li >
                                </Link>
                            </ul>
                        </div>
                        <div className='items-center justify-between  font-bold  w-full md:flex md:w-auto md:order-1'>
                            <ul>
                                <li className='flex flex-row '>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        color="#0E740E"
                                        size="lg"

                                        fixedWidth
                                    />
                                    <div className='border-solid border-r-2 border-[#767373] p-2'></div>
                                    <div className='flex flex-row'>
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            color="#0E740E"
                                            size="lg"
                                            style={{ paddingLeft: '10px' }}
                                            fixedWidth
                                        />
                                        <p className='pl-1 text-sm font-semibold'> Đăng Nhập</p>
                                    </div>
                                </li>
                            </ul>
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
