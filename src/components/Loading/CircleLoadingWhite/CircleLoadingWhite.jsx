import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function CircleLoadingWhite({ size }) {
  return (
    <FontAwesomeIcon
      icon={faSpinner}
      color="#fff"
      className={`animate-spin text-[${size}px]`}
    />
  )
}
