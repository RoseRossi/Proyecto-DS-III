/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package casesUser

import (
	"server_go/src/domain/utils"
	"server_go/src/domain/domUser"
	"server_go/src/useCases/httpControl"

	"github.com/gin-gonic/gin"
)

var (
	instanceDom = domUser.DomUser{}
	instanceBody = httpControl.HttpRequestControl{}
)

/** Class Uses Cases User */
type UseCasesUser struct {}

// General Execute
type DomFunc func(instanceDom domUser.InterfaceDomUser, requestParamns *map[string]interface{}, bodyData *map[string]interface{})

/**
 * Create 
 */
func (p UseCasesUser) CaseCreate(c *gin.Context) {
	p.execute(c, domUser.DomCreate)
}

/**
 * Update
 */
func (p UseCasesUser) CaseUpdate(c *gin.Context) {
	p.execute(c, domUser.DomUpdate)
}

/**
 * Current
 */
func (p UseCasesUser) CaseCurrent(c *gin.Context) {
	p.execute(c, domUser.DomCurrent)
}

/**
  * Execute
*/
func (p UseCasesUser) execute(c *gin.Context, domFunction DomFunc) {
	requestParamns := utils.StateDefaultReq()
	instanceBody.BodyRequest = c
	bodyData := httpControl.GetBodyRequest(instanceBody)
	domFunction(instanceDom, &requestParamns, &bodyData)
	utils.ResponseControlGeneral(c, requestParamns)
}