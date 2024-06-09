/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package servicesUser

type InterfaceServicesUser interface {
	Create(args ...interface{}) (map[string]interface{}, error)
	Update(args ...interface{}) (map[string]interface{}, error)
	Current(args ...interface{}) ([]map[string]interface{}, error)
}

/**
  * Create
*/
func Create(p InterfaceServicesUser, args ...interface{}) (map[string]interface{}, error) {
	return p.Create(args...)
}

/**
  * Update
*/
func Update(p InterfaceServicesUser, args ...interface{}) (map[string]interface{}, error) {
	return p.Update(args...)
}

/**
  * Update
*/
func Current(p InterfaceServicesUser, args ...interface{}) ([]map[string]interface{}, error) {
	return p.Current(args...)
}