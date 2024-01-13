import React, { CSSProperties, useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import {Menu,} from 'antd'
import Headbarlogo from '../../component/headbarlogo'
import Navbar from '../../component/navbar'
import Footerbar from '../../component/footerbar'
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, StarFilled, HeartFilled, ProfileFilled, IdcardFilled, ShoppingFilled, PlusOutlined, EditFilled } from '@ant-design/icons';
import './menu.css';

const MenuBar = () => {
    const [selectedKey, setSelectedKey] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};
    const handleMenuClick = (key: React.SetStateAction<string>) => {
        setSelectedKey(key);
        navigate(`/${key}`,{state:{id : id}});
    };
  return (
    <>
    <Menu theme='light' mode='inline' selectedKeys={[selectedKey]}>
                        <Menu.Item key={'profile'} onClick={() => handleMenuClick('profile')}>
                            <UserOutlined />
                            <span>Profile</span>
                        </Menu.Item>
                        <Menu.Item key={'editprofile'} onClick={() => handleMenuClick('profile/editprofile')}>
                            <EditFilled />
                            <span>EditProfile</span>
                        </Menu.Item>
                        <Menu.Item key={'wishlist'} onClick={() => handleMenuClick('profile/wishlist')}>
                            <HeartFilled />
                            <span>Wishlite</span>
                        </Menu.Item>
                        <Menu.Item key={'purchase'} onClick={() => handleMenuClick('profile/purchase')}>
                            <ShoppingFilled />
                            <span>Purchase</span>
                        </Menu.Item>
                        <Menu.Item key={'review'} onClick={() => handleMenuClick('profile/review')}>
                            <StarFilled />
                            <span>Review</span>
                        </Menu.Item>
                </Menu>
                </>
  )
}

export default MenuBar