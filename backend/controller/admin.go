package controller

import (
	"net/http"

	"github.com/asaskevich/govalidator"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/team05/entity"
	"golang.org/x/crypto/bcrypt"
	_ "gorm.io/gorm"
)

func CreateEmployee(c *gin.Context) {
	var employee entity.Employee
	// var emailCheck entity.Employee

	if err := c.ShouldBindJSON(&employee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// if tx := entity.DB().Where("email = ?", employee.Email).First(&emailCheck); !(tx.RowsAffected == 0) {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "This email is used"})
	// 	return
	// }

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(employee.Password), 12)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
		return
	}

	newEmployee := entity.Employee{
		Name:            employee.Name,
		Username:		 employee.Username,
		Email:           employee.Email,
		Password:        employee.Password,
		Phone:			 employee.Phone,
		Department:		 employee.Department,
	}

	if _, err := govalidator.ValidateStruct(newEmployee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	newEmployee.Password = string(hashPassword)
	if err := entity.DB().Create(&newEmployee).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": employee})

}