const { generalPostInterface } = require("../domain/post");
const { fetchPostGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class addForSpare {
    constructor(props) {
        this.req = props.req
    }

    post() {
        return fetchPostGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-spare-parts"].add
        });
    }
}

Object.assign(addForSpare.prototype, generalPostInterface);

module.exports = addForSpare