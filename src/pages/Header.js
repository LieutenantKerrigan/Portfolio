import TypeIt from "typeit-react";

const Header = () => {
  return (
    <div className="header">
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
      </div>
    </div>
  );
};
export default Header;
