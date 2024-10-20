const Header = () => {
  return (
    <div className="layui-header">
      <div className="layui-logo">
        <img
          style={{
            position: "absolute",
            left: "10px",
            width: "40px",
            top: "10px",
          }}
          src="logo.png" /* 替换为实际的图片路径 */
          alt="logo"
          className="header-logo"
        />
        AI YiShow
      </div>
    </div>
  );
};

export default Header;
