import React, { useRef, useEffect, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./utilities";


export default function ScanningCameraOpen({ captureCountdown,imgSrc,webcamRef,canvasRef }) {


  //for camera detection


  // create a capture function

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
    <div className="w-full h-full relative">
      <div className="">
        {!imgSrc &&
          <div className="h-28 py-5 flex justify-center items-center text-white bg-black/80 backdrop-opacity-10 w-full backdrop-invert">
            <div className='text-secondary flex flex-row gap-3 justify-center'>
              <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>ÁNH SÁNG</div>
              <div className='border-l h-5 pr-2 ml-2'></div>
              {captureCountdown > 5 && captureCountdown % 2 === 0 ?
                (
                  <div className='font-light text-[13px] border-b-2 pb-2 border-red text-red'>VỊ TRÍ MẶT</div>
                ) : (
                  <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>VỊ TRÍ MẶT</div>
                )}
              <div className='border-l h-5 pr-2 ml-2'></div>
              <div className='font-light text-[13px] border-b-2 pb-2 border-secondary'>NHÌN THẲNG</div>
            </div>
          </div>
        }
        {!imgSrc &&
          <div>
            {captureCountdown > 5 && captureCountdown % 2 === 0 ?
              (
                <div className='absolute top-28 z-20 left-12'>
                  <div className='font-semibold text-[20px] text-black'>Khuôn mặt bạn chưa đúng vị trí</div>
                </div>
              ) : (
                <div className='absolute top-28 z-20 left-[50%] -translate-x-1/2'>
                  <div className='font-semibold text-[20px] text-black'>Bạn làm tốt lắm</div>
                </div>

              )}
            <div className='absolute top-36 z-10 left-8'>
              <div className='text-black'>Đặt khuôn mặt của bạn vào giữa khung hình</div>
            </div>
          </div>
        }

        {!imgSrc &&
          <div>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="absolute top-28 left-0 right-[80px] text-center w-full h-[480px] border-2 border-secondary"
            />
            <canvas
              ref={canvasRef}
              className="absolute left-4 md:left-0 top-[98px] text-center w-[380px] h-[500px]"
            />
            <div className='absolute top-[290px] z-20 left-[50%] -translate-x-1/2'>
              <div className='text-black font-semibold text-[64px]'>{captureCountdown < 4 && captureCountdown - 1}</div>
            </div>
            <div className='text-black font-bold text-lg absolute top-[190px] left-[50%] -translate-x-1/2'>
              Đỉnh đầu
            </div>
            <div className='text-black font-bold text-lg absolute top-[480px] left-[50%] -translate-x-1/2'>
              Cằm
            </div>
          </div>
        }
      </div>
      {imgSrc && (

        <img
          src={imgSrc}
        />
      )}

    </div>
  )
}
