import React from 'react'
import { Button, Form, message } from 'antd';
import {PaymentInterface} from '../../interface/IUPayment'
import { CreatePayment } from '../../services/https';
import { useNavigate } from 'react-router-dom';



const CartPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values: PaymentInterface) => {
    
    values.CustomerID = cid
    values.OrderID = oid
    values.Totalprice = totalP
    let res = await CreatePayment(values);
    if (res.status) {
      message.open({
      type: "success",
      content: "บันทึกข้อมูลสำเร็จ",
      });
    }
    console.log('Success:', res.message);
    const pid = res.message
    console.log(pid)
    navigate(`/payment/${pid}`);


  };
  
  const cid = 1
  const oid = 1
  const totalP = 255.5
  return (
    <>
    
    <div>CartPage</div>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
           Submit
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default CartPage