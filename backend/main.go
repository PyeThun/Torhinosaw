package main

import (
	"github.com/PyeThun/TEAM05/controller"
	"github.com/PyeThun/TEAM05/entity"
	"github.com/gin-gonic/gin"
	// "github.com/PyeThun/team05/controller"
	// "github.com/PyeThun/team05/entity"
	// _ "github.com/PyeThun/team05/middlewares"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	//Routes

	//aum*******
	r.GET("/payment_pdate/:id", controller.GetPaymentUpdateByID)
	r.GET("/getPaymentUpdate", controller.GetPaymentUpdate)
	r.GET("/getCustomerUpdate", controller.GetCustomertUpdate)
	r.GET("/getStatusUpdate", controller.GetStatusUpdate)
	r.GET("/product/:id", controller.GetProductByID)
	r.GET("/producttype", controller.ListProducttype)
	r.GET("/listProduct", controller.GetProduct)
	r.PATCH("/product", controller.UpdateProduct)
	r.PATCH("/payment_update", controller.UpdatePaymentUbdate)
	r.POST("/product", controller.CreateProduct)
	r.DELETE("/product/:id", controller.DeleteProduct)
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