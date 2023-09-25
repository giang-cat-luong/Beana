import BannerScanning from '../../../../components/bannerScanning/bannerScanning'
import BannerAboutUs from './bannerAboutUs/bannerAboutUs'
import NewProduct from '../../../../components/newProduct/newProduct'
import SingleProduct from '../../../../components/singleProduct/singleProduct'
import ProductEvent from '../../../../components/productEvent/productEvent'

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
    const productBestSeller = [
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
            skinType: "Phấn Nước Che Phủ Mỏng Nhẹ, Mịn Mượt Lâu Trôi Maybelline New York Fit Me Matte + Poreless Oil Control Cushion",
            price: "525.000đ"
        },
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
            skinType: "Sữa Rửa Mặt Nghệ Hưng Yên Da Sạch Mịn Và Rạng Rỡ Hung Yen Turmeric Cleanser Clean And Radiant Skin Cocoon 140Ml",
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


    return (
        <div className=' flex flex-col justify-center items-center mt-20'>
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
            <div className='flex flex-col justify-center items-center mt-16'>
                <h1 className='beana-product-title-header'>SẢN PHẨM BÁN CHẠY NHẤT</h1>
                <div className='max-w-screen-2xl flex flex-row justify-center gap-6 px-36 pb-20'>
                    {productBestSeller.map((category) => (
                        <SingleProduct
                            url={category.url}
                            name={category.name}
                            skinType={category.skinType}
                            price={category.price}
                        />
                    ))}
                </div>
            </div>
            <NewProduct />
            <ProductEvent />
            <BannerAboutUs/>
            
        </div>


    )
}
