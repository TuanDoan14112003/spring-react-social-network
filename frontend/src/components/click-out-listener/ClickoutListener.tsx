import { CSSProperties } from "react";
import "./styles.css";
function ClickoutListener({
  onClick,
  style,
}: {
  onClick: () => void;
  style?: CSSProperties;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 3,
        ...style,
      }}
    />
  );
}

export default ClickoutListener;
