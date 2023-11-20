import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function CircleLoading() {
  return (
    <FontAwesomeIcon
    icon={faSpinner}
    color="#49b949"
    className="animate-spin text-[25px]"
    />
  )
}
