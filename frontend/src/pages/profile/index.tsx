import { Button, Checkbox, DatePicker, Input, Layout, Menu, Radio, Upload, theme } from 'antd'
import React, { CSSProperties, useEffect, useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import Headbarlogo from '../../component/headbarlogo'
import Navbar from '../../component/navbar'
import Footerbar from '../../component/footerbar'
import Sider from 'antd/es/layout/Sider';
import MenuBar from "./Menu"
import { Content, Header } from 'antd/es/layout/layout';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, StarFilled, HeartFilled, ProfileFilled, IdcardFilled, ShoppingFilled, PlusOutlined, EditFilled } from '@ant-design/icons';
import { CustomerInterface } from '../../interface/customerInterface';

const Profile = () => {
    const contentStyle: CSSProperties = {
        backgroundColor: '#D9E2D9',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    };
    const infomationStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    }
    const formStyle: CSSProperties = {
        width: '600px',
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '20px',
        textAlign: 'left',

    };
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const { TextArea } = Input;
    const [userInfo, setUserInfo] = useState<CustomerInterface>({})
    const [customerID, setCustomerID] = useState<Number>();
    // setCustomerID(id)
    // const GetCustomerByID = async () => {
    //     let res = await GetCustomerByID(customerID);
    //     if (res) {
    //         setUserInfo(res);
    //     }
    //   };
    //   useEffect(() => {
    //     GetCustomerByID();
    //   }, []);



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
                    <Content style={{ margin: '24px 24px 24px' }}>
                        <div style={contentStyle}>
                            <div style={infomationStyle}>
                                <h1>Account Infomation</h1>
                                Display Profile Picture
                                <span>FirstName: {userInfo.Firstname}</span>
                                <span>LastName: {userInfo.Lastname} </span>
                                <span>Contact: {userInfo.Contact}</span>
                                <span>Date of Birth: {userInfo.Dateofbirth}</span>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            <Footerbar />
        </>
    )
}

export default Profile