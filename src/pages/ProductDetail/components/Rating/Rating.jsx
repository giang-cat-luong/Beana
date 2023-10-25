import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const starStatus = [
  {
    id: 1,
    status: ["Chất lượng kém", "Dịch vụ kém"],
    statusStarChosen: "Rất kém",
    color: 'red'
  },
  {
    id: 2,
    status: ["Giá chưa tốt", "Cần cải thiện sản phẩm", "Cẩn cải thiện dịch vụ", "Sai/thiếu món", "Giao hàng chậm", "Thái độ không tốt"],
    statusStarChosen: "Cần cải thiện",
    color: 'grey'
  },
  {
    id: 3,
    status: ["Sản phẩm tạm được", "Giao hành hơi chậm"],
    statusStarChosen: "Hài lòng",
    color: 'blue'
  },
  {
    id: 4,
    status: ["Sản phẩm ổn", "Giao hàng đúng thời gian"],
    statusStarChosen: "Tuyệt vời",
    color: "orange"
  },
  {
    id: 5,
    status: ["Hỗ trợ nhiệt tình", "Đóng gói cẩn thận", "Giao hàng nhanh", "Sẽ mua lại", "Giá tốt"],
    statusStarChosen: "Xuất sắc",
    color: 'secondary'
  }
];

