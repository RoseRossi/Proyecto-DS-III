/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package productsDomain

/** Interface */
type InterfaceProductsDomain interface {
	DomlistProducts(p *map[string]interface{})
}

/**
  * Return all allowed ips
*/
func DomlistProducts(p InterfaceProductsDomain, args *map[string]interface{}) {
	p.DomlistProducts(args)
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