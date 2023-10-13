import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';

import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./utilities";

function ScanningCamera() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

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
        <div className="bg-black w-full h-full">
            {/* <div className="px-10 py-560">
                <Webcam
                    ref={webcamRef}
                    className="absolute mx-auto  top-[100px] left-0 right-[80px] text-center z-10 w-[640px] h-[480px]"
                />
                <canvas
                    ref={canvasRef}
                    className="absolute mx-auto md:top-[40px] left-2 md:left-0 top-[90px] md:right-[80px] text-center z-10 w-[400px] md:w-[640px] h-[500px] md:h-[550px]"
                />
            </div> */}
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
            zIndex: 9,
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
            zIndex: 9,
            width: 540,
            height: 480,
          }}
        />
      </header>
        </div>
    );

}
export default ScanningCamera;