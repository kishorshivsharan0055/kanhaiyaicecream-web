import React from "react";
import Slider from "react-animated-slider";

export const SliderCorousal: React.FC = ({}) => {
  const content = [
    {
      title: "Welcome to Kanhaiya IceCreams",

      description:
        "As a first generation team, Imexplore is the top-notch suppliers of the field. Providing integrate products and focusing on quality in changing global scenario, Imexpore has always added sustainable value to stakeholders.",
      button: "Read More",
      image: "bg2.jpg",
    },
    {
      title: "",

      description: "",
      button: "Discover",
      image: "bg1.jpg",
    },
    {
      title: "Welcome to Kanhaiya IceCreams",

      description:
        "As a first generation team, Imexplore is the top-notch suppliers of the field. Providing integrate products and focusing on quality in changing global scenario, Imexpore has always added sustainable value to stakeholders.",
      button: "Buy now",
      image: "bg2.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];

  return (
    <div className=" body-slider pt-20 object-contain">
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundPosition: "center center",
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
