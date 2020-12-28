import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Tour from "./Tour";
import { Switch, Route } from "react-router-dom";
import TourCat from "./TourCat";

const { Header, Content, Footer } = Layout;

function BlankContent(props) {
  return (
    <>
      <Layout className="site-layout" style={{ minHeight: "100vh" }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: props.toggleCollapsed,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            overflow: "initial",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route
              path="/admin/blank"
              render={() => {
                return <h2>Blank Page</h2>;
              }}
            ></Route>
            <Route
              path="/admin/tour"
              render={() => {
                return <Tour></Tour>;
              }}
            ></Route>
            <Route
              path="/admin/tour-cat"
              render={() => {
                return <TourCat></TourCat>;
              }}
            ></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Hieu.Quang
        </Footer>
      </Layout>
    </>
  );
}

export default BlankContent;
