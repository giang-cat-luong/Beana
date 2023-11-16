import Lottie from "lottie-react"
import Angles from './angles_down.json'

export default function AnglesDown() {
    return (
        <div className="animate-pulse">
            <Lottie animationData={Angles} loop={true}/>
        </div>
    )
}