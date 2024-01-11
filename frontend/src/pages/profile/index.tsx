import { Button, Layout, Menu, theme } from 'antd'
import React, { CSSProperties, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Headbarlogo from '../../component/headbarlogo'
import Navbar from '../../component/navbar'
import Footerbar from '../../component/footerbar'
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import EditProfilePage from './EditProfilePage/EditProfilePage';



const Profile = () => {
    const contentStyle: CSSProperties = {
        justifyContent: 'center',
        backgroundColor: '#D9E2D9',
        minHeight: '800px',
        alignItems: 'center',
        display: 'flex',
    };

    const items = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'Account',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Wishlist',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'Purchase',
        },
        {
            key: '4',
            icon: <UploadOutlined />,
            label: 'Review',
        },
    ];
    const [selectedKey, setSelectedKey] = useState('1');

    const handleMenuClick = (e: { key: React.SetStateAction<string>; }) => {
        setSelectedKey(e.key);
    };
    const getContent = () => {
        switch (selectedKey) {
            case '1':
                return <EditProfilePage/>;
            case '2':
                return <div>Content for Wishlist</div>;
            case '3':
                return <div>Content for Purchase</div>;
            case '4':
                return <div>Content for Review</div>;
            default:
                return null;
        }
    };

    return (
        <>
            <Headbarlogo />
            <Navbar />
            <Layout>
                <Sider
                    style={{ backgroundColor: '#fff' }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <Menu theme='light' mode="inline" defaultSelectedKeys={['1']} items={items} onClick={handleMenuClick} />
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 24px 24px' }}>
                        <div
                            style={contentStyle}
                        >
                            {getContent()}
                        </div>
                    </Content>
                </Layout>
            </Layout>
            <Footerbar />
        </>
    )
}

export default Profile