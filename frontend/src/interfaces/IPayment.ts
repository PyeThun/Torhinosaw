import { CustomerInterface } from "./ICustomer";
import { StatusInterface } from "./IStatus";


export interface PaymentInterfaceUpdate{
    ID?:   				number;
    Shippingfee?: 		number;
	Paymentmethod?: 	string;
	Billphoto?: 		string;
	Totalprice ?:      	number;
	Paiddate?: 			string;
	Tacking?: 			string;

	CustomerID?:  		string;
	StatusID?:  		string;

    Updated_at:			Date;
}

export interface PaymentInterfaceUpdateV2{
    ID?:   				number;
    Shippingfee?: 		number;
	Paymentmethod?: 	string;
	Billphoto?: 		string;
	Totalprice ?:      	number;
	Paiddate?: 			string;
	Tacking?: 			string;

	CustomerID?:  		 CustomerInterface;
	StatusID?:  		 StatusInterface;

    Updated_at:			Date;
}