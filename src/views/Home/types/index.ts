export interface SliderData {
  id: string;
  url: string;
  title: string;
}
export interface SliderProps {
  data: SliderData;
  images: SliderData[];
  setImages: React.Dispatch<React.SetStateAction<SliderData[]>>;
}
