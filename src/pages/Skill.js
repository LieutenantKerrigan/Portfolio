import { useState, useEffect, useRef } from "react";
import ScrollOut from "scroll-out";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const Interval = useRef(null);
  useEffect(() => {
    ScrollOut({ once: true });
    Interval.current = setInterval(() => {
      setStyle({ opacity: 1 });
      clearInterval(Interval.current);
    }, 300);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div data-scroll style={style} className="skill">
      <Slider {...settings} className="slider">
        <div className="mainskill">
          <div className="maintitle" align="center">
            쫌 친다
          </div>
          <div className="mainlist">
            <div>React</div>
            <div>javascript</div>
            <div>node.js</div>
          </div>
        </div>
        <div className="subskill">
          <div align="center" className="subtitle">
            계산기 정도는 만든다
          </div>
          <div className="sublist">
            <div>C / C++</div>
            <div>java</div>
            <div>MySql</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Skill;
