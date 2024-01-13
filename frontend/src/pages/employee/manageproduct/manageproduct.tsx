import React, { useEffect, useState } from "react";
import { UserOutlined, DashboardOutlined,BorderOuterOutlined , CopyOutlined} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { Breadcrumb, Card, Layout, List, Menu, message, theme } from "antd";
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

function Manageproduct(){

  
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
              <Link to="/Productmanagement">
                <BorderOuterOutlined />
                <span>Product Management</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="Ordermanagement" onClick={() => setCurrentPage("Ordermanagement")} >
              <Link to="/Ordermanagement">
                <CopyOutlined />
                <span >Order Management</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Card>
      {Array.isArray(product) ? (
          <List
            grid={{ gutter: 5, column: 1 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>  
                  <img
                      width={300}
                      height={300}
                      src={item.Photo}
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        backgroundColor: "transparent",
                        margin: '25px',
                        borderRadius: '10px',
                      }}
                    />
                    <div className="fonttext2">
                    {item.Price} ฿
                    </div>
                    
                  
                
              </List.Item>
            )}
          />
        ) : (
          <p>No products available.</p>
        )}
        </Card>
      </Layout>

      </>
  );
};

export default  Manageproduct;


