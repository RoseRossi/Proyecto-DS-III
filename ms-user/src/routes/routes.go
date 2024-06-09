/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
 */
package routes

// Librerary import
import (
	"fmt"

	handler "server_go/src/controls/defaultControl"
)

/* Router type declaration */
func InitializeRoutes(router HttpRouter, allRoutes []map[string]interface{}) {
	if allRoutes != nil || len(allRoutes) != 0 {
		for _, r := range allRoutes {
			// Data
			router.POST(fmt.Sprintf("%s/get-data", r["route_"]), HandleSync(handler.GetData))
			router.POST(fmt.Sprintf("%s/create", r["route_"]), HandleSync(handler.CreateUser))
			router.POST(fmt.Sprintf("%s/update", r["route_"]), HandleSync(handler.CreateUpdate))
			router.POST(fmt.Sprintf("%s/logged", r["route_"]), HandleSync(handler.CreateCurrent))
		}
	}
}
