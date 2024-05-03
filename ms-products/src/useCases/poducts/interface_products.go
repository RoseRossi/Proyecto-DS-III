/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package products

import (
	"github.com/gin-gonic/gin"	
)

/**  Interface */
type InterfaceProductsUseCases interface {
	BodyListData(c *gin.Context)
}

/**
	Method of interface
*/
func BodyListData(p InterfaceProductsUseCases , c *gin.Context) {
	p.BodyListData(c)
}