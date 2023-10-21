import SingleProduct from "../../../../components/SingleProduct"

export default function NewProduct({ data }) {

    const productBestSeller = [
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
            skinType: "Phấn Nước Che Phủ Mỏng Nhẹ, Mịn Mượt Lâu Trôi Maybelline New York Fit Me Matte + Poreless Oil Control Cushion",
            price: "525.000đ",
            totalStars: "3",
            totalRates: "34"
        },
        {
            url: './assets/product.png',
            name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
            skinType: "Sữa Rửa Mặt Nghệ Hưng Yên Da Sạch Mịn Và Rạng Rỡ Hung Yen Turmeric Cleanser Clean And Radiant Skin Cocoon 140Ml",
            price: "525.000đ",
            totalStars: "5",
            totalRates: "14"
        },
    ];

    return (
        <div className='max-w-screen-2xl px-12 py-12'>
            <div className='flex flex-col bg-[#86bb86]'>
                <div className='px-24 py-10 pb-24'>
                    <h1 className='beana-product-title-header text-[#fff] flex justify-center'>SẢN PHẨM MỚI</h1>
                    <div className='flex flex-row gap-6'>
                        <div className='basis-1/2'>
                            <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708904/Beana_assets/bannerNewProduct_rxyquv.png' />
                            <h1 className='font-semibold text-[26px] text-[#FDABD2] pt-6 hover:text-[#eec4d7] cursor-pointer'>Kem Dưỡng Da Mụn Trứng Cá Bioderma 30Ml </h1>
                            <p className='font-light text-lg text-[#fff] pt-1 leading-7'>
                                Kem dưỡng giảm mụn nhẹ. Điều hòa chất lượng bã
                                nhờn khỏe mạnh, tránh gây tắc lỗ chân lông. Giảm mụn
                                và ngăn ngừa mụn quay trở lại, cải thiện bề mặt da
                            </p>
                        </div>
                        <div className='basis-1/2 flex flex-row gap-6'>
                            {data?.slice(2,4).map((product, index) => (
                                <div className='basis-1/2 flex flex-row gap-6' key={index}>
                                    <SingleProduct
                                        id={product.id}
                                        url={product.productImageList}
                                        name={product.name}
                                        skinType={product?.productSkins}
                                        price={product.price}
                                        totalStars={product.rate}
                                        totalRates={product.rate}
                                        quantity={product.quantity}
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
