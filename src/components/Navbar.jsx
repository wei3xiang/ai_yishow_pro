import React, { useState } from "react";

import AiMenu from './aiMenu';
import AiRole from './aiRole';
import AiUser from './aiUser';
import AiUserMenu from './aiUserMenu';
import AiUserRole from './aiUserRole';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiMenu");

  const renderPage = () => {
    switch (activePage) {
        case "aiMenu":
            return <AiMenu />;
        case "aiRole":
            return <AiRole />;
        case "aiUser":
            return <AiUser />;
        case "aiUserMenu":
            return <AiUserMenu />;
        case "aiUserRole":
            return <AiUserRole />;
        default:
            return <AiMenu />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiMenu" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiMenu")}>
                  {"菜单表".endsWith("表")
                  ? "菜单表".slice(0, -1) + "管理"
                  : "菜单表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiRole" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiRole")}>
                  {"角色表".endsWith("表")
                  ? "角色表".slice(0, -1) + "管理"
                  : "角色表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUser" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUser")}>
                  {"用户表".endsWith("表")
                  ? "用户表".slice(0, -1) + "管理"
                  : "用户表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUserMenu" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUserMenu")}>
                  {"用户菜单关联表".endsWith("表")
                  ? "用户菜单关联表".slice(0, -1) + "管理"
                  : "用户菜单关联表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUserRole" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUserRole")}>
                  {"用户角色关联表".endsWith("表")
                  ? "用户角色关联表".slice(0, -1) + "管理"
                  : "用户角色关联表"}
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
