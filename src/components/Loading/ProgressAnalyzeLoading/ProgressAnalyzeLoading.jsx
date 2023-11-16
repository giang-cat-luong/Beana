import Lottie from "lottie-react"
import ProgressAnalyze from './loading_analyze.json'

export default function ProgressAnalyzeLoading() {
    return (
        <div>
            <Lottie animationData={ProgressAnalyze} loop={false}/>
        </div>
    )
}