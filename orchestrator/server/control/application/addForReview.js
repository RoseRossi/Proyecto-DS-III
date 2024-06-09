const { generalPostInterface } = require("../domain/post");
const { fetchPostGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json')

class addForReview {
    constructor(props) {
        this.req = props.req
    }

    post() {
        return fetchPostGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-reviews"].add
        });
    }
}

Object.assign(addForReview.prototype, generalPostInterface);

module.exports = addForReview