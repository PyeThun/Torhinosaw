  //เอาเวลากับราคามาแสดงที่หน้าเพย์เม้น
export interface PaymentInterface{
    
    CustomerID?:number;
    OrderID?: number;
    Timeoforder?: Date ;
    Totalprice?: number;
    Status?: string;
 }
  // export interface ConfirmPaymentInterface{
  //   ID?: number;
  //   Totalprice?: number;
  //   Paymentmethod?: number;
  //   Billphoto?: string;
  //   Paiddate:any ;
  // }
  export interface ConfirmPaymentInterface{
    ID?: number;
    Totalprice?: number;
    Paymentmethod?: string;
    Billphoto?: string;
    Paiddate:any ;
  }
  //ต้องตรวจสอบก่อนว่าเกิน24ชั่วโมงมั้ย ถ้าเกิน24 ชั่วโมง จะเปลี่ยสถานะอัติโนมัติ
  //ลูกค้าจ่ายแล้วค่อยบันทึก
  export interface ImageUpload {
    uid: string
    lastModified: number
    lastModifiedDate: string
    name: string
    size: number
    type: string
    percent: number
    originFileObj: OriginFileObj
    error: Error
    response: string
    status: string
    thumbUrl: string
  }
  export interface OriginFileObj {
    uid: string
  }
  export interface Error {
    status: number
    method: string
    url: string
  }