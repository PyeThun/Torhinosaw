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
<<<<<<< HEAD
	var emailCheck entity.Employee

=======
	// var emailCheck entity.Employee
>>>>>>> f7273c34afea8de586c4a46a5ef68a6bc8627235

	if err := c.ShouldBindJSON(&employee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

<<<<<<< HEAD
	if tx := entity.DB().Where("email = ?", employee.Email).First(&emailCheck); !(tx.RowsAffected == 0) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "อีเมลนี้ถูกใช้ไปแล้ว"})
=======
	// if tx := entity.DB().Where("email = ?", employee.Email).First(&emailCheck); !(tx.RowsAffected == 0) {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "This email is used"})
	// 	return
	// }

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(employee.Password), 12)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
>>>>>>> f7273c34afea8de586c4a46a5ef68a6bc8627235
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
<<<<<<< HEAD
	// validate user
=======

>>>>>>> f7273c34afea8de586c4a46a5ef68a6bc8627235
	if _, err := govalidator.ValidateStruct(newEmployee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
<<<<<<< HEAD

	// hashing after validate
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(newEmployee.Password), 12)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
		return
	}

	newEmployee.Password = string(hashPassword)

=======
	newEmployee.Password = string(hashPassword)
>>>>>>> f7273c34afea8de586c4a46a5ef68a6bc8627235
	if err := entity.DB().Create(&newEmployee).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

<<<<<<< HEAD
	c.JSON(http.StatusOK, gin.H{"data": newEmployee})
}

func ListEmployee(c *gin.Context) {
	var employees []entity.Employee
	if err := entity.DB().Raw("SELECT * FROM employees").Find(&employees).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": employees})
}

func DeleteEmployee(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM employees WHERE id = ?",id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": " not found"})
	}
	
	c.JSON(http.StatusOK, gin.H{"data": id})
=======
	c.JSON(http.StatusOK, gin.H{"data": employee})

>>>>>>> f7273c34afea8de586c4a46a5ef68a6bc8627235
}