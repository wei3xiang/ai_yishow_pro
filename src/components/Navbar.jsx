import React, { useState } from "react";

import AiInstock from './aiInstock';
import AiOrder from './aiOrder';
import AiOrderDetail from './aiOrderDetail';
import AiProduct from './aiProduct';
import AiProductCategory from './aiProductCategory';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiInstock");

  const renderPage = () => {
    switch (activePage) {
        case "aiInstock":
            return <AiInstock />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetail":
            return <AiOrderDetail />;
        case "aiProduct":
            return <AiProduct />;
        case "aiProductCategory":
            return <AiProductCategory />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiInstock />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiInstock" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiInstock")}>
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
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                    产品表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProductCategory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProductCategory")}>
                    产品类别表
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
