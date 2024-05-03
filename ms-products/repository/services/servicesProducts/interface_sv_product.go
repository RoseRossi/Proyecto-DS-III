/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package servicesProducts

/** Interface Setting */
type InterfaceServicesProducts interface {
	ListServicesProducts(args ...interface{}) ([]map[string]interface{}, error)
	UpdateServicesProducts(args ...interface{}) (map[string]interface{}, error)
	CreateServicesProducts(args ...interface{}) (map[string]interface{}, error)
}

/**
  * Return all allowed ips
*/
func ListServicesProducts(p InterfaceServicesProducts , args ...interface{}) ([]map[string]interface{}, error) {
	return p.ListServicesProducts(args...)
}

/**
  * Update product
*/
func UpdateServicesProducts(p InterfaceServicesProducts , args ...interface{}) (map[string]interface{}, error) {
	return p.UpdateServicesProducts(args...)
}

/**
  * Create Products
*/
func CreateServicesProducts(p InterfaceServicesProducts , args ...interface{}) (map[string]interface{}, error) {
	return p.CreateServicesProducts(args...)
}