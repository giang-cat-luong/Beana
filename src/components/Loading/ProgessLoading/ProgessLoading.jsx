import Lottie from "lottie-react"
import Progess from './progess.json'

export default function ProgessLoading() {
    return (
        <div>
            <Lottie animationData={Progess} loop={false}/>
        </div>
    )
}