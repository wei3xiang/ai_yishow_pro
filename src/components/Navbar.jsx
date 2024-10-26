import React, { useState } from "react";

import AiFlowerShop from './aiFlowerShop';
import AiFlowerType from './aiFlowerType';
import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiProductInfo from './aiProductInfo';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiFlowerShop");

  const renderPage = () => {
    switch (activePage) {
        case "aiFlowerShop":
            return <AiFlowerShop />;
        case "aiFlowerType":
            return <AiFlowerType />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiProductInfo":
            return <AiProductInfo />;
        default:
            return <AiFlowerShop />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerShop")}>
                  {"花店信息表".endsWith("表")
                  ? "花店信息表".slice(0, -1) + "管理"
                  : "花店信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerType" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerType")}>
                  {"花类型表".endsWith("表")
                  ? "花类型表".slice(0, -1) + "管理"
                  : "花类型表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiInventory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiInventory")}>
                  {"库存表".endsWith("表")
                  ? "库存表".slice(0, -1) + "管理"
                  : "库存表"}
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
                    activePage === "aiProductInfo" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProductInfo")}>
                  {"产品信息表".endsWith("表")
                  ? "产品信息表".slice(0, -1) + "管理"
                  : "产品信息表"}
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
