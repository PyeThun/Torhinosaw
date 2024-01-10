import Header1 from "../../../component/PakComponent/Header/Header1"
import Header2 from "../../../component/PakComponent/Header/Header2"
import Sidebar from "../../../component/PakComponent/SideBar/sidebar"
import Footer from "../../../component/PakComponent/Footer/Footer";
import './Style.css'
import { Layout, Card, Col, Row, Image, Flex, Button, Tabs, Radio } from "antd";
import product1 from "../../assets/product1.jpg"
const { Header, Sider, Content } = Layout;

const PurchasePage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <Header1 />
      <Header2 />
      <Layout style={{ overflow: 'initial', minHeight: '100vh' }}>
        <Sidebar />
        <Content style={{
          padding: 24,
          margin: 0,
          background: '#F8FFF8',
          minHeight: '100vh'
        }}>
          <Radio.Group defaultValue="a"
            buttonStyle="solid"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#003D06'
            }}>
            <Radio.Button value="a" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              padding: '20px 10px',
              width: 150,
              borderColor: '#003D06',

            }}>
              All</Radio.Button>
            <Radio.Button value="b" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              padding: '20px 10px',
              width: 150,
              borderColor: '#003D06'
            }}>
              To pay</Radio.Button>
            <Radio.Button value="c" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              padding: '20px 10px',
              width: 150,
              borderColor: '#003D06'
            }}>
              To Ship</Radio.Button>
            <Radio.Button value="d" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              padding: '20px 10px',
              width: 150,
              borderColor: '#003D06'
            }}>
              To Receive</Radio.Button>
            <Radio.Button value="e" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              padding: '20px 10px',
              width: 150,
              borderColor: '#003D06'
            }}>
              Complete</Radio.Button>
            <Radio.Button value="f" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              padding: '20px 10px',
              width: 150,
              borderColor: '#003D06'
            }}>
              Cancelled</Radio.Button>
          </Radio.Group>
          <Row gutter={[16, 16]} style={{ marginLeft: 50 }}>
            <Col>
              <Card style={{
                width: 1098, marginTop: 15, marginBottom: '20px', borderRadius: '25px', height: '25vh', backgroundColor: '#fff',
                border: '2px solid #003D06', marginLeft: 20,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <Row>
                  <Col>
                    <svg style={{ marginTop: -5 }} width="24" height="17" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.8 18.8889V12.7778C4.8 11.8573 5.60589 11.1111 6.6 11.1111H10.2C11.1941 11.1111 12 11.8573 12 12.7778V18.8889H19.8C20.7941 18.8889 21.6 18.1427 21.6 17.2222V8.33333H22.8V17.2222C22.8 18.7563 21.4569 20 19.8 20H4.2C2.54315 20 1.2 18.7563 1.2 17.2222V8.33333H2.4V17.2222C2.4 18.1427 3.20589 18.8889 4.2 18.8889H4.8ZM6 18.8889H10.8V12.7778C10.8 12.471 10.5314 12.2222 10.2 12.2222H6.6C6.26863 12.2222 6 12.471 6 12.7778V18.8889ZM15.6 12.7778V15C15.6 15.3068 15.8686 15.5556 16.2 15.5556H17.4C17.7314 15.5556 18 15.3068 18 15V12.7778C18 12.471 17.7314 12.2222 17.4 12.2222H16.2C15.8686 12.2222 15.6 12.471 15.6 12.7778ZM14.4 12.7778C14.4 11.8573 15.2059 11.1111 16.2 11.1111H17.4C18.3941 11.1111 19.2 11.8573 19.2 12.7778V15C19.2 15.9205 18.3941 16.6667 17.4 16.6667H16.2C15.2059 16.6667 14.4 15.9205 14.4 15V12.7778ZM4.8 8.88889H1.8C0.805887 8.88889 0 8.1427 0 7.22222V6.32509C0 6.11306 0.0436954 5.90297 0.128742 5.70611L2.44291 0.349227C2.53403 0.138306 2.75466 0 3 0H21C21.2453 0 21.466 0.138306 21.5571 0.349227L23.8713 5.70611C23.9563 5.90297 24 6.11306 24 6.32509V7.22222C24 8.1427 23.1941 8.88889 22.2 8.88889H19.2C18.739 8.88889 18.3185 8.72842 18 8.4645C17.6815 8.72842 17.261 8.88889 16.8 8.88889H13.2C12.739 8.88889 12.3185 8.72842 12 8.4645C11.6815 8.72842 11.261 8.88889 10.8 8.88889H7.2C6.73899 8.88889 6.31845 8.72842 6 8.4645C5.68155 8.72842 5.26101 8.88889 4.8 8.88889ZM3.40622 1.11111L1.24291 6.11876C1.21457 6.18439 1.2 6.25441 1.2 6.32509V7.22222C1.2 7.52905 1.46863 7.77778 1.8 7.77778H4.8C5.13137 7.77778 5.4 7.52905 5.4 7.22222V6.11111C5.4 5.80429 5.66863 5.55556 6 5.55556C6.33137 5.55556 6.6 5.80429 6.6 6.11111V7.22222C6.6 7.52905 6.86863 7.77778 7.2 7.77778H10.8C11.1314 7.77778 11.4 7.52905 11.4 7.22222V6.11111C11.4 5.80429 11.6686 5.55556 12 5.55556C12.3314 5.55556 12.6 5.80429 12.6 6.11111V7.22222C12.6 7.52905 12.8686 7.77778 13.2 7.77778H16.8C17.1314 7.77778 17.4 7.52905 17.4 7.22222V6.11111C17.4 5.80429 17.6686 5.55556 18 5.55556C18.3314 5.55556 18.6 5.80429 18.6 6.11111V7.22222C18.6 7.52905 18.8686 7.77778 19.2 7.77778H22.2C22.5314 7.77778 22.8 7.52905 22.8 7.22222V6.32509C22.8 6.25441 22.7854 6.18439 22.7571 6.11876L20.5938 1.11111H3.40622Z" fill="#E66100" />
                    </svg></Col>
                  <Col>
                    <p style={{ marginTop: 2, marginLeft: 4, fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: 0.5, fontSize: 10 }}>To Shop</p></Col>
                  <Col>
                    <h2 style={{ marginTop: -35, marginLeft: 960, fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: 0.5, fontSize: 18, color: '#E66100' }}>status</h2>
                  </Col>

                </Row>

                <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

                  <Image src={product1}
                    width={80}
                    style={{
                      borderRadius: '10px', marginTop: '0px',
                      border: '1px solid #5A665B'
                    }}
                    preview={false} >
                  </Image>


                  <h4
                    style={{
                      fontWeight: '500',
                      fontSize: '15px',
                      marginLeft: 10,
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: 0.25,
                      marginTop: -40
                    }}>
                    Product1
                  </h4>

                  <span style={{
                    display: 'flex',
                    marginLeft: -60,
                    marginTop: -45,
                    color: '#6D6D6D'
                  }}>
                    <br />optional ex.green , white
                  </span>
                  <p style={{ marginLeft: -152, marginTop: 28, color: '#6D6D6D' }}>count x1,x2</p>
                  <p style={{ marginLeft: 929, marginTop: -25, color: '#000' }}>Price: XXX Bath</p>
                  <h2 style={{ color: '#003D06', marginLeft: 870, marginTop: -12 }}>Total: XXX Bath</h2>

                </Row>
                <Row>
                </Row>
              </Card>
              <Card style={{
                width: 1098, marginBottom: '20px', borderRadius: '25px', height: '25vh', backgroundColor: '#fff',
                border: '2px solid #003D06', marginLeft: 20,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <Row>
                  <Col>
                    <svg style={{ marginTop: -5 }} width="24" height="17" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.8 18.8889V12.7778C4.8 11.8573 5.60589 11.1111 6.6 11.1111H10.2C11.1941 11.1111 12 11.8573 12 12.7778V18.8889H19.8C20.7941 18.8889 21.6 18.1427 21.6 17.2222V8.33333H22.8V17.2222C22.8 18.7563 21.4569 20 19.8 20H4.2C2.54315 20 1.2 18.7563 1.2 17.2222V8.33333H2.4V17.2222C2.4 18.1427 3.20589 18.8889 4.2 18.8889H4.8ZM6 18.8889H10.8V12.7778C10.8 12.471 10.5314 12.2222 10.2 12.2222H6.6C6.26863 12.2222 6 12.471 6 12.7778V18.8889ZM15.6 12.7778V15C15.6 15.3068 15.8686 15.5556 16.2 15.5556H17.4C17.7314 15.5556 18 15.3068 18 15V12.7778C18 12.471 17.7314 12.2222 17.4 12.2222H16.2C15.8686 12.2222 15.6 12.471 15.6 12.7778ZM14.4 12.7778C14.4 11.8573 15.2059 11.1111 16.2 11.1111H17.4C18.3941 11.1111 19.2 11.8573 19.2 12.7778V15C19.2 15.9205 18.3941 16.6667 17.4 16.6667H16.2C15.2059 16.6667 14.4 15.9205 14.4 15V12.7778ZM4.8 8.88889H1.8C0.805887 8.88889 0 8.1427 0 7.22222V6.32509C0 6.11306 0.0436954 5.90297 0.128742 5.70611L2.44291 0.349227C2.53403 0.138306 2.75466 0 3 0H21C21.2453 0 21.466 0.138306 21.5571 0.349227L23.8713 5.70611C23.9563 5.90297 24 6.11306 24 6.32509V7.22222C24 8.1427 23.1941 8.88889 22.2 8.88889H19.2C18.739 8.88889 18.3185 8.72842 18 8.4645C17.6815 8.72842 17.261 8.88889 16.8 8.88889H13.2C12.739 8.88889 12.3185 8.72842 12 8.4645C11.6815 8.72842 11.261 8.88889 10.8 8.88889H7.2C6.73899 8.88889 6.31845 8.72842 6 8.4645C5.68155 8.72842 5.26101 8.88889 4.8 8.88889ZM3.40622 1.11111L1.24291 6.11876C1.21457 6.18439 1.2 6.25441 1.2 6.32509V7.22222C1.2 7.52905 1.46863 7.77778 1.8 7.77778H4.8C5.13137 7.77778 5.4 7.52905 5.4 7.22222V6.11111C5.4 5.80429 5.66863 5.55556 6 5.55556C6.33137 5.55556 6.6 5.80429 6.6 6.11111V7.22222C6.6 7.52905 6.86863 7.77778 7.2 7.77778H10.8C11.1314 7.77778 11.4 7.52905 11.4 7.22222V6.11111C11.4 5.80429 11.6686 5.55556 12 5.55556C12.3314 5.55556 12.6 5.80429 12.6 6.11111V7.22222C12.6 7.52905 12.8686 7.77778 13.2 7.77778H16.8C17.1314 7.77778 17.4 7.52905 17.4 7.22222V6.11111C17.4 5.80429 17.6686 5.55556 18 5.55556C18.3314 5.55556 18.6 5.80429 18.6 6.11111V7.22222C18.6 7.52905 18.8686 7.77778 19.2 7.77778H22.2C22.5314 7.77778 22.8 7.52905 22.8 7.22222V6.32509C22.8 6.25441 22.7854 6.18439 22.7571 6.11876L20.5938 1.11111H3.40622Z" fill="#E66100" />
                    </svg></Col>
                  <Col>
                    <p style={{ marginTop: 2, marginLeft: 4, fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: 0.5, fontSize: 10 }}>To Shop</p></Col>
                  <Col>
                    <h2 style={{ marginTop: -35, marginLeft: 960, fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: 0.5, fontSize: 18, color: '#E66100' }}>status</h2>
                  </Col>

                </Row>

                <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

                  <Image src={product1}
                    width={80}
                    style={{
                      borderRadius: '10px', marginTop: '0px',
                      border: '1px solid #5A665B'
                    }}
                    preview={false} >
                  </Image>


                  <h4
                    style={{
                      fontWeight: '500',
                      fontSize: '15px',
                      marginLeft: 10,
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: 0.25,
                      marginTop: -40
                    }}>
                    Product1
                  </h4>

                  <span style={{
                    display: 'flex',
                    marginLeft: -60,
                    marginTop: -45,
                    color: '#6D6D6D'
                  }}>
                    <br />optional ex.green , white
                  </span>
                  <p style={{ marginLeft: -152, marginTop: 28, color: '#6D6D6D' }}>count x1,x2</p>
                  <p style={{ marginLeft: 929, marginTop: -25, color: '#000' }}>Price: XXX Bath</p>
                  <h2 style={{ color: '#003D06', marginLeft: 870, marginTop: -12 }}>Total: XXX Bath</h2>

                </Row>
                <Row>
                </Row>
              </Card>
              <Card style={{
                width: 1098, borderRadius: '25px', height: '25vh', backgroundColor: '#fff',
                border: '2px solid #003D06', marginLeft: 20,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <Row>
                  <Col>
                    <svg style={{ marginTop: -5 }} width="24" height="17" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.8 18.8889V12.7778C4.8 11.8573 5.60589 11.1111 6.6 11.1111H10.2C11.1941 11.1111 12 11.8573 12 12.7778V18.8889H19.8C20.7941 18.8889 21.6 18.1427 21.6 17.2222V8.33333H22.8V17.2222C22.8 18.7563 21.4569 20 19.8 20H4.2C2.54315 20 1.2 18.7563 1.2 17.2222V8.33333H2.4V17.2222C2.4 18.1427 3.20589 18.8889 4.2 18.8889H4.8ZM6 18.8889H10.8V12.7778C10.8 12.471 10.5314 12.2222 10.2 12.2222H6.6C6.26863 12.2222 6 12.471 6 12.7778V18.8889ZM15.6 12.7778V15C15.6 15.3068 15.8686 15.5556 16.2 15.5556H17.4C17.7314 15.5556 18 15.3068 18 15V12.7778C18 12.471 17.7314 12.2222 17.4 12.2222H16.2C15.8686 12.2222 15.6 12.471 15.6 12.7778ZM14.4 12.7778C14.4 11.8573 15.2059 11.1111 16.2 11.1111H17.4C18.3941 11.1111 19.2 11.8573 19.2 12.7778V15C19.2 15.9205 18.3941 16.6667 17.4 16.6667H16.2C15.2059 16.6667 14.4 15.9205 14.4 15V12.7778ZM4.8 8.88889H1.8C0.805887 8.88889 0 8.1427 0 7.22222V6.32509C0 6.11306 0.0436954 5.90297 0.128742 5.70611L2.44291 0.349227C2.53403 0.138306 2.75466 0 3 0H21C21.2453 0 21.466 0.138306 21.5571 0.349227L23.8713 5.70611C23.9563 5.90297 24 6.11306 24 6.32509V7.22222C24 8.1427 23.1941 8.88889 22.2 8.88889H19.2C18.739 8.88889 18.3185 8.72842 18 8.4645C17.6815 8.72842 17.261 8.88889 16.8 8.88889H13.2C12.739 8.88889 12.3185 8.72842 12 8.4645C11.6815 8.72842 11.261 8.88889 10.8 8.88889H7.2C6.73899 8.88889 6.31845 8.72842 6 8.4645C5.68155 8.72842 5.26101 8.88889 4.8 8.88889ZM3.40622 1.11111L1.24291 6.11876C1.21457 6.18439 1.2 6.25441 1.2 6.32509V7.22222C1.2 7.52905 1.46863 7.77778 1.8 7.77778H4.8C5.13137 7.77778 5.4 7.52905 5.4 7.22222V6.11111C5.4 5.80429 5.66863 5.55556 6 5.55556C6.33137 5.55556 6.6 5.80429 6.6 6.11111V7.22222C6.6 7.52905 6.86863 7.77778 7.2 7.77778H10.8C11.1314 7.77778 11.4 7.52905 11.4 7.22222V6.11111C11.4 5.80429 11.6686 5.55556 12 5.55556C12.3314 5.55556 12.6 5.80429 12.6 6.11111V7.22222C12.6 7.52905 12.8686 7.77778 13.2 7.77778H16.8C17.1314 7.77778 17.4 7.52905 17.4 7.22222V6.11111C17.4 5.80429 17.6686 5.55556 18 5.55556C18.3314 5.55556 18.6 5.80429 18.6 6.11111V7.22222C18.6 7.52905 18.8686 7.77778 19.2 7.77778H22.2C22.5314 7.77778 22.8 7.52905 22.8 7.22222V6.32509C22.8 6.25441 22.7854 6.18439 22.7571 6.11876L20.5938 1.11111H3.40622Z" fill="#E66100" />
                    </svg></Col>
                  <Col>
                    <p style={{ marginTop: 2, marginLeft: 4, fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: 0.5, fontSize: 10 }}>To Shop</p></Col>
                  <Col>
                    <h2 style={{ marginTop: -35, marginLeft: 960, fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: 0.5, fontSize: 18, color: '#E66100' }}>status</h2>
                  </Col>

                </Row>

                <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

                  <Image src={product1}
                    width={80}
                    style={{
                      borderRadius: '10px', marginTop: '0px',
                      border: '1px solid #5A665B'
                    }}
                    preview={false} >
                  </Image>


                  <h4
                    style={{
                      fontWeight: '500',
                      fontSize: '15px',
                      marginLeft: 10,
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: 0.25,
                      marginTop: -40
                    }}>
                    Product1
                  </h4>

                  <span style={{
                    display: 'flex',
                    marginLeft: -60,
                    marginTop: -45,
                    color: '#6D6D6D'
                  }}>
                    <br />optional ex.green , white
                  </span>
                  <p style={{ marginLeft: -152, marginTop: 28, color: '#6D6D6D' }}>count x1,x2</p>
                  <p style={{ marginLeft: 929, marginTop: -25, color: '#000' }}>Price: XXX Bath</p>
                  <h2 style={{ color: '#003D06', marginLeft: 870, marginTop: -12 }}>Total: XXX Bath</h2>

                </Row>
                <Row>
                </Row>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer />
    </>
  )
}
export default PurchasePage;