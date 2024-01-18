import React, { CSSProperties, useState } from 'react'
import profilepic from '../../../assets/amoungtou.png';
import { Button, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Layout, Radio, Select, Slider, Switch, TreeSelect, Upload } from 'antd';
import { useLocation } from 'react-router-dom';
import { PlusOutlined, EditFilled } from '@ant-design/icons';
import Headbarlogo from '../../../component/headbarlogo'
import Navbar from '../../../component/navbar'
import Footerbar from '../../../component/footerbar'
import Sider from 'antd/es/layout/Sider';
import MenuBar from "../Menu"
import { Content } from 'antd/es/layout/layout';

const EditAddress = () => {
    const contentStyle: CSSProperties = {
        backgroundColor: '#D9E2D9',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        margin:'24px 24px 24px 24px'
    };
    const formStyle: CSSProperties = {
        width: '600px',
        maxWidth: '1000px',
        textAlign: 'left',
    
      };

  const [data, setData] = useState({});
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    const allData = { ...data, ...values };
    console.log(allData);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const history = useLocation();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };


  return (
    <>
      <Headbarlogo />
      <Navbar />
      <Layout>
        <Sider
          style={{ backgroundColor: '#D9E2D9', margin: '24px 0px 24px 24px', }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <MenuBar />
        </Sider>
        <Layout>
          <Content style={contentStyle}>
          
            <div> 
            <h1 style={{textAlign:'center'}}>EditAddress</h1>
            <Form
                        name="Address"
                        initialValues={{ remember: true }}
                        onFinish={(values) => handleSubmit(values)}
                        onFinishFailed={onFinishFailed}
                        form={form}
                        style={formStyle}
                        labelCol={{ span: 4 }}
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
          </Content>
        </Layout>
      </Layout>
      <Footerbar />
    </>
      )
}
      export default EditAddress