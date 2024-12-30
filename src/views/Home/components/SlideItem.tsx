"use client";

import { useMotionValue, useTransform } from "framer-motion";

import MotionImage from "@/views/common/MotionImage";
import { SliderProps } from "../types";

const SildItem = ({ data, images, setImages }: SliderProps) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRows = useTransform(x, [-150, 0, 150], [-18, 0, 18]);

  const isFront = data.id === images[0]?.id;
  const offset = isFront ? 0 : Number(data.id) % 2 === 0 ? -6 : 6;
  const rotate = useTransform(rotateRows, (value) => `${value + offset}deg`);

  const handelDrag = () => {
    if (Math.abs(x.get()) > 50) {
      setImages((prev) => {
        const newImages = [...prev];
        const movedItem = newImages.shift();
        if (movedItem) {
          newImages.push(movedItem);
        }
        return newImages;
      });
    }
  };

  return (
    <>
      <MotionImage
        src={data.url}
        width={300}
        height={400}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handelDrag}
        alt={data.title}
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          opacity: opacity.get() as number,
          rotate: rotate.get() as string,
        }}
        className="rounded-xl object-contain cursor-grab active:cursor-grabbing"
      />
    </>
  );
};

export default SildItem;
