import { useState, useEffect } from 'react';


export default function ProductDescription({ data }) {

  const productDescription = [
    {
      id: 1,
      name: "Chi tiết sản phẩm",
      description: data?.description
    },
    {
      id: 2,
      name: " Cách sử dụng",
      description: data?.howToUse
    },
    {
      id: 3,
      name: "Thành phần",
      description: data?.ingredients
    },
    {
      id: 4,
      name: "Điều gì làm sản phẩm đặc biệt",
      description: data?.mainFunction
    },
    {
      id: 5,
      name: "Chứng nhận về sản phẩm",
      description: data?.certification
    },
  ]

  const [selectedItem, setSelectedItem] = useState(productDescription[0]);
  const [defaultSelectedItem] = useState(productDescription[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {

    setAnimationKey(animationKey + 1);
  }, [selectedItem]);


  const handleDescriptionClick = (item) => {
    setSelectedItem(item);
    setIsHide(false);
  };
  const hideParagraph = (item) => {
    setIsHide(!isHide);
  };
  return (
    <div className='pt-24'>
      <div className='flex flex-row justify-between text-base text-[#606060] font-bold border-b-2 pb-1'>
        {productDescription.map((proDes, index) => (
          <div
            className={`beana-product-description-head cursor-pointer ${selectedItem === proDes ? 'text-[#49b949] relative after:absolute after:bottom-[-4px] after:left-0 after:bg-[#49B949] after:h-0.5 after:w-full' : ''}`}
            key={index}
            onClick={() => handleDescriptionClick(proDes)}
          >
            {proDes.name}
          </div>
        ))}
      </div>

      <div key={animationKey} className={`bg-white py-5 px-5 ${selectedItem ? 'animate-sliderDescription' : ''}`}>
        {selectedItem &&
          <div className=''>
            <div className='text-base text-[#49b949] font-bold'>
              {selectedItem.name}
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
              {isHide ? (<div>Bộ sưu tập Son Thỏi 3CE Soft Matte Lipstick Phiên Bản Đặc Biệt <br /> Deep Under More Deep hiện đã có mặtBeana với 3 tông<br />
                màu cho bạn lựa chọn là:<br />

                Eternal Warm (Gạch Caramel): Gam màu gạch caramel bao bọc, <br /> cảm nhận sự ấm áp từ màu sắc.<br />

                Sensual Brezze (Đỏ Hồng Tía): Màu đỏ hồng tía trầm lặng trở nên<br />  sống động hơn bởi sự ôn hoà và thoải mái.<br />

                Unstained Red (Đỏ Phấn): Một tấm gương trong suốt phản chiếu tính cách. <br /> Màu đỏ trầm giúp bạn tỏa sáng rạng rỡ, cực quyến <br />
                rũ khi lên môi.</div>) : ''}

            </div>
            <div className='relative bg-[#E0F7CD] px-3 py-3 mt-10 mb-6 border-[1px] border-[#86bb86] '>
              <p className='font-semibold text-sm'>Làm sao để phân biệt hàng có trộn hay không ?</p>
              <ul className='list-disc font-normal text-sm  pl-10'>
                <li className='pt-3'>Hàng trộn sẽ không thể <strong>xuất hoá đơn đỏ (VAT) 100%</strong> được do có hàng không nguồn gốc trong đó.</li>
                <li>Tại Beana, 100% hàng bán ra sẽ được <strong>xuất hoá đơn đỏ </strong> cho dù khách hàng có lấy hay không. Nếu
                  có nhu cầu lấy hoá đơn đỏ, quý khách vui lòng lấy trước 22h cùng ngày. Vì sau 22h, hệt Beana
                  sẽ tự động xuất hết hoá đơn cho những hàng hoá mà khách hàng không đăng kí lấy hoá đơn.</li>
                <li>Do <strong>xuất được hoá đơn đỏ 100% </strong>nên đảm bảo 100% hàng Beana là hàng chính hãng có nguồn gốc rõ ràng.</li>
              </ul>
              {!isHide &&
                <div className='w-full text-center absolute py-10 bottom-[-30%] left-0 z-50 bg-gradient-to-b from-[#ffffff33] from-0%  via-[#fff] via-70% to-[#fff] to-100%'>
                  <a
                    onClick={hideParagraph}
                    className="mt-3 bg-transparent font-normal text-[#49b949] text-[15px] border-2 border-[#49b949]  rounded-md px-11 py-[10px] hover:bg-[#49b949] hover:text-[#fff] cursor-pointer"
                  >Xem thêm nội dung</a>
                </div>
              }
            </div>
            {isHide &&
              <div className='w-full text-center '>
                <a
                  onClick={hideParagraph}
                  className="bg-transparent font-normal text-[#49b949] text-[15px] border-2 border-[#49b949]  rounded-md px-11 py-[10px] hover:bg-[#49b949] hover:text-[#fff] cursor-pointer"
                >Thu gọn nội dung</a>
              </div>
            }
          </div>
        }
      </div>

    </div>


  )
}
