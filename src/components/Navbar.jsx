import React, { useState } from "react";

import AiCustomer from './aiCustomer';
import AiFlower from './aiFlower';
import AiOrder from './aiOrder';
import AiOrderItem from './aiOrderItem';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomer");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomer":
            return <AiCustomer />;
        case "aiFlower":
            return <AiFlower />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderItem":
            return <AiOrderItem />;
        case "aiUser":
            return <AiUser />;
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
                  {"客户表".endsWith("表")
                  ? "客户表".slice(0, -1) + "管理"
                  : "客户表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlower" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlower")}>
                  {"鲜花表".endsWith("表")
                  ? "鲜花表".slice(0, -1) + "管理"
                  : "鲜花表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                  {"订单表".endsWith("表")
                  ? "订单表".slice(0, -1) + "管理"
                  : "订单表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrderItem" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderItem")}>
                  {"订单项表".endsWith("表")
                  ? "订单项表".slice(0, -1) + "管理"
                  : "订单项表"}
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
