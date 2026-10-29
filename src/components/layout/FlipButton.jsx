import { useState } from "react";
import { Col, Button } from "antd";
import icon from "../../assets/aanandha-logo-removebg-icon.png"; // Ensure this resolves to a valid image URL

const FlipButton = () => {
  const [flipped, setFlipped] = useState(false);

  const flipContainerStyle = {
    perspective: "1000px",
    width: 50,
    height: 50,
  };

  const flipperStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const frontBackBase = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const frontStyle = {
    ...frontBackBase,
  };

  const backStyle = {
    ...frontBackBase,
    transform: "rotateY(180deg)",
  };

  const frontButtonStyle = {
    backgroundColor: "#329290",
    height: 50,
    width: 50,
    padding: 10,
  };

  const backButtonStyle = {
    backgroundColor: "#1c5f5e",
    height: 50,
    width: 50,
    padding: 10,
    color: "white",
  };

  return (
    <Col span={6}>
      <div
        style={flipContainerStyle}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div style={flipperStyle}>
          <div style={frontStyle}>
            <Button
              style={frontButtonStyle}
              icon={<img src={icon} alt="icon" style={{ width: 20, height: 20 }} />}
            />
          </div>
          <div style={backStyle}>
            <Button style={backButtonStyle}>✓</Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FlipButton;
