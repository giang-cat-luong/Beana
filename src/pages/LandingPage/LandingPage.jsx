import BannerScanning from './components/BannerScanning'
import BannerAboutUs from './components/BannerAboutUs'
import NewProduct from './components/NewProduct'
import BannerEvent from './components/BannerEvent'

import ProductEvent from './components/ProductEvent'
import SkincareTips from './components/SkincareTips'
import BestSellerProduct from './components/BestSellerProduct'
import Slider from '../../components/Slider'


export default function LandingPage() {

    const sliderUrls = [
        './assets/slider1.jpg',
        './assets/slider2.jpeg',
        './assets/slider3.png',
    ];
    const sliderTitle = [
        'PHÂN TÍCH DA MẶT AI BEANA ',
        'PHÂN TÍCH DA MẶT AI BEANA ',
        '',
    ];

    const sliderDescription = [
        'Tìm kiếm một thói quen chăm sóc da đầy đủ? Công cụ phân tích chăm sóc da ảo MỚI của chúng tôi đánh giá làn da của bạn và đưa ra các đề xuất được cá nhân hóa nhất.',
        'Tìm kiếm một thói quen chăm sóc da đầy đủ? Công cụ phân tíchc hăm sóc da ảo MỚI của chúng tôi đánh giá làn da của bạn và đưa ra các đề xuất được cá nhân hóa nhất.',
        '',
    ];
    const sliderButton = [
        'Tìm hiểu thêm',
        'Tìm hiểu thêm',
        '',
    ];
    const sliderTitleColor = [
        '#fff',
        '#49b949',
    ];
    const sliderTitleDescription = [
        '#fff',
        '#49b949',
    ];

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
            <BannerEvent />
            <Slider
                sliderUrls={sliderUrls}
                title={sliderTitle}
                description={sliderDescription}
                button={sliderButton}
                colorTitle={sliderTitleColor}
                colorDescription={sliderTitleDescription}
            />
            <div className=' flex flex-col justify-center mt-20'>
                <h1 className='beana-product-title-header'>CÁC LOẠI SẢN PHẨM</h1>
                <div className='flex flex-row justify-center gap-6 pb-20 '>
                    {productCategory.map((category, index) => (
                        <a href='#' key={index}>
                            <div className='flex flex-col '>
                                <img className='w-[100%] h-[400px] border-[1px] border-[#DFDFDF]' src={category.url} />
                                <p className='flex justify-center pt-5 font-medium hover:text-[#49B949] cursor-pointer'> {category.name}</p>
                            </div>
                        </a>

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
