import ProgressAnalyzeLoading from "../../../../components/Loading/ProgressAnalyzeLoading/ProgressAnalyzeLoading"
import { useState,useEffect } from "react";
export default function AnalyzeSkin({ img,analyzeCountDown }) {

  
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(animationKey + 1);
  }, [analyzeCountDown]);
  return (
    <div className='relative'>
      <div key={animationKey} className="h-[620px] z-0 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
        {analyzeCountDown >= 7
          ? (
            <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert ">
              <div className='animate-analyzeAppear'>
                <img className='w-36 absolute top-40 left-1/2 -translate-x-1/2 opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/tran_qxc9hz.png' />
                <img className='w-10 absolute top-[262px] left-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-ma_sspixz.png' />
                <img className='w-6 absolute bottom-[266px] left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045965/Beana_assets_analyze/left-camtren_fcod48.png' />
                <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                <img className='w-10 absolute top-[262px] right-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-ma_qdbws4.png' />
                <img className='w-6 absolute bottom-[266px] right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-camtren_es1drv.png' />
                <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />

              </div>
            </div>
          ) : analyzeCountDown >= 6 ?
            (
              <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert ">
                <div className='animate-analyzeAppear'>
                  <img className='w-16 absolute top-[274px] left-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matrai_v1t691.png' />
                  <img className='w-16 absolute top-[274px] right-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/maphai_wrrr6p.png' />
                </div>
              </div>
            ) : analyzeCountDown >= 5 ?
              (
                <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                  <div className='animate-analyzeAppear'>
                    <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                    <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
                  </div>
                </div>
              ) : analyzeCountDown >= 4 ?
                (
                  <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                    <div className='animate-analyzeAppear'>
                      <img className='w-12 absolute top-[272px] left-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                      <img className='w-12 absolute top-[272px] right-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                    </div>
                  </div>
                ) : analyzeCountDown >= 3 ?
                  (
                    <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                      <div className='animate-analyzeAppear'>
                        <img className='w-36 absolute top-40 left-1/2 -translate-x-1/2 opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/tran_qxc9hz.png' />
                        <img className='w-10 absolute top-[262px] left-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-ma_sspixz.png' />
                        <img className='w-6 absolute bottom-[266px] left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045965/Beana_assets_analyze/left-camtren_fcod48.png' />
                        <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                        <img className='w-10 absolute top-[262px] right-[28%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-ma_qdbws4.png' />
                        <img className='w-6 absolute bottom-[266px] right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/right-camtren_es1drv.png' />
                        <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
                      </div>
                    </div>
                  ) : analyzeCountDown >= 2 ?
                    (
                      <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                        <div className='animate-analyzeAppear'>
                          <img className='w-16 absolute top-[274px] left-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matrai_v1t691.png' />
                          <img className='w-16 absolute top-[274px] right-[31%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/maphai_wrrr6p.png' />
                        </div>
                      </div>
                    ) : analyzeCountDown >= 1 ?
                      (
                        <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                          <div className='animate-analyzeAppear'>
                            <img className='w-10 absolute bottom-52 left-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/left-camduoi_ud7fxt.png' />
                            <img className='w-10 absolute bottom-52 right-[35%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700045964/Beana_assets_analyze/rightcamduoi_mgz4jw.png' />
                          </div>
                        </div>
                      ) : analyzeCountDown >= 0 &&
                      (
                        <div className="h-[620px] bg-black/40 backdrop-opacity-10 backdrop-invert">
                          <div className='animate-analyzeAppear'>
                            <img className='w-12 absolute top-[272px] left-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                            <img className='w-12 absolute top-[272px] right-[32%] opacity-30' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700048340/Beana_assets_analyze/matduoi_erkyqv.png' />
                          </div>
                        </div>
                      )
        }
      </div>
      <div className='w-full absolute bottom-20 left-[50%] text-center -translate-x-1/2 mb-6'>
        <div className='flex justify-center text-white mb-4 text-xs'>
          {analyzeCountDown >= 6
            ? 'Công nghệ quét da tiên tiến đang hoạt động'
            : analyzeCountDown >= 4 ?
              'Được phát triển với bác sĩ da liễu, cá nhân hóa cho da của bạn'
              : analyzeCountDown >= 2 ?
                'Phân tích da cá nhân của bạn đang được xử lý'
                :
                'Kết quả của bạn chỉ còn trong vài khoảnh khắc'
          }
        </div>
      </div>
      <div className='w-[90%] absolute bottom-[-10px] left-[50%] text-center -translate-x-1/2'>
        <ProgressAnalyzeLoading />
      </div>
    </div>
  )
}
