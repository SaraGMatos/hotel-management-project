import { useEffect, useState } from "react";

interface Props {
  endValue: number;
  duration: number;
}

const CountUpNumber = ({ endValue, duration }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(endValue, (progress / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);

  return (
    <p className="md:font-bold font-medium text-lg xl:text-5xl">
      {Math.round(count)}
    </p>
  );
};

export default CountUpNumber;
