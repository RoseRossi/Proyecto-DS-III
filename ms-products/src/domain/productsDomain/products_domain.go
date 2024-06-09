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
  * Created
*/
func (p ProductsDomainStruct) DomCreateProducts(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		params_ := *body
		params_["expectedKeys"] = []string{
			"id_company", 
			"id_type" , 
			"name", 
			"qty",
			"img",
			"description",
			"ref",
			"model",
			"in_stock",
			"price",
		}
		bodyParse_ := utils.ConvertDataToArrayInterface_(params_)
		
		_response, is_error := servicesProducts.CreateServicesProducts(instance,bodyParse_...)
		
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

/**
  * Update
*/
func (p ProductsDomainStruct) DomUpdateProducts(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		params_ := *body
		params_["expectedKeys"] = []string{
			"id_company", 
			"id_type" , 
			"name", 
			"qty",
			"img",
			"description",
			"ref",
			"model",
			"in_stock",
			"price",
			"_id",
		}
		bodyParse_ := utils.ConvertDataToArrayInterface_(params_)
		
		_response, is_error := servicesProducts.UpdateServicesProducts(instance,bodyParse_...)
		
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

/**
  * ListProducts
*/
func (p ProductsDomainStruct) DomListProducts(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		params_ := *body
		params_["expectedKeys"] = []string{
			"created_at",
			"id_company",
			"limit",
		}
		bodyParse_ := utils.ConvertDataToArrayInterface_(params_)
		_response, is_error := servicesProducts.ListServicesProducts(instance,bodyParse_...)

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