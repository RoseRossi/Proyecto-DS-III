const { generalPostInterface } = require("../domain/post");
const { fetchPostGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class listForProduct {
    constructor(props) {
        this.req = props.req
    }

    post() {
        return fetchPostGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-product"].list
        });
    }
}

Object.assign(listForProduct.prototype, generalPostInterface);

module.exports = listForProduct