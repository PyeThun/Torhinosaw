package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/PyeThun/team05/entity"
)

// POST /users
func CreateUser(c *gin.Context) {
	var customer entity.Customer

	// bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// สร้าง User
	u := entity.User{
		Gender:    customer.Gender, 
		FirstName: customer.FirstName,
		LastName:  customer.LastName, 
		Email:     customer.Email,     
		Contact:     customer.Contact,     
		Profile:   customer.Profile,
		Dateofbirth: customer.Dateofbirth,
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": u})
}