// import React from 'react'

// export default function AddAddress({ newAddress }) {
   

//     return (
//         <div className={`h-0 overflow-hidden duration-500 ${newAddress ? 'h-[680px]' : ''}`}>
//             <div className="mt-6 tracking-wider text-sm font-medium">
//                 <div>Province</div>
//                 <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
//                     type="text"
//                     placeholder="Nhập tỉnh..."
//                     onChange={(event) => setProvince(event.target.value)}
//                     value={province || ""}
//                 />
//             </div>
//             <div className="mt-6 tracking-wider text-sm font-medium">
//                 <div>District</div>
//                 <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
//                     type="text"
//                     placeholder="Nhập huyện..."
//                     onChange={(event) => setDistrict(event.target.value)}
//                     value={district || ""}
//                 />
//             </div>
//             <div className="mt-6 tracking-wider text-sm font-medium">
//                 <div>Ward</div>
//                 <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
//                     type="text"
//                     placeholder="Nhập phường..."
//                     onChange={(event) => setWard(event.target.value)}
//                     value={ward || ""}
//                 />
//             </div>
//             <div className="mt-6 tracking-wider text-sm font-medium">
//                 <div>Full name</div>
//                 <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
//                     type="text"
//                     placeholder="Nhập tên đầy đủ..."
//                     onChange={(event) => setFullName(event.target.value)}
//                     value={fullName || ""}
//                 />
//             </div>
//             <div className="mt-6 tracking-wider text-sm font-medium">
//                 <div>Address</div>
//                 <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
//                     type="text"
//                     placeholder="Nhập địa chỉ..."
//                     onChange={(event) => setAddress(event.target.value)}
//                     value={address || ""}
//                 />
//             </div>
//             <div className="mt-6 tracking-wider text-sm font-medium">
//                 <div>Phone</div>
//                 <input className="appearance-none mt-2 bg-transparent w-full text-[#000] border-[1px] border-black leading-tight py-4 pl-4 placeholder:text-[#606060]"
//                     type="text"
//                     placeholder="Nhập số điện thoại..."
//                     onChange={(event) => setPhone(event.target.value)}
//                     value={phone || ""}
//                 />
//             </div>
//             <div
//                 onClick={addAddress}
//                 className='beana-button-green-hover py-1 px-4 rounded-md inline-block mt-2'>
//                 Thêm
//             </div>
//         </div>
//     )
// }
