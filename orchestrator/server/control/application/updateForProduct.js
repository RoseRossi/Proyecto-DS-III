const { generalUpdateInterface } = require("../domain/update");
const { fetchPutGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class updateForProduct {
    constructor(props) {
        this.req = props.req
    }

    update() {
        return fetchPutGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-product"].put
        });
    }
}

Object.assign(updateForProduct.prototype, generalUpdateInterface);

module.exports = updateForProduct