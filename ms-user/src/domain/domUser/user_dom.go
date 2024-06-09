/**
 *
 * @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyrigth: 2024
 * @license: GPL-3.0
*/

package domUser

import (
	"server_go/repository/services/servicesUser"
	"server_go/src/domain/utils"
	"fmt"
)

var (
	instance = servicesUser.ServicesUserStruct{}
)

/** Class Dom User **/
type DomUser struct {}

/**
  * Create
*/
func (p DomUser) DomCreate(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		params_ := *body
		params_["expectedKeys"] = []string{
			"email",
			"password",
		}
		bodyParse_ := utils.ConvertDataToArrayInterface_(params_)
		_response, is_error := servicesUser.Create(instance,bodyParse_...)

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
func (p DomUser) DomUpdate(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		params_ := *body
		params_["expectedKeys"] = []string{
			"email",
			"active",
			"password",
		}
		bodyParse_ := utils.ConvertDataToArrayInterface_(params_)
		_response, is_error := servicesUser.Update(instance,bodyParse_...)

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
  * Current
*/
func (p DomUser) DomCurrent(args *map[string]interface{}, body *map[string]interface{}) {
	if len(*args) > 0 {
		params_ := *body
		params_["expectedKeys"] = []string{
			"email",
		}
		bodyParse_ := utils.ConvertDataToArrayInterface_(params_)
		_response, is_error := servicesUser.Current(instance,bodyParse_...)

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