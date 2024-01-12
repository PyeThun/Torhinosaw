import React, { useState, useEffect } from "react";
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
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import  Navbar  from '../../../../component/navbar'
import  Headerbarlogo  from '../../../../component/headbarlogo'

import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
//import 'antd/dist/antd.css';
import "./style.css";


const ProductAdd = () => {

  const [form] = Form.useForm();
 
  const onFinish = (values: any) => {
     console.log('Received values of form: ', values);
  };

  const normFile = (e: any) => {
     console.log('Upload event:', e);
     if (Array.isArray(e)) {
       return e;
     }
     return e && e.fileList;
  };
 
  const onFinishFailed = (errorInfo: any) => {
     console.log('Errors:', errorInfo);
  };
 
  


  
  return (
    <>

    
    <Headerbarlogo/>
    <Navbar/>



    
     <Form
       form={form}
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
     >
      <Card style={{
                      margin: '20px'
                  }}>
         <h1>
            ADD PRODUCT
          </h1>
      
      <Row gutter={16}>
        
        
        <Col xs={24} sm={24} md={12} lg={24} xl={8} >
            <li style={{ marginBottom: '16px'}}>
            UploadPhoto
            </li>
            
            <Form.Item
              name="Profile1"
              valuePropName="fileList1"
              getValueFromEvent={normFile}
            >
              <Upload maxCount={1} multiple={false} listType="picture-card" style={{  width: '200px', height: '200px' }} >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>อัพโหลด</div>
                </div>
              </Upload>
              <Modal footer={null}>
                <img alt="Preview" style={{ width: '150%' }} />
              </Modal>
            </Form.Item>
            <Form.Item
              name="Profile2"
              valuePropName="fileList2"
              getValueFromEvent={normFile}
            >
              <Upload maxCount={1} multiple={false} listType="picture-card" style={{ marginLeft: '0px'}} >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>อัพโหลด</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              name="Profile3"
              valuePropName="fileList3"
              getValueFromEvent={normFile}
            >
              <Upload maxCount={1} multiple={false} listType="picture-card" style={{ marginLeft: '0px'}} >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>อัพโหลด</div>
                </div>
              </Upload>
            </Form.Item>
          
        </Col>
        
        
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
       
        
          <Form.Item
            // label="Product name"
            name="productName"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input placeholder="Product name"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }} />
          </Form.Item>
      
          

          <Form.Item
            name="productCost"
            rules={[{ required: true, message: 'Please input the product cost!' }]}
          >
            <Input placeholder="Product cost"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
          </Form.Item>
    
          <Form.Item
            name="productBrand"
            rules={[{ required: true, message: 'Please input the product brand!' }]}
          >
            <Input  placeholder="Product brand"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
          </Form.Item>
    
          <Form.Item
            
            name="productType"
            rules={[{ required: true, message: 'Please input the product type!' }]}
          >
            <Input placeholder="Product type"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
          </Form.Item>
          
          <Form.Item
            //  label="Sent from"
            name="sentFrom"
            rules={[{ required: true, message: 'Please input the sending location!' }]}
          >
            <Input placeholder="Sent from"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
          </Form.Item>

          
       
       </Col>
       </Row>


       <Row >
       <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Divider/>
        <Form.Item 
          // label="TextArea"
          name="detail"
          rules={[{ required: true, message: 'Please input the sending location!' }]}
          >
            
            
            <TextArea rows={10} placeholder="detail" style={{ backgroundColor: '#D9E2D9' , width: '100%',fontSize: '20px'}} />
          </Form.Item>
          {/* <Form.Item
            name="detail"
            rules={[{ required: true, message: 'Please input the sending location!' }]}
          >
            <Input placeholder="detail" style={{ backgroundColor: '#D9E2D9' }}/>
          </Form.Item> */}
        </Col>    
        </Row>
        <Row justify="end">
          <Col style={{ marginTop: "40px" }}>
                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="button" style={{ marginRight: "10px", backgroundColor: '#5A8242' }}>
                      ยกเลิก
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: "10px", backgroundColor: '#003D06', justifyContent: 'flex-end' }}
                      icon={<PlusOutlined />}
                    >
                      ยืนยัน
                    </Button>
                  </Space>
                </Form.Item>
          </Col>
        </Row>
      
 
      </Card>
      </Form>
      
      </>
  );
 };

 export default ProductAdd;
