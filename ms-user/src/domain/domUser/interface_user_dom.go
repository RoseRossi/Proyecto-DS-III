/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package domUser

type InterfaceDomUser interface {
	DomCreate(args *map[string]interface{}, body *map[string]interface{})
	DomUpdate(args *map[string]interface{}, body *map[string]interface{})
	DomCurrent(args *map[string]interface{}, body *map[string]interface{})
}

/**
  * Create
*/
func DomCreate(p InterfaceDomUser, args *map[string]interface{}, body *map[string]interface{}) {
	p.DomCreate(args,body)
}

/**
  * Create
*/
func DomUpdate(p InterfaceDomUser, args *map[string]interface{}, body *map[string]interface{}) {
	p.DomUpdate(args,body)
}

/**
  * Create
*/
func DomCurrent(p InterfaceDomUser, args *map[string]interface{}, body *map[string]interface{}) {
	p.DomCurrent(args,body)
}