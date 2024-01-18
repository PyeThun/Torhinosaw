package controller

import (
	"net/http"

	"github.com/PyeThun/team05/entity"
	"github.com/gin-gonic/gin"
)

// POST /users
func CreateCustomer(c *gin.Context) {
	var customer entity.Customer

	// bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// สร้าง User
	u := entity.Customer{
		Gender:      customer.Gender,
		Firstname:   customer.Firstname,
		Lastname:    customer.Lastname,
		Email:       customer.Email,
		Contact:     customer.Contact,
		Dateofbirth: customer.Dateofbirth,
		Username:    customer.Username,
		Password:    customer.Password,
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": u})
}

func UpdateCustomer(c *gin.Context)  {
	var customer entity.Customer
	var result entity.Customer

	if err := c.ShouldBindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย id
	if tx := entity.DB().Where("id = ?", customer.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}

	if err := entity.DB().Save(&customer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": customer})
}

func GetCustomerById(c *gin.Context) {
	var customer entity.Customer
	id := c.Param("id")
	if err := entity.DB().Preload("Gender").Raw("SELECT * FROM customer WHERE id = ?", id).Find(&customer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": customer})
}