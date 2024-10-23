import React, { useState } from "react";

import AiCustomers from './aiCustomers';
import AiEmployees from './aiEmployees';
import AiGoods from './aiGoods';
import AiOrders from './aiOrders';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomers");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomers":
            return <AiCustomers />;
        case "aiEmployees":
            return <AiEmployees />;
        case "aiGoods":
            return <AiGoods />;
        case "aiOrders":
            return <AiOrders />;
        default:
            return <AiCustomers />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiCustomers" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCustomers")}>
                    客户表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiEmployees" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiEmployees")}>
                    员工表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiGoods" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiGoods")}>
                    商品表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrders" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrders")}>
                    订单表
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
