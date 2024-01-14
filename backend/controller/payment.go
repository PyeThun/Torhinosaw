package controller

import (
	"net/http"
	

	"github.com/PyeThun/TEAM05/entity"
	"github.com/gin-gonic/gin"
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


// PATCH /Product
func UpdatePaymentUbdate(c *gin.Context) {
	var payment entity.Payment
	var result entity.Payment

	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา products ด้วย id
	if tx := entity.DB().Where("id = ?", payment.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Payment not found"})
		return
	}
	
	payment.Shippingfee	= result.Shippingfee	
	payment.Paymentmethod	= result.Paymentmethod
	payment.Billphoto	= result.Billphoto	
	payment.Totalprice      = result.Totalprice
	payment.Paiddate		=payment.CreatedAt
	payment.CustomerID  =result.CustomerID
	
	
	if err := entity.DB().Save(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payment})
}