import SliderBanner from "../../components/Slider";
import { useState } from "react";
import Questionnaire from "../../components/Questionnaire/Questionnaire";

const sliderUrls = [
  './assets/slider1.jpg',
];
const sliderTitle = [
  'PHÂN TÍCH DA MẶT AI BEANA ',
];

const sliderDescription = [
  'Tìm kiếm một thói quen chăm sóc da đầy đủ? Công cụ phân tích chăm sóc da ảo MỚI của chúng tôi đánh giá làn da của bạn và đưa ra các đề xuất được cá nhân hóa nhất.',
];
const sliderTitleColor = [
  '#fff',
];
const sliderTitleDescription = [
  '#fff',
];
const sliderImg = [
  './assets/qr-code.png',
];

export default function ScanningFace() {

  const [isOpenQA, setIsOpenQA] = useState(false);

  const toggleQuestionQA = () => {
    setIsOpenQA(!isOpenQA);
  }
  return (
    <div>
      {isOpenQA && <Questionnaire />}
      <SliderBanner
        sliderUrls={sliderUrls}
        title={sliderTitle}
        description={sliderDescription}
        colorTitle={sliderTitleColor}
        colorDescription={sliderTitleDescription}
        img={sliderImg}
      />
      <div className="md:hidden flex justify-center border-[1px] border-white mx-28 py-1 my-5 rounded-3xl bg-primary text-white shadow-md shadow-primary hover:bg-secondary hover:shadow-md hover:shadow-secondary cursor-pointer">
        BẮT ĐẦU QUÉT DA MẶT
      </div>
      <div className="max-w-screen-2xl md:px-36">
        <div className="md:py-20 md:flex md:flex-col md:gap-24">
          <div className="px-6 md:flex md:flex-row md:justify-between md:items-center md:gap-36">
            <img className="basis-1/2 w-[520px] h-[456px] md:p-0 " src="./assets/facescanning1.png" />
            <div className="basis-1/2">
              <p className="pt-8 md:pt-0 font-semibold text-black text-lg">KHÁM PHA DA MẶT CỦA BẠN</p>
              <p className="font-medium text-black text-sm pt-6">Vấn đề về da? Tất cả chúng
                ta đều gặp phải chúng - và CÔNG CỤ ĐÓ có giải pháp cho bạn. Hãy thử công nghệ quét
                da của chúng tôi để khám phá lịch trình chăm sóc da được cá nhân hóa của bạn chỉ trong
                vài giây.<br /> Điều này đơn giản như việc tự chụp một bức ảnh tự sướng!</p>
            </div>
          </div>
          <div className="px-6 pt-24 md:pt-0 md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-32">
            <img className="basis-1/2 w-[520px] h-[456px]" src="./assets/facescanning2.png" />
            <div className="basis-1/2">
              <p className="pt-8 md:pt-0 font-semibold text-black text-lg">MỘT CÔNG NGHỆ HIỆN ĐẠI</p>
              <p className="font-medium text-black text-sm pt-6">Sử dụng hơn 20 năm nghiên cứu về da,
                công nghệ trí tuệ nhân tạo tiên tiến và kiến thức của các chuyên gia da liễu, công cụ này
                quét da của bạn để xây dựng lịch trình chăm sóc da cá nhân của bạn, cùng với các gợi ý về
                thành phần được cá nhân hóa để đem lại kết quả thực sự!</p>
            </div>
          </div>
          <div className="px-6 pt-24 md:pt-0 md:flex flex-row justify-between items-center gap-36">
            <img className="basis-1/2 w-[520px] h-[456px]" src="./assets/facescanning3.png" />
            <div className="basis-1/2">
              <p className="pt-8 md:pt-0 font-semibold text-black text-lg">FACE SCANNING HOẠT ĐỘNG NHƯ THẾ NÀO</p>
              <p className="font-medium text-black text-sm pt-6">Công nghệ này đã được điều chỉnh để
                đánh giá da của bạn dựa trên bảy yếu tố khác nhau, sau đó đưa ra các đề xuất về sản phẩm
                và chăm sóc dựa trên những nhu cầu đặc biệt của da của bạn. Để đánh giá sự rạng rỡ, công
                cụ xem xét mức độ cung cấp nước, độ săn chắc, độ mịn màng và đồng đều của sắc tố da.</p>
            </div>
          </div>
          <div className="md:hidden flex justify-center border-[1px] border-white mx-28 py-1 my-14 rounded-3xl bg-primary text-white shadow-md shadow-primary hover:bg-secondary hover:shadow-md hover:shadow-secondary cursor-pointer">
            BẮT ĐẦU QUÉT DA MẶT
          </div>
          <div className="px-6 md:px-0 max-w-full md:flex flex-col justify-between items-center gap-5">
            <p className="pt-8 md:pt-0 font-bold text-black text-[30px] text-center">CÁC BƯỚC SỬ DỤNG FACE SCANNING</p>
            <div className="md:flex flex-row max-w-full justify-between gap-10 ">
              <div className="flex-1 pt-5">
                <img className="w-full border-[1px]" src="./assets/step1.png" />
                <p className="pt-8 md:pt-5 font-bold text-black text-[20px] text-center">BƯỚC 1 CHỤP ẢNH TỰ SƯỚNG</p>
                <p className="font-medium text-black text-sm pt-4 text-center px-5">Chụp một bức ảnh tự sướng trong ánh sáng tự nhiên với tóc buộc lên.</p>
              </div>
              <div className="flex-1 md:pt-0 pt-10">
                <img className="w-full border-[1px]" src="./assets/step2.png" />
                <p className="pt-8 md:pt-5 font-bold text-black text-[22px] text-center">BƯỚC 2 PHÂN TÍCH</p>
                <p className="font-medium text-black text-sm pt-4 text-center px-5">Hãy để công nghệ làm việc của nó, phân tích các nhu cầu riêng biệt của làn da của bạn.</p>
              </div>
              <div className="flex-1 md:pt-0 pt-10">
                <img className="w-full border-[1px]" src="./assets/step3.png" />
                <p className="pt-8 md:pt-5 font-bold text-black text-[22px] text-center">BƯỚC 3 KẾT QUẢ</p>
                <p className="font-medium text-black text-sm pt-4 text-center px-5">Khám phá phân tích làn da cá nhân và lịch trình riêng cho kết quả rõ rệt!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center border-[1px] border-white mx-28 py-1 my-10 rounded-3xl bg-primary text-white shadow-md shadow-primary hover:bg-secondary hover:shadow-md hover:shadow-secondary cursor-pointer">
        BẮT ĐẦU QUÉT DA MẶT
      </div>
      <div className="w-full bg-primary">
        <div className="flex flex-col justify-center items-center gap-4 py-9">
          <img className="hidden md:block md:w-40" src="./assets/qr-code.png" />
          <p className="font-bold text-white text-[30px] text-center">Kết quả nằm trong tầm tay của bạn! Bạn đã sẵn sàng chưa?</p>
          <p className="hidden md:block font-medium text-white text-[20px]">Quét mã QR bằng điện thoại để bắt đầu</p>
          <p className='hidden md:block text-white'>Hoặc</p>
          <button
            className="font-normal text-[#fff] text-[13px] border-2 px-6 py-2 hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
            onClick={toggleQuestionQA}
          >
            Trả Lời Một Vài Câu Hỏi
          </button>

        </div>
      </div>
      <div className="md:hidden flex justify-center border-[1px] border-white mx-28 py-1 my-10 rounded-3xl bg-primary text-white shadow-md shadow-primary hover:bg-secondary hover:shadow-md hover:shadow-secondary cursor-pointer">
        BẮT ĐẦU QUÉT DA MẶT
      </div>
    </div>
  )
}
