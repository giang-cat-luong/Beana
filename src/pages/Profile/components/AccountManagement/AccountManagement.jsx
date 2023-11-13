import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function AccountManagement() {
  return (
    <div className='pt-[10px] pb-20 px-5'>
      <div className='flex flex-row justify-between items-center'>
        <div className='mt-2 text-[18px] font-semibold '>Đơn hàng mới nhất</div>
        <div>
          <Link to="/profile/my-order">
            <div className='text-secondary text-[13px] hover:text-primary hover:underline'>
              Xem tất cả
              <FontAwesomeIcon
                icon={faChevronRight}
                className='pl-1'
              />
            </div>
          </Link>
        </div>
      </div>
      <table class="table-auto w-full border-collapse border-[1px] border-[#dddddd] mt-3">
        <thead >
          <tr className='text-left bg-[#f7f7f7] text-xss'>
            <th className='beana-table-header'>Mã đơn hàng</th>
            <th className='beana-table-header'>Ngày mua</th>
            <th className='beana-table-header'>Tổng tiền</th>
            <th className='text-center'>Trạng thái</th>
            <th className='beana-table-header'></th>
          </tr>
        </thead>
        <tbody className='beana-table-body text-xss font-medium'>
          <tr>
            <td className='beana-table-data'>23110255230</td>
            <td className='beana-table-data'>2/11/2023</td>
            <td className='beana-table-data'>1,262,000 ₫</td>
            <td className='w-[200px] text-center text-xs'>
              <div className='bg-cancel text-white inline-block px-4 py-5px rounded w-[110px]'>Đã hủy</div>
            </td>
            <td className='text-right pr-2 font-normal'>
              <Link>
                Xem đơn hàng
              </Link>
            </td>
          </tr>
          <tr>
            <td className='beana-table-data'>22033012753</td>
            <td className='beana-table-data'>30/03/2022</td>
            <td className='beana-table-data'>364,000 ₫</td>
            <td className='w-[200px] text-center text-xs '>
              <div className='bg-pending text-white inline-block px-4 py-5px rounded w-[110px]'>Chờ duyệt</div>
            </td>
            <td className='text-right pr-2 font-normal'>
              <Link>
                Xem đơn hàng
              </Link>
            </td>
          </tr>
          <tr>
            <td className='beana-table-data'>22033012745</td>
            <td className='beana-table-data'>30/03/2022</td>
            <td className='beana-table-data'>564,000 ₫</td>
            <td className='w-[200px] text-center text-xs text-white'>
              <div className='bg-success inline-block px-4 py-5px rounded w-[110px]'>Thành công</div>
            </td>
            <td className='text-right pr-2 font-normal'>
              <Link>
                Xem đơn hàng
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='mt-7 text-[18px] font-semibold '>Thông tin tài khoản</div>
      <div className='flex flex-row gap-5 mt-2'>
        <div className='basis-[49%] flex flex-row justify-between border-[#e5e5e5] border p-[10px]'>
          <div>
            <div className='font-semibold text-xss mb-1'>Trường Giang</div>
            <div className='text-xss mb-2'>vutruonggiang452002@gmail.com</div>
          </div>
          <Link to="/profile/account-info">
            <div className='text-xss text-[#326e51] font-medium hover:text-[#4d9171] cursor-pointer'>Chỉnh sửa</div>
          </Link>
        </div>
        <div className='basis-[49%] flex flex-row justify-between items-center border-[#e5e5e5] border p-[10px]'>
          <div className='basis-4/5'>
            <div className='font-semibold text-xss mb-1'>Tùy chọn đăng ký, cập nhật thông tin khuyến mãi</div>
            <div className='flex items-center'>
              <input type='checkbox' className='w-3 h-3'></input>
              <label className='pl-1 text-xss'>Đăng ký</label>
            </div>
          </div>
          <div className='basis-2/5'>
            <div className='beana-button-green-hover text-base px-2 py-5px rounded-3xl'>
              Cập nhật
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center mt-5'>
        <div className='mt-2 text-[18px] font-semibold '>Địa chỉ mặc định</div>
        <div>
          <Link to="/profile/address-management">
            <div className='text-secondary text-[13px] hover:text-primary hover:underline'>
              Quản lý sổ địa chỉ
              <FontAwesomeIcon
                icon={faChevronRight}
                className='pl-1'
              />
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-row gap-5 mt-2'>
        <div
          className="cursor-pointer h-[130px] border-[2px] shadow-lg tracking-wider text-[13px] font-medium relative border-dashed border-secondary"
        >
          <div className=" px-14 pt-6 pb-12">
            <div className="flex flex-col">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className='text-[25px] absolute top-7 left-4 text-secondary '
              />
              <div className='text-black '>
                <div className="flex flex-row gap-2">
                  <p className="font-semibold">Vũ Trường Giang - </p>
                  <p>0981890260</p>
                </div>
                <p className="mt-2">58/19 Tân Lập 1, Phường Hiệp Phú, Quận 9, Hồ Chí Minh</p>
              </div>
            </div>
            <div className="absolute right-0 top-0">
              <img className="w-8" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1699474594/Beana_assets/default_w3ztfr.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
