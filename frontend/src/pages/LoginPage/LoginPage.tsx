import { Layout,Card ,Col,Row,Button, Flex,Form,Input} from "antd";
import Header1 from "../../component/PakComponent/Header/Header1";
import Footer from "../../component/PakComponent/Footer/Footer";
import React, { useState} from 'react';
import './Style.css'
import { Link,useNavigate } from "react-router-dom";
const {  Content } = Layout;


const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        navigate('/');
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
      type FieldType = {
        username?: string;
        password?: string;
      };
    return(
        <>
        <Layout>
            <Header1/>
            <Content
          style={{
            padding: 24,
            margin: 0,
            background: '#F8FFF8',
            minHeight:'100vh'
          }}
        >
            <h2 style={{color:'#003D06',alignItems: 'center',textAlign: 'center',fontFamily:'"Inter", sans-serif',}}>
                Welcome! Please Login to see our Product!
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: 650, borderRadius: '25px', height: '55vh', top: '20px', background: '#003D06', boxShadow: '0px 4px 25px 0px rgba(0, 61, 6, 0.55)' }}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <h1 style={{marginTop:40,fontSize:28,color:"white",fontFamily:'"Inter", sans-serif',letterSpacing: 1,marginLeft:45}}>
                            Torhinozorus
                        </h1>

                        <svg className="Brand-icon"style={{marginLeft:100,marginTop:15}} 
                            width="88" height="78" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.0012 53.4474L73.6757 31.9552C73.0004 27.5904 69.2231 24.3684 64.7818 24.3684H17.2306C12.7891 24.3684 9.01187 27.5904 8.33647 31.9553L2.10657 72.2185C1.26793 77.6384 5.48548 82.5263 11.0007 82.5263H41.0061" stroke="white" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50.0049 73.579L63.503 87L86 64.6316" stroke="white" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50.0049 10.9474C50.0049 6.00587 45.9761 2 41.0061 2C36.0361 2 32.0073 6.00587 32.0073 10.9474" stroke="white" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </Col>
                    <Col span={12}>
                        <Card style={{ width: 318,top:'-24px', borderRadius: '25px', height: '55vh'}}>
                        
                        <svg className="User-icon"
                        style={{marginLeft:120 ,marginTop:70}}
                        width="36" height="30" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 21.5C24.3391 21.5 29.0714 16.6877 29.0714 10.75C29.0714 4.8123 24.3391 0 18.5 0C12.6609 0 7.92857 4.8123 7.92857 10.75C7.92857 16.6877 12.6609 21.5 18.5 21.5ZM25.9 24.1875H24.5208C22.6873 25.0441 20.6473 25.5312 18.5 25.5312C16.3527 25.5312 14.321 25.0441 12.4792 24.1875H11.1C4.97187 24.1875 0 29.2434 0 35.475V38.9688C0 41.1943 1.77567 43 3.96429 43H33.0357C35.2243 43 37 41.1943 37 38.9688V35.475C37 29.2434 32.0281 24.1875 25.9 24.1875Z" fill="black"/>
                        </svg>
                        <Form
                             name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                                                 >
                            <Form.Item<FieldType>
                                className="Username-box"
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                                labelCol={{ span: 24 }}
                                 >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                 className="Password-box"
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                labelCol={{ span: 24 }}
                             >
                                <Input.Password />
                             </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button className = "Login-button" type="primary" htmlType="submit">
                                Login
                            </Button>
                            </Form.Item>
                        </Form>
                        </Card>
                    </Col>
                </Row>
            </Card>
            </div>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50, color: '#003D06', fontWeight: 500,marginLeft:-100 ,fontSize:16}}>
                If you don’t have an account, please go to
            </span>
            <Link to="/register">
                <Flex style={{gap: "small" ,justifyContent:"center",marginTop:-12,marginLeft:140}}>
                    <Button className="Register-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.color = '#4D4D4D'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'} >
                        Register
                    </Button>
                </Flex>
            </Link>
        </Content>
        <Footer/>
        </Layout>
        </>
    )
}
export default Login;