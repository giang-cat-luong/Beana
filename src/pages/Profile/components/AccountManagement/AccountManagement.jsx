import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function AccountManagement() {
  return (
    <div className='pt-[10px] pb-20 px-5'>
      <div className='flex flex-row justify-between items-center'>
        <div className='mt-2 text-[18px] font-semibold '>Đơn hàng mới nhất</div>
        <div>
          <Link to="/profile/my-order">
            <div className='text-secondary text-[13px]'>
              Xem tất cả
              <FontAwesomeIcon
                icon={faChevronRight}
                className='pl-1'
              />
            </div>
          </Link>
        </div>
      </div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
