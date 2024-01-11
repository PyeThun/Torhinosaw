import Header1 from "../../../component/PakComponent/Header/Header1"
import Header2 from "../../../component/PakComponent/Header/Header2"
import Sidebar from "../../../component/PakComponent/SideBar/sidebar"
import Footer from "../../../component/PakComponent/Footer/Footer"
import { Layout,Card,Col,Row,Image, Flex, Button } from "antd";
import Heart from '../../../assets/3bears.jpg'
import product1 from "../../../assets/3bears.jpg"


const WishlistPage = () => {

  const {  Header,Sider,Content } = Layout;

    return(
      <>
      <Header1/>
      <Header2/>
      <Layout style={{overflow: 'initial',minHeight: '100vh'}}>
      <Sidebar/>
      <Content style={{
            padding: 24,
            margin: 0,
            background: '#F8FFF8',
            minHeight:'100vh'}}>
              <Row gutter={[16, 16]} style={{marginLeft:50}}>
                <Col>
              <Card style={{ width: 318,top:'10px', borderRadius: '25px', height: '35vh',backgroundColor:'#ECFCED',
                              border:'2px solid #003D06',marginLeft:20,
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <Row>
                <svg  style={{marginTop:-7}} width="24" height="17" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8 18.8889V12.7778C4.8 11.8573 5.60589 11.1111 6.6 11.1111H10.2C11.1941 11.1111 12 11.8573 12 12.7778V18.8889H19.8C20.7941 18.8889 21.6 18.1427 21.6 17.2222V8.33333H22.8V17.2222C22.8 18.7563 21.4569 20 19.8 20H4.2C2.54315 20 1.2 18.7563 1.2 17.2222V8.33333H2.4V17.2222C2.4 18.1427 3.20589 18.8889 4.2 18.8889H4.8ZM6 18.8889H10.8V12.7778C10.8 12.471 10.5314 12.2222 10.2 12.2222H6.6C6.26863 12.2222 6 12.471 6 12.7778V18.8889ZM15.6 12.7778V15C15.6 15.3068 15.8686 15.5556 16.2 15.5556H17.4C17.7314 15.5556 18 15.3068 18 15V12.7778C18 12.471 17.7314 12.2222 17.4 12.2222H16.2C15.8686 12.2222 15.6 12.471 15.6 12.7778ZM14.4 12.7778C14.4 11.8573 15.2059 11.1111 16.2 11.1111H17.4C18.3941 11.1111 19.2 11.8573 19.2 12.7778V15C19.2 15.9205 18.3941 16.6667 17.4 16.6667H16.2C15.2059 16.6667 14.4 15.9205 14.4 15V12.7778ZM4.8 8.88889H1.8C0.805887 8.88889 0 8.1427 0 7.22222V6.32509C0 6.11306 0.0436954 5.90297 0.128742 5.70611L2.44291 0.349227C2.53403 0.138306 2.75466 0 3 0H21C21.2453 0 21.466 0.138306 21.5571 0.349227L23.8713 5.70611C23.9563 5.90297 24 6.11306 24 6.32509V7.22222C24 8.1427 23.1941 8.88889 22.2 8.88889H19.2C18.739 8.88889 18.3185 8.72842 18 8.4645C17.6815 8.72842 17.261 8.88889 16.8 8.88889H13.2C12.739 8.88889 12.3185 8.72842 12 8.4645C11.6815 8.72842 11.261 8.88889 10.8 8.88889H7.2C6.73899 8.88889 6.31845 8.72842 6 8.4645C5.68155 8.72842 5.26101 8.88889 4.8 8.88889ZM3.40622 1.11111L1.24291 6.11876C1.21457 6.18439 1.2 6.25441 1.2 6.32509V7.22222C1.2 7.52905 1.46863 7.77778 1.8 7.77778H4.8C5.13137 7.77778 5.4 7.52905 5.4 7.22222V6.11111C5.4 5.80429 5.66863 5.55556 6 5.55556C6.33137 5.55556 6.6 5.80429 6.6 6.11111V7.22222C6.6 7.52905 6.86863 7.77778 7.2 7.77778H10.8C11.1314 7.77778 11.4 7.52905 11.4 7.22222V6.11111C11.4 5.80429 11.6686 5.55556 12 5.55556C12.3314 5.55556 12.6 5.80429 12.6 6.11111V7.22222C12.6 7.52905 12.8686 7.77778 13.2 7.77778H16.8C17.1314 7.77778 17.4 7.52905 17.4 7.22222V6.11111C17.4 5.80429 17.6686 5.55556 18 5.55556C18.3314 5.55556 18.6 5.80429 18.6 6.11111V7.22222C18.6 7.52905 18.8686 7.77778 19.2 7.77778H22.2C22.5314 7.77778 22.8 7.52905 22.8 7.22222V6.32509C22.8 6.25441 22.7854 6.18439 22.7571 6.11876L20.5938 1.11111H3.40622Z" fill="#E66100"/>
                </svg>

                <p style={{ marginTop:-3,marginLeft:4,fontFamily:'"Inter", sans-serif',fontWeight:600,letterSpacing: 0.5,fontSize:10}}>To Shop</p>
                <Image src={Heart} width={28} style={{marginLeft:175,marginTop:-16}}></Image>
                </Row>

                <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                
                <Image src={product1}
                width={100}
                style={{ borderRadius: '10px' ,marginTop:'6px',
                // border: '1px solid #5A665B'
                }}
                preview={false} >
                </Image>
               
                
                <h4 
                    style={{fontWeight:'500',
                            fontSize:'15px',  
                            marginLeft:10,
                            fontFamily:'"Inter", sans-serif',
                            letterSpacing: 0.25,
                            marginTop:-30}}>
                              Product1
                  </h4>
                 
                  <span  style={{
                          display: 'flex',
                          marginLeft:-60,
                          marginTop:-30
                  
                          }}> 
                          <br />optional ex.green , white
                  </span>
                  <h3 style={{
                          display: 'block',
                          marginLeft:-150,
                          marginTop:100,
                          fontFamily:'"Inter", sans-serif',
                          letterSpacing: 0.25,
                          }}> 
                    Price:
                  </h3>
                  <span style={{
                          display: 'block',
                          marginLeft:5,
                          marginTop:83,
                          fontFamily:'"Inter", sans-serif',
                          letterSpacing: 0.25,
                          fontSize:20
                          }}> 
                    24 Bath</span>
                
                </Row>
                <Row>
                  <Flex  >
                    <Button className="AddCart-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.color = '#6d6d6d'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#000'} 
                    style={{
                      backgroundColor:'#ffff',
                      width:110,
                      height:36,
                      borderRadius:10,
                      color:'#000',
                      marginLeft:10,
                      marginTop:1,
                      border:'2px solid #003D06'
                    }}
                    >
                      Add to Cart
                    </Button>
                    <Button className="BuyNow-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d4e31'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#003D06'} 
                    style={{
                      backgroundColor:'#003D06',
                      width:110,
                      height:36,
                      borderRadius:10,
                      color:'#fff',
                      marginLeft:30
                    }}
                     >
                      Buy Now
                    </Button>
                  </Flex>
                </Row>
              </Card>
              </Col>
              <Col>
              
              <Card style={{ width: 318,top:'10px', borderRadius: '25px', height: '35vh',backgroundColor:'#ECFCED',
                              border:'2px solid #003D06',marginLeft:20,
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <Row>
                <svg  style={{marginTop:-7}} width="24" height="17" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8 18.8889V12.7778C4.8 11.8573 5.60589 11.1111 6.6 11.1111H10.2C11.1941 11.1111 12 11.8573 12 12.7778V18.8889H19.8C20.7941 18.8889 21.6 18.1427 21.6 17.2222V8.33333H22.8V17.2222C22.8 18.7563 21.4569 20 19.8 20H4.2C2.54315 20 1.2 18.7563 1.2 17.2222V8.33333H2.4V17.2222C2.4 18.1427 3.20589 18.8889 4.2 18.8889H4.8ZM6 18.8889H10.8V12.7778C10.8 12.471 10.5314 12.2222 10.2 12.2222H6.6C6.26863 12.2222 6 12.471 6 12.7778V18.8889ZM15.6 12.7778V15C15.6 15.3068 15.8686 15.5556 16.2 15.5556H17.4C17.7314 15.5556 18 15.3068 18 15V12.7778C18 12.471 17.7314 12.2222 17.4 12.2222H16.2C15.8686 12.2222 15.6 12.471 15.6 12.7778ZM14.4 12.7778C14.4 11.8573 15.2059 11.1111 16.2 11.1111H17.4C18.3941 11.1111 19.2 11.8573 19.2 12.7778V15C19.2 15.9205 18.3941 16.6667 17.4 16.6667H16.2C15.2059 16.6667 14.4 15.9205 14.4 15V12.7778ZM4.8 8.88889H1.8C0.805887 8.88889 0 8.1427 0 7.22222V6.32509C0 6.11306 0.0436954 5.90297 0.128742 5.70611L2.44291 0.349227C2.53403 0.138306 2.75466 0 3 0H21C21.2453 0 21.466 0.138306 21.5571 0.349227L23.8713 5.70611C23.9563 5.90297 24 6.11306 24 6.32509V7.22222C24 8.1427 23.1941 8.88889 22.2 8.88889H19.2C18.739 8.88889 18.3185 8.72842 18 8.4645C17.6815 8.72842 17.261 8.88889 16.8 8.88889H13.2C12.739 8.88889 12.3185 8.72842 12 8.4645C11.6815 8.72842 11.261 8.88889 10.8 8.88889H7.2C6.73899 8.88889 6.31845 8.72842 6 8.4645C5.68155 8.72842 5.26101 8.88889 4.8 8.88889ZM3.40622 1.11111L1.24291 6.11876C1.21457 6.18439 1.2 6.25441 1.2 6.32509V7.22222C1.2 7.52905 1.46863 7.77778 1.8 7.77778H4.8C5.13137 7.77778 5.4 7.52905 5.4 7.22222V6.11111C5.4 5.80429 5.66863 5.55556 6 5.55556C6.33137 5.55556 6.6 5.80429 6.6 6.11111V7.22222C6.6 7.52905 6.86863 7.77778 7.2 7.77778H10.8C11.1314 7.77778 11.4 7.52905 11.4 7.22222V6.11111C11.4 5.80429 11.6686 5.55556 12 5.55556C12.3314 5.55556 12.6 5.80429 12.6 6.11111V7.22222C12.6 7.52905 12.8686 7.77778 13.2 7.77778H16.8C17.1314 7.77778 17.4 7.52905 17.4 7.22222V6.11111C17.4 5.80429 17.6686 5.55556 18 5.55556C18.3314 5.55556 18.6 5.80429 18.6 6.11111V7.22222C18.6 7.52905 18.8686 7.77778 19.2 7.77778H22.2C22.5314 7.77778 22.8 7.52905 22.8 7.22222V6.32509C22.8 6.25441 22.7854 6.18439 22.7571 6.11876L20.5938 1.11111H3.40622Z" fill="#E66100"/>
                </svg>

                <p style={{ marginTop:-3,marginLeft:4,fontFamily:'"Inter", sans-serif',fontWeight:600,letterSpacing: 0.5,fontSize:10}}>To Shop</p>
                <Image src={Heart} width={28} style={{marginLeft:175,marginTop:-16}}></Image>
                </Row>

                <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                
                <Image src={product1}
                width={100}
                style={{ borderRadius: '10px' ,marginTop:'6px',
                // border: '1px solid #5A665B'
                }}
                preview={false} >
                </Image>
               
                
                <h4 
                    style={{fontWeight:'500',
                            fontSize:'15px',  
                            marginLeft:10,
                            fontFamily:'"Inter", sans-serif',
                            letterSpacing: 0.25,
                            marginTop:-30}}>
                              Product1
                  </h4>
                 
                  <span  style={{
                          display: 'flex',
                          marginLeft:-60,
                          marginTop:-30
                  
                          }}> 
                          <br />optional ex.green , white
                  </span>
                  <h3 style={{
                          display: 'block',
                          marginLeft:-150,
                          marginTop:100,
                          fontFamily:'"Inter", sans-serif',
                          letterSpacing: 0.25,
                          }}> 
                    Price:
                  </h3>
                  <span style={{
                          display: 'block',
                          marginLeft:5,
                          marginTop:83,
                          fontFamily:'"Inter", sans-serif',
                          letterSpacing: 0.25,
                          fontSize:20
                          }}> 
                    24 Bath</span>
                
                </Row>
                <Row>
                  <Flex  >
                    <Button className="AddCart-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.color = '#4D4D4D'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'} 
                    style={{
                      backgroundColor:'#ffff',
                      width:110,
                      height:36,
                      borderRadius:10,
                      color:'#000',
                      marginLeft:10,
                      marginTop:1,
                      border:'2px solid #003D06'
                    }}
                    >
                      Add to Cart
                    </Button>
                    <Button className="BuyNow-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d4e31'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#003D06'} 
                    style={{
                      backgroundColor:'#003D06',
                      width:110,
                      height:36,
                      borderRadius:10,
                      color:'#fff',
                      marginLeft:30
                    }}
                     >
                      Buy Now
                    </Button>
                  </Flex>
                </Row>
              </Card>
              
              </Col>

              <Col>
              
              <Card style={{ width: 318,top:'10px', borderRadius: '25px', height: '35vh',backgroundColor:'#ECFCED',
                              border:'2px solid #003D06',marginLeft:20,
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <Row>
                <svg  style={{marginTop:-7}} width="24" height="17" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8 18.8889V12.7778C4.8 11.8573 5.60589 11.1111 6.6 11.1111H10.2C11.1941 11.1111 12 11.8573 12 12.7778V18.8889H19.8C20.7941 18.8889 21.6 18.1427 21.6 17.2222V8.33333H22.8V17.2222C22.8 18.7563 21.4569 20 19.8 20H4.2C2.54315 20 1.2 18.7563 1.2 17.2222V8.33333H2.4V17.2222C2.4 18.1427 3.20589 18.8889 4.2 18.8889H4.8ZM6 18.8889H10.8V12.7778C10.8 12.471 10.5314 12.2222 10.2 12.2222H6.6C6.26863 12.2222 6 12.471 6 12.7778V18.8889ZM15.6 12.7778V15C15.6 15.3068 15.8686 15.5556 16.2 15.5556H17.4C17.7314 15.5556 18 15.3068 18 15V12.7778C18 12.471 17.7314 12.2222 17.4 12.2222H16.2C15.8686 12.2222 15.6 12.471 15.6 12.7778ZM14.4 12.7778C14.4 11.8573 15.2059 11.1111 16.2 11.1111H17.4C18.3941 11.1111 19.2 11.8573 19.2 12.7778V15C19.2 15.9205 18.3941 16.6667 17.4 16.6667H16.2C15.2059 16.6667 14.4 15.9205 14.4 15V12.7778ZM4.8 8.88889H1.8C0.805887 8.88889 0 8.1427 0 7.22222V6.32509C0 6.11306 0.0436954 5.90297 0.128742 5.70611L2.44291 0.349227C2.53403 0.138306 2.75466 0 3 0H21C21.2453 0 21.466 0.138306 21.5571 0.349227L23.8713 5.70611C23.9563 5.90297 24 6.11306 24 6.32509V7.22222C24 8.1427 23.1941 8.88889 22.2 8.88889H19.2C18.739 8.88889 18.3185 8.72842 18 8.4645C17.6815 8.72842 17.261 8.88889 16.8 8.88889H13.2C12.739 8.88889 12.3185 8.72842 12 8.4645C11.6815 8.72842 11.261 8.88889 10.8 8.88889H7.2C6.73899 8.88889 6.31845 8.72842 6 8.4645C5.68155 8.72842 5.26101 8.88889 4.8 8.88889ZM3.40622 1.11111L1.24291 6.11876C1.21457 6.18439 1.2 6.25441 1.2 6.32509V7.22222C1.2 7.52905 1.46863 7.77778 1.8 7.77778H4.8C5.13137 7.77778 5.4 7.52905 5.4 7.22222V6.11111C5.4 5.80429 5.66863 5.55556 6 5.55556C6.33137 5.55556 6.6 5.80429 6.6 6.11111V7.22222C6.6 7.52905 6.86863 7.77778 7.2 7.77778H10.8C11.1314 7.77778 11.4 7.52905 11.4 7.22222V6.11111C11.4 5.80429 11.6686 5.55556 12 5.55556C12.3314 5.55556 12.6 5.80429 12.6 6.11111V7.22222C12.6 7.52905 12.8686 7.77778 13.2 7.77778H16.8C17.1314 7.77778 17.4 7.52905 17.4 7.22222V6.11111C17.4 5.80429 17.6686 5.55556 18 5.55556C18.3314 5.55556 18.6 5.80429 18.6 6.11111V7.22222C18.6 7.52905 18.8686 7.77778 19.2 7.77778H22.2C22.5314 7.77778 22.8 7.52905 22.8 7.22222V6.32509C22.8 6.25441 22.7854 6.18439 22.7571 6.11876L20.5938 1.11111H3.40622Z" fill="#E66100"/>
                </svg>

                <p style={{ marginTop:-3,marginLeft:4,fontFamily:'"Inter", sans-serif',fontWeight:600,letterSpacing: 0.5,fontSize:10}}>To Shop</p>
                <Image src={Heart} width={28} style={{marginLeft:175,marginTop:-16}}></Image>
                </Row>

                <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                
                <Image src={product1}
                width={100}
                style={{ borderRadius: '10px' ,marginTop:'6px',
                // border: '1px solid #5A665B'
                }}
                preview={false} >
                </Image>
               
                
                <h4 
                    style={{fontWeight:'500',
                            fontSize:'15px',  
                            marginLeft:10,
                            fontFamily:'"Inter", sans-serif',
                            letterSpacing: 0.25,
                            marginTop:-30}}>
                              Product1
                  </h4>
                 
                  <span  style={{
                          display: 'flex',
                          marginLeft:-60,
                          marginTop:-30
                  
                          }}> 
                          <br />optional ex.green , white
                  </span>
                  <h3 style={{
                          display: 'block',
                          marginLeft:-150,
                          marginTop:100,
                          fontFamily:'"Inter", sans-serif',
                          letterSpacing: 0.25,
                          }}> 
                    Price:
                  </h3>
                  <span style={{
                          display: 'block',
                          marginLeft:5,
                          marginTop:83,
                          fontFamily:'"Inter", sans-serif',
                          letterSpacing: 0.25,
                          fontSize:20
                          }}> 
                    24 Bath</span>
                
                </Row>
                <Row>
                  <Flex  >
                    <Button className="AddCart-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.color = '#4D4D4D'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'} 
                    style={{
                      backgroundColor:'#ffff',
                      width:110,
                      height:36,
                      borderRadius:10,
                      color:'#000',
                      marginLeft:10,
                      marginTop:1,
                      border:'2px solid #003D06'
                    }}
                    >
                      Add to Cart
                    </Button>
                    <Button className="BuyNow-button" type="primary"
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d4e31'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#003D06'} 
                    style={{
                      backgroundColor:'#003D06',
                      width:110,
                      height:36,
                      borderRadius:10,
                      color:'#fff',
                      marginLeft:30
                    }}
                     >
                      Buy Now
                    </Button>
                  </Flex>
                </Row>
              </Card>
              
              </Col>
      
           </Row>
      </Content>
        

      </Layout>
      <Footer/>
      </>
  )
}
export default WishlistPage;