package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("Torhino.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	database.AutoMigrate(
		&Customer{},
		&Address{},
		&Status{},
		&Wishlist{},
		&Employee{},
		&ProductType{},
		&Product{},
		&Cart{},
		&Payment{},
		&Order{},
		&Rating{},
		&Wishlistforproduct{},
		&Cartitem{},
		&Shippingservice{},
		
	)

	db = database

	SetupStatus(db)
	SetupProduct(db)

}