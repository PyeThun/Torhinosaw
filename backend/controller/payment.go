package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/TEAM05/entity"
)


//อุ้มเอง
// GET /PaymentUpdat
func GetPaymentUpdate(c *gin.Context) {
	var payment[]entity.Payment
	if err := entity.DB().Raw("SELECT * FROM payments").Scan(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":payment})
}
// GET /PaymentUpdat/:id
func GetPaymentUpdateByID(c *gin.Context) {
	var payment entity.Payment
	id := c.Param("id")
	if err := entity.DB().Preload("Customer").Preload("Status").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payment})
}


// // PATCH /Product
// func UpdatePaymentUbdate(c *gin.Context) {
// 	var product entity.Payment
// 	var result entity.Payment

// 	if err := c.ShouldBindJSON(&product); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}
// 	// ค้นหา products ด้วย id
// 	if tx := entity.DB().Where("id = ?", product.ID).First(&result); tx.RowsAffected == 0 {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Payment not found"})
// 		return
// 	}

// 	if err := entity.DB().Save(&product).Error; err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}
// 	c.JSON(http.StatusOK, gin.H{"data": product})
// }