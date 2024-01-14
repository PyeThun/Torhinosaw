import Header1 from "../../component/PakComponent/Header/Header1"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import  * as Interface  from '../../interface/IUPayment'

import {Row,
    Col, 
    Card, 
    Image,
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    Upload, 
    message,
    } from 'antd'
import paymentQRCode from '../../assets/PaymentQRCode.png'
import { ConfirmPayment ,GetPayment} from "../../services/https"

import { useEffect, useState } from "react"

  
  

export default function PaymentPage(){
    const [payValue, setPayValue] = useState('')
    // const [image, setImage] = useState('');
    const navigate = useNavigate();
    // const location = useLocation();
    const { id: pid } = useParams();
    const parsedPid = pid || '0';
    const id = parseInt(parsedPid)
    const [info, setInfo] = useState<Interface.PaymentInterface>();
    const [BillPhoto, setBillPhoto] = useState<Interface.ImageUpload>()
    const getData = async () => {
      let res = await GetPayment(id);
      if (res) {
        setInfo(res);
      }
    };
  
  
    useEffect(() => {
      getData();
    },[]);
    const onFinish = async (values: Interface.ConfirmPaymentInterface) => {
        console.log(id)
        console.log(values.Paymentmethod);
        values.ID=id
        const pay = parseFloat(payValue)
        
        if(values.Billphoto === undefined || values.Paiddate === undefined || values.Paymentmethod === undefined){
          message.open({
            type:"error",
            content:"กรุณากรอกข้อมูลให้ครบถ้วน",
          })
        }else if (info !== undefined && pay !== info.Totalprice ) {
          message.open({
            type:"error",
            content:"กรุณาโอนเงินให้ครบถ้วน",
          })
        }
        
        else{
        if (values.Paiddate) {
            
            values.Paiddate = (values.Paiddate).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        }
        values.Billphoto = BillPhoto?.thumbUrl;

            console.log(values)
            let res = await ConfirmPayment(values);
            if(res.status ){
              message.open({
                type:"success",
                content:"อัปโหลดสำเร็จ",
              })
              setTimeout(function(){
                navigate(`/`);
              },2000);
            }else{
              message.open({
                type:"error",
                content:"อัปโหลดไม่สำเร็จ",
              })
              //ttp.DeletePaymentByID(values.ID);
            }}
            
        //   }else{
        //     message.open({
        //       type:"error",
        //       content:"กรุณาอัพโหลดหลักฐานการโอนให้ครบถ้วนและตรวจสอบความถูกต้อง",
        //     })
        //   }

        console.log(values.Paiddate);
        
      };
      const normFile = (e: any) => {
        if (Array.isArray(e)) {
          return e;
        }
        setBillPhoto(e?.fileList[0])
        return e?.fileList;
      };
    
      // function onChange(info : any) {
      //   if(info.file.status === 'error'){
      //     info.file.status = 'done'
      //     let s = info.file.originFileObj;
      //     const a = new FileReader();
      //     a.onload = function(e: any){
      //       const result = e.target.result;
      //       setImage(result.slice(0,result.length-1));
      //     }
      //     a.readAsDataURL(s);
      //     console.log(image);
      //   }
        
      // }

    return(
        <div>
            <Header1/>
            
            <Row className="Row1"style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    justifyContent:'center',
                                    alignContent:'center', 
                                    padding: '20px',}}>

                    <Card style={{backgroundColor:'#F2F9F3',
                                    marginTop:50,
                                    height:50,
                                    border:'2px solid  #003D06',}}>
                        <h2 style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    marginTop:-15,
                                    fontSize:20,
                                    color:'#003D06',
                                    letterSpacing: 0.25,
                                    fontWeight:500}}>Payment Information</h2>
                    </Card>
            </Row>

            <Row className="Row2"style={{display: 'flex',
                                    justifyContent:'center',
                                    alignContent:'center', }}>

                    <Col className="Col1" style={{display: 'flex',
                                    justifyContent:'center',
                                    alignContent:'center', }}>
                    <div>
                        <Row style={{padding:20}}>

                            <Image src={paymentQRCode} 
                                    width={280}
                                    preview={false} ></Image>

                        </Row>
                        <Row style={{padding:20,
                                    marginTop:-25}}>

                            <Card style={{backgroundColor:'#F2F9F3',
                                        width:280,
                                        height:100,
                                        border:'2px solid  #003D06',}}>
                                <span style={{display: 'flex',
                                            fontFamily:'"Inter", sans-serif',
                                            marginTop:-6,
                                            justifyContent:'center',
                                            alignContent:'center', 
                                            color:'#000',
                                            letterSpacing: 0.25,}}>
                                                ธนาคาร: กสิกร สาขา บ้านหนองอีแล้ง <br />
                                                ชื่อบัญชี: บริษัทจ้างหลับไม่จำกัด <br />
                                                เลขบัญชี: 123-456-7890
                                            </span>
    
                            </Card>
                        </Row>
                    </div>
                    </Col>

                    <Col className="Col2" style={{marginTop:20}} >
                    <div>
                        <Row>
                        <Card style={{backgroundColor:'#003D06', 
                                        display:'flex',
                                        alignContent:'center',
                                        justifyContent:'center',
                                        height:100, width:330,
                                        borderRadius:-0,
                                        border:'2px solid  #003D06',}}>

                            <Row style={{display:'flex',
                                        alignContent:'center',
                                        justifyContent:'center'}}>
                            
                            <Card className="Total-Pay" 
                                style={{display:'flex',
                                        alignContent:'center',
                                        justifyContent:'center',
                                        backgroundColor:'#F4794E',
                                        height:30,
                                        width:250,
                                        border:'2px solid  #003D06',
                                        borderRadius:-0}}>
                                    <p  style={{display: 'flex',
                                                fontFamily:'"Inter", sans-serif',
                                                marginTop:-23,
                                                justifyContent:'center',
                                                alignContent:'center', 
                                                color:'#fff',
                                                letterSpacing: 0.25,
                                                fontSize:18}}>ยอดเงิน {info && info?.Totalprice} บาท</p>
                            </Card>
                           
                            </Row>
                            
                        <p style={{display: 'flex',
                                    fontFamily:'"Inter", sans-serif',
                                    justifyContent:'center',
                                    alignContent:'center', 
                                    color:'#ffff',
                                    letterSpacing: 0.25,}}>กรุณาโอนเงินภายใน24ชั่วโมง </p>
                        </Card>
                        </Row>
                        <Row>
                            <Card className="Payment-form"
                                style={{backgroundColor:'#F2F9F3',
                                         borderRadius:-0,
                                         border:'3px dashed  #003D06',
                                         marginTop:-2,
                                         width:330,
                                         height:360
                                         }}>
                                <div>

              
                                         <Row style={{display:'flex',
                                                    alignContent:'center',
                                                    justifyContent:'center',
                                                   }}>
                                                <Form
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 32 ,style: { marginLeft: '20px' }}}
                                                    layout="horizontal"
                                                    onFinish={onFinish}
                                                    style={{ maxWidth: 700 }}
                                                    >
                                                
      
                                                    <Form.Item name="pay"label="ยอดโอน">
                                                            <Input  onChange={(e) => setPayValue(e.target.value)} value={payValue} />
                                                    </Form.Item>

                                                    <Form.Item name = "Paymentmethod" label="วิธีโอน">
                                                            <Select>
                                                            <Select.Option value="QRCode">QRCode</Select.Option>
                                                            <Select.Option value="BankAccount">Bank Account Number</Select.Option>
                                                        </Select>
                                                    </Form.Item>
      
                                                    <Form.Item name="Paiddate" label="เวลาโอน" >
                                                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                                                    </Form.Item>
 
                                                   <Form.Item
                                                        label="slip"
                                                        name="Billphoto"
                                                        valuePropName="fileList"
                                                        getValueFromEvent={normFile}
              
                                                    >
                                                        {/* <Upload maxCount={1} multiple={false} listType="picture-card" style={{width:50}}>
                                                            <div>
                    
                                                                <div style={{ marginTop: 8 }}>อัพโหลด</div>
                                                            </div>
                                                        </Upload>  */}
                                                          <Upload maxCount={1} multiple={false}>
                                                                <Button >Click to Upload</Button>
                                                          </Upload>
                                                    </Form.Item>

                                                    <Form.Item  style={{display:'flex',
                                                                        alignContent:'center',
                                                                        justifyContent:'center'}}>
                                                            <Button type="primary" htmlType="submit"
                                                                        style={{backgroundColor:'#003D06',
                                                                            color:'#fff',
                                                                            border:'2px solid  #003D06',
                                                                            marginTop:10
                                                                            }}>ยืนยันการชำระเงิน</Button>
                                                    </Form.Item>
                                                
                                               </Form>
                                         </Row>
                
                                </div>

                            </Card>
                        </Row>
                    </div>
                    </Col>
            </Row>

            
        </div>
    )
}