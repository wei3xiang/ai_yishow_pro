import React, { useState } from "react";

import AiComment from './aiComment';
import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiOrderDetail from './aiOrderDetail';
import AiUser from './aiUser';
import AiWine from './aiWine';
import AiWineCategory from './aiWineCategory';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiComment");

  const renderPage = () => {
    switch (activePage) {
        case "aiComment":
            return <AiComment />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetail":
            return <AiOrderDetail />;
        case "aiUser":
            return <AiUser />;
        case "aiWine":
            return <AiWine />;
        case "aiWineCategory":
            return <AiWineCategory />;
        default:
            return <AiComment />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
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
                    订单详情表
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
                    activePage === "aiWine" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiWine")}>
                    酒品表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiWineCategory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiWineCategory")}>
                    酒品分类表
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
