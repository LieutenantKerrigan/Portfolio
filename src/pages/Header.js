import TypeIt from "typeit-react";

const Header = () => {
  return (
    <div className="header">
      <div className="intro">
        <TypeIt
          options={{
            strings: [
              "안녕하세요.",
              "웹 이라는 넓은 바다에",
              "첫 항해를 시작하게된",
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
