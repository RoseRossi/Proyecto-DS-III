const { generalUpdateInterface } = require("../domain/update");
const { fetchPutGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class updateForSpare {
    constructor(props) {
        this.req = props.req
    }

    update() {
        return fetchPutGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-spare-parts"].put
        });
    }
}

Object.assign(updateForSpare.prototype, generalUpdateInterface);

module.exports = updateForSpare