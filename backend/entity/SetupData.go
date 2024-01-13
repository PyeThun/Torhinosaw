package entity

import (
	"gorm.io/gorm"
)

func SetupStatus(database *gorm.DB) {
	//Order Status
	Status1 := Status{Status: "Order Place", Describe: "สร้างคำสั่งซื้อ"}
	database.Model(&Status{}).Create(&Status1)

	Status2 := Status{Status: "Order Paid", Describe: "คำสั่งซื้อชำระเงินเรียบร้อย"}
	database.Model(&Status{}).Create(&Status2)

	Status3 := Status{Status: "Order Shipped Out", Describe: "จัดส่งแล้ว"}
	database.Model(&Status{}).Create(&Status3)

	Status4 := Status{Status: "To Recieve", Describe: "ได้รับสินค้าแล้ว"}
	database.Model(&Status{}).Create(&Status4)

	Status5 := Status{Status: "To Rate", Describe: "ให้คะแนน"}
	database.Model(&Status{}).Create(&Status5)
	//Payment Status
	Status6 := Status{Status: "Pending Payment", Describe: "รอการชำระเงิน"}
	database.Model(&Status{}).Create(&Status6)

	Status7 := Status{Status: "Complete", Describe: "ชำระเงินสำเร็จ"}
	database.Model(&Status{}).Create(&Status7)

	Status8 := Status{Status: "Cancle", Describe: "ชำระเงินล้มเหลว"}
	database.Model(&Status{}).Create(&Status8)
}

func SetupProduct(database *gorm.DB) {
	//Product Type
	pType1 := ProductType{Name: "Shirt"}
	database.Model(&ProductType{}).Create(&pType1)

	pType2 := ProductType{Name: "Pant"}
	database.Model(&ProductType{}).Create(&pType2)

	pType3 := ProductType{Name: "Shoe"}
	database.Model(&ProductType{}).Create(&pType3)
	
	//Product
	p1 := Product{
		Name: "เสื้อลายAJT",
		Cost: 250,
		Color: "White",
		Brand: "Torhino",
		Quantity: 10,
		ProductTypeID: &pType1.ID,
	}
	database.Model(&Product{}).Create(&p1)
}

func SetupEmployee(database *gorm.DB) {
	//Employee
	e1 := Employee{
		Name: "HoleeFuk",
		Username: "Haiya",
		Email: "Haiya@hotmail.com",
		Password: "1234",
		Phone: "044223000",
		Department: "Restocker",
	}
	database.Model(&Employee{}).Create(&e1)
	e2 := Employee{
		Name: "A",
		Username: "A",
		Email: "A@hotmail.com",
		Password: "4321",
		Phone: "044223000",
		Department: "Checkpayment",
	}
	database.Model(&Employee{}).Create(&e2)
}

