import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    document.querySelectorAll("h1, h2, p, a, button, span").forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      document.querySelectorAll("h1, h2, p, a, button, span").forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Smooth Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-md shadow-2xl"
          animate={{ scale: hovering ? 2.5 : 1, opacity: hovering ? 0.8 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ width: 40, height: 40 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
