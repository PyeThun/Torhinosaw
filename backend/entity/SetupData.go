package entity

import (
	"gorm.io/gorm"
)

func SetupStatus(database *gorm.DB) {
//Order Status
	s1 := Status{Status: "Order Place",}
	database.Model(&Status{}).Create(&s1)

	s2 := Status{Status: "Order Paid",Describe: "คำสั่งซื้อชำระเงินเรียบร้อย"}
	database.Model(&Status{}).Create(&s2)

	s3 := Status{Status: "Order Shipped Out",Describe: "กำลังจัดส่ง"}
	database.Model(&Status{}).Create(&s3)

	s4 := Status{Status: "To Recieve",Describe: "ได้รับสินค้าแล้ว"}
	database.Model(&Status{}).Create(&s4)

	s5 := Status{Status: "To Rate",Describe: "ให้คะแนน"}
	database.Model(&Status{}).Create(&s5)
//Payment Status
	p1 := Status{Status: "Pending Payment",Describe: "รอการชำระเงิน"}
	database.Model(&Status{}).Create(&p1)

	p2 := Status{Status: "Complete",Describe: "ชำระเงินสำเร็จ"}
	database.Model(&Status{}).Create(&p2)
}
