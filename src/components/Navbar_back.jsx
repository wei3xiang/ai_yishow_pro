import React, { useState } from "react";

const Navbar = () => {
  const [activePage, setActivePage] = useState("users");

  const renderPage = () => {
    switch (activePage) {
      case "users":
        return <UserList />;
      case "classes":
        return <ClassList />;
      case "bFoos":
        return <BFoo />;
      default:
        return <UserList />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
            <li
              className={`layui-nav-item ${
                activePage === "users" ? "layui-this" : ""
              }`}
            >
              <a href="#" onClick={() => setActivePage("users")}>
                用户
              </a>
            </li>
            <li
              className={`layui-nav-item ${
                activePage === "classes" ? "layui-this" : ""
              }`}
            >
              <a href="#" onClick={() => setActivePage("classes")}>
                班级
              </a>
            </li>
            <li
              className={`layui-nav-item ${
                activePage === "bFoos" ? "layui-this" : ""
              }`}
            >
              <a href="#" onClick={() => setActivePage("bFoos")}>
                bFoo
              </a>
            </li>
          </ul>
        </div>
      </div>
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
          Bank AI
        </div>
      </div>
      <div className="layui-body">
        <div style={{ padding: "15px" }}>{renderPage()}</div>
      </div>
    </div>
  );
};

export default Navbar;
