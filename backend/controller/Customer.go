package controller

import (
	"net/http"
	// "time"

	"github.com/PyeThun/team05/entity"
	"github.com/asaskevich/govalidator"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func CreateCustomer(c *gin.Context) {
	var customer entity.Customer

	// bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, err := entity.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	_, err = govalidator.ValidateStruct(customer)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// // ค้นหา gender ด้วย id
	// var gender entity.Gender
	// db.First(&gender, user.GenderID)
	// if gender.ID == 0 {
	// 	c.JSON(http.StatusNotFound, gin.H{"error": "gender not found"})
	// 	return
	// }

	// เข้ารหัสลับรหัสผ่านที่ผู้ใช้กรอกก่อนบันทึกลงฐานข้อมูล
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(customer.Password), 14)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
		return
	}

	// สร้าง User
	cus := entity.Customer{
		Firstname: customer.Firstname, // ตั้งค่าฟิลด์ FirstName
		Lastname:  customer.Lastname,  // ตั้งค่าฟิลด์ LastName
		Email:     customer.Email,     // ตั้งค่าฟิลด์ Email
		Dateofbirth:     customer.Dateofbirth,     // ตั้งค่าฟิลด์ Phone
		Username:   customer.Username,   // ตั้งค่าฟิลด์ Profile
		Password: string(hashPassword),
		
	
	}

	// บันทึก
	if err := db.Create(&cus).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Created success", "data": cus})
}
