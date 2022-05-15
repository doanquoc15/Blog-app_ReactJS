import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://img5.thuthuatphanmem.vn/uploads/2021/07/15/anh-nang-dep_030140212.jpg"
        alt=""
      />
    </div>
  );
}
