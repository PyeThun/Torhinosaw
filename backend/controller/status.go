package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/TEAM05/entity"
)


//อุ้มเอง
func GetStatusUpdate(c *gin.Context) {
	var status[]entity.Status

	if err := entity.DB().Raw("SELECT * FROM statuses").Scan(&status).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":status})
}