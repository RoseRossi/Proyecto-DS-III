const { generalUpdateInterface } = require("../domain/update");
const { fetchPutGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class updateForUser {
    constructor(props) {
        this.req = props.req
    }

    update() {
        return fetchPutGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-user"].put
        });
    }
}

Object.assign(updateForUser.prototype, generalUpdateInterface);

module.exports = updateForUser