import { useState, useEffect, useRef } from "react";
import ScrollOut from "scroll-out";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactsvg from "../images/logo/react-1.svg";
import jssvg from "../images/logo/logo-javascript.svg";
import nodesvg from "../images/logo/nodejs-1.svg";
import cppsvg from "../images/logo/c.svg";
import javasvg from "../images/logo/java-4.svg";
import mysqlsvg from "../images/logo/mysql-2.svg";

const SkillText = ({ title, desc, img }) => {
  return (
    <div className="skilltext">
      <div className="skillimgbox">
        <img
          className="skillimg"
          src={img}
          alt="img"
          onClick={(e) => {
            e.target.className =
              e.target.className === "skillimg" ? "imgclick" : "skillimg";
          }}
        />
      </div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

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
        <div className="slidercontent">
          <div className="slidercontenttitle" align="center">
            주력스킬
          </div>
          <div className="slidercontentlist">
            <SkillText
              title="React.js"
              img={reactsvg}
              desc={`jsx 문법에 익숙합니다.\n컴포넌트 사용에 능숙합니다.`}
            />
            <SkillText
              title="javascript"
              img={jssvg}
              desc={`ES6 이상의 문법을 사용합니다.\n내장함수를 잘 이용합니다.`}
            />
            <SkillText
              title="node.js"
              img={nodesvg}
              desc={`CommonJS모듈 시스템의\n사용방법을 숙지하고 있습니다.`}
            />
          </div>
        </div>
        <div className="slidercontent">
          <div align="center" className="slidercontenttitle">
            서브스킬
          </div>
          <div className="slidercontentlist">
            <SkillText
              title="C/C++"
              img={cppsvg}
              desc={`기초적인 프로그램 개발경험\n포인터 변수까지 교과과정 이수`}
            />
            <SkillText
              title="java"
              img={javasvg}
              desc={`안드로이드 앱\n개발 경험이 있습니다.`}
            />
            <SkillText
              title="MySql"
              img={mysqlsvg}
              desc={`안드로이드 앱에서\nphp를 사용하여 데이터를\n읽고 써본 경험이 있습니다.`}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Skill;
