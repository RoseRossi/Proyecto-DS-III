/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package poductsControl

import (
	"github.com/gin-gonic/gin"	
)

/**  Interface */
type InterfaceProductsUseCases interface {
	BodyCreateData(c *gin.Context)
	BodyUpdateData(c *gin.Context)
	BodyListData(c *gin.Context)
}

/**
	Method of interface
*/
func BodyCreateData(p InterfaceProductsUseCases , c *gin.Context) {
	p.BodyCreateData(c)
}

func BodyUpdateData(p InterfaceProductsUseCases , c *gin.Context) {
	p.BodyUpdateData(c)
}

func BodyListData(p InterfaceProductsUseCases , c *gin.Context) {
	p.BodyListData(c)
}