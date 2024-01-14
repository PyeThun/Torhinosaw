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
  Select,
  
  
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import  Navbar  from '../../../component/navbar'
import  Headerbarlogo  from '../../../component/headbarlogo'
import back01 from '../../../assets/back01.png'

import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
//import 'antd/dist/antd.css';
import "./style.css";
import oder01 from '../../../assets/oder01.svg'
import oder01_1 from '../../../assets/oder01-1.svg'
import oder02 from '../../../assets/oder02.svg'
import oder02_1 from '../../../assets/oder02-1.svg'
import oder03 from '../../../assets/oder03.svg'
import oder03_1 from '../../../assets/oder03-1.svg'
import oder04 from '../../../assets/oder04.svg'
import oder04_1 from '../../../assets/oder04-1.svg'
import oder05 from '../../../assets/oder05.svg'
import oder05_1 from '../../../assets/oder05-1.svg'
import iconic_box2 from '../../../assets/update_icon 1.svg'
import win10bg from '../../../assets/window10bg.jpg'

import { Link, useNavigate, useParams } from 'react-router-dom';
import { GetPaymentById, GetCustomer, Getstatus, GetPlayment,UpdatePayment} from "../../../services/http_product";
import { PaymentInterfaceUpdate, PaymentInterfaceUpdateV2} from "../../../interfaces/IPayment";
import { StatusInterface } from "../../../interfaces/IStatus";
const { Option } = Select;

