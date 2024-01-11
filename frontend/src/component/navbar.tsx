import React, { CSSProperties } from 'react';
import { Image, Input, Button } from 'antd';
import logo from '../assets/Tmocho.jpg';
import {
    UserOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const navbarStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        height: '80px',
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'space-between',
        color: 'black',
        alignItems: 'center',
    };

    const leftSectionStyle: CSSProperties = {
        textAlign: 'left',
        flex: 1,
        marginLeft: '150px',
    };

    const centerSectionStyle: CSSProperties = {
        textAlign: 'center',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    };

    const rightSectionStyle: CSSProperties = {
        textAlign: 'right',
        flex: 1,
        marginRight: '150px',
    };

    const goRegister = () => {
        navigate(`/register`);
    }

    return (
        <>
            <div style={navbarStyle}>
                <div style={leftSectionStyle}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            height={60}
                            width={60}
                            src={logo}
                            preview={false}
                        />
                        <span style={{ marginLeft: '10px', fontSize: '24px', textShadow: '1px 1px 1px #000' }}>Torhinosaurus</span>
                    </div>
                </div>
                <div style={centerSectionStyle}>
                    {/* **fix later** */}
                    <Input placeholder='search for products,brands and shops' allowClear style={{ width: '400px' }} />
                    <Button style={{ margin: '10px', backgroundColor: '#003d29', color: '#fff' }}>Search</Button>
                </div>
                <div style={rightSectionStyle}>
                    <div>
                        <UserOutlined style={{ fontSize: '20px', margin: '10px' }} />
                        <span onClick={goRegister}>Account</span>
                        <span style={{ margin: '30px' }} />
                        <ShoppingCartOutlined style={{ fontSize: '20px', margin: '10px' }} />
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;