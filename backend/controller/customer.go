package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/TEAM05/entity"
)


//อุ้มเอง
func GetCustomertUpdate(c *gin.Context) {
	var customer[]entity.Customer

	if err := entity.DB().Raw("SELECT * FROM customers").Scan(&customer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":customer})
}