import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bosstimer_img1 from "../images/bosstimer/1.PNG";
import bosstimer_img2 from "../images/bosstimer/2.PNG";
import bosstimer_img3 from "../images/bosstimer/3.PNG";
import bosstimer_img4 from "../images/bosstimer/4.PNG";
import bosstimer_img5 from "../images/bosstimer/5.PNG";
import bosstimer_img6 from "../images/bosstimer/6.PNG";
import lotto_img1 from "../images/lotto/1.PNG";
import lotto_img2 from "../images/lotto/2.PNG";
import management_img1 from "../images/management/1.png";
import management_img2 from "../images/management/2.png";
import management_img3 from "../images/management/3.png";
import management_img4 from "../images/management/4.png";
import management_img5 from "../images/management/5.png";
import management_img6 from "../images/management/6.png";
import management_img7 from "../images/management/7.png";
import management_img8 from "../images/management/8.png";
import management_img9 from "../images/management/9.png";

const Project = () => {
  useEffect(() => {
    ScrollOut({ once: true });
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
  };
  var settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ProjectItem = ({ title, date, description, technology }) => {
    const Sector = ["title", "date", "technology", "description"];
    const Article = ({ name, article }) => {
      return (
        <div className="projectitemarticle">
          <div className="headertitle">{name}</div>
          <div className={name}>{article}</div>
        </div>
      );
    };
    return (
      <div className="projectitem">
        {Sector.map((elm, key) => {
          return <Article key={key} name={elm} article={eval(elm)} />;
        })}
      </div>
    );
  };

  const ImageBox = ({ src }) => {
    return (
      <div className="imgsliderpic">
        <img
          alt="img"
          src={src}
          onClick={(e) => {
            window.open(
              e.target.src,
              "new",
              "width=800,height=800",
              "top=100",
              "scrollbars=yes"
            );
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  };

  return (
    <div data-scroll className="project">
      <Slider {...settings} className="slider">
        <div className="projectlist">
          <div className="projectpicture">
            <Slider {...settings2} className="imgslider">
              <ImageBox src={bosstimer_img1} />
              <ImageBox src={bosstimer_img2} />
              <ImageBox src={bosstimer_img3} />
              <ImageBox src={bosstimer_img4} />
              <ImageBox src={bosstimer_img5} />
              <ImageBox src={bosstimer_img6} />
            </Slider>
          </div>
          <ProjectItem
            title={
              <a
                href="https://maplestory-boss-timer.web.app/"
                target="_blank"
                title="보스타이머"
                rel="noopener noreferrer"
              >
                메이플 보스 타이머
              </a>
            }
            date={`2022-07 ~ ing`}
            technology={`React
          firebase`}
            description={`'메이플스토리' 라는 게임의 서드파티 웹 사이트입니다.
          해당 게임을 플레이하며,
          극악의 난이도를 수월하게 플레이해보고자 제작하게 되었습니다.
          React로 To Do 리스트,
          보스 패턴 시간과 남은 시간을 음성으로 알려주는 타이머를 개발하였으며,
          현재 firebase를 사용하여 배포 중입니다.
          또한, Google Analytics를 이용하여, 학습이 필요한 부분에 event를 발생시켜
          유저의 패턴을 확인하고 편의성을 개선하고 있습니다.`}
          />
        </div>

        <div className="projectlist">
          <div className="projectpicture">
            <Slider {...settings2} className="imgslider">
              <ImageBox src={lotto_img1} />
              <ImageBox src={lotto_img2} />
            </Slider>
          </div>
          <ProjectItem
            title={
              <a
                href="https://github.com/LieutenantKerrigan/lotto"
                target="_blank"
                title="github"
                rel="noopener noreferrer"
              >
                로또 시뮬레이터
              </a>
            }
            date={`2022-05 ~ ing`}
            technology={`React
            Express`}
            description={`로또 1등에 당첨되려면
            얼마 정도의 로또를 구매해야 될까란 호기심에 시작하게 되었습니다.
            동행복권API를 이용하여 회차별 당첨번호를 가져오려 했지만,
            CORS 이슈로 인해 Express를 사용하여 get API를 만들어서 해결했습니다.
            현재 번호별 당첨횟수 통계 내역을 준비중입니다.
            `}
          />
        </div>

        <div className="projectlist">
          <div className="projectpicture">
            <Slider {...settings2} className="imgslider">
              <ImageBox src={management_img1} />
              <ImageBox src={management_img2} />
              <ImageBox src={management_img3} />
              <ImageBox src={management_img4} />
              <ImageBox src={management_img5} />
              <ImageBox src={management_img6} />
              <ImageBox src={management_img7} />
              <ImageBox src={management_img8} />
              <ImageBox src={management_img9} />
            </Slider>
          </div>
          <ProjectItem
            title="회원관리앱"
            date="2018-09 ~ 2018-12"
            technology={`Android Studio
          MySql, MariaDB
          PHP
          개인NAS`}
            description={`모바일로 출결관리를 할 수 있는 앱입니다.
            회원계정으로 로그인한 디바이스에서 qr바코드를 출력하고, 관리자 계정으로 접속한 디바이스로 해당 바코드를 인식하면 출석이 되는 기능을 구현했습니다.
            앱에서 DB로 바로 접속이 되지않아, 필요한 정보를 PHP로 주고받았으며,
            개인적으로 사용중이던 NAS에 데이터서버를 구축하여 관리했습니다.
          `}
          />
        </div>
      </Slider>
    </div>
  );
};
export default Project;
