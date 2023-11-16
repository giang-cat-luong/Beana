import ProgessLoading from "../../../../components/Loading/ProgessLoading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';

export default function UploadImage({img,loading,handleNextPage}) {
  return (
    <div className='relative'>
      <img
        src={img}
        className='h-[620px] w-[800px] z-0'
      />
      {loading ? (
        <div className='fixed bottom-0 w-full h-24 bg-black/50 backdrop-opacity-10 backdrop-invert z-10'>
          <div className='flex justify-center text-secondary mt-3'> Đang tải hình lên...</div>
          <div className='w-[50%] absolute bottom-8 left-[50%] text-center -translate-x-1/2'>
            <ProgessLoading />
          </div>
        </div>
      ) : (
        <div>
          <div className='fixed bottom-0 w-full h-24 bg-white z-10 border-2'>
            <div
              className='beana-button-green mx-5 mt-2 h-9 flex items-center justify-center text-black font-bold'
              onClick={() => handleNextPage(1)}
            >
              TIẾP TỤC
            </div>
            <div className='text-black absolute bottom-2 font-semibold text-xs left-1/2 -translate-x-1/2'>CHỤP LẠI</div>
          </div>
          <div className="fixed top-0 h-16 py-5 flex justify-center items-center text-white bg-black/70 backdrop-opacity-10 w-full backdrop-invert">
            <div className='text-secondary flex flex-row gap-3 justify-center'>
              <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>ÁNH SÁNG</div>
              <div className='border-l h-5 pr-2 ml-2'></div>
              <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>VỊ TRÍ MẶT</div>
              <div className='border-l h-5 pr-2 ml-2'></div>
              <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>NHÌN THẲNG</div>
            </div>
          </div>
        </div>
      )}
      {!loading &&
        <div className='text-white text-xs tracking-wider font-medium absolute bottom-32 bg-black/70 pl-[6px] pr-2 py-[6px] rounded-3xl flex items-center left-1/2 -translate-x-1/2'>
          <FontAwesomeIcon
            icon={faCircleCheck}
            color='#49b949'
            className='text-[18px] mr-1'
          />
          SẴN SÀNG PHÂN TÍCH
        </div>
      }
    </div>
  )
}
