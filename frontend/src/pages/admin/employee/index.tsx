import React, { CSSProperties, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CreateEmployee, DeleteEmployee, GetEmployee ,UpdateEmployee} from "../../../services/http";

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
  Modal,
  notification,
} from "antd";
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
import { AdminInterface } from "../../../interfaces/admin";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const Employee = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [employee, setEmployee] = React.useState<AdminInterface[]>([]);
  const employeeCount = employee.length;
  const restockerCount = employee.filter(
    (emp) => emp.Department === "Restocker"
  ).length;
  const CheckpaymentCount = employee.filter(
    (emp) => emp.Department === "Checkpayment"
  ).length;



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
  const columns: ColumnsType<AdminInterface> = [
    {
      title: "ID",
      dataIndex: "ID",
      width: "8%",
    },
    {
      title: "Name",
      dataIndex: "Name",
      width: "15%",
    },
    {
      title: "Username",
      dataIndex: "Username",
      width: "12%",
    },
    {
      title: "Password",
      dataIndex: "Password",
      width: "12%",
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: "15%",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      width: "8%",
    },
    {
      title: "Department",
      dataIndex: "Department",
      filters:[
        { text: "Restocker", value: "Restocker" },
        { text: "Checkpayment", value: "Checkpayment" },
      ],
      onFilter: (value, record) => record.Department === value,
      width: "8%",
    },
    {
      title: "",
      width: "5%",
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu onClick={(e) => handleMenuClick(record, e)}>
              <Menu.Item key="edit" icon={<EditOutlined />}>
                Edit
              </Menu.Item>
              <Menu.Item key="delete" icon={<DeleteOutlined />}>
                Delete
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <MoreOutlined style={{ cursor: 'pointer', fontSize: '18px' }} />
        </Dropdown>
        ),
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
  //data
  const getEmployee = async () => {
    try {
      let res = await GetEmployee();
      if (res) {
        setEmployee(res);
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
      alert('Failed to fetch employee data. Please try again.');
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);
  //Create
  const [form] = Form.useForm();
  const clearForm = () => {
    form.resetFields();
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const createEmployee = async () => {
    try {
      const values = await form.validateFields();
      const success = await CreateEmployee(values);
  
      if (success) {
        getEmployee();
        onClose();
        clearForm();
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  //DeleteAndEdit
  const { confirm } = Modal;

  const handleMenuClick = (record: AdminInterface, e: { key: string }) => {
    if (e.key === 'edit') {
      
    } else if (e.key === 'delete') {
      
      DeleteConfirm(record.ID);
    }
  };
  
  const DeleteConfirm = (employeeID: number) => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: 'Are you sure you want to delete this employee?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        deleteEmployee(employeeID);
      },
    });
  };
  
  const deleteEmployee = async (employeeID: number) => {
    try {
      const success = await DeleteEmployee(employeeID);
      if (success) {
        getEmployee();
      }
    } catch (error) {
      console.error('Delete failed:', error);
    }
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
          <div style={{ marginTop: "50px" }}>
            <Row gutter={150}>
              <Col span={8}>
                <Card
                  bordered={false}
                  style={{ backgroundColor: "#D9E2D9", width: "200px" }}
                >
                  <Statistic
                    title="Employee"
                    value={employeeCount}
                    prefix={<TeamOutlined />}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bordered={false}
                  style={{ backgroundColor: "#D9E2D9", width: "200px" }}
                >
                  <Statistic
                    title="Restocker"
                    value={restockerCount}
                    prefix={<DatabaseOutlined />}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bordered={false}
                  style={{ backgroundColor: "#D9E2D9", width: "200px" }}
                >
                  <Statistic
                    title="Checkpayment"
                    value={CheckpaymentCount}
                    prefix={<DollarOutlined />}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Header>
        <Content>
          <div style={contentStyle}>
            <div style={{ marginBottom: "10px" }}>
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
                  <Button type="link" block onClick={clearForm}>
                    clear
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    onClick={createEmployee}
                    type="primary"
                    style={{ backgroundColor: "#003D06", color: "#D9E2D9" }}
                  >
                    Submit
                  </Button>
                </Space>
              }
            >
              <Form form={form} layout="vertical" hideRequiredMark>
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
                  <Col span={12}>
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
                  </Col>
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
              dataSource={employee}
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
