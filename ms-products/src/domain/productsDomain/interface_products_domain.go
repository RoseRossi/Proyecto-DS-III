/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package productsDomain

/** Interface */
type InterfaceProductsDomain interface {
	DomlistProducts(p *map[string]interface{}, b *map[string]interface{})
	DomUpdateProducts(p *map[string]interface{})
	DomCreateProducts(p *map[string]interface{})
}

/**
  * Return all allowed ips
*/
func DomlistProducts(p InterfaceProductsDomain, args *map[string]interface{}, body *map[string]interface{}) {
	p.DomlistProducts(args, body)
}

/**
  * Return all allowed ips
*/
func DomUpdateProducts(p InterfaceProductsDomain, args *map[string]interface{}) {
	p.DomUpdateProducts(args)
}

/**
  * Return all allowed ips
*/
func DomCreateProducts(p InterfaceProductsDomain, args *map[string]interface{}) {
	p.DomUpdateProducts(args)
}