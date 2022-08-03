import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import SvgIcon from "@mui/material/SvgIcon";
import TypeIt from "typeit-react";
import ScrollOut from "scroll-out";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  useEffect(() => {
    ScrollOut({ once: true });
    Interval.current = setInterval(() => {
      setStyle({ opacity: 1 });
      clearInterval(Interval.current);
    }, 300);
  }, []);
  const Interval = useRef(null);

  const CustomButton = styled(Button)({
    color: "white",
    height: "60px",
    width: "60px",
    borderRadius: "200px",
    "&:hover": {
      color: "#ff7f00",
    },
  });
  return (
    <div data-scroll style={style} className="footer">
      <div className="footerarticle">
        <TypeIt
          options={{
            strings: ["이거 괜찮네가 아닌,", "빠지게 만드는 것이 목표입니다."],
            speed: 50,
            startDelay: 1000,
            breakLines: true,
          }}
        />
      </div>
      <div className="link">
        Link
        <CustomButton
          href="https://github.com/LieutenantKerrigan"
          target="_blank"
          title="GitHub"
          rel="noopener"
        >
          <GitHubIcon fontSize="large" />
        </CustomButton>
        <CustomButton
          href="https://13542.tistory.com/"
          target="_blank"
          title="TISTORY"
          rel="noopener"
        >
          <SvgIcon fontSize="large" viewBox="0 0 459 459">
            <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
          </SvgIcon>
        </CustomButton>
      </div>
    </div>
  );
};
export default Footer;
