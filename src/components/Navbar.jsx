import React from "react";

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <div className="layui-side layui-bg-black">
      <div className="layui-side-scroll">
        <ul className="layui-nav layui-nav-tree" lay-filter="test">
          <li
            className={`layui-nav-item ${
              activePage === "users" ? "layui-this" : ""
            }`}
          >
            <a href="#" onClick={() => setActivePage("users")}>
              用户
            </a>
          </li>
          <li
            className={`layui-nav-item ${
              activePage === "classes" ? "layui-this" : ""
            }`}
          >
            <a href="#" onClick={() => setActivePage("classes")}>
              班级
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
