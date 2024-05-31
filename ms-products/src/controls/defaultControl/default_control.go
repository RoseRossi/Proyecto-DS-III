/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
 */

package defaultControl

// Librerary import
import (
	"server_go/src/useCases/allowedIPCases"
	"server_go/src/useCases/poductsControl"

	"github.com/gin-gonic/gin"
)

// Vars
var (
	instanceDefault = allowedIPCases.UseCasesallowedIP{}
	instanceProduct = poductsControl.UseCasesProducts{}
)

/**
 * Return All ips allowed
 */
func GetData(c *gin.Context) {
	allowedIPCases.BodyGetData(instanceDefault, c)
}

/**
 * Return List products
*/
func ListProducts(c *gin.Context) {
	poductsControl.BodyListData(instanceProduct, c)
}