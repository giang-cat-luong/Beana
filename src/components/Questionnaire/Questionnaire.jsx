
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faChevronRight, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SuccessLoading from '../Loading/SuccessLoading/SuccessLoading';

export default function Questionnaire() {
    const [isShow, setIsShow] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [selectedAnswer2, setSelectedAnswer2] = useState([]);
    const [selectedAnswer3, setSelectedAnswer3] = useState(null);

    const [redirecting, setRedirecting] = useState(false);

    const [nextQuestion, setNextQuestion] = useState(0)
    const [successSend, setSuccessSend] = useState(false)

    const handleQuestionClick = (questionIndex) => {
        setNextQuestion(questionIndex);
    };
    const handleAnswerClick = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    const handleAnswerClick2 = (answerIndex) => {
        const isSelected = selectedAnswer2.includes(answerIndex);

        if (isSelected) {
            setSelectedAnswer2(selectedAnswer2.filter((index) => index !== answerIndex));
        } else if (!isSelected && selectedAnswer2.length < 3) {
            setSelectedAnswer2([...selectedAnswer2, answerIndex]);
        }
    };

    const handleAnswerClick3 = (answerIndex) => {
        setSelectedAnswer3(answerIndex);
    };

    const setShow = () => {
        setIsShow(false);
        setNextQuestion(0);
    };

    const handleSuccessSend = () => {

        setNextQuestion(false);
        setRedirecting(true);
        setTimeout(() => {
            setRedirecting(false);
            setSuccessSend(true);
        }, 2000);
    };



    return (
        <div className='relative visible select-none'>

            {isShow && (

                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9000,
                    }}
                >
                    <div style={{ position: "relative" }}>
                        {redirecting && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "transparent",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 9999,
                                }}
                            >
                                <div className=' w-[70%] md:w-[30%]'>
                                    <SuccessLoading />
                                </div>
                            </div>
                        )}
                    </div>
                    {/* start */}
                    {nextQuestion === 0 &&
                        <div className='animate-questionAppear relative bg-[#FAF9F5] max-w-[370px] md:max-w-[620px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                            <div className='px-3 mt-6 md:px-10 py-7 '>
                                <p className='text-[18px] text-center font-bold text-secondary'>Khám Phá Da Mặt Của Bạn</p>
                                <div className='px-6 md:px-16 py-10'>
                                    <p>Hãy trả lời 7 câu hỏi nhanh của chúng tôi và khám phá loại da của bạn trong vòng 2 phút.
                                        Chúng tôi sẽ cung cấp các đề xuất chăm sóc da cá nhân đáp ứng nhu cầu riêng của bạn.</p>
                                    <button
                                        className="mt-3 font-normal text-[#fff] text-[13px] border-2 px-6 py-2 bg-primary shadow-md shadow-primary hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                                        onClick={() => handleQuestionClick(nextQuestion + 1)}
                                    >
                                        Bắt Đầu
                                    </button>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    color="#86bb86"
                                    size="2x"
                                    fixedWidth
                                    className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                    onClick={setShow}
                                />
                            </div>
                        </div>
                    }
                    {/* question 1 */}
                    {nextQuestion === 1 &&
                        <div className='animate-sliderDescription relative bg-[#FAF9F5] max-w-[370px] md:max-w-[700px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                            <div className='px-3 mt-2 md:mt-6 md:px-10 py-10 '>
                                <p className='text-[20px] text-center font-bold text-secondary'>Khám Phá Da Mặt Của Bạn</p>

                                <div className='md:mx-24 pt-3 pb-8 mx-8 md:py-10 flex flex-col gap-4'>
                                    <p className='font-medium text-lg text-center md:pb-2'>Bạn sẽ mô tả làn da của mình như thế nào?</p>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer === 1 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick(1)}
                                    >
                                        <p className='text-[15px]'>Da Bình Thường</p>
                                        <p className='text-[13px] font-medium text-center'>Bề ngoài rõ ràng, không căng cũng không nhờn</p>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer === 2 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick(2)}
                                    >
                                        <p className='text-[15px] '>Da Dầu</p>
                                        <p className='text-[13px] font-medium text-center'>Sáng bóng, thường xuyên nổi mụn</p>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer === 3 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick(3)}
                                    >
                                        <p className='text-[15px] '>Da Khô</p>
                                        <p className='text-[13px] font-medium text-center'>Cảm thấy căng và khó chịu, thường trông bong tróc</p>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer === 4 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick(4)}
                                    >
                                        <p className='text-[15px] '>Da Nhạy Cảm</p>
                                        <p className='text-[13px] font-medium text-center'>Dễ bị kích ứng, khô rát, thường nổi mẩn đỏ</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    color="#86bb86"
                                    size="2x"
                                    fixedWidth
                                    className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                    onClick={setShow}
                                />
                            </div>
                            <div
                                className='absolute bottom-6 left-8 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion - 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    color="#9a9b98"
                                    fixedWidth

                                    className='text-[22px] cursor-pointer'
                                />
                                <p className='font-semibold text-[#9a9b98] cursor-pointer'>Back</p>
                            </div>
                            <div className='absolute bottom-6 left-[50%] -translate-x-1/2 font-semibold text-lg'>
                                1 / 7
                            </div>
                            <div
                                className='absolute bottom-6 right-5 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion + 1)}
                            >
                                <p className='font-semibold text-[#000] cursor-pointer'>Next</p>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    color="#0c0c0c"
                                    fixedWidth

                                    className='text-[22px] hover:text-[#000] cursor-pointer'
                                />
                            </div>
                        </div>
                    }
                    {/* end question 1 */}

                    {/* question 2 */}
                    {nextQuestion === 2 &&
                        <div className='animate-sliderDescription relative bg-[#FAF9F5] max-w-[370px] md:min-w-[700px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                            <div className='px-3 mt-2 md:mt-6 md:px-10 py-10 '>
                                <p className='text-[20px] text-center font-bold text-secondary'>Khám Phá Da Mặt Của Bạn</p>
                                <p className='font-medium text-lg text-center mx-26 pt-3 md:pt-10 '>Mối quan tâm hàng đầu về da của bạn là gì?</p>
                                <p className='font-medium text-lg text-center pb-2'>(Chọn tối đa 3)</p>
                                <div className='px-3 md:px-[85px] pt-2 md:pt-5 pb-10 grid grid-cols-2 md:gap-6 gap-3 capitalize'>
                                    <div
                                        className={`flex flex-row items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(1) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(1)}
                                    >
                                        {selectedAnswer2.includes(1) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px]'> Vết nám + nếp nhăn</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center gap-1 py-2 px-3 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(2) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(2)}
                                    >
                                        {selectedAnswer2.includes(2) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px] '>Nếp nhăn sâu + nám</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(3) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(3)}
                                    >
                                        {selectedAnswer2.includes(3) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px] '> Mất độ đàn hồi</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(4) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(4)}
                                    >
                                        {selectedAnswer2.includes(4) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px] '>Da chảy sệ</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center gap-1 py-2 px-3 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(5) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(5)}
                                    >
                                        {selectedAnswer2.includes(5) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px]'>Cấu trúc da thô</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(6) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(6)}
                                    >
                                        {selectedAnswer2.includes(6) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px] '>Da mờ mịt</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center items-center gap-1 py-2 px-1 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(7) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(7)}
                                    >
                                        {selectedAnswer2.includes(7) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px] '>Màu da không đều</p>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer2.includes(8) ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick2(8)}
                                    >
                                        {selectedAnswer2.includes(8) &&
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#49b949"
                                                fixedWidth
                                                className={`text-[18px] cursor-pointer`}
                                            />
                                        }
                                        <p className='text-[14px] '>Mụn trứng cá</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    color="#86bb86"
                                    size="2x"
                                    fixedWidth
                                    className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                    onClick={setShow}
                                />
                            </div>
                            <div
                                className='absolute bottom-6 left-8 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion - 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    color="#9a9b98"
                                    fixedWidth

                                    className='text-[22px] cursor-pointer'
                                />
                                <p className='font-semibold text-[#9a9b98] cursor-pointer'>Back</p>
                            </div>
                            <div className='absolute bottom-6 left-[50%] -translate-x-1/2 font-semibold text-lg'>
                                2 / 7
                            </div>
                            <div
                                className='absolute bottom-6 right-5 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion + 1)}
                            >
                                <p className='font-semibold text-[#000] cursor-pointer'>Next</p>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    color="#0c0c0c"
                                    fixedWidth

                                    className='text-[22px] hover:text-[#000] cursor-pointer'
                                />
                            </div>
                        </div>
                    }
                    {/* end question 2 */}

                    {/* question 3 */}
                    {nextQuestion === 3 &&
                        <div className='animate-sliderDescription relative bg-[#FAF9F5] max-w-[370px] md:min-w-[700px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                            <div className='px-3 mt-2 md:mt-6 md:px-10 py-10 '>
                                <p className='text-[20px]  text-center font-bold text-secondary'>Khám Phá Da Mặt Của Bạn</p>

                                <div className='md:mx-[110px] pt-2 md:pt-10 pb-10 flex flex-col gap-4'>
                                    <p className='font-medium text-lg text-center pb-2'>Thông thường làn da của bạn rất nhạy cảm và phản ứng với hầu hết các sản phẩm chăm sóc da?</p>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer3 === 1 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick3(1)}
                                    >
                                        <p className='text-[15px]'>Có</p>
                                        <p className='text-[13px] font-medium text-center'>Da bị mẩn đỏ, dễ nhạy cảm với sản phẩm</p>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer3 === 2 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick3(2)}
                                    >
                                        <p className='text-[15px] '>Không</p>
                                        <p className='text-[13px] font-medium text-center'>Sử dụng được với hầu hết các sản phẩm</p>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center gap-1 py-2 px-4 border-[2px] cursor-pointer select-none border-[#606060] ${selectedAnswer3 === 3 ? 'border-[2px] border-secondary text-secondary' : ''
                                            }`}
                                        onClick={() => handleAnswerClick3(3)}
                                    >
                                        <p className='text-[15px] '>Khác</p>
                                        <p className='text-[13px] font-medium text-center'>Có hoặc không tùy vào loại sản phẩm</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    color="#86bb86"
                                    size="2x"
                                    fixedWidth
                                    className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                    onClick={setShow}
                                />
                            </div>
                            <div
                                className='absolute bottom-6 left-8 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion - 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    color="#9a9b98"
                                    fixedWidth

                                    className='text-[22px] cursor-pointer'
                                />
                                <p className='font-semibold text-[#9a9b98] cursor-pointer'>Back</p>
                            </div>
                            <div className='absolute bottom-6 left-[50%] -translate-x-1/2 font-semibold text-lg'>
                                7 / 7
                            </div>
                            <div
                                className='absolute bottom-6 right-5 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion + 1)}
                            >
                                <p className='font-semibold text-[#000] cursor-pointer'>Next</p>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    color="#0c0c0c"
                                    fixedWidth

                                    className='text-[22px] hover:text-[#000] cursor-pointer'
                                />
                            </div>
                        </div>
                    }
                    {/* end question 3 */}

                    {/* question 4 */}
                    {/* end question 4 */}

                    {/* done */}
                    {nextQuestion === 4 &&
                        <div className='animate-sliderDescription relative bg-[#FAF9F5] max-w-[370px] md:min-w-[700px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                            <div className='px-6 md:px-24 mt-2 py-10 md:mt-6 pb-16'>
                                <p className='text-[18px] text-center font-bold text-secondary'>Khám Phá Da Mặt Của Bạn</p>
                                <div className='md:px-16 py-10'>
                                    <p className='font-medium text-lg text-center pb-2'>Cảm ơn bạn đã hoàn thành câu trả lời.</p>
                                    <p className='font-medium text-base text-center pb-2'>Nhập địa chỉ email của bạn để nhận lịch trình chăm sóc da của bạn.</p>

                                    <div className="w-full max-w-xl">
                                        <div className="flex items-center border-b-[2px] border-[#606060] py-2">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#000] mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#606060]" type="text" placeholder="Địa chỉ email..." aria-label="Full name" />
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="flex items-center h-6">
                                            <input type="checkbox" value="" className="w-4 h-4" />
                                        </div>
                                        <div className="ml-2 text-sm">
                                            <label className="font-medium text-xs text-[#000]">Bằng cách gửi email của bạn, bạn đồng ý nhận các email quảng cáo từ Beautya. Vui lòng xem xét Chính sách bảo mật của chúng tôi,
                                                bao gồm Thông báo Phần khuyến mãi tài chính cho cư dân California.</label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    color="#86bb86"
                                    size="2x"
                                    fixedWidth
                                    className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                    onClick={setShow}
                                />
                            </div>
                            <div
                                className='absolute bottom-7 left-8 flex flex-row items-center'
                                onClick={() => handleQuestionClick(nextQuestion - 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    color="#000"
                                    fixedWidth
                                    className='text-[22px] cursor-pointer'
                                />
                                <p className='font-semibold text-[#000] cursor-pointer'>Back</p>
                            </div>
                            <div className='absolute bottom-8 right-28 text-primary hover:text-secondary cursor-pointer -translate-x-1/2 font-semibold text-sm'>
                                <Link to="/scanning-result">
                                    Bỏ qua
                                </Link>
                            </div>
                            <div className='absolute bottom-6 right-9 flex flex-row items-center'>
                                <button
                                    className="mt-3 font-normal text-[#fff] text-[13px] border-2 px-6 py-2 bg-primary shadow-md shadow-primary hover:bg-[#49B949] hover:text-[#fff] hover:shadow-md hover:shadow-[#49B949]"
                                    onClick={handleSuccessSend}
                                >
                                    Gửi
                                </button>
                            </div>
                        </div>
                    }
                    {/* end done */}
                    {/* success */}
                    {successSend &&
                        <div className='animate-sliderDescription relative bg-[#FAF9F5] max-w-[390px] md:min-w-[700px] min-h-[420px] border-secondary shadow-[0_5px_20px_-5px_#86bb86]'>
                            <div className='px-3 md:px-24  pb-10 flex flex-col justify-center items-center'>
                                <div className='pt-16 py-2 '>
                                    <p className='font-bold text-lg text-center pb-2'>Cảm ơn bạn đã tin tưởng Beana.</p>
                                    <p className='font-medium text-base text-center pb-2'>Bạn sẽ nhận được kết quả về da mặt của bạn trong thời gian sớm nhất.</p>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <img className='w-60 pb-16 md:pl-0 ml-16' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708840/Beana_assets/beanMale_yk19ye.png' />
                                    <img className='w-40 pb-16 md:pl-0 mr-9' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1697708824/Beana_assets/beanFemale_f91mdb.png' />
                                </div>
                            </div>

                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    color="#86bb86"
                                    size="2x"
                                    fixedWidth
                                    className='absolute top-4 md:top-6 right-2 md:right-8 hover:text-[#49b949] cursor-pointer'
                                    onClick={setShow}
                                />
                            </div>

                            <div className='absolute bottom-8 right-20 md:right-8 border-[1px] px-3 py-3 bg-primary rounded-3xl shadow-md shadow-primary text-white hover:bg-secondary hover:shadow-md hover:shadow-secondary cursor-pointer font-semibold text-sm'>
                                <Link to="/scanning-result">
                                    Xem các sản phẩm phù hợp
                                </Link>
                            </div>
                        </div>
                    }
                    {/* end success */}
                </div>
            )}
            <div>

            </div>
        </div>
    )
}
