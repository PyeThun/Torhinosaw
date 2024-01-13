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
  InputNumber,
  
  
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import  Navbar  from '../../../../component/navbar'
import  Headerbarlogo  from '../../../../component/headbarlogo'

import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
//import 'antd/dist/antd.css';
import "./style.css";
import { ProductTypeInterface } from "../../../../interfaces/ProductType";
import { ProductInterface } from "../../../../interfaces/IProduct";
import { CreateProduct, GetProductType } from "../../../../services/http_product";
import { ImageUpload } from "../../../../interfaces/IUpload";

const { Option } = Select;

const ProductAdd = () => {

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [producttype, setProductType] = useState<ProductTypeInterface[]>([]);


  const [form] = Form.useForm();
  const onFinish = async (values: ProductInterface) => {
  console.log('Form values:', values); // แสดงค่าทั้งหมดที่ได้จากฟอร์มใน console log
  let res = await CreateProduct(values);
  if (res.status) {
    messageApi.open({
      type: "success",
      content: "บันทึกข้อมูลสำเร็จ",
    });
    setTimeout(function () {
      navigate("/manageproduct");
    }, 2000);
  } else {
    messageApi.open({
      type: "error",
      content: "บันทึกข้อมูลไม่สำเร็จ",
    });
  }
};
  
  const getProductType = async () => {
    let res = await GetProductType();
    if (res) {
      setProductType(res);
    }
  };

  useEffect(() => {
    getProductType();
  }, []);


  const onFinishFailed = (errorInfo: any) => {
     console.log('Errors:', errorInfo);
  };
 
  


  
  return (
    <div>
      {contextHolder}
    <Headerbarlogo/>
    <Navbar/>
      <Card style={{margin: '20px'}}>
        <h2> เพิ่มข้อมูล ผู้ดูแลระบบ</h2>
        <Divider />
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={18}>
              <Form.Item
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอก Product name",
                  },
                ]}
              >
                <Input placeholder="Product name"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }} />
              </Form.Item>
            </Col>
            {/* <Col xs={24} sm={24} md={24} lg={24} xl={18}>
              <Form.Item
                name="Cost"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอก Product cost",
                  },
                ]}
              >
                <Input type="number" placeholder="Product cost" style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }} />
              </Form.Item>
            </Col> */}
            <Form.Item
              name="Brand"
              rules={[{ required: true, message: 'Please input the product brand!' }]}
            >
              <Input  placeholder="Product brand"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
            </Form.Item>
            <Form.Item
              name="Quantity"
              rules={[
                { required: true, message: 'Please input the product quantity!' },
                { type: 'number', message: 'Please enter a valid number!' },
              ]}
            >
              <InputNumber placeholder="Product quantity" style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }} />
            </Form.Item>
            

          </Row>

          
          <Form.Item
            name="ProductTypeID"
            rules={[{ required: true, message: 'Please select the product type!' }]}
          >
            <Select
              allowClear
              placeholder="ProductTypeID"
              style={{ color: '#D9E2D9', fontSize: '60px', height: '60px' }}
              dropdownStyle={{ backgroundColor: '#D9E2D9' }}
            >
              {producttype.map((item) => (
                    <Option  value={item.ID} key={item.ID}>{item.Name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Row justify="end">
            <Col style={{ marginTop: "40px" }}>
              <Form.Item>
                <Space>
                  <Button htmlType="button" style={{ marginRight: "10px" }}>
                    ยกเลิก
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                  >
                    ยืนยัน
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
 };

 export default ProductAdd;
