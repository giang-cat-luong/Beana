import Lottie from "lottie-react"
import Scanning from './scanningface.json'

export default function ScanningFaceLoading() {
    return (
        <div>
            <Lottie animationData={Scanning} loop={true} />
        </div>
    )
}