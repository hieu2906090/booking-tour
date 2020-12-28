import React, { useState } from "react";
import { Layout, Menu, Switch } from "antd";
import { PieChartOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../..//assets/css/AdminPage/AdminPage.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderBar(props) {
  return (
    <Sider
      collapsible
      collapsed={props.collapsed}
      onCollapse={props.toggleCollapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/admin/blank">Blank Page</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Thông Tin Tour">
          <Menu.Item key="5">
            <Link to="/admin/tour-cat">Phân Nhóm Tour</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/admin/tour">Thông Tin Tour</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderBar;
