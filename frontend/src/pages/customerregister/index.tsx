import React, { CSSProperties, useState } from 'react';
import Headbarlogo from '../../component/headbarlogo';
import Navbar from '../../component/navbar';
import Footerbar from '../../component/footerbar';
import { Content } from 'antd/es/layout/layout';
import { Button, Checkbox, Form, Image, Input, Radio, Steps } from 'antd';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/3bears.jpg';

const { Step } = Steps;

const CustomerRegister = () => {
    const contentStyle: CSSProperties = {
        justifyContent: 'center',
        backgroundColor: '#D9E2D9',
        minHeight: '800px',
        alignItems: 'center',
        display: 'flex',
    };

    const sectionStyle: CSSProperties = {
        display: 'flex',
        width: '1000px',
        height: '600px',
        backgroundColor: 'white',
        flexDirection: 'row',
    };

    const leftSectionStyle: CSSProperties = {
        textAlign: 'left',
        flex: 1,
        overflow: 'hidden',
    };

    const rightSectionStyle: CSSProperties = {
        textAlign: 'left',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        alignItems: 'center',
    };

    const formStyle: CSSProperties = {
        width: '70%',
        maxWidth: '400px',
        margin: '0 auto',
        marginTop: '20px',
        textAlign: 'left',
    };

    const [currentStep, setCurrentStep] = useState(0);
    const handleNext = (values: any) => {
        console.log('Form values:', values);
        setCurrentStep((prevStep) => prevStep + 1);
        
    };
    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Form values:', values);
        navigate('/home');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const steps = [
        {
            content: (
                <>
                    <div style={{ flexDirection: 'column', display: 'flex', marginTop: '30px' }}>
                        <h1 style={{ fontSize: '32px' }}>Sign up for FREE!</h1>
                        <span>No credit card - No commitment</span>

                        <Form
                            name="SetUp"
                            initialValues={{ remember: true }}
                            onFinish={handleNext}
                            onFinishFailed={onFinishFailed}
                            style={formStyle}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    count={{
                                        show: true,
                                        max: 10,
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject('Please accept the agreement'),
                                    },
                                ]}
                            >
                                <Checkbox>
                                    I have read the <a href="#">Term of Service</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button type="primary" htmlType="submit" style={{ flex: 1, backgroundColor: '#003d29', color: '#fff' }}>
                                    Next
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </>
            ),
        },
        {
            content: (
                <>
                    <div style={{ flexDirection: 'column', display: 'flex', marginTop: '30px', alignItems: 'left' }}>
                        <h1 style={{ fontSize: '32px' }}>Enter Your Information!</h1>
                        <span>For better service and accessibility</span>
                        <Form
                            name="Information"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            style={formStyle}
                        >
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Enter your Firstname!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Enter your Lastname!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Contact"
                                name="contact"
                                rules={[{ required: true, message: 'Enter your Contact!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Enter your Email!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: 'Enter your Address!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Gender">
                                <div style={{ flexDirection: 'row', display: 'flex' }}>
                                    <Radio.Group>
                                        <Radio value="Male"> Male </Radio>
                                        <Radio value="Female"> Female </Radio>
                                        <Radio value="PF"> Prefer not to say </Radio>
                                    </Radio.Group>
                                </div>
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button type="primary" onClick={handlePrev} style={{ flex: 1, backgroundColor: '#003d29', color: '#fff' }}>
                                    Back
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ flex: 1, backgroundColor: '#003d29', color: '#fff', marginLeft: '20px' }}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <Headbarlogo />
            <Navbar />
            <Content style={contentStyle}>
                <div style={sectionStyle}>
                    <div style={leftSectionStyle}>
                        <Image style={{ objectFit: 'cover' }} height="100%" width="100%" src={bg} preview={false} />
                    </div>
                    <div style={rightSectionStyle}>
                        <div>{steps[currentStep].content}</div>
                    </div>
                </div>
            </Content>
            <Footerbar />
        </>
    );
};

export default CustomerRegister;