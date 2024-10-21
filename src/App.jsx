import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    // Initialize LayUI components
    if (window.layui) {
      window.layui.use("element", function () {
        // const element = window.layui.element;
        // Any additional configuration if needed
      });
    }
  }, []);

  return (
    <div className="layui-layout layui-layout-admin">
      <Navbar />
    </div>
  );
};

export default App;
