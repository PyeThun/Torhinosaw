import React, { useState, useEffect } from "react";
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
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import  Navbar  from '../../component/navbar'
import  Headerbarlogo  from '../../component/headbarlogo'


import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import ProductAdd from "./manageproduct/add/product";
//import 'antd/dist/antd.css';


function Employee() {

  
    return (
      <>
        <Headerbarlogo />
        <Navbar />

        <nav>
          <Link to="/employee/productadd">Go to Product Add</Link>
        </nav>
      </>
    );
  }
  
  export default Employee;