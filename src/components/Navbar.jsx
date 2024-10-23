import React, { useState } from "react";

import AiEmployee from './aiEmployee';
import AiFlowerShop from './aiFlowerShop';
import AiProduct from './aiProduct';
import AiSale from './aiSale';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiEmployee");

  const renderPage = () => {
    switch (activePage) {
        case "aiEmployee":
            return <AiEmployee />;
        case "aiFlowerShop":
            return <AiFlowerShop />;
        case "aiProduct":
            return <AiProduct />;
        case "aiSale":
            return <AiSale />;
        default:
            return <AiEmployee />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiEmployee" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiEmployee")}>
                  {"花店员工信息表".endsWith("表")
                  ? "花店员工信息表".slice(0, -1) + "管理"
                  : "花店员工信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerShop")}>
                  {"花店基本信息表".endsWith("表")
                  ? "花店基本信息表".slice(0, -1) + "管理"
                  : "花店基本信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                  {"花店商品信息表".endsWith("表")
                  ? "花店商品信息表".slice(0, -1) + "管理"
                  : "花店商品信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiSale" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiSale")}>
                  {"销售记录表".endsWith("表")
                  ? "销售记录表".slice(0, -1) + "管理"
                  : "销售记录表"}
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
