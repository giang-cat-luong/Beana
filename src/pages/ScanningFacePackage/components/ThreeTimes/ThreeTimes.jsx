import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ThreeTimes({ packages, setPackages,handlePayment }) {
    return (
        <div onClick={() => setPackages(2)} className={`w-[416px] relative max-h-[798px] p-6 pb-16 border rounded-2xl bg-white text-sm ${packages === 2 && 'shadow shadow-black/30'}`}>
            <p className="text-overLg font-bold">5 Lượt Face Scanning</p>
            <p className="pt-4">Dành cho người đã nắm rõ về tình trạng da của mình và cần tìm hiểu sâu hơn về ưu nhược điểm
                của da và có một liệu trình chăm sóc da phù hợp</p>
            <p className="text-[32px] font-extrabold pt-16">79.000đ</p>
            <p className="pt-4">/5 lần dành cho một tài khoản</p>

            <p className="font-semibold text-[#0d1216db] pt-8">Tính năng bạn sẽ thích:</p>

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
                <p className="text-[#0d1216db]">Sử dụng được 5 lần quét da mặt</p>
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

            <div onClick={()=>handlePayment("79.000","Gói 5 lần Face scanning")} className="beana-button-white-hover text-center px-4 py-[10px] rounded-md mt-12">
                Mua ngay
            </div>
            <p className="text-center text-xs pt-2 font-medium">Tiết kiệm <span className="text-secondary">16.8%</span> so với gói 1 lần Face scanning</p>
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex justify-center pt-4 gap-2">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-secondary"></div>
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#394c6026]"></div>
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#394c6026]"></div>
            </div>
        </div>
    )
}
