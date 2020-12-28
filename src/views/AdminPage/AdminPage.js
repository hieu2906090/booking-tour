import React, { useState } from "react";
import BlankContent from "./components/BlankContent";
import SiderBar from "./components/SiderBar";
import { Layout } from "antd";

function AdminPage() {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("dark");
  const [collapsed, setCollapsed] = useState(false);

  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderBar
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
      ></SiderBar>
      <BlankContent
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
      ></BlankContent>
    </Layout>
  );
}

export default AdminPage;
