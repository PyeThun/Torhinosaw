package main

import (
	"github.com/gin-gonic/gin"
	"github.com/PyeThun/team05/controller"
	"github.com/PyeThun/team05/entity"
)

func main() {
	entity.ConnectDB()
	r := gin.Default()
	r.Use(CORSMiddleware())

	r.GET("/profile", controller.ListUser)
	r.GET("/profile/:id", controller.GetUserById)
	r.POST("/register", controller.CreateUser)
	r.PATCH("/profile/editpr", controller.Updatexxx)
	
	
	

	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}