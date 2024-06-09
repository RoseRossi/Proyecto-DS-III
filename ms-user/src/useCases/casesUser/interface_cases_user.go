/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package casesUser

import (
	"github.com/gin-gonic/gin"	
)

type InterfaceCasesUser interface {
	CaseCreate(c *gin.Context)
	CaseUpdate(c *gin.Context)
	CaseCurrent(c *gin.Context)
}

func CaseCreate(p InterfaceCasesUser, c *gin.Context) {
	p.CaseCreate(c)
}

func CaseUpdate(p InterfaceCasesUser, c *gin.Context) {
	p.CaseUpdate(c)
}

func CaseCurrent(p InterfaceCasesUser, c *gin.Context) {
	p.CaseCurrent(c)
}