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
    backgroundColor: "#4096ff",
    alignItems: "center",
    color: "#fff",
    display: "flex",
  };

  const contentStyle: CSSProperties = {
    justifyContent: "center",
    lineHeight: "100px",
    minHeight: "600px",
    color: "#fff",
    backgroundColor: "white",
    display: "flex",
  };

  const siderStyle: CSSProperties = {
    justifyContent: "center",
    backgroundColor: "#D9E2D9",
    display: "flex",
    borderRight: "2px solid black",
  };

  const footerStyle: CSSProperties = {
    minHeight: "200px",
    lineHeight: "100px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
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
        <Header style={headerStyle}>Header</Header>
        <Content>
          <div style={contentStyle}>
            <Table
              columns={columns}
              dataSource={data}
            //   pagination={{ pageSize: 50 }}
              scroll={{ y: 500 }}
            />
          </div>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
