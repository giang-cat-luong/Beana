import { useState } from "react";


export default function slider() {
    const slider =[
        {
            url:'./assets/slider1.jpg'
        },
        {
            url:'./assets/slider2.jpeg'
        },
        {
            url:'./assets/slider3.jpg'
        },
    ];

    const[currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {

    }

  return (
    <div className="max-w-screen-2xl h-[600px] w-full  relative group">
    <div style={{backgroundImage: `url(${slider[currentIndex].url})`}} className="w-full h-full  bg-center bg-cover duration-500">
    </div>
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <img src="./assets/left-arrow.png" className="w-8" onClick={prevSlide}/>
    </div>
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <img src="./assets/right-arrow.png" className="w-8" onClick={nextSlide}/>
    </div>
</div>
  )
}

