package entity

import (
	"gorm.io/gorm"
	"time"

)

type Order struct {
	gorm.Model

	Timeoforder 	time.Time
	Shippingfee 	int
	Quantity		int
	Price			float32
	Totalprice		float32

	
	AddressID *uint
	Address   Address `gorm:"references:id"`
	EmployeeID *uint
	Employee   Employee `gorm:"references:id"`
	ShippingserviceID *uint
	Shippingservice   Shippingservice `gorm:"references:id"`
	Rating []Rating `gorm:"foreignKey:OrderID"`
	Cart []Cart `gorm:"foreignKey:OrderID"`


}

type Payment struct {
	gorm.Model
	Timeoforder 	time.Time //เพิ่มมาจาก Order
	Paymentmethod	string
	Billphoto		string 
	Totalprice      float32  `valid:"gte=0"`
	
	Paiddate		time.Time

	CustomerID 	*uint `valid:"required~CustomerID is required"`
	Customer   	Customer   `gorm:"references:id"`

	StatusID 	*uint `validate:"gte=1,lte=8"`
	Status   	Status   `gorm:"references:id"`

	OrderID   *uint `valid:"required~OrderID is required;unique"`
    Order   Order `gorm:"foreignKey:OrderID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;unique;"`

}


type Cart struct {
	gorm.Model

	TotalPrice		float32
	Quantity		int

	OrderID *uint
	Order   Order `gorm:"references:id"`
	CustomerID *uint
	Customer   Customer `gorm:"references:id"`

	Cartitems []Cartitem `gorm:"foreignKey:CartID"`
}

type Wishlist struct {
	gorm.Model

	CustomerID *uint
	Customer   Customer `gorm:"references:id"`

	Wishlistforproduct []Wishlistforproduct `gorm:"foreignKey:WishlistID"`
}

type Wishlistforproduct struct {
	gorm.Model

	Added_at		time.Time

	WishlistID *uint 
	Wishlist   Wishlist   `gorm:"references:id"`
	ProductID *uint 
	Product   Product   `gorm:"references:id"`
}

type Cartitem struct {
	gorm.Model

	Quantity int

	CartID *uint 
	Cart   Cart   `gorm:"references:id"`
	ProductID *uint 
	Product   Product   `gorm:"references:id"`
}

type Customer struct {
	gorm.Model

	Email			string		`gorm:"uniqueIndex" valid:"required~Email is required, email~Email is invalid"`
	Firstname		string		`valid:"required~FirstName is required"`
	Lastname		string		`valid:"required~LastName is required"`
	Dateofbirth		time.Time	
	Username		string		`valid:"required~Username is required"`
	Password 		string		`valid:"required~Password is required, stringlength(8|64)"`

	Payments []Payment `gorm:"foreignKey:CustomerID"`
	Address []Address `gorm:"foreignKey:CustomerID"`
	Cart []Cart `gorm:"foreignKey:CustomerID"`
	Wishlist []Wishlist `gorm:"foreignKey:CustomerID"`
}


type Status struct {
	gorm.Model

	Status			string
	Describe		string

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

	CustomerID *uint 
	Customer   Customer   `gorm:"references:id"`
}

type Employee struct {
	gorm.Model

	Name			string		`valid:"required~Name is required"`
	Username		string		`valid:"required~Username is required"`
	Email			string		`gorm:"uniqueIndex" valid:"required~Email is required, email~Email is invalid"`
	Password		string		`valid:"required~Password is required"`
	Phone           string		`valid:"required~Phone is required"`
	Department		string		`valid:"required~Department is required"`

	Order []Order `gorm:"foreignKey:EmployeeID"`
	Product []Product `gorm:"foreignKey:EmployeeID"`
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

	EmployeeID *uint 
	Employee   Employee   `gorm:"references:id"`
	ProductTypeID *uint 
	ProductType   ProductType   `gorm:"references:id"`

	Cartitem []Cartitem `gorm:"foreignKey:ProductID"`
	Wishlistforproduct []Wishlistforproduct `gorm:"foreignKey:ProductID"`
}

type ProductType struct {
	gorm.Model

	Name			string

    Product []Product `gorm:"foreignKey:ProductTypeID"`
}

type Rating struct {
	gorm.Model
	
	Dateandtime		time.Time
	Rate			int
	Description		string		`gorm:"type:longtext"`
	
	ProductID *uint 
	Product   Product   `gorm:"references:id"`
	OrderID *uint 
	Order   Order   `gorm:"references:id"`
}

type Shippingservice struct {
	gorm.Model

	Name			string

}