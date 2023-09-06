import "./bean.css";
import { useRive } from "@rive-app/react-canvas";

export default function Bean() {
    const { RiveComponent } = useRive({
        src: "/assets/bean_animation.riv",
        stateMachines: "Enter",
        autoplay: true,
        animations: "success"
      });
  return (
    <div className="RiveContainer">
      <RiveComponent />
    </div>
  );
}
