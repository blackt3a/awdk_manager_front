// web/web.go
package web  
  
import "embed"  
  
//go:embed index.html favicon.ico assets
var Static embed.FS
