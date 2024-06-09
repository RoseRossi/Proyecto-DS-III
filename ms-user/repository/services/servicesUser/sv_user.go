/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package servicesUser

// Librerary import
import (
	"server_go/repository/config"
	"server_go/repository/services/utils"
)

var (
	_query_create = config.ConfigMapSql()["create_user"]
	_query_is_current = config.ConfigMapSql()["get_all_data_user"]
	_query_update = config.ConfigMapSql()["up_account"]
)

/** Class Services User */
type ServicesUserStruct struct {}

/**
  * Create User
*/
func (p ServicesUserStruct) Create(args ...interface{}) (map[string]interface{}, error) {
	return utils.ExecuteFileSqlExec(_query_create, args...);
}

/**
  * Update User
*/
func (p ServicesUserStruct) Update(args ...interface{}) (map[string]interface{}, error) {
	return utils.ExecuteFileSqlExec(_query_update, args...);
}

/**
  * Current User
*/
func (p ServicesUserStruct) Current(args ...interface{}) ([]map[string]interface{}, error) {
	return utils.ExecuteFileSql(_query_is_current, args...);
}