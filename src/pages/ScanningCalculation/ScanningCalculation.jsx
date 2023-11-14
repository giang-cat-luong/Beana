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
        <div className=" min-h-full h-full md:hidden">
            <div className="px-10 py-10 text-white  bg-black/50 backdrop-opacity-10 w-full backdrop-invert">
                <div className=' flex flex-col'>
                    <img
                        src={img}
                    />
                </div>
            </div>
        </div>

    );

}
export default ScanningCalculation;