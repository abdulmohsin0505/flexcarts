import React, { useEffect, useState } from "react";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const Slider = ({ products }) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 992) {
      setItemsPerSlide(3); // lg: 3 items per slide
    } else if (windowWidth >= 768) {
      setItemsPerSlide(2); // md: 2 items per slide
    } else {
      setItemsPerSlide(1); // sm: 1 item per slide
    }
  };

  useEffect(() => {
    handleResize(); // Initial call to set items per slide
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCarouselItems = () => {
    const numItems = products?.length;
    const numSlides = Math.ceil(numItems / itemsPerSlide);
    const items = [];

    for (let i = 0; i < numSlides; i++) {
      const itemGroup = [];

      for (let j = 0; j < itemsPerSlide; j++) {
        const index = i * itemsPerSlide + j;
        const currentItem = products[index % numItems];
        itemGroup.push(
          <div key={index} className={`col-md-${12 / itemsPerSlide} shadow`}>
            {currentItem && (
              <Card style={{ height: "400px" }}>
                <Card.Img
                  variant="top"
                  src={currentItem.image}
                  style={{
                    objectFit: "contain",
                    width: "260px",
                    heigth: "260px",
                    alignSelf: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title>{currentItem.title.slice(0, 24)}</Card.Title>
                  <Card.Subtitle>Price - {currentItem.price} $</Card.Subtitle>
                </Card.Body>
              </Card>
            )}
          </div>
        );
      }

      items.push(
        <Carousel.Item key={i}>
          <div className="row">{itemGroup}</div>
        </Carousel.Item>
      );
    }

    return items;
  };

  return (
    <Carousel
      variant="dark"
      className="d-flex justify-content-end flex-row mt-3 p-2"
    >
      {renderCarouselItems()}
    </Carousel>
  );
};

export default Slider;
