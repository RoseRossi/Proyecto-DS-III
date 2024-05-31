/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package productsDomain

import (
	"server_go/repository/services/servicesProducts"
	"server_go/src/domain/utils"
	"fmt"
)

var (
	instance = servicesProducts.ServicesProducts{}
)

type ProductsDomainStruct struct {}

/**
  * Return all allowed ips
*/
func (p ProductsDomainStruct) DomCreateProducts(args *map[string]interface{}, body *map[string]interface{}) {
	bodyParse_ := utils.ConvertDataToArrayInterface_(*body)
	fmt.Println()
	if len(*args) > 0 {
		// Todo: In method save param type of interface{} and here send  *map[string]interface{}
		_response, is_error := servicesProducts.ListServicesProducts(instance,bodyParse_)
		
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