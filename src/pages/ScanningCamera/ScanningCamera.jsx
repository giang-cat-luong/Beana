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
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    top: 100,
                    left: 0,
                    right: 80,
                    textAlign: "center",
                    zIndex: 9,
                    width: 640,
                    height: 480,
                }}
                className="bg-black"
            />

            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    top: 70,
                    right: 20,
                    textAlign: "center",
                    zIndex: 9,
                    width: 440,
                    height: 480,
                }}
            />
        </div>
    );

}
export default ScanningCamera;