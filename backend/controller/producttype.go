package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/TEAM05/entity"
)

func ListProducttype(c *gin.Context) {
	var product_types []entity.ProductType
	if err := entity.DB().Raw("SELECT * FROM product_types").Scan(&product_types).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":product_types})
}