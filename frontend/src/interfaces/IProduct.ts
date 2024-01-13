import { EmployeeInterface } from "./IEmployee";
import { ProductTypeInterface } from "./ProductType";

export interface ProductInterface {
	
    ID?: number;

    Name?: string;
	Photo?:			string;		
	Profile?:       string;

	Cost?:			number;	
	Color?:    		string;	
	Brand?:			string;	
	Quantity?:		number;	
	Sentfrom?:		string;
	Details?:		string	;	

	EmployeeID?: number;
	Employee?:   EmployeeInterface;  
	ProductTypeID?: number;
	ProductType?: ProductTypeInterface; 
}