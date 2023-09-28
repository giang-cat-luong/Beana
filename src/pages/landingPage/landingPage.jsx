import BannerScanning from './bannerScanning/bannerScanning'
import BannerAboutUs from './bannerAboutUs/bannerAboutUs'
import NewProduct from './newProduct/newProduct'

import ProductEvent from './productEvent/productEvent'
import SkincareTips from './skincareTips/skincareTips'
import BestSellerProduct from './bestSellerProduct/bestSellerProduct'
import Slider from '../../components/slider/slider'

export default function landingPage() {
    const productCategory = [
        {
            url: './assets/makeup.png',
            name: "Trang Điểm Mặt"
        },
        {
            url: './assets/skincare.jpg',
            name: "Chăm Sóc Da Mặt"
        },
        {
            url: './assets/giftandsets.png',
            name: "Gifts And Sets"
        },
    ];

    return (
        <>
            <Slider />
            <div className=' flex flex-col justify-center mt-20'>
                <h1 className='beana-product-title-header'>CÁC LOẠI SẢN PHẨM</h1>
                <div className='flex flex-row justify-center gap-6 pb-20'>
                    {productCategory.map((category) => (
                        <div className='flex flex-col '>
                            <img className='w-[100%] h-[400px]' src={category.url} />
                            <p className='flex justify-center pt-5 font-medium hover:text-[#49B949]'> {category.name}</p>
                        </div>
                    ))}
                </div>
                <BannerScanning />
                <BestSellerProduct />
                <NewProduct />
                <ProductEvent />
                <BannerAboutUs />
                <SkincareTips />
            </div>
        </>
    )
}
