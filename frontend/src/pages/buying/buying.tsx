import React, { useState, useEffect, CSSProperties } from "react";
import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
  Upload,
  Select,
  Modal,
  Image,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, } from 'react-router-dom';
import  Navbar  from '../../component/navbar'
import  Headerbarlogo  from '../../component/headbarlogo'
import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import back01 from '../../assets/back01.png';
import win10 from '../../assets/window10bg.jpg';
import star from '../../assets/buying/star.svg';
import diviT from '../../assets/buying/divitong.svg';
import qion from '../../assets/buying/qion.svg';
import heartF from '../../assets/buying/heartFull.svg';
import heartL from '../../assets/buying/heartLess.svg';
import add_card from '../../assets/buying/add_card.svg';
import buy_now from '../../assets/buying/Buy_now.svg';



import "./style.css";

//import 'antd/dist/antd.css';


const Buying = () => {

  const Card_st: CSSProperties = {

    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px #00000040',
    // height: '2000px',
    marginTop: '90px',
    marginLeft: '200px',
    marginRight: '200px',

  };
  const row: CSSProperties = {
    marginTop: '10px' ,
  };

  const navigate = useNavigate();
  const handleImageClick = () => {
      // Use navigate to navigate programmatically
      navigate('/productadd');
  };

  
  const [like, setLike] = useState(2);
  const like_status = like % 2;
  let heart;

  if (like_status === 1) {
    heart = heartF;
  } else {
    heart = heartL;
  }
  const heart_Click = () => {
    setLike(like + 1);
  };

    return (
      <>
        
        
        <Headerbarlogo />
        <Navbar />
        <Card style={Card_st}>
          <Row>
                      <img
                          src={back01}
                          style={{
                              height: '44px',
                              left: '1%',
                              objectFit: 'cover',
                              top: '0%',
                              width: '65px',
                          }}
                          onClick={handleImageClick}
                          alt="Image"
                      />
          </Row>
          <Row>
            <Card style={{ border: 'none' }}></Card>
          </Row>
          {/* *******************************top****************************************** */}
          <Row >
              <Col xs={24} sm={24} md={24} lg={24} xl={8} >
                <Image
                  style={{
                      width: '320px',
                      height: '250px',
                      borderRadius: '19px',
                      marginLeft: '40px',
                  }}
                  src={win10}
                />
                <Image
                  style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '19px',
                      marginLeft: '40px',
                      marginTop: '20px',
                  }}
                  src={win10}
                />
                <Image
                  style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '19px',
                      marginLeft: '15px',
                      marginTop: '20px',
                  }}
                  src={win10}
                />
                <Image
                  style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '19px',
                      marginLeft: '15px',
                      marginTop: '20px',
                  }}
                  src={win10}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                <Row className="fontBOLD">ขาดคุณนางฟ้าข้างห้องไปฯ เล่ม 6 (นิยาย) (จัดส่งหลังงาน)</Row>
                <Row>
                  <Image
                    style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '100px',
                        marginTop: '10px',
                    }}
                    src={star}
                  />
                    <div className="fontyello">
                      5.0
                    </div>
                    <Image
                    style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '10px',
                        marginTop: '10px',
                    }}
                    src={diviT}
                    />
                    <div className="fontbasic">
                      152 
                    </div>
                    <div className="fontgrey">
                      Rating
                    </div>
                    <Image
                    style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '10px',
                        marginTop: '10px',
                    }}
                    src={qion}
                    />
                </Row>
                  <Card style={{
                          // width: '20px',
                          height: '80px',
                          marginLeft: '100px',
                          marginRight: '40px',
                          marginTop: '10px',
                          border: 'none', // ทำให้ไม่มีกรอบ
                          backgroundColor: '#003D0614', // สีพื้นหลัง
                      }}>
                        <div className="fontprice">
                        ฿ 600 
                        </div>
                  </Card>
                <Row style={{marginLeft: '100px', marginTop: '20px'}}>
                  <div className="fontgrey">การจัดส่ง จาก </div>  
                  <div className="fontbasic">Nakhon Ratchasima </div>  
                </Row>
                <Row style={{marginLeft: '100px', marginTop: '-10px'}}>
                  <div className="fontgrey">จำนวนที่เหลือ </div>  
                  <div className="fontbasic">200</div>  
                  <div className="fontbasic">ชิ้น </div> 
                </Row>
                <Row style={{marginLeft: '100px', marginTop: '0px'}}>
                  <div className="fontgrey">จำนวน </div>  
                </Row>
                <Row style={{marginLeft: '100px', marginTop: '20px'}}>
                  <Form.Item>
                    <Space>
                      <button
                        type="submit"
                        onClick={heart_Click}
                        style={{
                            border: 'none',
                            padding: 0,
                            background: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={heart}
                            style={{
                                width: '44px',
                                height: '70px',
                                marginLeft: '30px',
                                marginTop: '20px',
                            }}
                            alt="Heart Image"
                        />
                    </button>

                    <button
                        type="submit"
                        // onClick={/* Your click handler for add_card */}
                        style={{
                            border: 'none',
                            padding: 0,
                            background: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={add_card}
                            style={{
                                width: '222px',
                                height: '76px',
                                marginLeft: '70px',
                                marginTop: '20px',
                            }}
                            alt="Add Card Image"
                        />
                    </button>

                    <button
                        type="submit"
                        // onClick={/* Your click handler for buy_now */}
                        style={{
                            border: 'none',
                            padding: 0,
                            background: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={buy_now}
                            style={{
                                width: '222px',
                                height: '76px',
                                marginLeft: '-20px',
                                marginTop: '25px',
                            }}
                            alt="Buy Now Image"
                        />
                    </button>

                    </Space>
                  </Form.Item>
                </Row>
              </Col>

          </Row>
          {/* *******************************mid****************************************** */}
          <Row>
            <Card style={{ border: 'none' }}></Card>
          </Row> 
          <Row>
            <Col>
              <Image
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginLeft: '40px',
                    marginTop: '20px',
                }}
                src={win10}
              />
            </Col>
            <Col>
              <div className="fontgreysell">seller</div>
              <div className="fontsellname">Suzumiya Haruhi</div>
            </Col>
          </Row>
          <Divider style={{margin: '40px', marginLeft: '-10px'}}></Divider>
          <Row>
            <Col>
              <div className="fontsellname">ข้อมูลสินค้า</div>
              <Row style={{ marginLeft: '40px', marginTop: '10px'}}>
                <div className="fontgrey">ประเภท  </div>  
                <div className="fontbasic">Ligthnovel</div>
              </Row>
              <Row style={{ marginLeft: '40px', marginTop: '-5px'}}>
                <div className="fontgrey">ยี่ห้อ</div>  
                <div className="fontbasic">Animag</div>
              </Row>
              <Row style={{ marginLeft: '40px', marginTop: '-5px'}}>
                <div className="fontgrey">จำนวน    </div>  
                <div className="fontbasic">200</div>
              </Row>
            </Col>  
          </Row>
          <Card style={{ border: 'none' }}></Card>
          <Row>
              <Col>
              <div className="fontsellname">รายระเอียดสินค้า</div>
              <div className="fontdetail">☔️ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว เล่ม 6 [Lite Edition]ประกอบด้วย :1. หนังสือนิยายเรื่อง ขาดคุณนางฟ้าข้างห้องไปฯ เล่ม 6 2. การ์ดใส (Clear Card) จำนวน 1 ชิ้น (ขนาด 12.7 x 8.9 ซม.) 3. โปสการ์ด (Postcard) จำนวน 1 ชิ้น (ขนาด 10.0 x 14.8 ซม.) 4. เรื่องสั้นตอนพิเศษ “Special Short Story” จำนวน 4 ฉบับ ขนาดของตัวเล่ม : พ็อกเก็ตบุ๊ค ราคา : 590 บาท</div>
              </Col>
          </Row>
        </Card>


        

      </>
    );
  }
  
  export default Buying;