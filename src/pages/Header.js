import TypeIt from "typeit-react";

const Header = () => {
  return (
    <div className="header">
      <div className="intro">
        <TypeIt
          options={{
            strings: [
              "안녕하세요.",
              "대화와 발전을 좋아하고",
              "아이디어가 넘치는",
              "채윤재 입니다.",
            ],
            speed: 50,
            startDelay: 1000,
            breakLines: true,
          }}
        />
      </div>
    </div>
  );
};
export default Header;
