import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function OneMonth({ packages, setPackages,handlePayment }) {

    const [seeMore, setSeeMore] = useState(false);

    const handleSeeMore = () => {
        setSeeMore(!seeMore)
    }

    return (
        <div onClick={() => setPackages(3)} className={`relative w-[416px] p-6 pb-16 border rounded-2xl bg-white text-sm ${packages === 3 && 'shadow shadow-secondary'}  ${seeMore ? ' h-full' : 'h-[798px]'}`}>
            <div className="relative">
                <img className="absolute w-10 top-[-10px] left-[-10px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1700479799/Beana_svg/crown_y9xwkp.svg" />
                <p className="pl-8 text-overLg font-bold">
                    1 tháng Face Scanning
                </p>
            </div>
            <p className="pt-4">Dành cho người đã nắm rõ về tình trạng da của mình và cần tìm hiểu sâu hơn về ưu nhược điểm
                của da và có một liệu trình chăm sóc da phù hợp</p>
            <p className="text-[32px] font-extrabold pt-16">159.000đ</p>
            <p className="pt-4">/1 tháng dành cho một tài khoản</p>

            <p className="font-semibold text-[#0d1216db] pt-[32px]">Tính năng bạn sẽ thích:</p>

            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Khám phá và sử dụng Face scanning</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Truy cập không giới hạn Face scanning</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Đặc quyền xem quy trình chăm sóc da mặt cá nhân</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Quét và phân tích nhanh chóng</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Công cụ quét dùng sức mạnh AI (Chụp ảnh tự động, Phân tích AI, Kết quả AI, Liệu trình AI)</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Quét và nhận ưu đãi giảm giá các sản phẩm khi mua kèm</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Cá nhân hóa kết quả phân tích</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Xem được ưu và nhược điểm từng phần da mặt</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-3">
                <FontAwesomeIcon
                    icon={faCheck}
                    color="#49b949"
                />
                <p className="text-[#0d1216db]">Thang đo chi tiết kết quả da mặt</p>
            </div>
            {seeMore &&
                <div>
                    <div className="flex flex-row gap-4 items-center pt-3">
                        <FontAwesomeIcon
                            icon={faCheck}
                            color="#49b949"
                        />
                        <p className="text-[#0d1216db]">Mời gia đình, bạn bè và những người khác quét</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center pt-3">
                        <FontAwesomeIcon
                            icon={faCheck}
                            color="#49b949"
                        />
                        <p className="text-[#0d1216db]">Nhận lịch trình và kết quả phân tích không giới hạn</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center pt-3">
                        <FontAwesomeIcon
                            icon={faCheck}
                            color="#49b949"
                        />
                        <p className="text-[#0d1216db]">Nhận thông báo và hàng trăm phần quà hấp dẫn</p>
                    </div>
                </div>
            }
            <div className={`w-[90%] absolute pt-16 bottom-[156px] left-5 z-50 ${!seeMore && 'bg-gradient-to-b from-[#ffffff33] from-0%  via-[#fff] via-70% to-[#fff] to-100%'}`}>
                {!seeMore ?
                    (
                        <a
                            onClick={handleSeeMore}
                            className="bg-transparent font-normal cursor-pointer"
                        >Xem thêm
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                color="#0d1216db"
                                className="pl-1"
                            />
                        </a>
                    ) : (
                        <a
                            onClick={handleSeeMore}
                            className="bg-transparent font-normal text-secondary cursor-pointer"
                        >Ẩn bớt
                            <FontAwesomeIcon
                                icon={faAngleUp}
                                color="#49b949"
                                className="pl-1"
                            />
                        </a>
                    )}
            </div>


            <div onClick={()=>handlePayment("159.000","Gói 1 tháng Face scanning")} className="beana-button-green-hover text-center px-4 py-[10px] rounded-md mt-12">
                Mua ngay
            </div>
            <p className="text-center text-xs pt-2 font-medium">Dành cho cá nhân sử dụng <span className="text-secondary">thường xuyên</span> dịch vụ Face scanning</p>
        </div>
    )
}
