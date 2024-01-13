export interface EmployeeInterface{

    ID?:   				number;
	Name?:				string;		
	Username?:			string;		
	Email?:				string	;	
	Password?:			string	;	
	Phone?:	           	string	;	
	Department?:		string;		

	// Order []Order `gorm:"foreignKey:EmployeeID"`
	// Product []Product `gorm:"foreignKey:EmployeeID"`
}