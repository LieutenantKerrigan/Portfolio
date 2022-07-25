import { useState, useEffect, useRef } from "react";
import ScrollOut from "scroll-out";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
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
    <div data-scroll style={style} className="project">
      <Slider {...settings} className="slider">
        <div className="wtf">
          <div className="project_list">
            <div className="project_article">
              <div>메이플 보스 타이머</div>
              <div>date</div>
              <div>description</div>
            </div>
            <div className="project_picture">
              <Slider {...settings} className="slider">
                <div>1</div>
                <div>2</div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="project_list">로또 시뮬레이터</div>
        <div>회원관리어플</div>
      </Slider>
    </div>
  );
};
export default Project;
