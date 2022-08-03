import "./App.css";
import Button from "@mui/material/Button";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import { styled } from "@mui/system";
import ScrollOut from "scroll-out";
import { useEffect, useRef, useState } from "react";

const CustomButton = styled(Button)({
  width: "100%",
  fontFamily: "MaplestoryLight",
  fontSize: 16,
  color: "white",
  textShadow: "2px 2px 2px black",
  "&:hover": {
    color: "#ff7f00",
    borderColor: "#ff7f00",
  },
  "&:active": {
    // color: "black",
  },
});
const SourceText = () => {
  return (
    <>
      이 페이지에는 메이플스토리가 제공한 메이플스토리 서체가 적용되어 있습니다.
    </>
  );
};

function App() {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [article, setArticle] = useState(<Header />);
  const [source, setSource] = useState(<SourceText />);
  const Interval = useRef(null);
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    ScrollOut({ once: true });
    Interval.current = setInterval(() => {
      setStyle({ opacity: 1 });
      clearInterval(Interval.current);
    }, 6000);
  }, []);
  return (
    <div className="App">
      <div data-scroll style={style} className="menubtn">
        <div className={scroll === 1 ? "menu" : ""}>
          <CustomButton
            onClick={() => {
              setArticle(<Header />);
              setSource(<SourceText />);
              setScroll(1);
            }}
          >
            &lt;Header /&gt;
          </CustomButton>
        </div>
        <div className={scroll === 2 ? "menu" : ""}>
          <CustomButton
            className="menu"
            onClick={() => {
              setArticle(<Skill />);
              setSource();
              setScroll(2);
            }}
          >
            &lt;Skill /&gt;
          </CustomButton>
        </div>
        <div className={scroll === 3 ? "menu" : ""}>
          <CustomButton
            className="menu"
            onClick={() => {
              setArticle(<Project />);
              setSource();
              setScroll(3);
            }}
          >
            &lt;Project /&gt;
          </CustomButton>
        </div>
        <div className={scroll === 4 ? "menu" : ""}>
          <CustomButton
            className="menu"
            onClick={() => {
              setArticle(<Footer />);
              setSource();
              setScroll(4);
            }}
          >
            &lt;Footer /&gt;
          </CustomButton>
        </div>
      </div>
      <div className="article">{article}</div>
      <div data-scroll style={style} className="source">
        {source}
      </div>
    </div>
  );
}

export default App;
