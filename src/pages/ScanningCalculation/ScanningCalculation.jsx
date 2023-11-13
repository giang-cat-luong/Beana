import React, { useRef, useEffect, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./utilities";
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
            <div className='relative visible'>
                {/* loading */}
                <div style={{ position: "relative" }}>
                    {loading && (
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 1)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 9000,
                            }}
                        >
                            <div className=' w-full mb-64'>
                                <ScanningFaceLoading />
                                <p className='text-white absolute bottom-24 left-[50%] text-center -translate-x-1/2'>
                                    IT's Beana đang khởi tạo môi trường selfie cho bạn.
                                </p>
                                <div className='w-[50%] absolute bottom-12 left-[50%] text-center -translate-x-1/2'>
                                    <ProgessLoading />
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                {/* end loading */}
                <div>
                    <img
                        src={img}
                    />
                </div>
            </div>
        </div>

    );

}
export default ScanningCalculation;