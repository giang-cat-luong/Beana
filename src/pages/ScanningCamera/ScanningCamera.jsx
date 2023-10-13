import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
// import draw from './utilities'
// import * as blazeface from '@tensorflow-models/blazeface';

import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./utilities";

function ScanningCamera() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // const runFacedetection = async () => {

    //     const model = await blazeface.load()
    //     setInterval(() => {
    //         detect(model);
    //     }, 100);

    // }

    // const returnTensors = false;

    // const detect = async (model) => {
    //     if (
    //         typeof webcamRef.current !== "undefined" &&
    //         webcamRef.current !== null &&
    //         webcamRef.current.video.readyState === 4
    //     ) {
    //         // Get video properties
    //         const video = webcamRef.current.video;
    //         const videoWidth = webcamRef.current.video.videoWidth;
    //         const videoHeight = webcamRef.current.video.videoHeight;

    //         //Set video height and width
    //         webcamRef.current.video.width = videoWidth;
    //         webcamRef.current.video.height = videoHeight;

    //         //Set canvas height and width
    //         canvasRef.current.width = videoWidth;
    //         canvasRef.current.height = videoHeight;

    //         // Make detections

    //         const prediction = await model.estimateFaces(video, returnTensors);
    //         const ctx = canvasRef.current.getContext("2d");
    //         drawMesh(prediction, ctx)
    //     }

    // }


    // useEffect(() => {
    //     runFacedetection();
    // }, []);

    const runFaceMesh = async () => {
        const model = facemesh.SupportedModels.MediaPipeFaceMesh;
        const detectorConfig = {
            runtime: "tfjs",
            solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
        };
        const detector = await facemesh.createDetector(model, detectorConfig);
        setInterval(() => {
            detect(detector);
        }, 10);
    };

    const detect = async (detector) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const face = await detector.estimateFaces(video);

            const ctx = canvasRef.current.getContext("2d");
            requestAnimationFrame(() => {
                drawMesh(face, ctx);
            });
        }
    };

    useEffect(() => {
        runFaceMesh();
    }, []);


    return (
        // <div className="bg-black  w-full">
        //     <Webcam
        //         ref={webcamRef}
        //         className="bg-black absolute mx-auto  top-[100px] left-0 right-[80px] text-center z-10 w-[640px] h-[480px]"
        //     />
        //     <canvas
        //         ref={canvasRef}
        //         className="absolute mx-auto md:top-[15px] left-0 top-[60px] md:right-[80px] right-[20px] text-center z-10 w-[440px] md:w-[540px] h-[500px] md:h-[600px]"
        //     />
        // </div>
        <div className="App">
            <header className="App-header">
                <Webcam
                    ref={webcamRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,
                    }}
                />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,
                    }}
                />
            </header>
        </div>
    );

}
export default ScanningCamera;