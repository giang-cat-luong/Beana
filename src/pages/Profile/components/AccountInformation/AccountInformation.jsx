import { useState } from "react";
import Datepicker from "tailwind-datepicker-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import useProfile from "./hooks/useProfile";


const options = {
  title: "Chọn ngày sinh",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-red-500",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <FontAwesomeIcon
      icon={faArrowLeft}
      color="#fff"
      size="1x"
      fixedWidth />,
    next: () => <FontAwesomeIcon
      icon={faArrowRight}
      color="#fff"
      size="1x"
      fixedWidth />,
  },
  datepickerClassNames: "top-[-200px]",
  defaultDate: new Date(),
  language: "vie",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Select Date",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric"
  }
}

export default function AccountInformation() {

  const { data: profile, isLoading } = useProfile();

  const dateObject = new Date(profile?.dob);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDateString = `${month}/${day}/${year}`;
 
  //handle date
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null)

  const handleChange = (selectedDate) => {
    setSelectedDate(new Intl.DateTimeFormat().format(selectedDate))
  }
  const handleClose = (state) => {
    setShow(state)
  }
  return (
    <div className='flex flex-row'>
      <div className='basis-1/2 text-lg py-[10px] px-5'>
        <div className=" font-bold ">Thông tin tài khoản</div>
        <div className='flex flex-row mt-4'>
          <div className='basis-2/6 flex flex-col items-center'>
            <img className='w-[70%]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png'></img>
            <div className='font-medium text-[13px] text-primary'>Tải ảnh của bạn</div>
          </div>
          <div className='basis-4/6 ml-1'>
            <input
              className="beana-input-profile bg-[#eeeeee] cursor-not-allowed"
              type="text"
              placeholder={profile?.email}
              disabled
            />
            <div className="relative">
              <input
                className="beana-input-profile mt-4"
                type="text"
                placeholder={profile?.name}
              // onChange={(event) => setProvince(event.target.value)}
              // value={province || ""}
              />
              <FontAwesomeIcon icon={faUser} size="xs" color="#8A8F91" className="absolute right-3 top-[26px]" />
            </div>
            <div className='flex flex-row gap-4 items-center mt-3'>
              <div className='flex flex-row items-center gap-1'>
                <input type="radio" name="fav_language" value="HTML" checked={profile?.gender === 0 && true} />
                <label className='text-[13px] font-medium'>Nam</label>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <input type="radio" name="fav_language" value="HTML" checked={profile?.gender === 1 && true} />
                <label className='text-[13px] font-medium'>Nữ</label>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <input type="radio" name="fav_language" value="HTML" checked={profile?.gender === 2 && true} />
                <label className='text-[13px] font-medium'>Khác</label>
              </div>
            </div>
            <div className="relative mt-2">
              <div className="font-semibold text-[13px]">Ngày sinh:</div>
              <div className="flex flex-row items-center justify-between  mt-1">
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
                  <FontAwesomeIcon icon={faCalendar} size="xs" color="#acacac" className="" />
                </Datepicker>
                <input
                  type="text"
                  className="text-[13px] absolute left-8 outline-none font-semibold"
                  placeholder={formattedDateString}
                  value={selectedDate || ""}
                  readOnly />
                <div onClick={() => setShow(true)} className="font-medium text-[13px] underline hover:text-secondary cursor-pointer">Sửa</div>
              </div>
            </div>
            <div className='flex flex-row items-center gap-1 py-1 mt-1'>
              <input type="checkbox" name="fav_language" value="HTML" />
              <label className='text-[12px] font-medium'>Nhận thông tin khuyến mãi qua e-mail</label>
            </div>
            <div className="beana-button-green-hover py-[6px] text-sm font-bold rounded-3xl mt-2">Cập nhật</div>
          </div>
        </div>
      </div>
      <div className='border-l-[1px] h-[400px] border-[##F2F1F6]'></div>
      <div className='basis-1/2 py-[10px] px-5 pb-12'>
        <div className="text-lg font-bold ">
          Số điện thoại và Email
        </div>
        <div className="flex flex-row justify-between mt-2 items-center">
          <div className="flex flex-row items-center gap-4">
            <img className="w-5 h-5" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699463152/Beana_icon/telephone_vaonfi.png" />
            <div>
              <p className="font-semibold text-[14px] text-lightBlack">Số điện thoại</p>
              <p className="font-medium text-[15px] text-lightGrey">Cập nhật số điện thoại</p>
            </div>
          </div>
          <div className="beana-button-white-hover font-semibold py-2 px-4 rounded text-[14px]">
            Cập nhật
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-row items-center gap-4">
            <img className="w-5 h-5" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699463152/Beana_icon/mail_yfzvii.png" />
            <div>
              <p className="font-semibold text-[14px] text-lightBlack">Email</p>
              <p className="font-medium text-[15px] text-lightGrey">vutruonggiang452002@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold mt-4">
          Bảo mật
        </div>
        <div className="flex flex-row justify-between mt-1">
          <div className="flex flex-row items-center gap-4">
            <img className="w-5 h-5" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699464461/Beana_icon/padlock_rwqwa1.png" />
            <div>
              <p className="font-semibold text-[14px] text-lightBlack">Đổi mật khẩu</p>
            </div>
          </div>
          <div className="beana-button-white-hover font-semibold py-2 px-4 rounded text-[14px]">
            Cập nhật
          </div>
        </div>
        <div className="text-lg font-bold mt-4">
          Liên kết mạng xã hội
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row items-center gap-4">
            <img className="w-5 h-5" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708784/Beana_assets/google_aq6hfx.svg" />
            <div>
              <p className="font-semibold text-[14px] text-lightBlack">Google</p>
            </div>
          </div>
          <div className="beana-button-white-hover font-semibold py-2 px-4 rounded text-[14px]">
            Cập nhật
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-row items-center gap-4">
            <img className="w-5 h-5" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708782/Beana_assets/facebook_ir5hat.svg" />
            <div>
              <p className="font-semibold text-[14px] text-lightBlack">Facebook</p>
            </div>
          </div>
          <div className="beana-button-white-hover font-semibold py-2 px-4 rounded text-[14px]">
            Cập nhật
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-row items-center gap-4">
            <img className="w-5 h-5" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708780/Beana_assets/insta_uwxljd.svg" />
            <div>
              <p className="font-semibold text-[14px] text-lightBlack">Instagram</p>
            </div>
          </div>
          <div className="beana-button-white-hover font-semibold py-2 px-4 rounded text-[14px]">
            Cập nhật
          </div>
        </div>
      </div>
    </div>
  )
}
