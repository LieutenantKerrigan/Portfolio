import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import SvgIcon from "@mui/material/SvgIcon";
import TypeIt from "typeit-react";
import ScrollOut from "scroll-out";
import { useEffect, useRef, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const Interval = useRef(null);
  const ContactInterval = useRef(null);
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [contactOpacity, setContactOpacity] = useState(false);
  const [contacttitle, setContactTitle] = useState(false);

  useEffect(() => {
    ScrollOut({ once: true });
    Interval.current = setInterval(() => {
      setStyle({ opacity: 1 });
      clearInterval(Interval.current);
    }, 16000);
  }, []);
  useEffect(() => {
    ScrollOut({ once: true });
    ContactInterval.current = setInterval(() => {
      setContactOpacity(true);
      setContactTitle(true);
      clearInterval(ContactInterval.current);
    }, 14000);
  }, []);

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
    <div className="footer">
      <div className="footerarticle">
        <div className="articletop">
          <TypeIt
            options={{
              strings: [
                "이거 괜찮네로 끝나는 게 아닌,",
                "이 것에 빠지게 만드는 것이 목표입니다.",
                "이 목표를 함께하실",
                "선장님의 연락을 기다리고 있습니다.\n",
                "",
                "지금은 서투르지만",
                "하루하루 노를 저으며",
                "언젠간, 이 넓은 바다에",
                "이름을 날릴 수 있는 혁신을 만들겠습니다.",
              ],
              speed: 50,
              startDelay: 1000,
              breakLines: true,
            }}
          />
        </div>
        <div className="articlebottom">
          <span
            style={{ cursor: "pointer" }}
            className={`contact ${contacttitle ? "open" : ""}`}
            onClick={(e) => {
              setContactOpacity(!contactOpacity);
            }}
          >
            Contact
          </span>
          <div className={`phone ${contactOpacity ? "open" : ""}`}>
            <PhoneAndroidIcon /> 010.6372.6082
          </div>
          <div className={`email ${contactOpacity ? "open" : ""}`}>
            <EmailIcon /> chae_yunjae@naver.com
          </div>
          <div className={`address ${contactOpacity ? "open" : ""}`}>
            <HomeIcon /> 경기도 안양시 동안구 관양동
          </div>
        </div>
      </div>
      <div data-scroll style={style} className="link">
        <span className="linktitle">Link</span>
        <div className="githubbtn openbtn">
          <CustomButton
            href="https://github.com/LieutenantKerrigan"
            target="_blank"
            title="GitHub"
            rel="noopener"
          >
            <GitHubIcon fontSize="large" />
          </CustomButton>
        </div>
        <div className="tistorybtn">
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
    </div>
  );
};
export default Footer;
