import React, { useState } from "react";
import { Layout, Menu, Switch } from "antd";
import {
  PieChartOutlined,
  MailOutlined,
  BarChartOutlined,
  ContactsOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
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
          <Link to="/admin/blank">Dashboard</Link>
        </Menu.Item>
        <SubMenu
          key="sub0"
          icon={<DatabaseOutlined />}
          title="Quản Lý Đặt Tour"
        >
          <Menu.Item key="2">
            <Link to="/admin/dat-tour/danh-sach">Danh Sách Đặt Tour</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/dat-tour/bao-cao">Báo Cáo Đặt Tour</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub1" icon={<BarChartOutlined />} title="Báo Cáo">
          <Menu.Item key="4">
            <Link to="/admin/doanh-thu/thang">Doanh Số Ngày</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/admin/doanh-thu/thang">Doanh Số Tháng</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<MailOutlined />} title="Quản Lý Tour">
          <Menu.Item key="6">
            <Link to="/admin/tour-cat">Phân Nhóm Tour</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/admin/tour">Thông Tin Tour</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<ContactsOutlined />}
          title="Quản Lý Khách Hàng"
        >
          <Menu.Item key="8">
            <Link to="/admin/tour-cat">Danh Sách Khách Hàng</Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/admin/tour">Báo Cáo Đặt Hàng</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderBar;
