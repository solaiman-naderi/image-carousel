import Slider from "@/views/Home/components";

const App = () => {
  const images = ["/123.jpeg", "/1.jpg", "/2.webp", "/3.png", "/123.jpeg"];

  return (
    <div>
      <Slider
        images={images}
        autoPlay={true}
        autoPlayInterval={4000}
        transitionDuration={0.8}
        showDots={true}
      />
    </div>
  );
};

export default App;
