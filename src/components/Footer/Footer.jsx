

export default function Footer() {
  return (
    <div className="flex flex-col font-Montserrat">
      <div className="flex flex-row justify-between  px-14 py-6 text-sm text-[#49B949] bg-[#E0F7CD]">
        <div className="flex items-center flex-row gap-4 px-10">
          <img src="./assets/rabbit.svg" />
          <p>Không Thử Nghiệm Trên Động Vật</p>
        </div>
        <div className="flex items-center flex-row  gap-4  px-10">
          <img src="./assets/leaf.svg" />
          <p>
            Không Có Thành Phần Có <br /> Nguồn Gốc Từ Động Vật
          </p>
        </div>
        <div className="flex items-center flex-row  gap-4   px-10">
          <img src="./assets/rice.svg" />
          <p>
            Không Có Gluten, Hoặc Sản <br /> Phẩm Phụ Gluten
          </p>
        </div>
        <div className="flex items-center flex-row  gap-4   px-10">
          <img src="./assets/package.svg" />
          <p>Bao Bì Có Thể Tái Chế</p>
        </div>
      </div>
      <div className="flex flex-row px-28 py-16 bg-[#86bb86]">
        <div className="basis-1/3 flex flex-col">
          <h3 className="beana-bottom-menu-text">Chúng Tôi Có Thể Giúp Gì</h3>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Về Beana
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Liên Hệ
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Fanpage
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              FAQ
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Face Scanning
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Skincare Tips
            </a>
          </div>
        </div>
        <div className="basis-1/6 flex flex-col">
          <h3 className="beana-bottom-menu-text">Sản Phẩm</h3>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Chăm Sóc Da Mặt
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Trang Điểm Mặt
            </a>
          </div>
          <div className="beana-bottom-menu-text-links">
            <a href="" className="beana-bottom-links">
              Gifts & Sets
            </a>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col pl-4">
          <h3 className="beana-bottom-menu-text">Giữ Liên Lạc Với Beana</h3>
          <div className="text-base text-[#fff] pb-2 font-light">
            Tham gia bản tin Beautya và là người đầu tiên nghe về tin tức, ưu
            đãi và lời khuyên chăm sóc da
          </div>
          <div className="w-full max-w-xl">
            <div className="flex items-center border-b border-[#cbcbcb] py-2">
              <input className="appearance-none bg-transparent border-none w-full text-[#fff] mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:italic placeholder:text-[#d8d8d8]" type="text" placeholder="Địa chỉ email..." aria-label="Full name" />
              <button className="flex-shrink-0 bg-[transparent] hover:bg-[transparent] border-[#cbcbcb] hover:border-[#fff] text-sm border-2 text-white py-2 px-3 rounded" type="button">
                Đăng Ký
              </button>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="flex items-center h-5">
              <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="helper-checkbox" className="text-sm text-[#fff] font-normal'">Bằng cách gửi email của mình,
                bạn đồng ý nhận email quảng cáo từ Beautya.<br />
                Vui lòng xem lại Chính sách quyền riêng tư của chúng tôi,
                bao gồm Thông báo<br />
                khuyến khích tài chính dành cho cư dân CA.</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between px-28 py-5 text-[#fff] bg-[#0E740E]">
        <div>Tăng Nhơn Phú A, Quận 9.</div>
        <div>0981-890-262</div>
      </div>
      <div className="flex flex-row justify-between px-28 py-4 text-[#fff] font-light text-xs bg-[#000]">
        <div>2023 Beana. All Rights Reserved.</div>
        <div className="flex flex-row gap-7">
          <div>Điều Khoản Và Điều Kiện</div>
          <div>Chính Sách Bảo Mật</div>
        </div>
      </div>
    </div>
  );
}
