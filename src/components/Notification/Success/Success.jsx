import React, { useState } from 'react'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Success({ isSuccess, setIsSuccess }) {

    return (
        <div className={`fixed bottom-12  bg-[#D6FAE4] border-t-4 border-secondary rounded-b text-[#49b949] px-4 py-3 z-[9999] shadow-md ${isSuccess ? 'right-0 animate-messageAppear' : 'right-[-480px]'}`}>
            <div className="flex pr-3">
                <div className="py-1 pr-3">
                    <img className='w-9' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697786446/Beana_assets/beanSuccess_cq2sxk.png' />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className="font-bold">Mua gì mua lắm thế????</p>
                    <p className="text-sm">Mua thành công nhưng mua nữa bố m ban acc m.</p>
                </div>
            </div>
            <div className='absolute top-3 right-3 cursor-pointer' onClick={() => setIsSuccess(false)}>
                <FontAwesomeIcon 
                icon={faCircleXmark}
                className='text-[25px] text-primary hover:text-secondary'
                />
            </div>
        </div>
    )
}
