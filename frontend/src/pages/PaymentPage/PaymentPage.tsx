import {Card,Flex,Button,Image, Layout, Col, Row,Select, TimePicker,DatePicker, Space,message,Upload} from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import type { DatePickerProps,UploadProps } from 'antd';
import dayjs from 'dayjs';
import Header1 from '../../component/PakComponent/Header/Header1'
import Header2 from '../../component/PakComponent/Header/Header2';
import qrcode from '../../assets/PaymentQRCode.png' 
import './Style.css'

const PaymentPage = () => {
  const {  Header,Sider,Content } = Layout;

  const format = 'HH:mm';
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
    };
  
  
    const props: UploadProps = {
      name: 'file',
      action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return(
        <>
           
            <Header1/>
            <Header2/>
            <Layout style={{overflow: 'initial',
                            minHeight: '100vh',
                            background: '#F8FFF8',
                            }}>
                    <Content>
                        
                        <h1 style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    letterSpacing: 0.25,
                                    fontWeight:600,
                                    color:'#003D06',
                                    justifyContent: 'center',}}>
                            Pay to complete your order
                        </h1>
                        <p style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    letterSpacing: 0.25,
                                    fontWeight:600,
                                    color:'#585858',
                                    justifyContent: 'center',}}>
                            กรุณาโอนเงินภายใน: /dd/mm/yy hh.mm </p>
                        <Row>
                            
                        <Col span={12} style={{display: 'flex',
                                                justifyContent: 'center',
                                                alignContent:'center', 
                                                padding: '20px',
                                                flexDirection: 'column'}}>
                        

                        <Card style={{ display: 'flex',
                                            // justifyContent: 'center',
                                            alignItems:'center',
                                            width:280,
                                            minWidth: 240,
                                            marginTop :-5,
                                            // borderRadius: '15px', 
                                            height: '30vh',
                                            backgroundColor:'#D9E2D9',
                                            border:'2px dashed  #003D06',
                                            marginLeft:400,
                                            boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            <span style={{display: 'flex',
                                                        fontFamily:'"Inter", sans-serif',
                                                        letterSpacing: 0.25,
                                                        fontWeight:500,
                                                        fontSize:14,
                                                        color:'#000',
                                                        }}>
                                                        Number of order  : XXX <br />

                                                        Time of order  : dd/mm/yy XX.XX <br />

                                                        Address  : 113 หมู่12 บ้าน หนองอีโคก ตำบล หนองงอีแจ่ม อำเภอ สวยหยดย้อย จังหวัด นครราชสีมา รหัสไปรษณีย์ 35000 <br />

                                                        Tel:0123456789 <br />

                                                        How to ship  : XXX <br />

                                                        

                                            </span>
                                            <h2 style={{marginTop:-8,marginBottom:-6}}>Price: XXX Bath</h2>
                            </Card>

                        
                            <h2 style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    color:'#000',
                                    letterSpacing: 0.25,
                                    fontWeight:500,
                                    marginLeft:400,
                                    marginBottom:-2}}> Payment:</h2>

                                    
                                    
                                    <div style={{ marginBottom: 4, fontSize: 16, fontWeight: 400,marginLeft:400 }}>
                                    Time
                                    </div>
                                    <TimePicker defaultValue={dayjs('12:08', format)} 
                                                format={format} 
                                                style={{marginLeft:400,
                                                width:130}}/>

                                   
                                    <h1 style={{ marginBottom: 4, fontSize: 16, fontWeight: 400,marginLeft:550 ,marginTop:-57}}>
                                    Date
                                    </h1>
                                    <Space direction="vertical">
                                    <DatePicker onChange={onChange}  style={{marginLeft:550,width:130}}/>
                                    </Space>         
                                    
                                    
                        
                        <div style={{ marginBottom: 4, fontSize: 16, fontWeight: 400,marginLeft:400 ,marginTop:6}}>
                        Payment Method
                        </div>
                        <Select
                            showSearch
                            style={{ width: 130,
                                        marginLeft:400 }}
                            placeholder="Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                        options={[
                            {
                                value: '1',
                                label: 'โอนผ่านธนาคาร',
                            },
                            {
                                value: '2',
                                label: 'ผ่าน QRCode',
                            },
    
                            ]}
                        />
                            <div style={{ marginBottom: 4, fontSize: 16, fontWeight: 400,marginLeft:550 ,marginTop:-58}}>
                                Upload Pay Slip
                            </div>
                            <Upload >
                            <Button icon={<UploadOutlined />} style={{marginLeft:550,width:130}}>Pay Slip</Button>
                            </Upload>
                        
                    <Flex  style={{marginLeft:445,marginTop:25}}>
                    
                    <Button className="BuyNow-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d4e31'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#003D06'} 
                    style={{
                      backgroundColor:'#003D06',
                      width:150,
                      height:36,
                      borderRadius:10,
                      color:'#fff',
                      marginLeft:21,
                      alignItems:'center',
                      justifyContent:'center'
                    }}
                     >
                      Confirm Payment 
                    </Button>
                  </Flex>
                 
                            
                        </Col>

                        <Col span={12} >
                            <Image src={qrcode} width={350}preview={false} style={{alignItems:'center',marginLeft:10,marginTop:27}}></Image>
                            <Card style={{ display: 'flex',
                                            justifyContent: 'center',
                                            alignItems:'center',
                                            width:350,
                                            minWidth: 280,
                                            marginTop :10,
                                            // borderRadius: '15px', 
                                            height: '10vh',
                                            backgroundColor:'#47AE2C',
                                            // border:'2px dashed  #003D06',
                                            marginLeft:12,
                                            boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            <span style={{display: 'flex',
                                                        fontFamily:'"Inter", sans-serif',
                                                        letterSpacing: 0.25,
                                                        fontWeight:500,
                                                        fontSize:13,
                                                        color:'#fff',
                                                        }}>
                                                        ธนาคาร: กสิกร สาขา บ้านหนองอีแล้ง <br />
                                                        ชื่อบัญชี: บริษัทจ้างหลับไม่จำกัด  <br />
                                                        เลขบัญชี: 123-456-7890
                                            </span>
                            </Card>
                            
                        </Col>
                        </Row>
                        <h3 style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    letterSpacing: 0.25,
                                    fontWeight:400,
                                    color:'#F4794E',
                                    justifyContent: 'center',
                                    alignItems:'center'}}>
                                        
                                        กรุณาโอนเงินภายใน24ชั่วโมง มิฉะนั้นระบบจะทำการยกเลิกออร์เดอร์โดยอัตโนมัติ 
                                    </h3>
                        <h4 style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    letterSpacing: 0.25,
                                    fontWeight:400,
                                    color:'#B3B3B3',
                                    justifyContent: 'center',
                                    alignItems:'center'}}>
                                    
                                    if you have any problem please call us: +66012345678
                        </h4>
                    </Content>

            </Layout>
            
        </>
    )
}
export default PaymentPage;