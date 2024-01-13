import { Button, Checkbox, DatePicker, Input, Layout, Menu, Radio, Upload, theme } from 'antd'
import React, { CSSProperties, useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import Headbarlogo from '../../component/headbarlogo'
import Navbar from '../../component/navbar'
import Footerbar from '../../component/footerbar'
import Sider from 'antd/es/layout/Sider';
import MenuBar from "./Menu"
import { Content, Header } from 'antd/es/layout/layout';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, StarFilled, HeartFilled, ProfileFilled, IdcardFilled, ShoppingFilled, PlusOutlined, EditFilled } from '@ant-design/icons';

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
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const { TextArea } = Input;
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
                                Display Profile Picture
                                <span>FirstName: {user.firstname}</span>
                                <span>LastName: {user.lastname} </span>
                                <span>Contact: {user.contact}</span>
                                <span>Date of Birth: {user.dateofbirth}</span>
                                <span>
                                    Address:
                                    <TextArea rows={4} disabled style={{ pointerEvents: 'none' }}>
                                        {user.address}
                                    </TextArea>
                                </span>
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