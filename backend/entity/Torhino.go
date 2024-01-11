package entity

import (
	"gorm.io/gorm"
	"time"

)

type Order struct {
	gorm.Model

	Timeoforder 	time.Time
	Shippingservice string
	Shippingfee 	int
	Quantity		int
	Price			float32
	Totalprice		float32
	Status			int

	EmployeeID 		*uint
    Employee   		Employee 	`gorm:"references:id"`
	AddressID 		*uint
    Address   		Address 	`gorm:"references:id"`
	CartID 			*uint
    Cart   			Cart 		`gorm:"references:id"`
}

type Cart struct {
	gorm.Model

	TotalPrice		float32
	Quantity		int

	CustomerID 		*uint
    Customer   		Customer 	`gorm:"references:id"`	

	Products   		[]Product 	`gorm:"many2many:cart_products;"`

}

type Wishlist struct {
	gorm.Model

	Added_at		time.Time

	CustomerID 		*uint
	Customer   		Customer 	`gorm:"references:id"`

	Products   		[]Product 	`gorm:"many2many:wishlist_products;"`
}

type Customer struct {
	gorm.Model

	Email			string		`valid:"required~Email is required, email~Email is invalid",gorm:"uniqueIndex"`
	Firstname		string		`valid:"required~FirstName is required"`
	Lastname		string		`valid:"required~LastName is required"`
	Dateofbirth		time.Time	
	Username		string		`valid:"required~Username is required"`

	Addresses 		[]Address 	`gorm:"foreignKey:CustomerID"`
	Wishlists		[]Wishlist 	`gorm:"foreignKey:CustomerID"`
	Carts			[]Cart 		`gorm:"foreignKey:CustomerID"`
}

type Payment struct {
	gorm.Model

	Shippingfee		int
	Paymentmethod	string
	Billphoto		string
	Totalprice      float32
	Paiddate		time.Time

	CustomerID 		*uint
    Customer   		Customer 	`gorm:"references:id"`
	OrderID 		*uint
    Order   		Order 		`gorm:"references:id"`
	StatusID 		*uint
    Status   		Status 		`gorm:"references:id"`
}

type Status struct {
	gorm.Model

	Status			string
	Describe		string

	Payments 		[]Payment 	`gorm:"foreignKey:StatusID"`
}

type Address struct {
	gorm.Model

	Fullname		string		`valid:"required~Fullname is required"`
	Phonenumber		string		`valid:"required~PhoneNumber is required"`
	Address			string		`valid:"required~Address is required"`
	Province		string		`valid:"required~Province is required"`
	District		string		`valid:"required~District is required"`
	Postcode		string		`valid:"required~Postcode is required"`
	Default			int

	CustomerID 		*uint
    Customer   		Customer 	`gorm:"references:id"`

	Orders 			[]Order 	`gorm:"foreignKey:AddressID"`
}

type Employee struct {
	gorm.Model

	Name			string		`valid:"required~Name is required"`
	Username		string		`valid:"required~Username is required"`
	Email			string		`valid:"required~Email is required, email~Email is invalid",gorm:"uniqueIndex"`
	Password		string		`valid:"required~Password is required"`
	Phone           string		`valid:"required~Phone is required"`
	Department		string		`valid:"required~Department is required"`

	Orders  		[]Order   	`gorm:"foreignKey:EmployeeID"`
    Products 		[]Product 	`gorm:"foreignKey:EmployeeID"`
}

type Product struct {
	gorm.Model

	Name			string		`valid:"required~Name is required"`
	Photo			string		
	Cost			int			`valid:"required~Cost is required"`
	Color    		string		`valid:"required~Color is required"`
	Brand			string		
	Quantity		int			`valid:"required~Quantity is required"`
	Sentfrom		string
	Details			string		`gorm:"type:longtext"`

	ProductTypeID   *uint
	ProductType     ProductType `gorm:"references:id"`
	EmployeeID 		*uint
    Employee   		Employee 	`gorm:"references:id"`

	Ratings 		[]Rating	`gorm:"foreignKey:ProductID"`
	Carts 			[]Cart   	`gorm:"many2many:cart_products;"`
	Wishlists 		[]Wishlist  `gorm:"many2many:wishlist_products;"`
}

type ProductType struct {
	gorm.Model

	Name			string

    Products      	[]Product 	`gorm:"foreignKey:ProductTypeID"`
}

type Rating struct {
	gorm.Model

	Dateandtime		time.Time
	Rate			int
	Description		string		`gorm:"type:longtext"`
	
	ProductID 		*uint
    Product   		Product 	`gorm:"references:id"`
}
