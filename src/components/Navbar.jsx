import React, { useState } from "react";

import AiAddress from './aiAddress';
import AiComment from './aiComment';
import AiInventory from './aiInventory';
import AiInventoryLog from './aiInventoryLog';
import AiOrder from './aiOrder';
import AiOrderDetail from './aiOrderDetail';
import AiSupplier from './aiSupplier';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiAddress");

  const renderPage = () => {
    switch (activePage) {
        case "aiAddress":
            return <AiAddress />;
        case "aiComment":
            return <AiComment />;
        case "aiInventory":
            return <AiInventory />;
        case "aiInventoryLog":
            return <AiInventoryLog />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetail":
            return <AiOrderDetail />;
        case "aiSupplier":
            return <AiSupplier />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiAddress />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiAddress" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiAddress")}>
                    地址表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiComment" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiComment")}>
                    评论表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiInventory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiInventory")}>
                    库存表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiInventoryLog" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiInventoryLog")}>
                    库存变动记录表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                    订单表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrderDetail" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderDetail")}>
                    订单明细表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiSupplier" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiSupplier")}>
                    供应商表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUser" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUser")}>
                    用户表
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
