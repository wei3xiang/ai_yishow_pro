import React, { useState } from "react";

import AiCategory from './aiCategory';
import AiCustomer from './aiCustomer';
import AiFlower from './aiFlower';
import AiOrder from './aiOrder';
import AiShop from './aiShop';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCategory");

  const renderPage = () => {
    switch (activePage) {
        case "aiCategory":
            return <AiCategory />;
        case "aiCustomer":
            return <AiCustomer />;
        case "aiFlower":
            return <AiFlower />;
        case "aiOrder":
            return <AiOrder />;
        case "aiShop":
            return <AiShop />;
        default:
            return <AiCategory />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiCategory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCategory")}>
                  {"花的分类表".endsWith("表")
                  ? "花的分类表".slice(0, -1) + "管理"
                  : "花的分类表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiCustomer" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCustomer")}>
                  {"客户信息表".endsWith("表")
                  ? "客户信息表".slice(0, -1) + "管理"
                  : "客户信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlower" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlower")}>
                  {"花的信息表".endsWith("表")
                  ? "花的信息表".slice(0, -1) + "管理"
                  : "花的信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                  {"订单信息表".endsWith("表")
                  ? "订单信息表".slice(0, -1) + "管理"
                  : "订单信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiShop")}>
                  {"店铺信息表".endsWith("表")
                  ? "店铺信息表".slice(0, -1) + "管理"
                  : "店铺信息表"}
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
