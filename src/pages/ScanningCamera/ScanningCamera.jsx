import { useRef, useEffect } from 'react'
import * as faceapi from 'face-api.js'

function ScanningCamera() {
    const videoRef = useRef()
    const canvasRef = useRef()

    useEffect(() => {
        startVideo()
        videoRef && loadModels()

    }, [])


    // OPEN YOU FACE WEBCAM
    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((currentStream) => {
                videoRef.current.srcObject = currentStream
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const loadModels = () => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
            faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
            faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
            faceapi.nets.faceExpressionNet.loadFromUri("/models")

        ]).then(() => {
            faceMyDetect()
        })
    }

    const faceMyDetect = () => {
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(videoRef.current,
                new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

            canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
            faceapi.matchDimensions(canvasRef.current, {
                width: 640,
                height: 550
            })

            const resized = faceapi.resizeResults(detections, {
                width: 640,
                height: 550
            })

            faceapi.draw.drawDetections(canvasRef.current, resized)
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resized)
            faceapi.draw.drawFaceExpressions(canvasRef.current, resized)


        }, 1000)
    }

    return (
        <div className="flex w-[100vw] h-[100vh] flex-col items-center justify-between">
            <h1>FAce Detection</h1>
            <div className="px-10 flex items-center">
                <video  crossOrigin="anonymous" ref={videoRef} autoPlay></video>
            </div>
            <canvas ref={canvasRef} width="640" height="550"
                className="absolute top-[350px]" />
        </div>
    )

}

export default ScanningCamera;