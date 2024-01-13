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
              <Form
                name="profile"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                initialValues={{ remember: true }}
                disabled={componentDisabled}
                form={form}
                style={formStyle}
                labelCol={{ span: 4 }}

                layout="horizontal"
              >
                <Form.Item valuePropName="fileList" getValueFromEvent={normFile} style={{ textAlign: 'center', }}>
                  <Upload action="/upload.do" listType="picture-card" style={{ width: '200px', height: '200px' }}>
                    <button style={{ border: 0, background: 'none', }} type="button">
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  label="FirstName"
                  name="firstname"
                  rules={[{ required: true, message: 'Please input your firstname!' }]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  label="LastName"
                  name="lastname"
                  rules={[{ required: true, message: 'Please input your lastname!' }]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Contact"
                  name="contact"
                  rules={[{ required: true, message: 'Please input your contact!' }]}>
                  <Input />
                  </Form.Item>
                  <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your Email!' }]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Gender: ">
                  <Radio.Group>
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                    <Radio value="PF"> Prefer not to say </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Date of Birth"
                  name="dateofbirth"
                  rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input placeholder='00D/00M/0000Y'/>
                </Form.Item>
                <Form.Item style={{ textAlign: 'end', }}>
                  <Button type="primary" htmlType="submit" style={{ alignItems: 'center', flex: 1, backgroundColor: '#003d29', color: '#fff' }}>
                    Confirm
                  </Button>
                </Form.Item>
              </Form>
              <div style={{ marginBottom: '20px', textAlign: 'end', }}>
                <Checkbox
                  checked={componentDisabled}
                  onChange={(e) => setComponentDisabled(e.target.checked)}
                >
                  <EditFilled style={{ fontSize: '25px', marginLeft: '10px' }} />
                </Checkbox>
              </div>
            </div >
          </Content>
        </Layout>
      </Layout>
      <Footerbar />
    </>
      )
}
      export default EditProfilePage