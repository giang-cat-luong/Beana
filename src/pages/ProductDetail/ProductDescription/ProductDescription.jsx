import { useState, useEffect } from 'react';

const productDescription = [
  {
    id: 1,
    name: "Chi tiết sản phẩm",
    description: "Chi tiết sản phẩm"
  },
  {
    id: 2,
    name: " Cách sử dụng",
    description: "Cách sử dụng"
  },
  {
    id: 3,
    name: "Thành phần",
    description: "Thành phần"
  },
  {
    id: 4,
    name: "Điều gì làm sản phẩm đặc biệt",
    description: "Điều gì làm sản phẩm đặc biệt"
  },
  {
    id: 5,
    name: "Chứng nhận về sản phẩm",
    description: " Chứng nhận về sản phẩm"
  },
]
export default function ProductDescription() {

  const [selectedItem, setSelectedItem] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    // Mỗi khi selectedItem thay đổi, tăng animationKey để reset animation
    setAnimationKey(animationKey + 1);
  }, [selectedItem]);


  const handleDescriptionClick = (item) => {
    setSelectedItem(item);
  };
  const hideParagraph = (item) => {
    setIsHide(!isHide);
  };
  return (
    <div className='pt-24'>
      <div className='flex flex-row justify-between text-base text-[#606060] font-bold border-b-2 pb-1'>
        {productDescription.map((proDes, index) => (
          <div
            className={`beana-product-description-head cursor-pointer ${selectedItem === proDes && 'text-[#49b949]'}`}
            key={index}
            onClick={() => handleDescriptionClick(proDes)}
          >
            {proDes.name}
          </div>
        ))}
      </div>

      <div key={animationKey} className={`py-5 px-5 ${selectedItem ? 'animate-sliderDescription' : ''}`}>
        {selectedItem &&
          <div className=''>
            <div className='text-base text-[#49b949] font-bold'>
              {selectedItem.name}
            </div>
            <div>
              {selectedItem.description}
              3CE Soft Matte Lipstick – Version Deep Under More Deep vẫn <br /> giữ nguyên kết cấu mềm mại đặc trưng và độ bám màu cao,<br />
              giúp đôi môi luôn mềm mại, mịn màng như nhung. Công thức với bột<br />  đàn hồi silicon giúp son nhẹ nhàng lướt êm trên môi, <br />
              cho lớp nền môi nhẹ thoáng, mịn lì, cảm giác như không đánh son. <br /> Bên cạnh đó, hạt phức hợp semi-solid sẽ giúp màu son <br />
              được lưu giữ trên môi lâu hơn, không bị phai hay nứt nẻ.

              Chỉ với một lần lướt nhẹ trên môi, Son Thỏi 3CE Soft Matte<br />  Lipstick – Version Deep Under More Deep sẽ mang đến một lớp<br />
              nền hoàn hảo cho đôi môi của bạn với khả năng lâu trôi màu<br />  vượt trội, không lộ vân môi, không gây khô môi. Hãy để thỏi<br />
              son này mang đến sắc màu tô điểm đôi môi đẹp xinh cả ngày <br /> dài!
              <div>...</div>
              {isHide ? (<div>Bộ sưu tập Son Thỏi 3CE Soft Matte Lipstick Phiên Bản Đặc Biệt <br /> Deep Under More Deep hiện đã có mặt tại Hasaki với 3 tông<br />
                màu cho bạn lựa chọn là:<br />

                Eternal Warm (Gạch Caramel): Gam màu gạch caramel bao bọc, <br /> cảm nhận sự ấm áp từ màu sắc.<br />

                Sensual Brezze (Đỏ Hồng Tía): Màu đỏ hồng tía trầm lặng trở nên<br />  sống động hơn bởi sự ôn hoà và thoải mái.<br />

                Unstained Red (Đỏ Phấn): Một tấm gương trong suốt phản chiếu tính cách. <br /> Màu đỏ trầm giúp bạn tỏa sáng rạng rỡ, cực quyến <br />
                rũ khi lên môi.</div>) : ''}

            </div>
            <button onClick={hideParagraph} className="mt-3 bg-[#32439b] shadow-md shadow-[#32439b] font-normal text-[#fff] text-[14px] border-2 px-6 py-2 hover:bg-[#4255ab] hover:text-[#fff] hover:shadow-md hover:shadow-[#4255ab]">Chơi ngay</button>
          </div>
        }
      </div>
    </div>


  )
}
