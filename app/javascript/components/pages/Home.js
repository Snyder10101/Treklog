import React, {useState} from "react"
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, } from 'reactstrap';

const ProtectedHome = () => {
  
const items = [
  {
    src: 'https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Let your journey begin',
    caption: 'Welcome to Trek Log',
    key: 1,
  }
  ,
  {
    src: 'https://images.pexels.com/photos/3077837/pexels-photo-3077837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: "Welcome to Trek Log",
    caption: "Your passport to the world's most beautiful hiking trails",
    key: 2,
  },
  {
    src: 'https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Welcome to Trek Log',
    caption: 'Explore the world, one trail at a time',
    key: 3,
  },
  {
    src: 'https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Welcome to Trek Log',
    caption: 'Discover your next adventure',
    key: 4,
  },
  {
    src: 'https://images.pexels.com/photos/2403502/pexels-photo-2403502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Welcome to Trek Log',
    caption: 'Hike your way to new horizons',
    key: 5,
  }
];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

    return (
      <div className="home-page">
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...ProtectedHome} className="carousel">
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="carousel-control-prev" />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="carousel-control-next" />
        </Carousel>
      </div>
    );
  }

export default ProtectedHome