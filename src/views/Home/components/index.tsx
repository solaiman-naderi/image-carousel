"use client";

import useFetch from "@/hooks/useFetch";
import { useMotionValue, useTransform } from "framer-motion";
import MotionImage from "@/views/common/MotionImage";
const Slider = () => {
  const {
    data: sliderData,
    isLoading,
    error,
  } = useFetch("/photos?_start=0&_limit=5");

  console.log(sliderData);
  if (isLoading) return <>Loading</>;
  if (error) return <>Error</>;
  return (
    <div className="min-h-screen w-screen bg-red-50 grid place-items-center">
      {sliderData.map((item) => (
        <SildItem key={item.id} data={item} />
      ))}
    </div>
  );
};
export default Slider;

const SildItem = ({ data }) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotate = useTransform(x, [-150, 0, 150], [-18, 0, 18]);

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
        alt={data.title}
        style={{ gridRow: 1, gridColumn: 1, x, opacity, rotate }}
        className="rounded-xl object-contain cursor-grab active:cursor-grabbing"
      />
    </>
  );
};
