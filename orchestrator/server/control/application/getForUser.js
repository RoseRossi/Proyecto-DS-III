const { generalGetInterface } = require("../domain/get");
const { fetchPostGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class GetForUser {
    constructor(props) {
        this.req = props.req
    }

    get() {
        return fetchPostGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-product"].get
        });
    }
}

Object.assign(GetForUser.prototype, generalGetInterface);

module.exports = GetForUser