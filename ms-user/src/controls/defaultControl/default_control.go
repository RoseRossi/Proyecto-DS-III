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
	"server_go/src/useCases/casesUser"

	"github.com/gin-gonic/gin"
)

// Vars
var (
	instanceDefault = allowedIPCases.UseCasesallowedIP{}
	instanceUser = casesUser.UseCasesUser{}
)

/**
 * Return All ips allowed
 */
func GetData(c *gin.Context) {
	allowedIPCases.BodyGetData(instanceDefault, c)
}

/**
 * Create
*/
func CreateUser(c *gin.Context) {
	casesUser.CaseCreate(instanceUser, c)
}

/**
 * Update
*/
func CreateUpdate(c *gin.Context) {
	casesUser.CaseUpdate(instanceUser, c)
}

/**
 * Currrent
*/
func CreateCurrent(c *gin.Context) {
	casesUser.CaseCurrent(instanceUser, c)
}