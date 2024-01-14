import React, { CSSProperties, useEffect, useState } from "react";
import { UserOutlined, DashboardOutlined,BorderOuterOutlined , CopyOutlined,PlusOutlined} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { Breadcrumb, Button, Card, Layout, List, Menu, Row, message, theme ,Col, Space} from "antd";
import logo from "../../../assets/Tmocho.jpg";
import { JSX } from "react/jsx-runtime";
import  Navbar  from '../../../component/navbar'
import  Headerbarlogo  from '../../../component/headbarlogo'
import { CreateProduct, GetProduct ,GetPlayment,GetCustomer,Getstatus} from "../../../services/http_product";
import { ProductInterface } from "../../../interfaces/IProduct";
import { PaymentInterfaceUpdate } from "../../../interfaces/IPayment";
import iconic_box2 from "../../../assets/update_icon 1.svg"
import { CustomerInterface } from "../../../interfaces/ICustomer";
import { StatusInterface } from "../../../interfaces/IStatus";
import { it } from "node:test";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const items: MenuItem[] = [
];

function ManageOder(){

  
  const page = localStorage.getItem("page");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const setCurrentPage = (val: string) => {
    localStorage.setItem("page", val);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const [payment, setPayment] = useState<PaymentInterfaceUpdate[]>([])
  const [customer, setCustomer] = useState<CustomerInterface[]>([])
  const [status, setStatus] = useState<StatusInterface[]>([])

  const getPayment = async () => {
    let res = await GetPlayment();
    if (res) {
      setPayment(res);
    }
  };
  const getStatus = async () => {
    let res = await Getstatus();
    if (res) {
      setStatus(res);
    }
  };
  const getCustomer = async () => {
    let res = await GetCustomer();
    if (res) {
      setCustomer(res);
    }
  };
  useEffect(() => {
    getPayment();
    getStatus();
    getCustomer();
  }, []);

  const navigate = useNavigate();

  const data = Array.isArray(payment) ? payment.map((payment) => ({
      Updated_at: 	  payment.Updated_at,
      ID: 			      payment.ID,
      Billphoto: 			payment.Billphoto,
      Totalprice:     payment.Totalprice,
      CustomerID:     payment.CustomerID,
      Tacking:        payment.Tacking,
      Shippingfee:    payment.Shippingfee,
      Status:         payment.StatusID,
  })) : [];

  const Card_st2: CSSProperties = {
        
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px #00000040',
    height: '274px',
    width: '1098px',
    marginTop: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'box-shadow 5s ease-in-out', 
};


  
  return (
      <>
      <Headerbarlogo/>
      <Navbar/>
      <Layout style={{ minHeight: "120vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ color: '#003D06', backgroundColor: '#D9E2D9'  }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop:'100px',
              marginBottom: 20,
            }}
          >
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={[page ? page : "dashboard"]}
            mode="inline"
            style={{ color: '#003D06', backgroundColor: '#D9E2D9'  }}
          >
            <Menu.Item key="dashboard" onClick={() => setCurrentPage("dashboard")}>
              
                <UserOutlined />
                <span >Employee</span>
              
            </Menu.Item>
            <Menu.Item key="Productmanagement" onClick={() => setCurrentPage("Productmanagement")} style={{ marginTop: '30px' }}>
              <Link to="/product_management">
                <BorderOuterOutlined />
                <span>Product Management</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="Ordermanagement" onClick={() => setCurrentPage("Ordermanagement")} >
              <Link to="/Order_management">
                <CopyOutlined />
                <span >Order Management</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="Addproduct" onClick={() => setCurrentPage("Addproduct")} >
              <Link to="/productadd">
                <PlusOutlined />
                <span >ADD PRODUCT</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Card style={{ width: '100%', backgroundColor: '#F5F5F5', border: 'none' }}>
          <Row>
            <Col>
              <Button style={{ marginLeft: '85px', width: '1098px', fontWeight: 'bold', color: '#003D06', backgroundColor: '#D9D9D9' }}>
                Order paid</Button>
            </Col>
            <Col>
            <Button style={{ marginLeft: '85px', width: '1098px', fontWeight: 'bold', color: '#003D06', backgroundColor: '#D9D9D9',marginTop: '5px' }}>
                Order shipped out</Button>
            </Col>
          </Row>
          <Row>
            {Array.isArray(payment) ?(
                <List
                  grid={{ gutter: 16, column: 1 }}
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>  
                        
                        <Card style={Card_st2}>
                  <Row>
                  <img
                          src={iconic_box2}
                          style={{
                              top: '5%',
                              left: '2%',
                              objectFit: 'cover',
                              position: 'fixed',

                          }}
                      />
                  <Col className="fonttextBoxtow">Torhinozorus</Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={4}>
                        
                        <img
                        src={item.Billphoto}
                        style={{
                            width: '112.75px',
                            height: '143.12px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            position: 'fixed',
                            marginTop:  '40px',
                        }}
                        />
                        
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={4}>
                        <Row className="fonttextBoxtowTexth1">Payment ID: {item.ID}</Row>
                        <Row className="fonttextBoxtowTexth2">Last Update:
                            {new Date(item.Updated_at).toLocaleString('en-GB', { 
                                year: 'numeric', 
                                month: '2-digit', 
                                day: '2-digit', 
                                hour: '2-digit', 
                                minute: '2-digit', 
                                second: '2-digit' 
                            })}
                        </Row>
                        
                        <Row className="fonttextBoxtowTexth3">tacking: {item.Tacking}</Row>
                        <Row className="fonttextBoxtowTexth3">
                        Customar ID: {item.CustomerID}
                      </Row>

                        
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                        <Card style={{ border: 'none' }}>
                            <Row className="fonttextBoxtowTexthstatus2">{item.Totalprice} ฿</Row>
                            <Row className="fonttextBoxtowTexthstatus2">
                              {Number(item.Status) === 1 ? status[0].Status : 
                              Number(item.Status) === 2 ? status[1].Status : 
                              Number(item.Status) === 3 ? status[2].Status : 
                              Number(item.Status) === 4 ? status[3].Status: 
                              Number(item.Status) === 5 ? status[4].Status : ""}
                            </Row>
                            <Row>
                                <Card
                                style={{
                                    width: '0px', // ปรับความยาวตามที่ต้องการ
                                    marginLeft: '72%' ,
                                    height: '0px', 
                                    marginTop: '5%',
                                    fontSize: '16px',
                                    border: '0',
                                }}>                                 
                                </Card>
                            </Row>

                            
                                <Row >
                                  <Row justify="end">
                                    <Col style={{ marginTop: "40px" , marginLeft: "10%"}}>
                                            
                                            <Space>
                                                <Button onClick={() =>  navigate(`/payment_pdate/${item.ID}`)} type="primary" htmlType="button" style={{ marginLeft: "480px", backgroundColor: '#003D06', width:'190px'}}
                                                // <Button  onClick={() =>  navigate(`/customer/edit/${record.ID}`)} shape="circle" icon={<EditOutlined />} size={"large"} />
                                                >
                                                แก้ไข
                                                </Button>
                                                
                                            </Space>
                                            
                                    </Col>
                                  </Row>
                                </Row>
                            
                        </Card>
                    </Col>
                </Row>

                </Card> 
                        
                      
                    </List.Item>
                  )}
                />
              ) : (
                <p>No products available.</p>
              )}
          </Row>
        </Card>
          

        
     
      </Layout>
      Cad
      </>
  );
};

export default  ManageOder;


