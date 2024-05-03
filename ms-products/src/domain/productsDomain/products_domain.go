/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package productsDomain

import (
	"server_go/repository/services/servicesProducts"
	"fmt"
)

var (
	instance = servicesProducts.ServicesProducts{}
)

type ProductsDomainPStruct struct {}

/**
  * Return all allowed ips
*/
func (p ProductsDomainPStruct) DomlistProducts(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		// Todo: In method save param type of interface{} and here send  *map[string]interface{}
		_response, is_error := servicesProducts.ListServicesProducts(instance,*body...)
		
		if is_error == nil {
			(*args)["data"] = _response;
			(*args)["status"] = 200;
			(*args)["message_default"] = "Success";
			(*args)["statusReq"] = true
		} else {
			fmt.Println("Error: " , is_error)
			(*args)["message_default"] = "Error get allowed ips";
		}

	} 
}