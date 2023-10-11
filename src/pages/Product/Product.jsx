import SingleProduct from "../../components/SingleProduct"
import BreadCrumb from "../../components/BreadCrumb"
import SortProduct from './components/SortProduct'


const productBestSeller = [
  {
    id: 1,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "525.000đ",
    totalStars: "3",
    totalRates: "34"
  },
  {
    id: 2,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "525.000đ",
    totalStars: "3",
    totalRates: "71"
  },
  {
    id: 3,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "145.000đ",
    totalStars: "3",
    totalRates: "12"
  },
  {
    id: 4,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "2",
    totalRates: "34"
  },
  {
    id: 5,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "2",
    totalRates: "34"
  },
  {
    id: 6,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "146.000đ",
    totalStars: "4",
    totalRates: "112"
  },
  {
    id: 7,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "5",
    totalRates: "4"
  },
  {
    id: 8,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "525.000đ",
    totalStars: "3",
    totalRates: "34"
  },
  {
    id: 9,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "525.000đ",
    totalStars: "3",
    totalRates: "71"
  },
  {
    id: 10,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "145.000đ",
    totalStars: "3",
    totalRates: "12"
  },
  {
    id: 11,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "2",
    totalRates: "34"
  },
  {
    id: 12,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "145.000đ",
    totalStars: "4",
    totalRates: "112"
  },
  {
    id: 13,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "5",
    totalRates: "4"
  },
  {
    id: 14,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bioderma Sensibio H2O 500Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "525.000đ",
    totalStars: "3",
    totalRates: "34"
  },
  {
    id: 15,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bioderma Sébium H2O 500Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "525.000đ",
    totalStars: "3",
    totalRates: "71"
  },
  {
    id: 16,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "145.000đ",
    totalStars: "3",
    totalRates: "12"
  },
  {
    id: 17,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "2",
    totalRates: "34"
  },
  {
    id: 18,
    url: './assets/test1.png',
    name: "Nước Tẩy Trang Bí Đao Cocoon 140Ml",
    skinType: "Phù hợp với da dầu, da hỗn hợp thiên dầu, da mụn",
    price: "145.000đ",
    totalStars: "4",
    totalRates: "112"
  },
  {
    id: 19,
    url: './assets/test1.png',
    name: "Dầu Tẩy Trang Hoa Hồng Cocoon 140Ml",
    skinType: "Phù hợp với da khô, da hỗn hợp thiên khô, da thường",
    price: "180.000đ",
    totalStars: "5",
    totalRates: "4"
  },

];

export default function Product() {

  return (
    <div className='max-w-screen-2xl px-36 py-10 '>
      <BreadCrumb breadCrumbName="Sản phẩm"/>
      <h1 className='text-[28px] font-extrabold'>
        Sản phẩm
        <span className='pl-2 text-[16px] font-bold text-[#606060]'>(216)</span>
      </h1>
      <div className="flex flex-row justify-between pt-5 pb-2">
        <div className="text-[20px] font-bold">
          Bộ Lọc
        </div>
        <div>
          <div class="custom-select shadow-lg shadow-[#DFDFDF]">
            <select className="w-[200px] px-2 py-2  outline-2 font-semibold text-base text-[#49b949] outline-[#49b949] border-[2px] border-[#DFDFDF]">
              <option className="text-[#0C0C0C]" value="0">Bán chạy nhất</option>
              <option className="text-[#0C0C0C]" value="1">Mới nhất</option>
              <option className="text-[#0C0C0C]" value="2">Giá thấp đến cao</option>
              <option className="text-[#0C0C0C]" value="3">Giá cao đến thấp</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-8 '>
        <div className='basis-[25%] pr-12'>
          <SortProduct />
        </div>
        <div className='basis-[75%] grid grid-cols-3 gap-6'>
          {productBestSeller.map((category, index) => (
            <div className={` ${index === 6 ? 'col-span-2' : 'col-span-1'} ${index === 7 ? 'order-1' : ''}`} key={index}>
              {index === 2 ? (
                <div style={{ backgroundImage: 'url("./assets/productAds.png")' }} className="w-full h-full bg-center bg-cover">
                  <div className="pl-3 pr-2 py-6">
                    <h1 className='font-semibold text-[19px] text-[#fff]'>Lời khuyên của chuyên gia</h1>
                    <p className='font-light text-base text-[#fff] pt-2 leading-6'>
                      Hãy dành chút thời gian để cảm thấy phấn chấn với dịch vụ làm
                      đẹp miễn phí, riêng biệt. đội ngũ chuyên gia của chúng tôi sẵn
                      sàng trợ giúp trực tiếp.
                    </p>
                  </div>
                </div>
              ) : index === 6 ? (
                <a href="/">
                  <div style={{ backgroundImage: 'url("./assets/productAds1.jpg")' }} className="w-full h-full bg-center bg-cover">
                    <div className="pl-5 pr-32 py-6 text-[#32439b]">
                      <h1 className='font-semibold text-[22px] ]'>#CHƠI MINIGAME NHẬN QUÀ</h1>
                      <p className='font-semibold text-base ] pt-2 leading-6'>
                        Totale Super Potent Rich Cream
                      </p>
                      <ul className="list-disc">
                        <li className="ml-6 py-2 font-normal ]">Kem totale super potent rich cream - nuôi dưỡng & phục hồi mạnh mẽ</li>
                        <li className="ml-6 font-normal ">Công thức với 88% thành phần có nguồn gốc tự nhiên</li>
                      </ul>
                      <button className="mt-3 bg-[#32439b] shadow-md shadow-[#32439b] font-normal text-[#fff] text-[14px] border-2 px-6 py-2 hover:bg-[#4255ab] hover:text-[#fff] hover:shadow-md hover:shadow-[#4255ab]">Chơi ngay</button>
                    </div>
                  </div>
                </a>

              ) : index === 7 ? null
                : index === 14 ? (
                  <div style={{ backgroundImage: 'url("./assets/productAds4.png")' }} className="w-full h-full bg-center bg-cover object-cover relative">
                    <div className="flex flex-col justify-between px-3 py-6 text-[#fff]">
                      <h1 className='font-semibold text-[19px]'>Phân tích chăm sóc da ảo MỚI</h1>
                      <p className='font-light text-base ] pt-2 leading-6'>
                        Tìm kiếm một thói quen chăm sóc da đầy đủ? Công cụ phân tích chăm
                        sóc da ảo MỚI của chúng tôi đánh giá làn da của bạn và đưa ra các đề xuất được cá nhân hóa nhất.
                      </p>
                      <ul className="list-disc">
                        <li className="ml-6 font-normal ">Có sẵn dành riêng cho điện thoại di động</li>
                      </ul>
                      <img className='w-16 h-16 mt-2 mr-4 mb-4 absolute bottom-0 right-0' src='./assets/qr-code.png' />
                    </div>
                  </div>
                ) : (
                  <SingleProduct
                    id={category.id}
                    url={category.url}
                    name={category.name}
                    skinType={category.skinType}
                    price={category.price}
                    totalStars={category.totalStars}
                    totalRates={category.totalRates}
                  />
                )}
            </div>
          ))}
        </div>

      </div>

    </div >
  )
}
