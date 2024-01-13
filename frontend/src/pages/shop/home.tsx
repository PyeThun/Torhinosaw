import React, { useState, useEffect, CSSProperties } from "react";
import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
  Upload,
  Select,
  Modal,
  Image,
  List,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import  Navbar  from '../../component/navbar'
import  Headerbarlogo  from '../../component/headbarlogo'
import back01 from '../../../assets/back01.png'

import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
//import 'antd/dist/antd.css';
import "./style.css";

import { Link, useNavigate } from 'react-router-dom';
import iconic_box2 from '../../assets/update_icon 1.svg'
import bg from '../../assets/home/Group 84.png'
import { ProductInterface } from "../../interfaces/IProduct";
import { CreateProduct, GetProduct } from "../../services/http_product";


function Home(){

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

    const handleImageClick = () => {
        // Use navigate to navigate programmatically
        navigate('/employee');
    };

    const Card_st: CSSProperties = {
        zIndex: 1,
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

    //เงื่อนไข
    const data = Array.isArray(product) ? product.map((product) => ({
      ProductType: 	product.ProductType,
        Name: 			product.Name,
        Photo: 			product.Photo,
        Price:      product.Cost,
        ID:         product.ID,
    })) : [];
   // ใช้ตรงรีเทิน เป็น item.ID จะได้ ID เอาไปใส้พาด

    

    return (
      <>
        <Headerbarlogo />
        <Navbar />
        <Row>
          <img
            src={bg}
            style={{
              width: '100%',
              height: '20%',
            }}
          />
        </Row>
        <Row>
          
        </Row>
        
        {Array.isArray(product) ? (
          <List
            grid={{ gutter: 16, column: 5 }}
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
                    <div className="fonttext2shop">
                    {item.Price} ฿
                    </div>
                    
                  
                
              </List.Item>
            )}
          />
        ) : (
          <p>No products available.</p>
        )}
      </>
    );
}    

export default Home;