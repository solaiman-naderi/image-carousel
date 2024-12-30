// components/MotionImage.tsx
"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { MotionProps } from "framer-motion";

type MotionImageProps = ImageProps & MotionProps;

const CMotionImage = motion(Image);

const MotionImage = (props: MotionImageProps) => {
  return <CMotionImage {...props} />;
};

export default MotionImage;
