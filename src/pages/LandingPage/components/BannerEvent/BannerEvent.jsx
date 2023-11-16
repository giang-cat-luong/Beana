import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function BannerEvent() {

    const [isShow, setIsShow] = useState(true);

    const setShow = () => {
        setIsShow(false);
    };

    useEffect(() => {
        const adCount = parseInt(localStorage.getItem('adClosedCount') || '1', 10);

        if (adCount < 9) {
            localStorage.setItem('adClosedCount', (adCount + 1).toString());
        } else {
            setIsShow(false)
            const timeoutId = setTimeout(() => {
                setIsShow(true);
                localStorage.setItem('adClosedCount', '1');
            }, 5 * 60 * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, []);


    return (
        <div className='relative visible'>
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
                    <div className='relative'>
                        <a href='/products' className='flex justify-center '>
                            <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1698682641/Beana_assets/halloween_event.png' className='w-[60%] md:w-[30%] shadow-[0_25px_60px_-20px_#86bb86]' />
                        </a>
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                color="#fff"
                                size="2x"
                                fixedWidth
                                className='absolute bottom-[103%] md:bottom-[100%] right-5 md:right-[32%] hover:text-[#86bb86] cursor-pointer'
                                onClick={setShow}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
