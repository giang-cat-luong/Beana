import React, { useState } from 'react'

export default function Success({ isSuccess, setIsSuccess }) {

    return (
        <div class={`fixed bottom-12  bg-[#D6FAE4] border-t-4 border-secondary rounded-b text-[#49b949] px-4 py-3 z-[9999] shadow-md ${isSuccess ? 'right-0 animate-messageAppear' : 'right-[-480px]'}`}>
            <div class="flex pr-3">
                <div class="py-1 pr-3">
                    <img className='w-9' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697786446/Beana_assets/beanSuccess_cq2sxk.png' />
                </div>
                <div className='flex flex-col justify-center'>
                    <p class="font-bold">Mua gì mua lắm thế????</p>
                    <p class="text-sm">Mua thành công nhưng mua nữa bố m ban acc m.</p>
                </div>
            </div>
            <div className='absolute top-2 right-2' onClick={() => setIsSuccess(false)}>
                HIHI
            </div>
        </div>
    )
}
