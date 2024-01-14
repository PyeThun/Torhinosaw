export interface CustomerInterface{

    ID?:   				number;
	Firstname?:			string;		
	Lastname?:			string;		
	// Order []Order `gorm:"foreignKey:EmployeeID"`
	// Product []Product `gorm:"foreignKey:EmployeeID"`
}