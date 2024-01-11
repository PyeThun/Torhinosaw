import React, { CSSProperties, useState } from 'react'
import profilepic from '../../../assets/amoungtou.png';
import { Button, Form, Input, Radio } from 'antd';

const EditProfilePage = () => {
  const contentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  }
  const formStyle: CSSProperties = {
    width: '70%',
    maxWidth: '400px',
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

  return (
    <>
      <div style={contentStyle}>
        <img src={profilepic} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <Form
          name="Profile"
          initialValues={{ remember: true }}
          onFinish={(values) => handleSubmit(values)}
          onFinishFailed={onFinishFailed}
          form={form}
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
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Enter your Address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true }]}
          >
            <div style={{ flexDirection: 'row', display: 'flex' }}>
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default EditProfilePage