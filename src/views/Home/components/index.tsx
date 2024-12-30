"use client";

import useFetch from "@/hooks/useFetch";

const Slider = () => {
  const sliderData = useFetch("/photos?_start=0&_limit=10");
  console.log(sliderData);

  return <div className="min-h-screen w-screen bg-red-50">d</div>;
};
export default Slider;
