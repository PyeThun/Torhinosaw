import React from 'react';
import { Image } from 'antd';
import paymentpic from '../assets/all_payment.png';

const Footerbar = () => {
  const footerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '200px',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    color: '#000',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const sectionStyle: React.CSSProperties = {
    margin: '0 16px',
  };

  const firstSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    flex: '0 0 300px',
  };

  const thirdSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    flex: '0 0 300px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={firstSectionStyle}>
          <h3>About Us</h3>
          <p>SUT Computer Engineering Software Engineering Project team05</p>
        </div>
        <div style={sectionStyle}>
          <h3>Payment</h3>
          <Image
            preview={false}
            src={paymentpic}
            height={100}
            width={200}
          />
        </div>
        <div style={thirdSectionStyle}>
          <h3>Contact Us</h3>
          <p>Email: B64XXXXX@g.sut.ac.th</p>
          <p>Phone: +012345678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footerbar;