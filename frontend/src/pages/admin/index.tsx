import React, { CSSProperties, useState } from "react";
import { Layout, Button, Menu } from "antd";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SkinOutlined,
  HomeOutlined,
  TeamOutlined,
  FileTextOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const headerStyle: CSSProperties = {
    justifyContent: "center",
    minHeight: "200px",
    backgroundColor: "#f5f5f5",
    display: "flex",
  };

  const contentStyle: CSSProperties = {
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    display: "flex",
    padding: 25,
  };

  const siderStyle: CSSProperties = {
    justifyContent: "center",
    backgroundColor: "#D9E2D9",
    display: "flex",
    // borderRight: "1px solid black",
  };

  const footerStyle: CSSProperties = {
    justifyContent: "center",
    lineHeight: "44px",
    color: "black",
    backgroundColor: "#f5f5f5",
    display: "flex",
  };

  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  };
  //content
  interface RecentOrder {
    key: React.Key;
    orderid: string;
    orderby: string;
    orderdate: string;
    amount: number;
    status: string;
  }
  const columns: ColumnsType<RecentOrder> = [
    {
      title: "ID",
      dataIndex: "orderid",
      width: 150,
    },
    {
      title: "Order By",
      dataIndex: "orderby",
      width: 150,
    },
    {
      title: "Order Date",
      dataIndex: "orderdate",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  //sample
  const data: RecentOrder[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      orderid: `${i}`,
      orderby: "pak",
      orderdate: `1/01/2024`,
      amount: 2,
      status: "complete",
    });
  }
  //header
  const headerRectangle: CSSProperties = {
    width: "300px",
    height: "150px",
    backgroundColor: "#D9E2D9",
    marginRight: "50px",
    marginTop: "35px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
  };
  const headerText: CSSProperties = {
    textAlign: "center",
    width: "100%",
    color: "black", 
    marginTop: "90px",
    fontSize : "20px",
    fontWeight : "500",

  };

  return (
    <Layout style={layoutStyle}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
        collapsedWidth={115}
      >
        <ShoppingOutlined
          style={{
            position: "absolute",
            color: "#343434",
            marginTop: "20px",
            fontSize: "30px",
            left: collapsed ? "36%" : "10px",
          }}
        />
        <span
          style={{
            position: "absolute",
            display: collapsed ? "none" : "block",
            color: "#343434",
            marginTop: "23px",
            left: "40px",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Torhinozorus
        </span>
        <div className="sider menu" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "General",
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: "Employee",
            },
            {
              key: "3",
              icon: <SkinOutlined />,
              label: "Product",
            },
            {
              key: "4",
              icon: <FileTextOutlined />,
              label: "Order",
            },
          ]}
          style={{
            backgroundColor: "#D9E2D9",
            border: "none",
            color: "#343434",
            fontSize: "18px",
            marginTop: "70px",
          }}
        />
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: "absolute",
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Header style={headerStyle}>
          <div style={headerRectangle}>
            <span style={headerText}>Employee</span>
          </div>
          <div style={{ ...headerRectangle, marginRight: "50px" }}>
            <span style={headerText}>Product</span>
          </div>
          <div style={{ ...headerRectangle, marginRight: "50px" }}>
            <span style={headerText}>Order</span>
          </div>
        </Header>
        <Content>
          <div style={contentStyle}>
            <Table
              columns={columns}
              dataSource={data}
              //   pagination={{ pageSize: 50 }}
              scroll={{ y: 550 }}
            />
          </div>
        </Content>
        <Footer style={footerStyle}>
          Torhinozorus ©{new Date().getFullYear()} Created by Torhinozorus DEV
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
