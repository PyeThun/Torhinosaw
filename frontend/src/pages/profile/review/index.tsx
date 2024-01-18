import { Button, Layout, Radio, Rate, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Column from 'antd/es/table/Column';
import React, { CSSProperties, useState } from 'react';
import Headbarlogo from '../../../component/headbarlogo'
import Navbar from '../../../component/navbar'
import Footerbar from '../../../component/footerbar'
import Sider from 'antd/es/layout/Sider';
import MenuBar from "../Menu"
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  productname: string;
  productratingova: number;
  price: number;
}
interface RatedDataType extends DataType {
  productdtextreview:string;
  yourrated: number;
}

const Review: React.FC = () => {

  const contentStyle: CSSProperties = {
    backgroundColor: '#D9E2D9',
    minHeight: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin:'24px 24px 24px 24px'
};
  const tableAdjust: CSSProperties = {
    minHeight: '800px',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
  
  const data: DataType[] = [
    { key: '1', productname: 'Shirt', productratingova: 3, price: 500 },
    { key: '2', productname: 'Shorts', productratingova: 2, price: 1000 },
    { key: '3', productname: 'Yeans', productratingova: 4.5, price: 1500 },
    { key: '4', productname: 'Shirt', productratingova: 3, price: 500 },
    { key: '5', productname: 'Shorts', productratingova: 2, price: 1000 },
    { key: '6', productname: 'Yeans', productratingova: 4.5, price: 1500 },
    { key: '7', productname: 'Shirt', productratingova: 3, price: 500 },
    { key: '8', productname: 'Shorts', productratingova: 2, price: 1000 },
    { key: '9', productname: 'Yeans', productratingova: 4.5, price: 1500 },
  ]
  const ratedData: RatedDataType[] = [
    { key: '1', productname: 'Shirt', productratingova: 3,productdtextreview:'เสื้อดีมาก', price: 500,yourrated:4 },
    { key: '2', productname: 'Shorts', productratingova: 2,productdtextreview:'กางเกงขาดดาก', price: 1000,yourrated:1 },
  ]

  const [selectedValue, setSelectedValue] = useState('a');
  const handleRadioChange = (e: any) => {
    setSelectedValue(e.target.value);
  };
  const getCurrentData = () => {
    return selectedValue === 'a' ? data : ratedData;
  };
  const handleRated = () => {

  }

  const pageSize = 6;

  const getColumns = (): ColumnsType<DataType | RatedDataType> => {
    const commonColumns: ColumnsType<DataType | RatedDataType> = [
      {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: 'Product Name',
        dataIndex: 'productname',
        key: 'productname',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
    ];
    
  
    if (selectedValue === 'a') {
      return [
        ...commonColumns,
        {
          title: 'Product Rating OVA',
          dataIndex: 'productratingova',
          key: 'productratingova',
          render: (_: any, record: DataType | RatedDataType) => (
            <Rate disabled defaultValue={record.productratingova} allowHalf />
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: any, record: DataType) => (
            <Button type='primary' onClick={() => handleRated()} style={{backgroundColor:'#003d29'}}>
              Rate
            </Button>
          ),
        },
      ];
    } else {
      return [
        ...commonColumns,
        {
            title: 'Your Review',
            dataIndex: 'productdtextreview',
            key: 'productdtextreview',
        },
        {
          title: 'Your Rate',
          dataIndex: 'yourrated',
          key: 'yourrated',
          render: (_: any, record: DataType | RatedDataType) => (
            <Rate disabled defaultValue={(record as RatedDataType).yourrated} allowHalf />
          ),
        },
        // {
        //   title: 'Change Your Mind',
        //   dataIndex: 'action',
        //   key: 'yourrated',
        //   render: (_: any, record: DataType | RatedDataType) => (
        //     <
        //   ),
        // },
      ];
    }
  };
  

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
          <Content style={contentStyle}>
            <h1>Review</h1>
            <div>
              <div style={{alignItems:'end'}}>
                <Radio.Group defaultValue="a" buttonStyle="solid" onChange={handleRadioChange}>
                  <Radio.Button value="a">Unrated</Radio.Button>
                  <Radio.Button value="b">Rated</Radio.Button>
                </Radio.Group>
                </div>
                <div>
                <Table
                columns={getColumns()}
                dataSource={getCurrentData()}
                pagination={{pageSize}}
                style={{width:'1000px', height:'600px'}}
            />
            </div>
                {/* <Table dataSource={data} pagination={{ pageSize: 6 }}>
                  <Column title="Product Name" dataIndex="productname" key="productname" />
                  <Column title="Product Rating OVA" key="productratingova" render={(_: any, record: DataType) => (<Rate disabled defaultValue={record.productratingova} allowHalf />)} />
                  <Column title="Product Price" dataIndex="price" key="price" />
                  <Column title="Rate" key="action" render={(_: any, record: DataType) => (
                    <Button type='primary' onClick={handleRated}>Rate</Button>
                  )} />
                </Table> */}
              </div>
          </Content>
        </Layout>
      </Layout>
      <Footerbar />
    </>
  );
};

export default Review;