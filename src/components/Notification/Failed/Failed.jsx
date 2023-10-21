import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Failed({ isSuccess, setIsSuccess }) {

  return (
    <div className={`fixed bottom-12  bg-[#fae5e9] border-t-4 border-[#ad5162] rounded-b text-[#b0233a] px-4 py-3 z-[9999] shadow-md ${!isSuccess ? 'right-0 animate-messageAppear' : 'right-[-480px]'}`}>
      <div className="flex pr-3 ">
        <div className="py-1 pr-3">
          <img className='w-10' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697786446/Beana_assets/beanFailed_wafaeu.png' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className="font-bold">Our privacy policy has changed</p>
          <p className="text-sm">Make sure you know how these changes affect you.</p>
        </div>
      </div>
      <div className='absolute top-3 right-3 cursor-pointer' onClick={() => setIsSuccess(false)}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='text-[25px] text-[#b0233a] hover:text-[#743944]'
        />
      </div>
    </div>
  )
}
