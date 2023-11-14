import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ScanningFaceLoading from '../../components/Loading/ScanningFaceLoading';
import ProgessLoading from '../../components/Loading/ProgessLoading';
import { useLocation } from "react-router-dom";

function ScanningCalculation() {

    const location = useLocation();
    const { img } = location.state;
    console.log(img)

    return (
        <div className="h-[620px] md:hidden">
                <div className='relative'>
                    <img
                        src={img}
                        className='h-[620px] w-[800px]'
                    />
                    <div className='bg-black/50 backdrop-opacity-10 w-full backdrop-invert z-10'></div>
                </div>
        </div>

    );

}
export default ScanningCalculation;