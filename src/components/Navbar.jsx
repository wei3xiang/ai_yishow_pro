import React, { useState } from "react";

import AiEmployee from './aiEmployee';
import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiOrderItem from './aiOrderItem';
import AiProduct from './aiProduct';
import AiProductType from './aiProductType';
import AiRegion from './aiRegion';
import AiStore from './aiStore';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiEmployee");

  const renderPage = () => {
    switch (activePage) {
        case "aiEmployee":
            return <AiEmployee />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderItem":
            return <AiOrderItem />;
        case "aiProduct":
            return <AiProduct />;
        case "aiProductType":
            return <AiProductType />;
        case "aiRegion":
            return <AiRegion />;
        case "aiStore":
            return <AiStore />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiEmployee />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiEmployee" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiEmployee")}>
                    员工表
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
                    activePage === "aiOrderItem" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderItem")}>
                    订单商品关联表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                    酒品表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProductType" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProductType")}>
                    酒品类型表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiRegion" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiRegion")}>
                    行政区域表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiStore" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiStore")}>
                    分店表
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
