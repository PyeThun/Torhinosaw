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

import { Breadcrumb, Button, Card, Layout, List, Menu, Row, message, theme } from "antd";
import logo from "../../../assets/Tmocho.jpg";
import { JSX } from "react/jsx-runtime";
import  Navbar  from '../../../component/navbar'
import  Headerbarlogo  from '../../../component/headbarlogo'
import { CreateProduct, GetProduct } from "../../../services/http_product";
import { ProductInterface } from "../../../interfaces/IProduct";


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
  const [product, setProduct] = useState<ProductInterface[]>([])
  const getProducts = async () => {
    let res = await GetProduct();
    if (res) {
      setProduct(res);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const data = Array.isArray(product) ? product.map((product) => ({
    ProductType: 	product.ProductType,
      Name: 			product.Name,
      Photo: 			product.Photo,
      Price:      product.Cost,
      ID:         product.ID,
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
        <Row>
        </Row>
        <Row>
      {Array.isArray(product) ? (
          <List
            grid={{ gutter: 5, column: 1 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>  
                  <Card style={Card_st2}></Card>
                    
                  
                
              </List.Item>
            )}
          />
        ) : (
          <p>No products available.</p>
        )}
        </Row>
      </Layout>

      </>
  );
};

export default  ManageOder;


