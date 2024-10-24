import React, { useState } from "react";

import AiOrder from './aiOrder';
import AiOrderItem from './aiOrderItem';
import AiOwner from './aiOwner';
import AiProduct from './aiProduct';
import AiShop from './aiShop';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiOrder");

  const renderPage = () => {
    switch (activePage) {
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderItem":
            return <AiOrderItem />;
        case "aiOwner":
            return <AiOwner />;
        case "aiProduct":
            return <AiProduct />;
        case "aiShop":
            return <AiShop />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiOrder />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
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
                    activePage === "aiOwner" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOwner")}>
                  {"店铺负责人表".endsWith("表")
                  ? "店铺负责人表".slice(0, -1) + "管理"
                  : "店铺负责人表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                  {"产品表".endsWith("表")
                  ? "产品表".slice(0, -1) + "管理"
                  : "产品表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiShop")}>
                  {"店铺表".endsWith("表")
                  ? "店铺表".slice(0, -1) + "管理"
                  : "店铺表"}
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
