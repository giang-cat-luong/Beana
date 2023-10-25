import emptyCart from './emptyCart.json'
import Lottie from "lottie-react"

export default function EmptyCart() {
    return (
        <Lottie animationData={emptyCart} loop={true} />
    )
}