const Updatestatus = () =>  {


    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [payment, setPayment] = useState<PaymentInterfaceUpdate>()
  
    const [statusUP, setStatus] = useState<StatusInterface[]>([])

    let { id } = useParams();
    const [form] = Form.useForm();
    // console.log('ID:', id);
    // console.log(payment);
    

    
    const onFinish = async (values: PaymentInterfaceUpdate) => {
        values.ID = payment?.ID;
        console.log('Form values:', values);
        let res = await  UpdatePayment(values);
        if (res.status) {
        messageApi.open({
            type: "success",
            content: "แก้ไขข้อมูลสำเร็จ",
        });
        setTimeout(function () {
            navigate("/Order_management");
        }, 2000);
        } else {
        messageApi.open({
            type: "error",
            content: "แก้ไขข้อมูลไม่สำเร็จ",
        });
        }
    };

    const handleImageClick = () => {
        // Use navigate to navigate programmatically
        navigate('/Order_management');
    };

    const getPstatus = async () => {
        let res = await Getstatus();
        if (res) {
          setStatus(res);
        }
      };
    //   const getPaymentState = async () => {
    //     let res = await GetPlayment();
    //     if (res) {
    //         setPaymentState(res);
    //     }
    //   };
     
      const getPayment = async () => {
        let res = await GetPaymentById(Number(id));
        if (res) {
          setPayment(res);
          // set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
          form.setFieldsValue({ 
            Updated_at: 	res.Updated_at,
            ID: 			res.ID,
            Billphoto: 	    res.Billphoto,
            Totalprice:     res.Totalprice,
            CustomerID:     res.CustomerID,
            Tacking:        res.Tacking,
            Shippingfee:    res.Shippingfee,
            StatusID:       res.StatusID,
         
        });
        }
      };
    
      useEffect(() => {
        getPstatus();
        getPayment();
        // getPaymentState();
        let status: number;
        if (!isNaN(Number(payment?.StatusID))) {
            status = Number(payment?.StatusID);
        } else {
        // กำหนดค่าเริ่มต้นที่ต้องการเมื่อ payment?.StatusID เป็น NaN
        status = 1; // หรือค่าอื่น ๆ ที่ต้องการ
        }
        let order1 ; let order2 ; let order3 ; let order4 ; let order5 ;
        if ( status = 1) { order1 = oder01_1 }else{  order1 = oder01 }
        if ( status = 2) { order2 = oder02_1 }else{  order2 = oder02 }
        if ( status = 3) { order3 = oder03_1 }else{  order3 = oder03 }
        if ( status = 4) { order4 = oder04_1 }else{  order4 = oder04 }
        if ( status = 5) { order5 = oder05_1 }else{  order5 = oder05 }
      }, []);

      const onFinishFailed = (errorInfo: any) => {
        console.log('Errors:', errorInfo);
     };
    const formattedDate = payment?.Updated_at ? new Date(payment.Updated_at).toLocaleString() : '';

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
    // let status = Number(payment[0].StatusID);
    
    let status: number;
    if (!isNaN(Number(payment?.StatusID))) {
        status = Number(payment?.StatusID);
    } else {
    // กำหนดค่าเริ่มต้นที่ต้องการเมื่อ payment?.StatusID เป็น NaN
    status = 1; // หรือค่าอื่น ๆ ที่ต้องการ
    }
    console.log(status);
    let order1 ; let order2 ; let order3 ; let order4 ; let order5 ;
    if ( status >= 1) { order1 = oder01_1 }else{  order1 = oder01 }
    if ( status >= 2) { order2 = oder02_1 }else{  order2 = oder02 }
    if ( status >= 3) { order3 = oder03_1 }else{  order3 = oder03 }
    if ( status >= 4) { order4 = oder04_1 }else{  order4 = oder04 }
    if ( status >= 5) { order5 = oder05_1 }else{  order5 = oder05 }

    const inputCount = 1;


    return (
        <>
            {contextHolder}
            <Headerbarlogo />
            <Navbar />

            
            <Row>
            <Card style={Card_st}>
                <Row>
                    <img
                        src={back01}
                        style={{
                            height: '44px',
                            left: '1%',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '3%',
                            width: '65px',
                        }}
                        onClick={handleImageClick}
                        alt="Image"
                    />
                    <div className="label">
                        <div className="order-ID-status">Order ID.&nbsp;&nbsp;|&nbsp;&nbsp;status</div>
                    </div>

                </Row>
                <Row className="justify-content-center">
                    <img
                        src={order1}
                        style={{
                            height: '65px',
                            left: '96px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '65px',
                        }}
                    />
                    
                       
                    <img
                        src={order2}
                        style={{
                            height: '67px',
                            left: '161px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '201px',
                        }}
                    />
                    <img
                        src={order3}
                        style={{
                            height: '67px',
                            left: '362px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '218px',
                        }}
                    />
                    <img
                        src={order4}
                        style={{
                            height: '67px',
                            left: '580px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '216px',
                        }}
                    />
                    <img
                        src={order5}
                        style={{
                            height: '67px',
                            left: '796px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '206px',
                        }}
                    />
                </Row>
                <Row >
                    <Col className="fonttextUpdate">order place</Col>
                    <Col className="fonttextUpdate2">order paid</Col>
                    <Col className="fonttextUpdate3">order shipped out</Col>
                    <Col className="fonttextUpdate4">to receive</Col>
                    <Col className="fonttextUpdate5">to rate</Col>
                </Row>
                <Row >
                </Row>


            {/* *****************************************************2*********************************************                     */}

            </Card>
            </Row>

            
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                
                >
            <Row>
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
                        onClick={handleImageClick}
                        alt="Image"
                    />
                 <Col className="fonttextBoxtow">Check stetus product</Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={4}>
                        
                        <img
                        src={payment?.Billphoto}
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
                        <Row className="fonttextBoxtowTexth1">Payment ID: {payment?.ID}</Row>
                        <Row className="fonttextBoxtowTexth2">Total pricr: {payment?.Totalprice}</Row>
                        <Form.Item
                                        name="Updated_at"
                                        className="fonttextBoxtowTexth2"
                                    >
                             <Input  value={new Date().toISOString()}/>
                        </Form.Item>
                        <Row className="fonttextBoxtowTexth3">Customer ID: {payment?.CustomerID}</Row>
                        
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                        <Card style={{ border: 'none' }}>
                        <Row className="fonttextBoxtowTexthstatus5">
                              {Number(payment?.StatusID) === 1 ? statusUP[0].Status : 
                              Number(payment?.StatusID) === 2 ? statusUP[1].Status : 
                              Number(payment?.StatusID) === 3 ? statusUP[2].Status : 
                              Number(payment?.StatusID) === 4 ? statusUP[3].Status: 
                              Number(payment?.StatusID) === 5 ? statusUP[4].Status : ""}
                            </Row>
                            <Row>
                                <Form.Item
                                        name="StatusID"
                                    >
                                <Select 
                                
                                style={{
                                    width: '175px', // ปรับความยาวตามที่ต้องการ
                                    marginLeft: '437px' ,
                                    height: '40px', 
                                    marginTop: '2%',
                                    fontSize: '16px',
                                     }}>
                                    {statusUP.map((item) => (
                                            (item.ID === 2 || item.ID === 3) && (
                                                <Option key={item.ID} value={item.ID}>
                                                  {item.Status}
                                                </Option>)
                                    ))}                                 
                                </Select>
                                </Form.Item>
                            </Row>

                            
                                <Row >
                                <Form.Item
                                        name="Tacking">
                                    <Input
                                        placeholder={`Track Number`} //+เพิ่ม ${index + 1}
                                        style={{
                                            width: '350px',
                                            height: '40px',
                                            marginLeft: '75%',
                                            marginTop: '2%',
                                            backgroundColor: '#003D0614',
                                            border: 'none',
                                            fontSize: '16px',
                                        }}
                                        disabled={status != 3}
                                    />
                                </Form.Item>
                                </Row>
                        </Card>
                    </Col>
                </Row>

    
            </Card >

            </Row>

            <Row justify="end">
                    <Col style={{ marginTop: "40px" , marginLeft: "10%"}}>
                            <Form.Item>
                            <Space>
                                <Button type="primary" htmlType="button" style={{ marginRight: "10px", backgroundColor: '#5A8242' }}>
                                    <Link to="/Order_management" style={{ color: "#fff" }}>
                                        ยกเลิก
                                    </Link>
                                </Button>
                                <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginRight: "220px", backgroundColor: '#003D06', justifyContent: 'flex-end' }}
                                icon={<PlusOutlined />}
                                >
                                ยืนยัน
                                </Button>
                            </Space>
                            </Form.Item>
                    </Col>
              </Row>
              </Form>
                                

            
        </>
    );
}

export default Updatestatus;