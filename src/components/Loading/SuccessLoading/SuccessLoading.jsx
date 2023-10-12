import Lottie from "lottie-react"
import Success from './successAnimation.json'

export default function SuccessLoading() {
    return (
        <div>
            <Lottie animationData={Success} loop={false} />
        </div>
    )
}
