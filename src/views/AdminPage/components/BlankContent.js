import React from "react";
import { Layout, Button, PageHeader } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Tour from "./Tour";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../redux/actions/auth";
import TourCat from "./TourCat";
import { withRouter } from "react-router";

const { Header, Content, Footer } = Layout;

function BlankContent(props) {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  let uid = localStorage.getItem("uid");
  let isAuthenticated = userId != null || uid != null;

  const handleLogOut = () => {
    dispatch(logOut());
    props.history.push("/login");
    window.location.reload();
  };

  return (
    <>
      <Layout className="site-layout" style={{ minHeight: "100vh" }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader
            ghost={false}
            title={React.createElement(
              props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: props.toggleCollapsed,
              }
            )}
            extra={
              isAuthenticated ? (
                <Button onClick={handleLogOut}>LogOut</Button>
              ) : null
            }
          ></PageHeader>
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

export default withRouter(BlankContent);
