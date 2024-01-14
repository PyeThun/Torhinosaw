package controller

import (
	"net/http"

	"github.com/asaskevich/govalidator"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/team05/entity"
	"golang.org/x/crypto/bcrypt"
	_ "gorm.io/gorm"
)

func CreateCustomer(c *gin.Context) {
	var customer entity.Customer
	
	//แมพข้อมูลเจสันจากหน้าบ้านลงตัวแปรcustomer
	if err := c.ShouldBindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(customer.Password), 12)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
		return
	}

	cus := entity.Customer{
		Firstname: customer.Firstname, // ตั้งค่าฟิลด์ FirstName
		Lastname:  customer.Lastname,  // ตั้งค่าฟิลด์ LastName
		Email:     customer.Email,     // ตั้งค่าฟิลด์ Email
		Dateofbirth:     customer.Dateofbirth,     // ตั้งค่าฟิลด์ Phone
		Username:   customer.Username,   // ตั้งค่าฟิลด์ Profile
		Password: string(hashPassword),//สร้างข้อมูลใหม่ เพราะต้องเข้ารหัสพาสเวิร์ดก่อนถึงจะเอาลงดาต้าเบสได้
		
	
	}

	//ตรวจสอบความถูกต้องของข้อมูล
	if _, err := govalidator.ValidateStruct(cus); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// cus.Password = string(hashPassword)
	if err := entity.DB().Create(&cus).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": cus})

}