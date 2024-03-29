/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package allowedIps

/** Interface Setting */
type InterfaceAllowedIp interface {
	GetAllowedIps(args ...interface{}) ([]map[string]interface{}, error)
}

/**
  * Return all allowed ips
*/
func GetAllowedIps(p InterfaceAllowedIp , args ...interface{}) ([]map[string]interface{}, error) {
	return p.GetAllowedIps(args...)
}
