import React, { useState } from "react";

import AiCustomer from './aiCustomer';
import AiFlower from './aiFlower';
import AiFlowerOrder from './aiFlowerOrder';
import AiFlowerStore from './aiFlowerStore';
import AiOrdersFlower from './aiOrdersFlower';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomer");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomer":
            return <AiCustomer />;
        case "aiFlower":
            return <AiFlower />;
        case "aiFlowerOrder":
            return <AiFlowerOrder />;
        case "aiFlowerStore":
            return <AiFlowerStore />;
        case "aiOrdersFlower":
            return <AiOrdersFlower />;
        default:
            return <AiCustomer />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiCustomer" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCustomer")}>
                  {"客户个人信息表".endsWith("表")
                  ? "客户个人信息表".slice(0, -1) + "管理"
                  : "客户个人信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlower" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlower")}>
                  {"花信息表".endsWith("表")
                  ? "花信息表".slice(0, -1) + "管理"
                  : "花信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerOrder")}>
                  {"花订单信息表".endsWith("表")
                  ? "花订单信息表".slice(0, -1) + "管理"
                  : "花订单信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerStore" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerStore")}>
                  {"花店基本信息表".endsWith("表")
                  ? "花店基本信息表".slice(0, -1) + "管理"
                  : "花店基本信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrdersFlower" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrdersFlower")}>
                  {"订单花信息表".endsWith("表")
                  ? "订单花信息表".slice(0, -1) + "管理"
                  : "订单花信息表"}
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
