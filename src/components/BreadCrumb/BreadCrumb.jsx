import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'


export default function BreadCrumb({ breadCrumbName }) {

  const location = useLocation();

  const path = location.pathname;
  const pathParts = path.split('/');
  const productPath = pathParts[pathParts.length - 2];

  const currentPath = location.pathname;
  const currentPath2 = location.pathname;
  const pathParts2 = currentPath.split('/');
  const lastPath = pathParts2[pathParts2.length - 1];
  return (
    <div className='flex flex-row gap-2 pb-3'>
      <div className='font-medium text-sm text-[#868686]'>
        <Link to="/">
          Trang Chủ
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faAngleRight}
          color='#868686'
          size="1x"
        />
      </div>
      <div className='font-bold text-sm text-[#000] capitalize'>
        <Link to="/products">
          {productPath === "" || productPath === "product" ? "products" : productPath}
        </Link>
      </div>
      <div>
        {lastPath === "products" ? null :
          <FontAwesomeIcon
            icon={faAngleRight}
            color='#868686'
            size="1x"
          />}

      </div>
      <div className='font-bold text-sm text-[#000] capitalize'>
        <Link to={currentPath2}>
          {lastPath === "products" ? "" : lastPath}
        </Link>

      </div>
    </div>
  )
}
