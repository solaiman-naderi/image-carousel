"use client";
import { useEffect, useState } from "react";

import useFetch from "@/hooks/useFetch";
import { SliderData } from "../types";
import SildItem from "./SlideItem";
import Loading from "@/views/common/Loading";

const Slider = () => {
  const {
    data: sliderData,
    isLoading,
    error,
  } = useFetch<SliderData[]>("/photos?_start=0&_limit=5");

  const [images, setImages] = useState<SliderData[]>(sliderData || []);

  useEffect(() => {
    setImages(sliderData || []);
  }, [sliderData]);

  if (isLoading) return <Loading />;
  if (error) return <>Error</>;

  return (
    <div className="min-h-screen w-screen bg-gray-800 grid place-items-center">
      {images?.map((item) => (
        <SildItem
          key={item.id}
          data={item}
          setImages={setImages}
          images={images}
        />
      ))}
    </div>
  );
};

export default Slider;
