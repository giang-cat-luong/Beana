import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import draw from './utilities'
import * as blazeface from '@tensorflow-models/blazeface';

function ScanningCamera() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runFacedetection = async () => {

        const model = await blazeface.load()
        setInterval(() => {
            detect(model);
        }, 100);

    }

    const returnTensors = false;

    const detect = async (model) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get video properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            //Set video height and width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            //Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make detections

            const prediction = await model.estimateFaces(video, returnTensors);
            const ctx = canvasRef.current.getContext("2d");
            draw(prediction, ctx)
        }

    }


    useEffect(() => {
        runFacedetection();
    }, []);


    return (
        <div className="bg-black w-full">
            <Webcam
                ref={webcamRef}
                className="bg-black absolute mx-auto top-[100px] left-0 right-[80px] text-center z-10 w-[640px] h-[480px]"
            />
            <canvas
                ref={canvasRef}
                className="absolute mx-auto md:top-[15px] left-0 top-[60px] md:right-[80px] right-[20px] text-center z-10 w-[440px] md:w-[540px] h-[500px] md:h-[600px]"
            />
        </div>
    );

}
export default ScanningCamera;