export default function Rating() {

  const maxStars = 5;
  const [rating, setRating] = useState(0);
  const [defaultStatus, setDefaultStatus] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const [comment, setComment] = useState("");
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const [isComment, setIsComment] = useState(false)
  const [isReply, setIsReply] = useState(false)

  useEffect(() => {
    const selectedStatusData = starStatus.find((statusData) => statusData.id === rating);
    setDefaultStatus(selectedStatusData ? selectedStatusData.status : []);
  }, [rating]);

  useEffect(() => {
    const defaultStatusData = starStatus.find((statusData) => statusData.id === 5);
    setDefaultStatus(defaultStatusData ? defaultStatusData.status : []);
  }, []);


  const handleRatingClick = (stars) => {
    setIsSelected(false);
    setRating(stars);
    setSelectedStatus((prevSelectedStatus) => {
      const updatedSelectedStatus = { ...prevSelectedStatus };
      updatedSelectedStatus[stars] = [];
      return updatedSelectedStatus;
    });
  };

  const handleStatusClick = (status) => {
    if (rating === 0) {
      setIsSelected("Vui lòng chọn số sao cho sản phẩm này!");
      return;
    }
    setSelectedStatus((prevSelectedStatus) => {
      const updatedSelectedStatus = { ...prevSelectedStatus };
      if (updatedSelectedStatus[rating].includes(status)) {
        updatedSelectedStatus[rating] = updatedSelectedStatus[rating].filter((item) => item !== status);
      } else {
        updatedSelectedStatus[rating] = [...updatedSelectedStatus[rating], status];
      }
      return updatedSelectedStatus;
    });
  };

  const openComment = () => {
    setIsComment(!isComment);
  }

  const openReply = () => {
    setIsReply(!isReply);
  }

  const submitComment = () => {
    if (rating === 0) {
      setIsSelected("Vui lòng chọn số sao cho sản phẩm này!");
      return;
    }
    if (selectedStatus[rating].length <= 0) {
      setIsSelected("Vui lòng chọn ít nhất các thông tin dưới!")
      return;
    }
    if (comment.trim() === "") {
      setIsCommentEmpty(true);
    } else {
      setIsCommentEmpty(false)
      setIsSelected(true)
    }
  }

  return (
    <div className='  px-36 pt-10'>
      <h1 className='beana-product-title-header'>ĐÁNH GIÁ SẢN PHẨM</h1>
      <div className='bg-white'>
        <div className='px-5 py-6'>
          <h1 className='font-bold text-lg '>Đánh giá sản phẩm</h1>
          <h1 className='font-medium text-sm '>Đánh giá trung bình</h1>
          <div className='flex flex-row'>
            <div className='basis-3/5'>
              <div className='flex flex-row'>
                <div className='basis-2/5'>
                  <div className="flex flex-col justify-center items-center font-bold text-[80px] text-[#49b949] relative">
                    3.2
                    <div className="flex flex-row items-center absolute bottom-6">
                      {Array.from({ length: maxStars }, (_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={`text-[10px] ${index < maxStars ? 'text-[#49b949]' : 'text-gray-300'}`}
                          fixedWidth
                        />
                      ))}
                    </div>
                    <p className="font-medium text-[13px] text-black">46 đánh giá </p>
                  </div>
                </div>
                <div className='basis-[55%] flex flex-col justify-between '>
                  <div className="flex flex-row gap-3 items-center ">
                    <p className="basis-2/12 text-sm text-[#000]">5 sao</p>
                    <div className="basis-6/12 w-[105px] h-[12px] bg-[#E8E8E8]">
                      <div className="w-11/12 h-[12px] bg-[#49b949]">
                      </div>
                    </div>
                    <p className="basis-1/12 text-sm text-[#a7a7a7]">42</p>
                    <p className="basis-5/12 text-sm text-[#a7a7a7]">Rất hài lòng</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <p className="basis-2/12 text-sm text-[#000]">4 sao</p>
                    <div className="basis-6/12 w-[105px] h-[12px] bg-[#E8E8E8]">
                      <div className="w-1/12 h-[12px] bg-[#49b949]">
                      </div>
                    </div>
                    <p className="basis-1/12 text-sm text-[#a7a7a7]">3</p>
                    <p className="basis-5/12 text-sm text-[#a7a7a7] ">Hài lòng</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <p className="basis-2/12 text-sm text-[#000]">3 sao</p>
                    <div className="basis-6/12 w-[105px] h-[12px] bg-[#E8E8E8]">
                      <div className="w-[3%] h-[12px] bg-[#49b949]">
                      </div>
                    </div>
                    <p className="basis-1/12 text-sm text-[#a7a7a7]">1</p>
                    <p className="basis-5/12 text-sm text-[#a7a7a7]">Bình thường</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <p className="basis-2/12 text-sm text-[#000]">2 sao</p>
                    <div className="basis-6/12 w-[105px] h-[12px] bg-[#E8E8E8]">
                      <div className="w-0 h-[12px] bg-[#49b949]">
                      </div>
                    </div>
                    <p className="basis-1/12 text-sm text-[#a7a7a7]">0</p>
                    <p className="basis-5/12 text-sm text-[#a7a7a7]">Không hài lòng</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <p className="basis-2/12 text-sm text-[#000]">1 sao</p>
                    <div className="basis-6/12 w-[105px] h-[12px] bg-[#E8E8E8]">
                      <div className="w-0 h-[12px] bg-[#49b949]">
                      </div>
                    </div>
                    <p className="basis-1/12 text-sm text-[#a7a7a7]">0</p>
                    <p className="basis-5/12 text-sm text-[#a7a7a7]">Rất tệ</p>
                  </div>
                </div>
              </div>
            </div>
            <div div className='basis-[45%] flex flex-col gap-3 justify-center items-center'>
              <p className="text-base font-semib  old">Chia sẻ nhận xét của bạn về sản phẩm này</p>
              <button
                className="font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[13px] border-2 px-6 py-2  hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                onClick={openComment}
              >Viết bình luận
              </button>
            </div>
          </div>
        </div>

        {/*write comment part */}
        <div className={`flex flex-col items-center px-5 py-1 duration-500 max-h-0 overflow-hidden ${isComment ? 'max-h-[500px]' : ''}`}>
          <div className="font-semibold text-base">Chọn sao để đánh giá sản phẩm</div>
          <div className="pt-6 pb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                onClick={() => handleRatingClick(star)}
                className={`cursor-pointer text-[30px] ${star <= rating ? `text-[#49b949]` : 'text-gray-300'}`}
                fixedWidth
              />
            ))}
          </div>
          {isSelected && <div className="text-sm text-[#f10000] pb-2">{isSelected}</div>}
          {rating > 0 ? (
            <div
              className={`font-semibold text-[#fff] bg-${starStatus[rating - 1].color} text-[13px] px-6 py-2 rounded-lg`}
            >
              {starStatus[rating - 1].statusStarChosen}
            </div>
          ) :
            <button
              className={`font-semibold text-[#fff] bg-[#49b949] text-[13px] px-6 py-2 rounded-lg`}
            >
              Vui lòng chọn sao
            </button>
          }
          <div className="py-6">
            {defaultStatus.length > 0 && (
              <div className="flex flex-row gap-2 justify-center items-center">
                {defaultStatus.map((status, index) => (
                  <div
                    key={index}
                    className={` rounded-2xl px-[10px] py-[5px] mb-[10px] cursor-pointer ${selectedStatus[rating] && selectedStatus[rating].includes(status) ? 'bg-[#49b949] text-white border-[1px]' : 'bg-white border-[1px] border-[#49b949]'}`}
                    onClick={() => handleStatusClick(status)}
                  >
                    {status}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-full px-12">
            <div>Gửi ngay nhận xét của bạn đến Beana</div>
            <textarea
              className="w-full h-[145px] font-medium text-sm  px-4 py-4 border-[1px] border-[#E1E1E1] rounded-md placeholder:text-[#A7A7A7]"
              placeholder="Đánh giá của bạn về sản phẩm này"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="w-full px-12 py-4">
            {isSelected === true && (<div className="text-sm text-[#008000]">Gửi đánh giá thành công!</div>)}
            {isCommentEmpty && (
              <div className="text-sm text-[#f10000]">Vui lòng nhập đánh giá của bạn.</div>
            )}
            <button
              className="font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[13px] border-2 px-16 py-2  hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
              onClick={submitComment}
            >Gửi đánh giá</button>
          </div>
        </div>
        {/*end write comment part */}

        {/* render comment part */}
        <div className="px-12 py-3 ">
          <div className="flex flex-row gap-3 border-t-[1px] border-[#E1E1E1] py-5">
            <div>
              <img className="w-[70px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">T.Giang</div>
              <div>
                {Array.from({ length: maxStars }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-[18px] pt-1 ${index < 4 ? 'text-[#49b949]' : 'text-gray-300'}`}
                    fixedWidth
                  />
                ))}
              </div>
              <div className="pt-1 text-sm font-light text-[#333333]">Kem dưỡng ẩm tốt và căng bóng lắm á, xài 2 ngày là thấy da đẹp hơn hẳn. Giao hàng sớm hơn dự kiến nữa .</div>
              <div className="pt-2 flex flex-row gap-2 items-center">
                <p
                  className="font-semibold text-sm cursor-pointer"
                  onClick={openReply}
                >
                  Trả lời
                </p>
                <p className="text-xs font-light">
                  5 tháng trước
                </p>
              </div>
              <div className={`pt-4 duration-500 max-h-0 overflow-hidden ${isReply ? 'max-h-[300px]' : ''}`}>
                <textarea
                  className="w-full h-[145px] font-medium text-sm  px-4 py-4 border-[1px] border-[#E1E1E1] rounded-md placeholder:text-[#A7A7A7]"
                  placeholder="Nhập gì đó..."
                />
                <button className="float-right font-semibold text-[#fff] bg-[#86bb86]  shadow-md shadow-[#86bb86] text-[13px] border-2 px-12 py-2  hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]">Gửi</button>
              </div>
              {/* reply comment */}
              <div className="flex flex-row gap-3  border-[#E1E1E1] pt-5">
                <div>
                  <img className="w-[70px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold">T.Khoi</div>
                  <div className="pt-1 text-sm font-light text-[#333333]">Kem dưỡng ẩm của nhà Beana này đúng thật xịn thiệc ha .</div>
                  <div className="pt-2 flex flex-row gap-2 items-center">
                    <p className="font-semibold text-sm cursor-pointer">
                      Trả lời
                    </p>
                    <p className="text-xs font-light">
                      5 tháng trước
                    </p>
                  </div>
                </div>
              </div>
              {/* end reply comment */}
            </div>
          </div>
          <div className="flex flex-row gap-3 border-t-[1px] border-[#E1E1E1] py-5">
            <div>
              <img className="w-[70px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">T.Khôi</div>
              <div>
                {Array.from({ length: maxStars }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-[18px] pt-1 ${index < 3 ? 'text-[#49b949]' : 'text-gray-300'}`}
                    fixedWidth
                  />
                ))}
              </div>
              <div className="pt-1 text-sm font-light text-[#333333]">Kem dưỡng ẩm tốt và căng bóng lắm á, xài 2 ngày là thấy da đẹp hơn hẳn. Giao hàng sớm hơn dự kiến nữa .</div>
              <div className="pt-2 flex flex-row gap-2 items-center">
                <p className="font-semibold text-sm cursor-pointer">
                  Trả lời
                </p>
                <p className="text-xs font-light">
                  5 tháng trước
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 border-t-[1px] border-[#E1E1E1] py-5">
            <div>
              <img className="w-[70px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">B.Khanh</div>
              <div>
                {Array.from({ length: maxStars }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-[18px] pt-1 ${index < 2 ? 'text-[#49b949]' : 'text-gray-300'}`}
                    fixedWidth
                  />
                ))}
              </div>
              <div className="pt-1 text-sm font-light text-[#333333]">Kem dưỡng ẩm tốt và căng bóng lắm á, xài 2 ngày là thấy da đẹp hơn hẳn. Giao hàng sớm hơn dự kiến nữa .</div>
              <div className="pt-2 flex flex-row gap-2 items-center">
                <p className="font-semibold text-sm cursor-pointer">
                  Trả lời
                </p>
                <p className="text-xs font-light">
                  5 tháng trước
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 border-t-[1px] border-[#E1E1E1] py-5">
            <div>
              <img className="w-[70px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">M.Anh</div>
              <div>
                {Array.from({ length: maxStars }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-[18px] pt-1 ${index < 1 ? 'text-[#49b949]' : 'text-gray-300'}`}
                    fixedWidth
                  />
                ))}
              </div>
              <div className="pt-1 text-sm font-light text-[#333333]">Kem dưỡng ẩm tốt và căng bóng lắm á, xài 2 ngày là thấy da đẹp hơn hẳn. Giao hàng sớm hơn dự kiến nữa .</div>
              <div className="pt-2 flex flex-row gap-2 items-center">
                <p className="font-semibold text-sm cursor-pointer">
                  Trả lời
                </p>
                <p className="text-xs font-light">
                  5 tháng trước
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 border-t-[1px] border-[#E1E1E1] py-5">
            <div>
              <img className="w-[70px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708874/Beana_assets/nonAvatar_k12l1p.png" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">V.Kiên</div>
              <div>
                {Array.from({ length: maxStars }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-[18px] pt-1 ${index < 3 ? 'text-[#49b949]' : 'text-gray-300'}`}
                    fixedWidth
                  />
                ))}
              </div>
              <div className="pt-1 text-sm font-light text-[#333333]">Kem dưỡng ẩm tốt và căng bóng lắm á, xài 2 ngày là thấy da đẹp hơn hẳn. Giao hàng sớm hơn dự kiến nữa .</div>
              <div className="pt-2 flex flex-row gap-2 items-center">
                <p className="font-semibold text-sm cursor-pointer">
                  Trả lời
                </p>
                <p className="text-xs font-light">
                  5 tháng trước
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*end render comment part */}
      </div>
    </div>
  )
}
