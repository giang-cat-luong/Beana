import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faAngleDoubleLeft, faAngleDoubleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AnglesDown from "../../../../components/AnimationIcon/AnglesDown";
import useGetProduct from "../../../Product/hooks/useGetProduct";
import SingleRcmProduct from "../../../../components/SingleRcmProduct/SingleRcmProduct";
import SuccessLoading from "../../../../components/Loading/SuccessLoading";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068129/Beana_svg/radiance_ybbbwm.png",
    name: "Sáng da",
    index: 1,
  },
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/pores_gjwao2.png",
    name: "Lỗ chân lông",
    index: 2,
  },
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068128/Beana_svg/finelines_a25xtt.png",
    name: "Đốm tối",
    index: 3,
  },
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/wrinkles_l2h7uo.png",
    name: "Độ đàn hồi",
    index: 4,
  },
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/8_aokeh8.png",
    name: "Tổng quan",
    index: 5,
  },
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068119/Beana_svg/darkspot_yv5ul6.png",
    name: "Quầng thâm",
    index: 6,
  },
  {
    src: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1700068118/Beana_svg/firmness_yycjul.png",
    name: "Nếp nhăn",
    index: 7,
  },
];

export default function ResultSkin({ img }) {

  const { data: products } = useGetProduct();
  const filteredProduct1 = products?.filter(product => product.childCategory.id === 1);
  const filteredProduct2 = products?.filter(product => product.childCategory.id === 1);
  const filteredProduct3 = products?.filter(product => product.childCategory.id === 3);

  const step1Product = filteredProduct1?.slice(1, 4)
  const step2Product = filteredProduct2?.slice(0, 6)
  const step3Product = filteredProduct3?.slice(0, 2)

  const [page, setPage] = useState(0);
  const [step, setStep] = useState(1);

  const [currentImageByIndex, setCurrentImageByIndex] = useState(5);
  const [selectedImageIndex, setSelectedImageIndex] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [redirecting, setRedirecting] = useState(false);

  const resultRef = useRef(null);

  const getEmailResult = () => {
    setRedirecting(true);
    setTimeout(() => {
      setRedirecting(false);

    }, 2000);
  }

  const getCurrentIndex = (index) => {
    setSelectedImageIndex(index);
  }
  const getCurrentDescriptionByIndex = (index) => {
    setCurrentImageByIndex(index);
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;

      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;

      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleScrollToResult = () => {
    resultRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const visibleImages = [
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
    images[(currentIndex + 4) % images.length],
    images[(currentIndex + 5) % images.length],
    images[(currentIndex + 6) % images.length],
  ];

  return (
    <div className='relative'>
      <div style={{ position: "relative" }}>
        {redirecting && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div className=' w-[70%] md:w-[30%]'>
              <SuccessLoading />
            </div>
          </div>
        )}
      </div>
      <div className="fixed top-0 w-full h-[50px] drop-shadow-2xl bg-white flex flex-row z-[9999]">
        <div onClick={() => setPage(0)} className="basis-1/2 bg-white flex items-center justify-center text-[12px] font-bold">KẾT QUẢ PHÂN TÍCH</div>
        <div onClick={() => setPage(1)} className="basis-1/2 bg-secondary flex items-center justify-center text-[12px] font-bold text-white">KHUYẾN NGHỊ SẢN PHẨM</div>
      </div>
      {page === 1 &&
        <div className="animate-screenAppear py-2 px-6 relative">
          <p className="text-[20px] font-bold mt-12">Khuyến nghị về thói quen chăm sóc da của bạn</p>
          <p className="text-[14px] font-light ">Theo phân tích da của bạn, chúng tôi khuyên bạn những sản phẩm này.</p>
          <div className="flex flex-row justify-between border-b-2 pb-1 mt-4">
            <div onClick={() => setStep(1)} className={`font-semibold text-lg ${step === 1 ? 'beana-product-description-head font-semibold' : ''}`}>Bước 1</div>
            <div onClick={() => setStep(2)} className={`font-semibold text-lg ${step === 2 ? 'beana-product-description-head font-semibold' : ''}`}>Bước 2</div>
            <div onClick={() => setStep(3)} className={`font-semibold text-lg ${step === 3 ? 'beana-product-description-head font-semibold' : ''}`}>Bước 3</div>
          </div>
          {step === 1 &&
            <div className="mt-4 animate-sliderDescription">
              <p className="text-secondary text-[15px]"><strong>Bước 1:</strong> Chuẩn bị sẵn sàng cho làn da của bạn</p>
              <p className="text-xss">Làn da khỏe mạnh bắt đầu với những điều cơ bản.
                Đưa làn da trở lại trạng thái cân bằng khỏe mạnh nhất để có một làn da trong trẻo.
              </p>
              <div className="mt-4">
                <SingleRcmProduct data={step1Product} />
              </div>

            </div>
          }
          {step === 2 &&
            <div className="mt-4 animate-sliderDescription">
              <p className="text-secondary text-[15px]"><strong>Bước 2:</strong> Ngăn chặn vi khuẩn + Tái tạo da mặt</p>
              <p className="text-xss">Dựa trên các vấn đề về da đã được phân tích, chúng tôi đề xuất các sản phẩm sau.
                Sử dụng các sản phẩm bước 2 sau khi bạn hoàn thành bước 1 để đạt được kết quả tối ưu.
              </p>
              <div className="mt-4">
                <SingleRcmProduct data={step2Product} />
              </div>
            </div>
          }
          {step === 3 &&
            <div className="mt-4 animate-sliderDescription">
              <p className="text-secondary text-[15px]"><strong>Bước 3:</strong> Bảo vệ làn da</p>
              <p className="text-xss">Không có quy trình chăm sóc da nào là hoàn chỉnh nếu không có kem chống nắng.
              </p>
              <div className="mt-4">
                <SingleRcmProduct data={step3Product} />
              </div>
            </div>
          }
          <div className='fixed bottom-0 w-[90%] bg-white py-3'>
            <div className='bg-white'>
              <div onClick={() => {
                setPage(1)
                getEmailResult();
              }} className='beana-button-green py-2'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  className="pr-2"
                  color='#fff'
                />
                NHẬN CHẾ ĐỘ CHĂM SÓC DA</div>
              <Link to="/landingPage">
                <div className='text-center text-xs pt-3'>VỀ TRANG CHỦ</div>
              </Link>
            </div>
          </div>
        </div>
      }
      {page === 0 &&
        <div className="h-[620px] z-0 bg-fixed animate-screenAppear" style={{ backgroundImage: `url(${img})` }}>
          {currentImageByIndex === 5 &&
            <div className="h-[620px] bg-black/5 backdrop-opacity-10 backdrop-invert ">
              <div className='animate-analyzeLineAppear'>
                <div className='absolute right-12 bottom-72'>
                  <p className='absolute bottom-1 right-0 text-white text-[10px]'>Đốm Tối</p>
                  <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
                <div className='absolute right-12 bottom-60'>
                  <p className='absolute bottom-1 right-0 text-white text-[10px]'>Độ Đàn Hồi</p>
                  <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
                <div className='absolute left-12 bottom-64'>
                  <p className='absolute bottom-1 left-0 text-white text-[10px]'>Lỗ Chân Lông</p>
                  <img className="w-24 scale-x-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
                <div className='absolute left-12 top-40'>
                  <p className='flex justify-start text-white text-[10px]'>Sáng Da</p>
                  <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
                <div className='absolute left-16 bottom-[344px]'>
                  <p className='flex justify-start text-white text-[10px]'>Quầng Thâm</p>
                  <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                </div>
                <div className='absolute right-14 top-48 flex flex-col'>
                  <p className='flex justify-end text-white text-[10px]'>Nếp nhăn</p>
                  <img className="w-24 scale-y-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                </div>
              </div>
            </div>
          }
          {currentImageByIndex !== 5 &&
            <div className="h-[620px] bg-black/30 backdrop-opacity-10 backdrop-invert ">
              {currentImageByIndex === 4 &&
                <div className='absolute right-12 bottom-60 animate-analyzeLineAppear'>
                  <p className='absolute bottom-1 right-0 text-white text-[10px]'>Độ Đàn Hồi</p>
                  <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
              }
              {currentImageByIndex === 3 &&
                <div className='absolute right-12 bottom-72 animate-analyzeLineAppear'>
                  <p className='absolute bottom-1 right-0 text-white text-[10px]'>Đốm Tối</p>
                  <img className="w-24" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
              }
              {currentImageByIndex === 2 &&
                <div className='absolute left-12 bottom-64 animate-analyzeLineAppear'>
                  <p className='absolute bottom-1 left-0 text-white text-[10px]'>Lỗ Chân Lông</p>
                  <img className="w-24 scale-x-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
              }
              {currentImageByIndex === 1 &&
                <div className='absolute left-12 top-40 animate-analyzeLineAppear'>
                  <p className='flex justify-start text-white text-[10px]'>Sáng Da</p>
                  <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060357/Beana_assets_analyze/8_zejl15.png' />
                </div>
              }
              {currentImageByIndex === 6 &&
                <div className='absolute left-16 bottom-[344px] animate-analyzeLineAppear'>
                  <p className='flex justify-start text-white text-[10px]'>Quầng Thâm</p>
                  <img className="w-24 rotate-180" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                </div>
              }
              {currentImageByIndex === 7 &&
                <div className='absolute right-14 top-48 flex flex-col animate-analyzeLineAppear'>
                  <p className='flex justify-end text-white text-[10px]'>Nếp nhăn</p>
                  <img className="w-24 scale-y-[-1]" src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700060358/Beana_assets_analyze/9_rumfam.png' />
                </div>
              }
            </div>
          }
          <div className='w-full text-center absolute py-12 bottom-0 left-0 z-50 drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] bg-gradient-to-b from-transparent from-0%  via-transparent via-5% to-[#0c1b1f] to-85%'>
            <div className='flex flex-row justify-center h-full pb-6'>
              <div
                onClick={prevSlide}
                className='flex pr-2 justify-center items-center'
              >
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  size="2x"
                  className="pt-[3px]"
                  color='#fff'
                />
              </div>
              <div className='flex flex-row gap-4 justify-center' >
                {visibleImages.map((image, index) => (
                  <div
                    className={`w-[55px] h-[55px] ${index === selectedImageIndex ? 'scale-125' : ''}`}
                    key={index}
                    onClick={() => {
                      getCurrentIndex(index)
                      getCurrentDescriptionByIndex(image.index)
                    }
                    } >
                    <img className='w-full h-full' src={image.src} />
                    <p className='text-[8px] text-white'>{image.name}</p>
                  </div>
                ))}
              </div>
              <div
                onClick={nextSlide}
                className='flex pl-2 justify-center items-center'
              >
                <FontAwesomeIcon
                  icon={faCaretRight}
                  size="2x"
                  className="pt-[3px]"
                  color='#fff'
                />
              </div>
            </div>
            <div onClick={handleScrollToResult} className='w-6 absolute bottom-2 left-1/2 -translate-x-1/2'>
              <AnglesDown />
            </div>
            <div className='w-30 absolute bottom-5 left-2 text-[10px] text-secondary'>
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className="pt-[3px] pr-2"
                color='#fff'
              />
              Khu vực da tốt
            </div>
            <div className='w-30 absolute bottom-5 right-2 text-[10px] text-red'>
              Khu vực da yếu
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="pt-[3px] pl-2"
                color='#fff'
              />
            </div>
          </div>
          <div ref={resultRef} className='relative pb-24'>
            {currentImageByIndex === 5 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN</p>
                <p className='font-light text-[12px] text-center mt-8'>Khám phá những kết quả được phát hiện từ phân tích da IT beana™ cá nhân của bạn</p>

                <div>
                  <p className='font-bold text-[18px] text-center mt-10'>DA BẠN TRÔNG CÓ VẺ ỔN</p>
                  <p className='font-light text-[12px] text-center mt-3'>Da của bạn đang phát triển xuất sắc ở những lĩnh vực này!</p>

                  <div>
                    <div className='px-3 pt-5 pb-3'>
                      <p className='font-bold text-base text-secondary'>Độ đàn hồi</p>
                      <div className='flex flex-row gap-3 items-center'>
                        <img
                          src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                          className='w-[38px] h-[38px]'
                        />
                        <p className='text-xss'>Da của bạn trông đàn hồi và mềm mại! Việc sử dụng kem chống nắng phổ rộng hàng ngày và sử dụng các sản phẩm chăm sóc da chống lão hóa có thể giúp da duy trì độ săn chắc.</p>
                      </div>
                    </div>
                    <div className='px-3 pt-2 pb-3'>
                      <p className='font-bold text-base text-secondary'>Đốm tối</p>
                      <div className='flex flex-row gap-3 items-center'>
                        <img
                          src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                          className='w-[38px] h-[38px]'
                        />
                        <p className='text-xss'>Độ đồng đều của làn da bạn trông rất tốt! Việc sử dụng kem chống nắng phổ rộng hàng ngày có thể giúp ngăn chặn việc xuất hiện của các đốm tối, và việc sử dụng sản phẩm chăm sóc da chứa các thành phần được biết đến có khả năng làm sáng da có thể giúp duy trì làn da có màu đồng đều.</p>
                      </div>
                    </div>
                    <div className='px-3 pt-2 pb-3'>
                      <p className='font-bold text-base text-secondary'>Lỗ chân lông</p>
                      <div className='flex flex-row gap-3 items-center'>
                        <img
                          src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                          className='w-[38px] h-[38px]'
                        />
                        <p className='text-xss'>Lỗ chân lông của bạn trông rất tốt và nhỏ! Việc sử dụng sữa rửa mặt có các hoạt chất giúp thu hẹp lỗ chất lông và ngăn chăn mụn có thể làm lỗ chân lông bạn to ra.</p>
                      </div>
                    </div>
                    <div className='px-3 pt-2 pb-3'>
                      <p className='font-bold text-base text-secondary'>Sáng da</p>
                      <div className='flex flex-row gap-3 items-center'>
                        <img
                          src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                          className='w-[38px] h-[38px]'
                        />
                        <p className='text-xss'>Da bạn trông rạng rỡ và sáng bóng! Khi chúng ta già đi, quá trình tái tạo tế bào da chậm lại, vì vậy việc sử dụng các sản phẩm chăm sóc da chứa thành phần tẩy tế bào da sẽ giúp da trông trẻ trung hơn. Sử dụng các sản phẩm chăm sóc da với các thành phần làm sáng và bảo vệ da khỏi các gốc tự do, bao gồm tia UV và ô nhiễm, có thể giúp da trông rạng ngời.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-[#fdf0f3] py-4 mt-4'>
                  <p className='font-bold text-[18px] text-center'>DA BẠN CẦN ĐƯỢC GIÚP ĐỠ</p>
                  <p className='font-light text-[12px] text-center mt-3 px-3'>Chúng ta đều có mỗi quan tâm về da. Không sao đã có giải pháp cung cấp bởi Beana!</p>

                  <div>
                    <div className='px-3 pt-5 pb-3'>
                      <p className='font-bold text-base text-[#ff007e]'>Quầng thâm</p>
                      <div className='flex flex-row gap-3 items-center'>
                        <img
                          src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                          className='w-[38px] h-[38px]'
                        />
                        <p className='text-xss'>Quầng thâm dưới mắt của bạn trông có vẻ không được sáng.Việc thức khuyu, stress cũng góp phần làm cho quầng thâm dưới mắt của bạn xuất hiện.Các sản phẩm chăm sóc da có thành phần tẩy tế bào và giảm dầu thừa có thể giúp giảm thiểu quầng thâm một cách rõ ràng</p>
                      </div>
                    </div>
                    <div className='px-3 pt-2 pb-3'>
                      <p className='font-bold text-base text-[#ff007e]'>Nếp nhăn</p>
                      <div className='flex flex-row gap-3 items-center'>
                        <img
                          src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1699984690/Beana_svg/combination_second_u88vth.svg'
                          className='w-[38px] h-[38px]'
                        />
                        <p className='text-xss'>"Tất cả chúng ta đều có nếp nhăn, chúng có thể từ rất khó nhận thấy đến nếp nhăn đã hiện rõ. Việc thức khuyu hay stress hoặc vấn đề tuổi tác có thể làm hiện rõ nếp nhăn, làm cho cấu trúc da trở nên không đồng đều và mịn màng hơn. Các sản phẩm chăm sóc da có thành phần tẩy tế bào và giảm dầu thừa có thể giúp giảm thiểu nếp nhăn một cách rõ ràng.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {currentImageByIndex === 5}

              </div>
            }
            {currentImageByIndex === 4 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                <p className='font-bold text-[24px] text-center'>Độ đàn hồi</p>
                <p className='font-light text-[12px] text-center mt-4 px-6'>
                  Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                  Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                </p>

                <div className='px-5 relative'>
                  <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                  <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                  <div className='absolute left-[38%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                    <p className='text-[8px] text-center'>Kết quả da</p>
                    <div className='flex flex-row items-center justify-center'>
                      <p className='text-[14px]'>4.5</p>
                      <p className='text-[12px]'>/10</p>
                    </div>
                    <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                    </div>
                  </div>

                  <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                    <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                  </div>

                  <div className='flex flex-row justify-between pt-3'>
                    <p className='text-[10px] text-left'>0</p>
                    <p className='text-[9px] text-center'>Average</p>
                    <p className='text-[10px] text-right'>10</p>
                  </div>

                </div>
              </div>
            }
            {currentImageByIndex === 3 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                <p className='font-bold text-[24px] text-center'>Đốm tối</p>
                <p className='font-light text-[12px] text-center mt-4 px-6'>
                  Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                  Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                </p>

                <div className='px-5 relative'>
                  <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                  <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                  <div className='absolute left-[40%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                    <p className='text-[8px] text-center'>Kết quả da</p>
                    <div className='flex flex-row items-center justify-center'>
                      <p className='text-[14px]'>4.6</p>
                      <p className='text-[12px]'>/10</p>
                    </div>
                    <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                    </div>
                  </div>

                  <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                    <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                  </div>

                  <div className='flex flex-row justify-between pt-3'>
                    <p className='text-[10px] text-left'>0</p>
                    <p className='text-[9px] text-center'>Average</p>
                    <p className='text-[10px] text-right'>10</p>
                  </div>

                </div>
              </div>
            }
            {currentImageByIndex === 2 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                <p className='font-bold text-[24px] text-center'>Lỗ chân lông</p>
                <p className='font-light text-[12px] text-center mt-4 px-6'>
                  Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                  Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                </p>

                <div className='px-5 relative'>
                  <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                  <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                  <div className='absolute left-[36%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                    <p className='text-[8px] text-center'>Kết quả da</p>
                    <div className='flex flex-row items-center justify-center'>
                      <p className='text-[14px]'>4.3</p>
                      <p className='text-[12px]'>/10</p>
                    </div>
                    <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                    </div>
                  </div>

                  <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                    <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                  </div>

                  <div className='flex flex-row justify-between pt-3'>
                    <p className='text-[10px] text-left'>0</p>
                    <p className='text-[9px] text-center'>Average</p>
                    <p className='text-[10px] text-right'>10</p>
                  </div>

                </div>
              </div>
            }
            {currentImageByIndex === 1 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[10px] text-secondary text-center mt-6'>Khu Vực Da Tốt</p>
                <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                <p className='font-bold text-[24px] text-center'>Sáng da</p>
                <p className='font-light text-[12px] text-center mt-4 px-6'>
                  Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                  Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                </p>

                <div className='px-5 relative'>
                  <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                  <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                  <div className='absolute left-[40%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                    <p className='text-[8px] text-center'>Kết quả da</p>
                    <div className='flex flex-row items-center justify-center'>
                      <p className='text-[14px]'>4.8</p>
                      <p className='text-[12px]'>/10</p>
                    </div>
                    <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                    </div>
                  </div>

                  <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                    <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                  </div>

                  <div className='flex flex-row justify-between pt-3'>
                    <p className='text-[10px] text-left'>0</p>
                    <p className='text-[9px] text-center'>Average</p>
                    <p className='text-[10px] text-right'>10</p>
                  </div>

                </div>
              </div>
            }
            {currentImageByIndex === 6 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[10px] text-red text-center mt-6'>Khu Vực Da Yếu #1</p>
                <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                <p className='font-bold text-[24px] text-center'>Quầng thâm</p>
                <p className='font-light text-[12px] text-center mt-4 px-6'>
                  Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                  Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                </p>

                <div className='px-5 relative'>
                  <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                  <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                  <div className='absolute left-[25%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                    <p className='text-[8px] text-center'>Kết quả da</p>
                    <div className='flex flex-row items-center justify-center'>
                      <p className='text-[14px]'>3.5</p>
                      <p className='text-[12px]'>/10</p>
                    </div>
                    <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                    </div>
                  </div>

                  <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                    <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                  </div>

                  <div className='flex flex-row justify-between pt-3'>
                    <p className='text-[10px] text-left'>0</p>
                    <p className='text-[9px] text-center'>Average</p>
                    <p className='text-[10px] text-right'>10</p>
                  </div>

                </div>
              </div>
            }
            {currentImageByIndex === 7 &&
              <div className='animate-cartAppear'>
                <p className='font-bold text-[10px] text-red text-center mt-6'>Khu Vực Da Yếu #2</p>
                <p className='font-light text-[24px] text-center mt-6'>KẾT QUẢ CỦA BẠN CHO</p>
                <p className='font-bold text-[24px] text-center'>Nếp nhăn</p>
                <p className='font-light text-[12px] text-center mt-4 px-6'>
                  Lo ngại về da? Chúng tôi - IT beana đã có giải pháp cho bạn. <br />
                  Khám phá kết quả tùy chỉnh của bạn dựa trên công nghệ quét da tiên tiến của IT.
                </p>

                <div className='px-5 relative'>
                  <p className='font-bold text-[18px] text-center mt-6'>Kết Quả Phân Tích Da Của Bạn</p>
                  <p className='font-light text-[12px] text-center mt-1'>Dưới đây là nơi kết quả của bạn nằm trong phổ.</p>

                  <div className='absolute left-[22%] bottom-16 border border-black rounded-[5px] w-[4rem] py-[3px] bg-white'>
                    <p className='text-[8px] text-center'>Kết quả da</p>
                    <div className='flex flex-row items-center justify-center'>
                      <p className='text-[14px]'>3.0</p>
                      <p className='text-[12px]'>/10</p>
                    </div>
                    <div className='absolute bg-black bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] border border-black rotate-45 -z-10'>
                    </div>
                  </div>

                  <div className='relative mt-20 h-5 w-[100%] rounded-lg bg-gradient-to-r from-[#f9688a] from-0%  via-[#f9fc4d] via-50% to-[#9ed17e] to-100%'>
                    <div className='h-8 border-r border-black absolute bottom-[-6px] left-1/2 -translate-x-1/2'></div>
                  </div>

                  <div className='flex flex-row justify-between pt-3'>
                    <p className='text-[10px] text-left'>0</p>
                    <p className='text-[9px] text-center'>Average</p>
                    <p className='text-[10px] text-right'>10</p>
                  </div>

                </div>
              </div>
            }
          </div>
          <div className='fixed bottom-0 w-[100%] bg-white py-3 px-4'>
            <div className='bg-white'>
              <div onClick={() => setPage(1)} className='beana-button-green py-2 '>XEM LỊCH TRÌNH CHĂM SÓC DA</div>
              <Link to="/landingPage">
                <div className='text-center text-xs pt-3'>VỀ TRANG CHỦ</div>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
