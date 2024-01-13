import React, { CSSProperties, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Image, Input, Radio, Steps, } from 'antd';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/3bears.jpg';
import Headbar from '../../component/headbarlogo';
import Navbar from '../../component/navbar';
import Footer from '../../component/PakComponent/Footer/Footer';
import { CustomerInterface } from '../../interface/customerInterface';

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
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const formStyle: CSSProperties = {
        width: '70%',
        maxWidth: '400px',
        margin: '0 auto',
        marginTop: '20px',
        textAlign: 'left',
    };

    const [form] = Form.useForm();
    const [customer,setCustomer] = useState<CustomerInterface>({})
    const [data, setData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        
    }, []);

    const handleNext = (values: any) => {
        setData({ ...data, ...values });
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleSubmit = (values: any) => {
        const userData = { ...data, ...values };
        setData({ ...userData, ...values });
        setCurrentStep((prevStep) => prevStep + 1);
    };
    const [defaultValue, setDefaultValue] = React.useState(0);

    const handleChange = (e: { target: { checked: any; }; }) => {
        const newValue = e.target.checked ? 1 : 0;
        setDefaultValue(newValue);
    };

    const handleLast = (values: any) => {
        const allData = { ...data, ...values };
        setData({ ...allData, ...values });
        console.log(allData)
        console.log(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const { TextArea } = Input;

    const steps = [
        {
            title: 'Step 1',
            content: (
                <div style={{ flexDirection: 'column', display: 'flex', marginTop: '30px' }}>
                    <h1 style={{ fontSize: '32px' }}>Sign up for FREE!</h1>
                    <span>No credit card - No commitment</span>
                    <Form
                        name="SetUp"
                        initialValues={{ remember: true }}
                        onFinish={(values) => handleNext(values)}
                        onFinishFailed={onFinishFailed}
                        form={form}
                        style={formStyle}
                        labelCol={{ span: 8 }}
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
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Enter your Email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Date of Birth"
                            name="dateofbirth"
                            rules={[{ required: true, message: 'Please input your Date of Birth!' }]}>
                            <Input placeholder='00D/00M/0000Y' />
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
            ),
        },
        {
            title: 'Step 2',
            content: (
                <div style={{ flexDirection: 'column', display: 'flex', marginTop: '30px' }}>
                    <h1 style={{ fontSize: '32px' }}>Enter Your Information!</h1>
                    <span>For better service and accessibility</span>

                    <Form
                        name="Information"
                        initialValues={{ remember: true }}
                        onFinish={(values) => handleSubmit(values)}
                        onFinishFailed={onFinishFailed}
                        form={form}
                        style={formStyle}
                        labelCol={{ span: 8 }}
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
                            label="Gender"
                            name="gender"
                            rules={[{ required: true }]}
                        >
                            <div style={{ flexDirection: 'column', display: 'flex' }}>
                                <Radio.Group>
                                    <Radio value="Male"> Male </Radio>
                                    <Radio value="Female"> Female </Radio>
                                    <Radio value="PF"> Prefer not to say </Radio>
                                </Radio.Group>
                            </div>
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ flex: 1, backgroundColor: '#003d29', color: '#fff', marginLeft: '20px' }}
                            >
                                Next
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            ),
        },
        {
            title: 'Step 3',
            content: (
                <div style={{ flexDirection: 'column', display: 'flex', marginTop: '30px' }}>
                    <h1 style={{ fontSize: '32px' }}>Enter Your Address!</h1>
                    <span>For shipping</span>
                    <Form
                        name="Address"
                        initialValues={{ remember: true }}
                        onFinish={(values) => handleLast(values)}
                        onFinishFailed={onFinishFailed}
                        form={form}
                        style={formStyle}
                        labelCol={{ span: 8 }}
                    >
                        <Form.Item
                            label="Fullname:"
                            name="fullname"
                            rules={[{ required: true, message: 'Enter your Fullname!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Contact:"
                            name="contactreciver"
                            rules={[{ required: true, message: 'Enter your Contact!' }]}
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

                        <Form.Item
                            label="Province"
                            name="province"
                            rules={[{ required: true, message: 'Enter your Province!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="District"
                            name="district"
                            rules={[{ required: true, message: 'Enter your District!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Postcode"
                            name="postcode"
                            rules={[{ required: true, message: 'Enter your Postcode!' }]}
                        >
                            <Input />
                        </Form.Item >
                        <Form.Item
                            name="default" getValueFromEvent={(e) => (e.target.checked ? 1 : 0)} valuePropName="checked" style={{textAlign:'end'}}
                        >
                            <Checkbox onChange={handleChange}>
                                <span>ตั้งเป็นที่อยู่เริ่มต้น</span>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
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
            ),
        },
    ];

    return (
        <>
            <Headbar />
            <Navbar />
            <div style={contentStyle}>
                <div style={sectionStyle}>
                    <div style={leftSectionStyle}>
                        <Image
                            style={{ objectFit: 'cover' }}
                            height="100%"
                            width="100%"
                            src={bg}
                            preview={false}
                        />
                    </div>
                    <div style={rightSectionStyle}>
                        <div>{steps[currentStep] && steps[currentStep].content}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default CustomerRegister;