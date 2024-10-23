import React, { useState } from "react";

import AiBrewingLog from './aiBrewingLog';
import AiInventory from './aiInventory';
import AiOrderDetails from './aiOrderDetails';
import AiOrders from './aiOrders';
import AiUser from './aiUser';
import AiUserPaymentRecords from './aiUserPaymentRecords';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiBrewingLog");

  const renderPage = () => {
    switch (activePage) {
        case "aiBrewingLog":
            return <AiBrewingLog />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrderDetails":
            return <AiOrderDetails />;
        case "aiOrders":
            return <AiOrders />;
        case "aiUser":
            return <AiUser />;
        case "aiUserPaymentRecords":
            return <AiUserPaymentRecords />;
        default:
            return <AiBrewingLog />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiBrewingLog" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiBrewingLog")}>
                    酿酒记录表
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
                    activePage === "aiOrderDetails" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderDetails")}>
                    订单明细表
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
                <li
                className={`layui-nav-item ${
                    activePage === "aiUser" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUser")}>
                    用户表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUserPaymentRecords" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUserPaymentRecords")}>
                    用户支付记录表
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
