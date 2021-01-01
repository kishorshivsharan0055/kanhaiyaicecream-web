import React from "react";
import Slider from "react-animated-slider";

export const SliderCorousal: React.FC = ({}) => {
  const content = [
    {
      title: "Welcome to Kanhaiya IceCreams",
      image: "bg2.jpg",
    },
    {
      title: "",
      image: "bg1.jpg",
    },
    {
      title: "Welcome to Kanhaiya IceCreams",
      image: "bg2.jpg",
    },
    {
      title: "",
      image: "bg1.jpg",
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
              {/* <p>{item.description}</p> */}
              {/* <button>{item.button}</button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCorousal;
