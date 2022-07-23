import TypeIt from "typeit-react";
import ScrollOut from "scroll-out";
import portfolio from "../images/portfolio.mp4";
import { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    ScrollOut({ once: true });
  }, []);

  setInterval(() => {
    setStyle({ opacity: 1 });
  }, 7000);

  const [style, setStyle] = useState({
    opacity: 0,
  });

  return (
    <div className="header">
      <div className="video">
        <video autoPlay loop muted>
          <source src={portfolio} />이 브라우저에서는 영상이 재생되지 않습니다.
        </video>
        <div className="intro">
          <TypeIt
            options={{
              strings: [
                "안녕하세요.",
                "사용자를 생각하는 개발자",
                "채윤재 입니다.",
              ],
              startDelay: 1000,
              breakLines: true,
            }}
          />
          <div data-scroll style={style} align="right" className="source">
            이 페이지에는 메이플스토리가 제공한 메이플스토리 서체가 적용되어
            있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
