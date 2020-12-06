import React from "react";
import Slider from "react-animated-slider";

export const SliderCorousal: React.FC = ({}) => {
  const content = [
    {
      title: "Welcome to FoodExpress",

      description:
        "As a first generation team, Imexplore is the top-notch suppliers of the field. Providing integrate products and focusing on quality in changing global scenario, Imexpore has always added sustainable value to stakeholders.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "Welcome to FoodExpress",

      description:
        "As a first generation team, Imexplore is the top-notch suppliers of the field. Providing integrate products and focusing on quality in changing global scenario, Imexpore has always added sustainable value to stakeholders.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Welcome to FoodExpress",

      description:
        "As a first generation team, Imexplore is the top-notch suppliers of the field. Providing integrate products and focusing on quality in changing global scenario, Imexpore has always added sustainable value to stakeholders.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];

  return (
    <div className=" body-slider pt-20">
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCorousal;
