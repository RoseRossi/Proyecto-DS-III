/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package products

import (
	"server_go/src/domain/utils"
	"server_go/src/domain/productsDomain"
	"server_go/src/useCases/httpControl"

	"github.com/gin-gonic/gin"
)

var (
	instanceDom = productsDomain.ProductsDomainPStruct{}
	instanceBody = httpControl.HttpRequestControl{}
)

type UseCasesProducts struct{}

/**
   Return body of request
*/
func (p UseCasesProducts) BodyListData(c *gin.Context) {
	requestParamns := utils.StateDefaultReq()
	instanceBody.BodyRequest = c
	bodyData := httpControl.GetBodyRequest(instanceBody)
	productsDomain.DomlistProducts(instanceDom,&requestParamns,&bodyData)
	utils.ResponseControlGeneral(c, requestParamns)
}