import SingleProduct from '../../../../../components/singleProduct/singleProduct'

export default function newProduct() {

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
    ];

    return (
        <div className='max-w-screen-2xl px-12 py-12'>
            <div className='flex flex-col bg-[#86bb86]'>
                <div className='px-24 py-10 pb-24'>
                    <h1 className='beana-product-title-header text-[#fff] flex justify-center'>SẢN PHẨM MỚI</h1>
                    <div className='flex flex-row gap-6'>
                        <div className='basis-1/2'>
                            <img src='./assets/bannerNewProduct.png' />
                            <h1 className='font-semibold text-[26px] text-[#FDABD2] pt-6 hover:text-[#eec4d7] cursor-pointer'>Kem Dưỡng Da Mụn Trứng Cá Bioderma 30Ml </h1>
                            <p className='font-light text-lg text-[#fff] pt-1 leading-7'>
                                Kem dưỡng giảm mụn nhẹ. Điều hòa chất lượng bã
                                nhờn khỏe mạnh, tránh gây tắc lỗ chân lông. Giảm mụn
                                và ngăn ngừa mụn quay trở lại, cải thiện bề mặt da
                            </p>
                        </div>
                        <div className='basis-1/2 flex flex-row gap-6'>
                            {productBestSeller.map((category) => (
                                <div>
                                    <SingleProduct
                                        url={category.url}
                                        name={category.name}
                                        skinType={category.skinType}
                                        price={category.price}
                                    />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
