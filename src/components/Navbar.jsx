import React, { useState } from "react";

import AiDish from './aiDish';
import AiInventory from './aiInventory';
import AiMealRecord from './aiMealRecord';
import AiOrder from './aiOrder';
import AiProduct from './aiProduct';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiDish");

  const renderPage = () => {
    switch (activePage) {
        case "aiDish":
            return <AiDish />;
        case "aiInventory":
            return <AiInventory />;
        case "aiMealRecord":
            return <AiMealRecord />;
        case "aiOrder":
            return <AiOrder />;
        case "aiProduct":
            return <AiProduct />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiDish />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiDish" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiDish")}>
                    菜品表
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
                    activePage === "aiMealRecord" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiMealRecord")}>
                    用餐记录表
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
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                    商品表
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
