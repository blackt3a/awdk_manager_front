// main.go

package main  
  
import (  
   "awdk_manager_front/web"   
   "github.com/gin-gonic/gin"   
   "net/http"
)
   
func main() {
	r := gin.Default()

	//r.GET("/ping", func(c *gin.Context) {
	//	c.JSON(200, gin.H{
	//		"msg": "pong",  
	//	})
	//})

	r.StaticFS("/manager", http.FS(web.Static))

	r.Run()
}
