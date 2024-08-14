import React, { useState, useEffect } from "react";
import { Title } from "./typography";

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Title
      className="md:block hidden"
      style={{
        textTransform: "uppercase",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: "none", // Ensure it doesn't capture any mouse events
        transform: "translate(10%, -10%)", // Center the text at the mouse pointer
      }}
    >
      &#91;CLICK to enter&#93;
    </Title>
  );
};

export default MouseFollower;
