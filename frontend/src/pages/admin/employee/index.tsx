import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Layout,
  Button,
  Menu,
  Table,
  Dropdown,
  Space,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Col,
  Statistic,
  Card,
} from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SkinOutlined,
  HomeOutlined,
  TeamOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  PoweroffOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  UserAddOutlined,
  DollarOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const Employee = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const headerStyle: CSSProperties = {
    textAlign: "center",
    justifyContent: "center",
    minHeight: "157px",
    backgroundColor: "#f5f5f5",
    display: "flex",
  };

  const contentStyle: CSSProperties = {
    minHeight: "879px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    padding: 25,
  };

  const siderStyle: CSSProperties = {
    justifyContent: "center",
    backgroundColor: "#D9E2D9",
    display: "flex",
    // borderRight: "1px solid black",
  };
  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  };
  //table
  interface Employee {
    key: React.Key;
    employeeid: string;
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    department: string;
  }
  const columns: ColumnsType<Employee> = [
    {
      title: "ID",
      dataIndex: "employeeid",
      width: "3%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "15%",
    },
    {
      title: "Username",
      dataIndex: "username",
      width: "12%",
    },
    {
      title: "Password",
      dataIndex: "password",
      width: "12%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "8%",
    },
    {
      title: "Department",
      dataIndex: "department",
      filters: [
        { text: "Restocker", value: "Restocker" },
        { text: "Checkpayment", value: "Checkpayment" },
      ],
      onFilter: (value, record) => record.department === value,
      width: "6%",
    },
    {
      title: "",
      width: "5%",
      render: (text, record) => (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined style={{ color: "black" }} />
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];
  //feature

  //menu table
  const items: MenuProps["items"] = [
    {
      label: (
        <a>
          <EditOutlined />
          Edit
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a>
          <DeleteOutlined />
          Delete
        </a>
      ),
      key: "1",
    },
  ];

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
    fontSize: "20px",
    fontWeight: "500",
  };
  //CreateEmployee
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  //sample
  const data: Employee[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      employeeid: `${i}`,
      name: "example name",
      username: "p",
      password: "1234",
      email: "p@1234.com",
      phone: "621566545",
      department: "Restocker",
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
          onClick={({ key }) => {
            if (key == "signout") {
              //sign out feature
            } else {
              navigate(key);
            }
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/admin/employee"]}
          items={[
            {
              key: "/admin",
              icon: <HomeOutlined />,
              label: "General",
            },
            {
              key: "/admin/employee",
              icon: <TeamOutlined />,
              label: "Employee",
            },
            {
              key: "/admin/product",
              icon: <SkinOutlined />,
              label: "Product",
            },
            {
              key: "/admin/order",
              icon: <FileTextOutlined />,
              label: "Order",
            },
            {
              key: "signout",
              icon: <PoweroffOutlined />,
              label: "Signout",
              style: { color: "red", marginTop: "650px" },
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
        <div style={{ marginTop: "50px"}}>
          <Row gutter={150}>
            <Col span={8}>
              <Card bordered={false} style={{backgroundColor: "#D9E2D9",width: "200px"}}>
                <Statistic
                  title="Employee"
                  value={2}
                  valueStyle={{  }}
                  prefix={<TeamOutlined />}
                  />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} style={{backgroundColor: "#D9E2D9",width: "200px"}}>
                <Statistic
                  title="Restocker"
                  value={1}
                  valueStyle={{ }}
                  prefix={<DatabaseOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} style={{backgroundColor: "#D9E2D9",width: "200px"}}>
                <Statistic
                  title="Checkpayment"
                  value={0}
                  valueStyle={{  }}
                  prefix={<DollarOutlined />}
                  />
              </Card>
            </Col>
          </Row>
          </div>
        </Header>
        <Content>
          <div style={contentStyle}>
            <div style={{ marginLeft: "1400px", marginBottom: "10px" }}>
              <Button
                type="primary"
                onClick={showDrawer}
                style={{ backgroundColor: "#003D06", color: "#D9E2D9" }}
              >
                <UserAddOutlined />
                Add Employee
              </Button>
            </div>
            <Drawer
              title="Create a new Employee"
              width={720}
              onClose={onClose}
              open={open}
              styles={{
                body: {
                  paddingBottom: 80,
                },
              }}
              extra={
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    onClick={onClose}
                    type="primary"
                    style={{ backgroundColor: "#003D06", color: "#D9E2D9" }}
                  >
                    Submit
                  </Button>
                </Space>
              }
            >
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="Name"
                      label="Name"
                      rules={[{ required: true, message: "Please enter name" }]}
                    >
                      <Input placeholder="Please enter user name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="Email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter email" },
                      ]}
                    >
                      <Input
                        style={{ width: "100%" }}
                        addonAfter=".com"
                        placeholder="Please enter email"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="Username"
                      label="Username"
                      rules={[
                        { required: true, message: "Please enter username" },
                      ]}
                    >
                      <Input placeholder="Please enter username" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="Password"
                      label="Password"
                      rules={[
                        { required: true, message: "Please enter password" },
                      ]}
                    >
                      <Input placeholder="Please enter password" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Form.Item
                    name="Phone"
                    label="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter phone number",
                      },
                    ]}
                  >
                    <Input placeholder="Please enter phone number" />
                  </Form.Item>
                  <Col span={12}>
                    <Form.Item
                      name="Department"
                      label="Department"
                      rules={[
                        {
                          required: true,
                          message: "Please choose the department",
                        },
                      ]}
                    >
                      <Select placeholder="Please choose the department">
                        <Option value="Restocker">Restocker</Option>
                        <Option value="Checkpayment">Checkpayment</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>
            <Table
              columns={columns}
              dataSource={data}
              //   pagination={{ pageSize: 50 }}
              scroll={{ y: 550 }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Employee;
