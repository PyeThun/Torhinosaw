package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/TEAM05/entity"
)

// POST /users
func CreateProduct(c *gin.Context) {
	var product entity.Product
	var producttype entity.ProductType
	// var employee entity.Employee

	// bind เข้าตัวแปร product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา producttype ด้วย id
	if tx := entity.DB().Where("id = ?", product.ProductTypeID).First(&producttype); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ProductType not found"})
		return
	}
	// if tx := entity.DB().Where("id = ?", product.EmployeeID).First(&employee); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
	// 	return
	// }

	// hashPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password),14)
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Hash Password"})
	// }

	// สร้าง User
	u := entity.Product{

		//Employee: employee,
		ProductType: 	producttype,
		Name: 			product.Name,
		Photo: 			product.Photo,
		Profile:		product.Profile,				
		Cost:  			product.Cost, 		
		Color: 			product.Color,   		
		Brand:			product.Brand,			
		Quantity: 		product.Quantity,
		Sentfrom:		product.Sentfrom,	
		Details:		product.Details,		
	}
	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": u})
}




// GET /Product
func GetProduct(c *gin.Context) {
	var product[]entity.Product
	if err := entity.DB().Raw("SELECT * FROM products").Scan(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":product})
}

// GET /Product/:id
func GetProductByID(c *gin.Context) {
	var product entity.Product
	id := c.Param("id")
	if err := entity.DB().Preload("ProductType").Raw("SELECT * FROM products WHERE id = ?", id).Find(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": product})
}

// PATCH /Product
func UpdateProduct(c *gin.Context) {
	var product entity.Product
	var result entity.Product

	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา products ด้วย id
	if tx := entity.DB().Where("id = ?", product.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "product not found"})
		return
	}

	// กำหนดให้ Photo ใน result เป็นของ product เพื่อให้ข้อมูล Photo เดิมไม่ถูกแทนที่
	product.Photo = result.Photo

	if err := entity.DB().Save(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": product})
}


// DELETE /products/:id
func DeleteProduct(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM products WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "product not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

