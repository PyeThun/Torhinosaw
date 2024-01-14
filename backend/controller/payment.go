package controller

import (
	"fmt"
	"net/http"

	"time"

	"github.com/PyeThun/team05/entity"
	"github.com/gin-gonic/gin"
	_ "gorm.io/gorm"
)

func GetOrder(c *gin.Context){
	var order entity.Order
	id := c.Param("id")
	
	if err := entity.DB().Raw("SELECT * FROM orders where id = ?",id).Scan(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":order})
	

}
func CreatePayment(c *gin.Context){
	var payment entity.Payment


	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	pay := entity.Payment{
		Timeoforder: time.Now(), // ตั้งค่าฟิลด์ FirstName
		CustomerID:  payment.CustomerID,  // ตั้งค่าฟิลด์ LastName
		Totalprice:     payment.Totalprice,     // ตั้งค่าฟิลด์ Email
		StatusID:     new(uint),    // ตั้งค่าฟิลด์ Phone
		OrderID:   payment.OrderID,   // ตั้งค่าฟิลด์ Profile		
	
	}
	*pay.StatusID = 1

	if err := entity.DB().Create(&pay).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": pay.ID})

}
func ConfirmPayment(c *gin.Context){
	var pay entity.Payment
	id := c.Param("id")
	



	if err := c.ShouldBindJSON(&pay); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}


	// อัปเดตข้อมูลในฐานข้อมูลเฉพาะฟิลด์ที่ต้องการ
	if err := entity.DB().Model(&pay).Where("id = ?", id).Updates(pay).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": pay})
}
func GetPayment(c *gin.Context) {

	var pay entity.Payment
	id := c.Param("id")
	

	if err := entity.DB().Preload("Customer").Preload("Order").First(&pay, id).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if time.Since(pay.Timeoforder) > 24*time.Hour {
		// เปลี่ยนสถานะเป็น "ยกเลิก"
		if err := entity.DB().Model(&pay).Where("id = ?", id).Updates(map[string]interface{}{"StatusID": 8}).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		
	} else {
		fmt.Println("ออร์เดอร์ยังคงในสถานะ Active")
	}

	c.JSON(http.StatusOK, gin.H{"data": pay})
}
