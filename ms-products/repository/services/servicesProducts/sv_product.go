/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package servicesProducts

// Librerary import
import (
	"server_go/repository/config"
	"server_go/repository/services/utils"
)

var (
	_query_list_product = config.ConfigMapSql()["list_product"]
	_query_create_product = config.ConfigMapSql()["create_product"]
	_query_update_product = config.ConfigMapSql()["update_product"]
)

/* Class ServicesProducts */
type ServicesProducts struct {}

/**
  * Return List products
*/
func (p ServicesProducts) ListServicesProducts(args ...interface{}) ([]map[string]interface{}, error) {
	return utils.ExecuteFileSql(_query_list_product, args...);
}

/**
  * Update product
*/
func (p ServicesProducts) UpdateServicesProducts() (args ...interface{}) (map[string]interface{}, error) {
	return utils.ExecuteFileSqlExec(_query_list_product, args...);
}

/**
  * Created product
*/
func (p ServicesProducts) UpdateServicesProducts() (args ...interface{}) (map[string]interface{}, error) {
	return utils.ExecuteFileSqlExec(_query_list_product, args...);
}