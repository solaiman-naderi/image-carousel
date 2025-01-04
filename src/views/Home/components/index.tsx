"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { imageVariants, positions } from "../constants";

interface SliderProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  transitionDuration?: number;
  showDots?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
  transitionDuration = 0.8,
  showDots = true,
}) => {
  const [positionIndexes, setPositionIndexes] = useState<number[]>(
    images.map((_, index) => index)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoPlay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (autoPlay)
      autoplayRef.current = setInterval(handleNext, autoPlayInterval);
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % images.length)
    );
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetAutoPlay();
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index - 1 + images.length) % images.length)
    );
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    resetAutoPlay();
  };

  const handleDotClick = (index: number) => {
    const newIndexes = images.map(
      (_, i) => (i - index + images.length) % images.length
    );
    setPositionIndexes(newIndexes);
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) handleNext();
    else if (info.offset.x > 50) handleBack();
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoPlay, autoPlayInterval]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden"
      style={{
        perspective: "1500px",
        background: `radial-gradient(circle at 50% 50%, rgba(0,0,100,.8) 0%, rgba(0,0,0,.98) 100%)`,
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
        >
          <motion.img
            src={image}
            alt={`Slide ${index}`}
            className="rounded-xl shadow-lg cursor-grab object-cover"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              maxHeight: "400px",
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-lg font-bold">Sample Text {index + 1}</h2>
            <p className="text-sm">Description for image {index + 1}</p>
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute flex bottom-12 gap-6">
        <motion.button
          className="text-white bg-indigo-600 hover:bg-indigo-500 rounded-full p-2 shadow-lg"
          whileHover={{ scale: 1.3 }}
          onClick={handleBack}
        >
          &#8592;
        </motion.button>
        <motion.button
          className="text-white bg-indigo-600 hover:bg-indigo-500 rounded-full p-2 shadow-lg"
          whileHover={{ scale: 1.3 }}
          onClick={handleNext}
        >
          &#8594;
        </motion.button>
      </div>

      {showDots && (
        <div className="absolute bottom-6 flex gap-3">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-indigo-400 scale-110 shadow-md"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.5 }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
