import React, { CSSProperties, useEffect, useState } from 'react';
import { Button, Checkbox, DatePicker, Form, Image, Input, Radio, Steps, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/3bears.jpg';
import Headbar from '../../component/headbarlogo';
import Navbar from '../../component/navbar';
import Footer from '../../component/PakComponent/Footer/Footer';
import { CustomerInterface } from '../../interface/customerInterface';
import { AddressInterface } from '../../interface/addressInterface';
import { CreateCustomer, CreateAddress } from '../../services/https';
import moment from 'moment';

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
    const [messageApi, contextHolder] = message.useMessage();
    const [data, setData] = useState<CustomerInterface>({})
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const handleNext = (values: any) => {
        setData(values);
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleSubmit = async (values: CustomerInterface) => {
        const userData = { ...data, ...values };
        setData({ ...userData, ...values });
        console.log(userData)
        let res = await CreateCustomer(userData);
        if (res.status) {
            messageApi.open({
                type: "success",
                content: "บันทึกข้อมูลสำเร็จ",
            }); setTimeout(function () {
            }, 2000);
        }
        else {
            messageApi.open({
                type: "error",
                content: "บันทึกข้อมูลไม่สำเร็จ",
            })
            setCurrentStep((prevStep) => prevStep - 1);;
        }
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleLast = async (values: AddressInterface) => {
        console.log(values)
        let res = await CreateAddress(values);
        if (res.status) {
            messageApi.open({
                type: "success",
                content: "บันทึกข้อมูลสำเร็จ",
            }); setTimeout(function () {
                navigate("/login");
            }, 2000);
        }
        else {
            messageApi.open({
                type: "error",
                content: "บันทึกข้อมูลไม่สำเร็จ",
            });
        }
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
                        form={form}
                        style={formStyle}
                        labelCol={{ span: 8 }}
                    >
                        <Form.Item
                            label="Username"
                            name="Username"
                            rules={[{ required: true, message: 'Please input your username!' }]}

                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="Password"
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
                            name="Email"
                            rules={[{ required: true, message: 'Enter your Email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Date of Birth"
                            name="Dateofbirth"
                            rules={[{ required: true, message: 'Please input your Date of Birth!' }]}
                        >
                            <Input placeholder='DD/MM/YYYY'/>
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
                        form={form}
                        style={formStyle}
                        labelCol={{ span: 8 }}
                    >
                        <Form.Item
                            label="First Name"
                            name="Firstname"
                            rules={[{ required: true, message: 'Enter your Firstname!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="Lastname"
                            rules={[{ required: true, message: 'Enter your Lastname!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Contact"
                            name="Contact"
                            rules={[{ required: true, message: 'Enter your Contact!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="Gender"
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
            {contextHolder}
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