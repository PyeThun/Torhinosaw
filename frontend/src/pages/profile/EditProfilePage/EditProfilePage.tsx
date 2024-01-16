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

const EditProfilePage = () => {
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
    margin: '0 auto',
    marginTop: '20px',
    textAlign: 'left',

  };

  interface userDataType {
    firstname: string
    lastname: string
    contact: string
    email: string
    gender: string
    dateofbirth: string
    address: string
}
const users: userDataType[] = [
    {
        firstname: 'John',
        lastname: 'Forn',
        contact: '123-456-7890',
        email:'johnforn@gmail.com',
        gender: 'Female',
        dateofbirth: '1990-01-01',
        address: '123 Main St',
    },
]
const user = users[0];

  const getGender = () => {
    if (user.gender==='Male') {
      return 'Male';
    }
    else if (user.gender==='Female') {
      return 'Female';
    }
    else {
      return 'PF';
    }
  }

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
              <Form
                name="profile"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                initialValues={{ remember: true }}
                form={form}
                style={formStyle}
                labelCol={{ span: 4 }}

                layout="horizontal"
              >
                {/* <Form.Item valuePropName="fileList" getValueFromEvent={normFile} style={{ textAlign: 'center', }}>
                  <Upload action="/upload.do" listType="picture-card" style={{ width: '200px', height: '200px' }}>
                    <button style={{ border: 0, background: 'none', }} type="button">
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                  </Upload>
                </Form.Item> */}
                <Form.Item
                  label="FirstName"
                  name="firstname"
                  rules={[{ required: true, message: 'Please input your firstname!' }]}>
                  <Input defaultValue={user.firstname}/>
                </Form.Item>
                <Form.Item
                  label="LastName"
                  name="lastname"
                  rules={[{ required: true, message: 'Please input your lastname!' }]}>
                  <Input defaultValue={user.lastname}/>
                </Form.Item>
                <Form.Item
                  label="Contact"
                  name="contact"
                  rules={[{ required: true, message: 'Please input your contact!' }]}>
                  <Input defaultValue={user.contact}/>
                  </Form.Item>
                  <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your Email!' }]}>
                  <Input defaultValue={user.email}/>
                </Form.Item>
                <Form.Item label="Gender: ">
                  <Radio.Group defaultValue={getGender}>
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                    <Radio value="PF"> Prefer not to say </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Date of Birth"
                  name="dateofbirth"
                  rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input defaultValue={user.dateofbirth}/>
                </Form.Item>
                <Form.Item style={{ textAlign: 'end', }}>
                  <Button type="primary" htmlType="submit" style={{ alignItems: 'center', flex: 1, backgroundColor: '#003d29', color: '#fff' }}>
                    Confirm
                  </Button>
                </Form.Item>
              </Form>
            </div >
          </Content>
        </Layout>
      </Layout>
      <Footerbar />
    </>
      )
}
      export default EditProfilePage