const { generalPostInterface } = require("../domain/post");
const { fetchPostGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class loggedForUser {
    constructor(props) {
        this.req = props.req
    }

    post() {
        return fetchPostGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-user"].logged
        });
    }
}

Object.assign(loggedForUser.prototype, generalPostInterface);

module.exports = loggedForUser