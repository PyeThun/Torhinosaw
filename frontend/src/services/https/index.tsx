import { ConfirmPaymentInterface, PaymentInterface } from "../../interface/IUPayment"

//import {xxxInterface} from "../../interface/xxxinterface"
const apiUrl = "http://localhost:8080"
//GET API Example
// async function Getxxx() {
//     const requestOptions = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     let res = await fetch(`${apiUrl}/xxx`, requestOptions)
//       .then((response) => response.json())
//       .then((res) => {
//         if (res.data) {
//           return res.data;
//         } else {
//           return false;
//         }
//       });
  
//     return res;
//   }

// POST API EXAMPLE
async function CreatePayment(data: PaymentInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/payment`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
  
    return res;
  }

// UPDATE API EXAMPLE
async function ConfirmPayment(data: ConfirmPaymentInterface) {
    
    // console.log(data.Billphoto);
    console.log(data);
    

    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
    
      let res = await fetch(`${apiUrl}/confirmPayment/${data.ID}`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
          if (res.data) {
            return { status: true, message: res.data };
          } else {
            return { status: false, message: res.error };
          }
        });
        console.log(res)
      return res;
  }
  async function GetPayment(id: Number) {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(`${apiUrl}/payment/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
    return res;
  }
  

export{
    CreatePayment,
    ConfirmPayment,
    GetPayment
    //xxxFunction,
    //xxxFunction,
}