import "./App.css";
import Button from "@mui/material/Button";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import portfolio from "./images/portfolio.mp4";
import { styled } from "@mui/system";
import ScrollOut from "scroll-out";
import { useEffect, useRef, useState } from "react";

const CustomButton = styled(Button)({
  fontFamily: "MaplestoryLight",
  fontSize: 36,
  color: "white",
  padding: "6px 12px",
  border: "1px solid",
  margin: "50px",
  "&:hover": {
    color: "#ff7f00",
    borderColor: "#ff7f00",
  },
});

function App() {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [article, setArticle] = useState(<Header />);
  const Interval = useRef(null);

  useEffect(() => {
    ScrollOut({ once: true });
    Interval.current = setInterval(() => {
      setStyle({ opacity: 1 });
      clearInterval(Interval.current);
    }, 6000);
  }, []);
  return (
    <div className="App">
      {/* <div className="video">
        <video autoPlay loop muted>
          <source src={portfolio} />이 브라우저에서는 영상이 재생되지 않습니다.
        </video>
      </div> */}
      <div className="screen">
        <div data-scroll style={style} className="menubtn">
          <CustomButton
            onClick={() => {
              setArticle(<Header />);
            }}
          >
            &lt;Header /&gt;
          </CustomButton>
          <CustomButton
            onClick={() => {
              setArticle(<Skill />);
            }}
          >
            &lt;Skill /&gt;
          </CustomButton>
          <CustomButton
            onClick={() => {
              setArticle(<Project />);
            }}
          >
            &lt;Project /&gt;
          </CustomButton>
          <CustomButton
            onClick={() => {
              setArticle(<Footer />);
            }}
          >
            &lt;Footer /&gt;
          </CustomButton>
        </div>
        <div className="article">{article}</div>
        <div data-scroll style={style} className="source">
          이 페이지에는 메이플스토리가 제공한 메이플스토리 서체가 적용되어
          있습니다.
        </div>
      </div>
    </div>
  );
}

export default App;
